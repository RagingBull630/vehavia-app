import type { IntakeFormData } from './types'

// TODO: npm install @hubspot/api-client and wire up real API calls

export async function createHubSpotContact(data: IntakeFormData): Promise<void> {
  // TODO: Implement HubSpot contact creation
  // const client = new Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN })
  // await client.crm.contacts.basicApi.create({
  //   properties: {
  //     firstname: data.fullName.split(' ')[0],
  //     lastname: data.fullName.split(' ').slice(1).join(' '),
  //     email: data.email,
  //     phone: data.phone,
  //   }
  // })
  console.log('[HubSpot] createContact stub called for:', data.email)
}

export async function createHubSpotDeal(data: IntakeFormData, contactId: string): Promise<void> {
  // TODO: Implement HubSpot deal creation
  // const client = new Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN })
  // await client.crm.deals.basicApi.create({
  //   properties: {
  //     dealname: `${data.fullName} — ${data.primaryVehicle}`,
  //     dealstage: 'intake_received',
  //     pipeline: 'default',
  //     amount: '800',
  //   }
  // })
  console.log('[HubSpot] createDeal stub called for contact:', contactId)
}
