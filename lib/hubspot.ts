const HUBSPOT_BASE = 'https://api.hubapi.com'
const TOKEN = process.env.HUBSPOT_ACCESS_TOKEN!

async function hubspotRequest(method: string, path: string, body?: object) {
  const res = await fetch(`${HUBSPOT_BASE}${path}`, {
    method,
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`HubSpot ${method} ${path} → ${res.status}: ${err}`)
  }
  return res.json()
}

export async function createContact(data: {
  email: string
  firstName: string
  lastName?: string
  phone?: string
  budget?: string
  financingStatus?: string
  shippingDestination?: string
  purchaseTimeline?: string
  primaryVehicle?: string
  referralSource?: string
}) {
  const [firstName, ...rest] = data.firstName.split(' ')
  const lastName = data.lastName ?? rest.join(' ') ?? ''

  return hubspotRequest('POST', '/crm/v3/objects/contacts', {
    properties: {
      email: data.email,
      firstname: firstName,
      lastname: lastName,
      phone: data.phone ?? '',
      // Custom properties (must exist in HubSpot portal)
      budget: data.budget ?? '',
      financing_status: data.financingStatus ?? '',
      shipping_destination: data.shippingDestination ?? '',
      purchase_timeline: data.purchaseTimeline ?? '',
      primary_vehicle_interest: data.primaryVehicle ?? '',
      lead_source: data.referralSource ?? 'Website Intake Form',
      hs_lead_status: 'NEW',
    },
  })
}

export async function createDeal(data: {
  contactId: string
  dealName: string
  primaryVehicle?: string
  budget?: string
  stage?: string
}) {
  // Create deal
  const deal = await hubspotRequest('POST', '/crm/v3/objects/deals', {
    properties: {
      dealname: data.dealName,
      dealstage: data.stage ?? 'qualifiedtobuy',
      pipeline: 'default',
      amount: data.budget?.replace(/[^0-9.]/g, '') ?? '',
      description: data.primaryVehicle ? `Vehicle: ${data.primaryVehicle}` : '',
      closedate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    },
  })

  // Associate deal with contact
  await hubspotRequest(
    'PUT',
    `/crm/v3/objects/deals/${deal.id}/associations/contacts/${data.contactId}/deal_to_contact`,
    {}
  )

  return deal
}

export async function updateDealStage(dealId: string, stage: string) {
  return hubspotRequest('PATCH', `/crm/v3/objects/deals/${dealId}`, {
    properties: { dealstage: stage },
  })
}

export async function createNote(contactId: string, body: string) {
  const note = await hubspotRequest('POST', '/crm/v3/objects/notes', {
    properties: {
      hs_note_body: body,
      hs_timestamp: new Date().toISOString(),
    },
  })
  await hubspotRequest(
    'PUT',
    `/crm/v3/objects/notes/${note.id}/associations/contacts/${contactId}/note_to_contact`,
    {}
  )
  return note
}
