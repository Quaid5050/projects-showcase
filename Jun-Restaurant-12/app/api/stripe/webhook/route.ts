import { NextRequest } from "next/server";
import stripe from "@/lib/stripe";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";
import Stripe from "stripe";
import { sendPaidOrderEmails } from "@/lib/email/send-order-emails";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature") as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return Response.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const orderId = session.metadata?.orderId;

    if (orderId) {
      try {
        await connectDB();

        const stripePaymentIntentId =
          typeof session.payment_intent === "string"
            ? session.payment_intent
            : (session.payment_intent as Stripe.PaymentIntent)?.id || "";

        const order = await Order.findByIdAndUpdate(
          orderId,
          {
            paymentStatus: "paid",
            orderStatus: "new",
            stripeSessionId: session.id,
            stripePaymentIntentId,
          },
          { new: true }
        );

        if (order) {
          console.log(`[Webhook] Order ${order.orderNumber} marked as paid`);
          // Fire emails — non-blocking
          sendPaidOrderEmails(order, {
            stripeSessionId: session.id,
            stripePaymentIntentId,
            siteOrigin: process.env.NEXT_PUBLIC_SITE_URL,
          }).catch((err) =>
            console.error("[Webhook] Email send error:", err)
          );
        }
      } catch (err) {
        console.error("[Webhook] Failed to update order:", err);
      }
    }
  }

  if (event.type === "checkout.session.expired") {
    const session = event.data.object as Stripe.Checkout.Session;
    const orderId = session.metadata?.orderId;
    if (orderId) {
      try {
        await connectDB();
        await Order.findByIdAndUpdate(orderId, { paymentStatus: "failed" });
      } catch {}
    }
  }

  return Response.json({ received: true });
}
