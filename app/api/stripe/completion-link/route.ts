import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' })
export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json()
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price_data: { currency: 'usd', product_data: { name: 'Vehavia Concierge - Completion Fee' }, unit_amount: 60000 }, quantity: 1 }],
      mode: 'payment',
      customer_email: email,
      metadata: { client_name: name, stage: 'completion' },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/intake/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/intake`,
    })
    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe completion link error:', err)
    return NextResponse.json({ error: 'Failed to create payment link' }, { status: 500 })
  }
}
