/**
 * DocuSign integration — sends service agreement envelope to new clients.
 *
 * Required env vars (set in Azure App Settings when keys are ready):
 *   DOCUSIGN_INTEGRATION_KEY  — OAuth client ID from DocuSign admin
 *   DOCUSIGN_ACCOUNT_ID       — Account GUID (Apps & Keys page)
 *   DOCUSIGN_USER_ID          — Sender user GUID (for JWT impersonation)
 *   DOCUSIGN_PRIVATE_KEY      — RSA private key PEM (newlines as \n)
 *   DOCUSIGN_BASE_PATH        — e.g. https://na4.docusign.net
 *   DOCUSIGN_TEMPLATE_ID      — Service agreement template ID
 */

const BASE_PATH   = process.env.DOCUSIGN_BASE_PATH      ?? 'https://na4.docusign.net'
const ACCOUNT_ID  = process.env.DOCUSIGN_ACCOUNT_ID     ?? ''
const INT_KEY     = process.env.DOCUSIGN_INTEGRATION_KEY ?? ''
const USER_ID     = process.env.DOCUSIGN_USER_ID         ?? ''
const TEMPLATE_ID = process.env.DOCUSIGN_TEMPLATE_ID     ?? ''

function keysConfigured(): boolean {
  return !!(ACCOUNT_ID && INT_KEY && USER_ID && TEMPLATE_ID &&
    process.env.DOCUSIGN_PRIVATE_KEY)
}

async function getJwtToken(): Promise<string> {
  const privKey = (process.env.DOCUSIGN_PRIVATE_KEY ?? '').replace(/\\n/g, '\n')
  const now = Math.floor(Date.now() / 1000)

  // Build JWT header + payload
  const header  = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url')
  const payload = Buffer.from(JSON.stringify({
    iss: INT_KEY,
    sub: USER_ID,
    aud: 'account-d.docusign.com',
    iat: now,
    exp: now + 3600,
    scope: 'signature impersonation',
  })).toString('base64url')

  const { createSign } = await import('crypto')
  const sign = createSign('RSA-SHA256')
  sign.update(`${header}.${payload}`)
  const sig = sign.sign(privKey, 'base64url')

  const jwt = `${header}.${payload}.${sig}`

  const res = await fetch('https://account-d.docusign.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  })
  if (!res.ok) throw new Error(`DocuSign JWT auth failed: ${await res.text()}`)
  const data = await res.json()
  return data.access_token
}

export async function sendContractEnvelope(data: {
  email: string
  name: string
  primaryVehicle?: string
}): Promise<{ envelopeId: string; signingUrl?: string }> {
  if (!keysConfigured()) {
    console.warn('[DocuSign] Keys not configured — skipping envelope')
    return { envelopeId: 'pending_keys' }
  }

  const token = await getJwtToken()

  const envelope = {
    templateId: TEMPLATE_ID,
    templateRoles: [{
      email: data.email,
      name: data.name,
      roleName: 'Client',
      tabs: {
        textTabs: data.primaryVehicle ? [{
          tabLabel: 'VehicleInterest',
          value: data.primaryVehicle,
        }] : [],
      },
    }],
    emailSubject: 'Vehavia Service Agreement — Signature Required',
    emailBlurb: `Please sign your Vehavia service agreement to begin the search for ${data.primaryVehicle ?? 'your vehicle'}.`,
    status: 'sent',
  }

  const res = await fetch(
    `${BASE_PATH}/restapi/v2.1/accounts/${ACCOUNT_ID}/envelopes`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(envelope),
    }
  )

  if (!res.ok) throw new Error(`DocuSign envelope failed: ${await res.text()}`)
  const result = await res.json()
  return { envelopeId: result.envelopeId }
}
