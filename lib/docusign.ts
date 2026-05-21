import type { IntakeFormData } from './types'

// TODO: npm install docusign-esign and wire up real envelope sending

export async function sendContractEnvelope(data: IntakeFormData): Promise<{ envelopeId: string }> {
  // TODO: Implement DocuSign envelope creation and sending
  // const dsApiClient = new ApiClient()
  // dsApiClient.setBasePath(process.env.DOCUSIGN_BASE_PATH!)
  // dsApiClient.addDefaultHeader('Authorization', `Bearer ${accessToken}`)
  //
  // const envelopesApi = new EnvelopesApi(dsApiClient)
  // const envelope = makeEnvelope(data)
  // const result = await envelopesApi.createEnvelope(process.env.DOCUSIGN_ACCOUNT_ID!, { envelopeDefinition: envelope })
  // return { envelopeId: result.envelopeId! }

  console.log('[DocuSign] sendContractEnvelope stub called for:', data.email)
  return { envelopeId: 'stub-envelope-id' }
}
