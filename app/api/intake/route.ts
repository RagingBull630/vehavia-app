import { NextRequest, NextResponse } from 'next/server'
import { createContact, createDeal, createNote } from '@/lib/hubspot'

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
      dealName: `${fullName} — ${primaryVehicle ?? 'Vehicle TBD'}`,
      primaryVehicle,
      budget,
      stage: 'qualifiedtobuy',
    })

    // 3. Attach full intake details as a note
    const noteBody = `
INTAKE FORM SUBMISSION

VEHICLE
• Primary: ${primaryVehicle ?? '—'}
• Secondary/backup: ${secondaryVehicle ?? '—'}
• Preferred colors: ${preferredColors ?? '—'}
• Required options: ${requiredOptions ?? '—'}
• Acceptable alternatives: ${acceptableAlternatives ?? '—'}

FINANCIAL
• Budget: ${budget ?? '—'}
• Financing status: ${financingStatus ?? '—'}
• Trade-in: ${tradeInVehicle ?? '—'}

LOGISTICS
• Shipping destination: ${shippingDestination ?? '—'}
• Purchase timeline: ${purchaseTimeline ?? '—'}
• Current vehicle situation: ${currentVehicleSituation ?? '—'}

SOURCE
• Referral: ${referralSource ?? '—'}
• Submission time: ${new Date().toISOString()}
    `.trim()

    await createNote(contact.id, noteBody)

    // TODO: 4. Trigger DocuSign service agreement envelope
    // await sendContractEnvelope({ name: fullName, email, dealId: deal.id })

    // TODO: 5. Send SendGrid welcome + contract + payment link email sequence
    // await sendWelcomeEmail({ name: fullName, email, dealId: deal.id })

    console.log(`Intake created — Contact: ${contact.id}, Deal: ${deal.id}`)

    return NextResponse.json({
      success: true,
      contactId: contact.id,
      dealId: deal.id,
    })

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('Intake error:', message)
    return NextResponse.json(
      { success: false, error: 'Submission failed. Please try again.' },
      { status: 500 }
    )
  }
}
