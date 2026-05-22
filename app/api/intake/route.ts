import { NextRequest, NextResponse } from 'next/server'
import { createContact, createDeal, createNote } from '@/lib/hubspot'
import { sendWelcomeEmail } from '@/lib/email'

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

    // 1. Create HubSpot contact
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

    // 2. Create HubSpot deal linked to contact
    const deal = await createDeal({
      contactId: contact.id,
      dealName: `${fullName} — ${primaryVehicle || 'Vehicle Search'}`,
      primaryVehicle,
      budget,
      stage: 'qualifiedtobuy',
    })

    // 3. Attach full intake note to contact
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

    // 4. Send welcome email with Stripe payment link
    // TODO: generate Stripe link dynamically per client
    await sendWelcomeEmail({
      email,
      fullName,
      primaryVehicle,
      stripePaymentLink: process.env.STRIPE_STARTUP_PAYMENT_LINK,
      calendlyLink: process.env.CALENDLY_EVENT_URI,
    })

    return NextResponse.json({ success: true, contactId: contact.id, dealId: deal.id })
  } catch (err: any) {
    console.error('[Intake API]', err)
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 })
  }
}
