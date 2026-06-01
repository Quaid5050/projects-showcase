import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";
import Promotion from "@/models/Promotion";
import { sendOrderEmails } from "@/lib/email/send-order-emails";
import { syncToOrderApp } from "@/lib/order-app-sync";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") || "";
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) return NextResponse.json({ error: "No webhook secret" }, { status: 500 });

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook error: ${err.message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;
    if (session.payment_status !== "paid") return NextResponse.json({ received: true });

    await connectDB();
    const order = await Order.findOne({ stripeCheckoutSessionId: session.id });
    if (!order) return NextResponse.json({ received: true });

    if (order.paymentStatus !== "paid") {
      order.paymentStatus = "paid";
      order.orderStatus = "paid";
      order.stripePaymentIntentId = session.payment_intent || "";
      await order.save();

      if (order.promoCode) {
        await Promotion.findOneAndUpdate({ code: order.promoCode }, { $inc: { usedCount: 1 } });
      }
    }

    if (!order.confirmationEmailSent || !order.merchantNotificationEmailSent) {
      try {
        await sendOrderEmails({ order: order.toObject() });
        order.confirmationEmailSent = true;
        order.confirmationEmailSentAt = new Date();
        order.merchantNotificationEmailSent = true;
        order.merchantNotificationEmailSentAt = new Date();
        order.restaurantOrderEmailSent = true;
        await order.save();
      } catch (e) {
        console.error("[webhook] email error:", e);
      }
    }

    if (!order.orderAppSynced) syncToOrderApp(order._id.toString());
  }

  return NextResponse.json({ received: true });
}
