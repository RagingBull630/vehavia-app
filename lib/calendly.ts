/**
 * Calendly integration — fetches the onboarding scheduling link.
 *
 * Required env vars:
 *   CALENDLY_TOKEN      — Personal Access Token from Calendly integrations page
 *   CALENDLY_EVENT_URI  — (optional) specific event type URI; auto-detected if omitted
 */

let cachedEventUrl: string | null = null

export async function getSchedulingLink(): Promise<string | null> {
  const token = process.env.CALENDLY_TOKEN
  if (!token) {
    console.warn('[Calendly] CALENDLY_TOKEN not set — skipping scheduling link')
    return null
  }

  // Return override if manually set
  if (process.env.CALENDLY_EVENT_URI) return process.env.CALENDLY_EVENT_URI

  // Use cached value
  if (cachedEventUrl) return cachedEventUrl

  try {
    // Get the current user
    const meRes = await fetch('https://api.calendly.com/users/me', {
      headers: { 'Authorization': `Bearer ${token}` },
    })
    if (!meRes.ok) throw new Error(`Calendly /users/me failed: ${await meRes.text()}`)
    const { resource: user } = await meRes.json()

    // Get their first active event type
    const evRes = await fetch(
      `https://api.calendly.com/event_types?user=${user.uri}&count=10&active=true`,
      { headers: { 'Authorization': `Bearer ${token}` } }
    )
    if (!evRes.ok) throw new Error(`Calendly event_types failed: ${await evRes.text()}`)
    const { collection } = await evRes.json()

    if (!collection?.length) return null

    // Prefer one named "onboarding", otherwise take the first
    const onboarding = collection.find((e: any) =>
      e.name?.toLowerCase().includes('onboard')
    ) ?? collection[0]

    cachedEventUrl = onboarding.scheduling_url
    return cachedEventUrl
  } catch (err) {
    console.error('[Calendly]', err)
    return null
  }
}
