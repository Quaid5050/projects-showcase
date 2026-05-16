import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getStripe } from '@/lib/stripe'
import { sendEmail } from '@/lib/email'
import { donationReceiptEmail } from '@/lib/emailTemplates'

export const runtime = 'nodejs'

function formatMoney(amountTotal: number, currency: string) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency.toUpperCase() }).format(
    amountTotal / 100
  )
}

export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  if (!secret || !process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 503 })
  }

  const buf = Buffer.from(await req.arrayBuffer())
  const sig = req.headers.get('stripe-signature')
  if (!sig) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: import('stripe').Stripe.Event
  try {
    const stripe = getStripe()
    event = stripe.webhooks.constructEvent(buf, sig, secret)
  } catch (err) {
    console.error('[stripe webhook] signature verify failed', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as import('stripe').Stripe.Checkout.Session
    const sessionId = session.id
    if (!sessionId || session.payment_status !== 'paid') {
      return NextResponse.json({ received: true })
    }

    const existing = await prisma.donation.findUnique({ where: { stripeSessionId: sessionId } })
    if (existing?.status === 'COMPLETED') {
      return NextResponse.json({ received: true })
    }

    const amountTotal = session.amount_total ?? parseInt(session.metadata?.amountCents ?? '0', 10)
    if (!amountTotal || amountTotal < 1) {
      return NextResponse.json({ received: true })
    }
    const currency = (session.currency || 'usd').toLowerCase()
    const pi = session.payment_intent
    const stripePaymentIntentId = typeof pi === 'string' ? pi : pi && typeof pi === 'object' && 'id' in pi ? String((pi as { id: string }).id) : null

    const donorEmail =
      session.customer_details?.email?.trim() ||
      (session.metadata?.donorEmail?.trim() || null) ||
      null
    const donorName =
      session.customer_details?.name?.trim() ||
      (session.metadata?.donorName?.trim() || null) ||
      null

    const frequencyRaw = (session.metadata?.frequency ?? '').trim().toUpperCase()
    const frequency = frequencyRaw === 'MONTHLY' ? 'MONTHLY' : 'ONE_TIME'

    let donation
    try {
      donation = await prisma.donation.create({
        data: {
          stripeSessionId: sessionId,
          stripePaymentIntentId,
          amountTotal,
          currency,
          donorEmail,
          donorName,
          frequency,
          provider: 'stripe',
          status: 'COMPLETED',
          completedAt: new Date(),
        },
      })
    } catch (e: unknown) {
      const code = typeof e === 'object' && e && 'code' in e ? (e as { code: string }).code : ''
      if (code === 'P2002') {
        return NextResponse.json({ received: true })
      }
      throw e
    }

    if (donorEmail) {
      const frequencyLabel = frequency === 'MONTHLY' ? 'monthly' : 'one-time'
      const tpl = donationReceiptEmail({
        amountDisplay: formatMoney(amountTotal, currency),
        donorName,
        frequencyLabel,
      })
      await sendEmail({
        to: donorEmail,
        subject: tpl.subject,
        text: tpl.text,
        html: tpl.html,
        template: 'donation_receipt',
        relatedEntityType: 'Donation',
        relatedEntityId: donation.id,
      })
    }
  }

  return NextResponse.json({ received: true })
}
