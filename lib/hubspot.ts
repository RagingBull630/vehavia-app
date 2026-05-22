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
  phone?: string
  budget?: string
  financingStatus?: string
  shippingDestination?: string
  purchaseTimeline?: string
  primaryVehicle?: string
  secondaryVehicle?: string
  preferredColors?: string
  requiredOptions?: string
  tradeInVehicle?: string
  referralSource?: string
}) {
  const parts = data.firstName.trim().split(' ')
  const firstname = parts[0]
  const lastname = parts.slice(1).join(' ')

  return hubspotRequest('POST', '/crm/v3/objects/contacts', {
    properties: {
      email: data.email,
      firstname,
      lastname,
      phone: data.phone ?? '',
      primary_vehicle_interest: data.primaryVehicle ?? '',
      secondary_vehicle: data.secondaryVehicle ?? '',
      preferred_colors: data.preferredColors ?? '',
      required_options: data.requiredOptions ?? '',
      financing_status: data.financingStatus ?? '',
      shipping_destination: data.shippingDestination ?? '',
      purchase_timeline: data.purchaseTimeline ?? '',
      trade_in_vehicle: data.tradeInVehicle ?? '',
      lead_source: data.referralSource ?? 'Website Intake Form',
      hs_lead_status: 'NEW',
      intake_submitted_at: new Date().toISOString(),
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
  const deal = await hubspotRequest('POST', '/crm/v3/objects/deals', {
    properties: {
      dealname: data.dealName,
      dealstage: data.stage ?? 'qualifiedtobuy',
      pipeline: 'default',
      amount: data.budget?.replace(/[^0-9.]/g, '') ?? '',
      description: data.primaryVehicle ? `Vehicle: ${data.primaryVehicle}` : '',
      closedate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        .toISOString().split('T')[0],
    },
  })

  // Associate deal → contact
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
