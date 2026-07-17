import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import { getStripeClient } from '@/lib/stripe';
import { sendOrderConfirmationEmail, sendAdminOrderNotificationEmail } from '@/lib/mailgun';

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: 'Missing signature or webhook secret' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    const rawBody = await req.text();
    const stripe = getStripeClient();
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      await connectDB();

      const orderId = session.metadata?.orderId;
      if (!orderId) {
        console.error('No orderId in session metadata');
        return NextResponse.json({ received: true });
      }

      const order = await Order.findById(orderId);
      if (!order) {
        console.error(`Order not found: ${orderId}`);
        return NextResponse.json({ received: true });
      }

      // Prevent duplicate processing
      if (order.paymentStatus === 'paid') {
        console.log(`Order ${orderId} already marked as paid, skipping`);
        return NextResponse.json({ received: true });
      }

      // Update order as paid
      const stripePaymentIntentId =
        typeof session.payment_intent === 'string'
          ? session.payment_intent
          : session.payment_intent?.id;

      await Order.findByIdAndUpdate(orderId, {
        paymentStatus: 'paid',
        orderStatus: 'new',
        stripePaymentIntentId: stripePaymentIntentId || '',
        stripeCheckoutSessionId: session.id,
      });

      // Re-fetch to get updated order for emails
      const updatedOrder = await Order.findById(orderId).lean();
      if (!updatedOrder) return NextResponse.json({ received: true });

      // Send confirmation email (only if not already sent)
      if (!updatedOrder.confirmationEmailSent) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const emailSent = await sendOrderConfirmationEmail(updatedOrder as any);
        if (emailSent) {
          await Order.findByIdAndUpdate(orderId, {
            confirmationEmailSent: true,
            confirmationEmailSentAt: new Date(),
          });
        }
      }

      // Send admin notification email (if not already sent)
      if (!updatedOrder.adminEmailSent) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const adminEmailSent = await sendAdminOrderNotificationEmail(updatedOrder as any);
        if (adminEmailSent) {
          await Order.findByIdAndUpdate(orderId, {
            adminEmailSent: true,
            adminEmailSentAt: new Date(),
          });
        }
      }

      console.log(`Order ${orderId} (${order.orderNumber}) marked as paid`);
    } catch (error) {
      console.error('Error processing webhook:', error);
      // Return 200 so Stripe doesn't retry — log internally
      return NextResponse.json({ received: true });
    }
  }

  return NextResponse.json({ received: true });
}
