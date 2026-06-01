import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";
import Promotion from "@/models/Promotion";
import { sendOrderEmails } from "@/lib/email/send-order-emails";
import { syncToOrderApp } from "@/lib/order-app-sync";

export async function POST(req: NextRequest) {
  try {
    const { session_id } = await req.json();
    if (!session_id) return NextResponse.json({ error: "Missing session_id" }, { status: 400 });

    const stripeSession = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["payment_intent"],
    });

    if (stripeSession.payment_status !== "paid") {
      return NextResponse.json({ paid: false, error: "Payment not completed" });
    }

    await connectDB();
    const order = await Order.findOne({ stripeCheckoutSessionId: session_id });
    if (!order) return NextResponse.json({ error: "Order not found" }, { status: 404 });

    // Idempotent — only update if not already paid
    if (order.paymentStatus !== "paid") {
      const pi = stripeSession.payment_intent as any;
      order.paymentStatus = "paid";
      order.orderStatus = "paid";
      order.stripePaymentIntentId = pi?.id || "";
      await order.save();

      // Increment promo usage
      if (order.promoCode) {
        await Promotion.findOneAndUpdate(
          { code: order.promoCode },
          { $inc: { usedCount: 1 } }
        );
      }
    }

    // Send emails (idempotent)
    if (!order.confirmationEmailSent || !order.merchantNotificationEmailSent) {
      try {
        await sendOrderEmails({ order: order.toObject() });
        order.confirmationEmailSent = true;
        order.confirmationEmailSentAt = new Date();
        order.merchantNotificationEmailSent = true;
        order.merchantNotificationEmailSentAt = new Date();
        order.restaurantOrderEmailSent = true;
        await order.save();
      } catch (emailErr) {
        console.error("[verify-session] Email error:", emailErr);
        order.confirmationEmailError = String(emailErr);
        await order.save();
      }
    }

    // Sync to order app (non-blocking, idempotent)
    if (!order.orderAppSynced) {
      syncToOrderApp(order._id.toString());
    }

    return NextResponse.json({
      paid: true,
      orderNumber: order.orderNumber,
      pickupType: order.pickupType,
      pickupTime: order.pickupTime,
    });
  } catch (err: any) {
    console.error("[verify-session]", err);
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}
