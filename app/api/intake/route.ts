import { NextRequest, NextResponse } from 'next/server'
import { createContact, createDeal, createNote } from '@/lib/hubspot'
import { sendWelcomeEmail } from '@/lib/email'
import { sendContractEnvelope } from '@/lib/docusign'
import { getSchedulingLink } from '@/lib/calendly'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const {
      fullName, email, phone,
      primaryVehicle, secondaryVehicle, preferredColors,
      requiredOptions, acceptableAlternatives,
      budget, financingStatus, tradeInVehicle, shippingDestination,
      purchaseTimeline, currentVehicleSituation, referralSource,
    } = data

    // 1. HubSpot — create/update contact
    const contact = await createContact({
      email,
      firstName: fullName,
      phone,
      budget,
      financingStatus,
      shippingDestination,
      purchaseTimeline,
      primaryVehicle,
      referralSource,
    })

    // 2. HubSpot — create deal linked to contact
    const deal = await createDeal({
      contactId: contact.id,
      dealName: `${fullName} — ${primaryVehicle || 'Vehicle Search'}`,
      primaryVehicle,
      budget,
      stage: 'qualifiedtobuy',
    })

    // 3. HubSpot — attach full intake note
    await createNote(contact.id, [
      `Full Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || 'N/A'}`,
      `Primary Vehicle: ${primaryVehicle || 'N/A'}`,
      `Secondary Vehicle: ${secondaryVehicle || 'N/A'}`,
      `Preferred Colors: ${preferredColors || 'N/A'}`,
      `Required Options: ${requiredOptions || 'N/A'}`,
      `Budget: ${budget || 'N/A'}`,
      `Financing Status: ${financingStatus || 'N/A'}`,
      `Trade-In: ${tradeInVehicle || 'N/A'}`,
      `Shipping Destination: ${shippingDestination || 'N/A'}`,
      `Purchase Timeline: ${purchaseTimeline || 'N/A'}`,
      `Referral Source: ${referralSource || 'N/A'}`,
    ].join('\n'))

    // 4 & 5. DocuSign + Calendly — run in parallel, non-blocking
    const [docusignResult, calendlyLink] = await Promise.allSettled([
      sendContractEnvelope({ email, name: fullName, primaryVehicle }),
      getSchedulingLink(),
    ])

    const envelopeId = docusignResult.status === 'fulfilled'
      ? docusignResult.value.envelopeId : null
    const schedulingUrl = calendlyLink.status === 'fulfilled'
      ? calendlyLink.value : null

    if (docusignResult.status === 'rejected')
      console.error('[DocuSign]', docusignResult.reason)
    if (calendlyLink.status === 'rejected')
      console.error('[Calendly]', calendlyLink.reason)

    // 6. Welcome email with Stripe payment link + Calendly link
    await sendWelcomeEmail({
      email,
      fullName,
      primaryVehicle,
      stripePaymentLink: process.env.STRIPE_STARTUP_PAYMENT_LINK,
      calendlyLink: schedulingUrl ?? undefined,
    })

    return NextResponse.json({
      success: true,
      contactId: contact.id,
      dealId: deal.id,
      envelopeId,
      schedulingUrl,
    })
  } catch (err: any) {
    console.error('[Intake API]', err)
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 })
  }
}
