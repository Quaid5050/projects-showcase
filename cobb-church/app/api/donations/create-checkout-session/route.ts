import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getStripe } from '@/lib/stripe'
import { appOrigin } from '@/lib/email'

const bodySchema = z.object({
  amountCents: z.number().int().min(100).max(1_000_000),
  donorEmail: z.string().email().optional(),
  donorName: z.string().min(1).max(200).optional(),
  frequency: z.enum(['ONE_TIME', 'MONTHLY']).optional().default('ONE_TIME'),
})

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'Stripe is not configured' }, { status: 503 })
  }

  const parsed = bodySchema.safeParse(await req.json().catch(() => ({})))
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid amount or input', details: parsed.error.flatten() }, { status: 400 })
  }

  const { amountCents, donorEmail, donorName, frequency } = parsed.data
  const origin = appOrigin()

  const stripe = getStripe()
  const metadata = {
    amountCents: String(amountCents),
    donorEmail: donorEmail ?? '',
    donorName: donorName ?? '',
    frequency,
  }

  const success_url = `${origin}/giving/success?session_id={CHECKOUT_SESSION_ID}`
  const cancel_url = `${origin}/giving/cancel`

  const session =
    frequency === 'MONTHLY'
      ? await stripe.checkout.sessions.create({
          mode: 'subscription',
          payment_method_types: ['card'],
          line_items: [
            {
              quantity: 1,
              price_data: {
                currency: 'usd',
                unit_amount: amountCents,
                recurring: { interval: 'month' },
                product_data: {
                  name: 'Cobb Church Network — Monthly support',
                  description: 'Recurring monthly gift (cancel anytime in the Stripe customer portal).',
                },
              },
            },
          ],
          success_url,
          cancel_url,
          customer_email: donorEmail,
          metadata,
          subscription_data: {
            metadata,
          },
        })
      : await stripe.checkout.sessions.create({
          mode: 'payment',
          payment_method_types: ['card'],
          line_items: [
            {
              quantity: 1,
              price_data: {
                currency: 'usd',
                unit_amount: amountCents,
                product_data: {
                  name: 'Cobb Church Network Donation',
                  description: 'Thank you for supporting churches across Cobb County.',
                },
              },
            },
          ],
          success_url,
          cancel_url,
          customer_email: donorEmail,
          metadata,
        })

  if (!session.url || !session.id) {
    return NextResponse.json({ error: 'Could not create checkout session' }, { status: 500 })
  }

  return NextResponse.json({ url: session.url })
}
