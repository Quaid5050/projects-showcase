import { NextRequest } from "next/server";
import stripe from "@/lib/stripe";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";
import { sendPaidOrderEmails } from "@/lib/email/send-order-emails";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");
  const orderId = searchParams.get("order_id");

  if (!sessionId && !orderId) {
    return Response.json({ error: "Missing session_id or order_id" }, { status: 400 });
  }

  try {
    await connectDB();

    // Find order by session ID or order ID
    const order = orderId
      ? await Order.findById(orderId)
      : await Order.findOne({ stripeSessionId: sessionId });

    if (!order) {
      return Response.json({ error: "Order not found" }, { status: 404 });
    }

    // If already paid, just return — emails may already be sent
    if (order.paymentStatus === "paid") {
      // Fire emails idempotently (flags prevent re-sending)
      sendPaidOrderEmails(order, {
        stripeSessionId: order.stripeSessionId,
        stripePaymentIntentId: order.stripePaymentIntentId,
        siteOrigin: process.env.NEXT_PUBLIC_SITE_URL,
      }).catch((err) => console.error("[verify-session] Email error:", err));

      return Response.json({
        success: true,
        paid: true,
        orderNumber: order.orderNumber,
        total: order.total,
      });
    }

    // Verify with Stripe if not yet marked paid
    if (sessionId || order.stripeSessionId) {
      try {
        const session = await stripe.checkout.sessions.retrieve(
          sessionId || order.stripeSessionId
        );

        if (session.payment_status === "paid") {
          const stripePaymentIntentId =
            typeof session.payment_intent === "string"
              ? session.payment_intent
              : (session.payment_intent as { id?: string })?.id || "";

          const updatedOrder = await Order.findByIdAndUpdate(
            order._id,
            {
              paymentStatus: "paid",
              orderStatus: order.orderStatus === "new" ? "new" : order.orderStatus,
              stripeSessionId: session.id,
              stripePaymentIntentId,
            },
            { new: true }
          );

          if (updatedOrder) {
            sendPaidOrderEmails(updatedOrder, {
              stripeSessionId: session.id,
              stripePaymentIntentId,
              siteOrigin: process.env.NEXT_PUBLIC_SITE_URL,
            }).catch((err) => console.error("[verify-session] Email error:", err));
          }

          return Response.json({
            success: true,
            paid: true,
            orderNumber: order.orderNumber,
            total: order.total,
          });
        }
      } catch (stripeErr) {
        console.error("[verify-session] Stripe lookup error:", stripeErr);
      }
    }

    return Response.json({
      success: true,
      paid: false,
      orderNumber: order.orderNumber,
      total: order.total,
    });
  } catch (err) {
    console.error("[verify-session] Error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
