import { NextRequest } from "next/server";
import stripe from "@/lib/stripe";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      customerName,
      customerPhone,
      customerEmail,
      specialInstructions,
      items,
      subtotal,
      tax,
      tip,
      total,
    } = body;

    if (!customerName || !customerEmail || !items?.length) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    await connectDB();

    // Create pending order first
    const order = await Order.create({
      customerName,
      customerPhone,
      customerEmail,
      specialInstructions: specialInstructions || "",
      items,
      subtotal,
      tax,
      tip: tip || 0,
      total,
      paymentStatus: "pending",
      orderStatus: "new",
    });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    // Build Stripe line items
    const lineItems = items.map(
      (item: { name: string; price: number; quantity: number }) => ({
        price_data: {
          currency: "cad",
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })
    );

    // Add tax as a line item
    lineItems.push({
      price_data: {
        currency: "cad",
        product_data: { name: "GST (5%)" },
        unit_amount: Math.round(tax * 100),
      },
      quantity: 1,
    });

    // Add tip as a line item if applicable
    if (tip && tip > 0) {
      lineItems.push({
        price_data: {
          currency: "cad",
          product_data: { name: "Tip" },
          unit_amount: Math.round(tip * 100),
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      customer_email: customerEmail,
      metadata: {
        orderId: String(order._id),
        orderNumber: order.orderNumber || "",
      },
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}&order_id=${order._id}`,
      cancel_url: `${siteUrl}/checkout`,
    });

    // Save stripe session id to order
    await Order.findByIdAndUpdate(order._id, {
      stripeSessionId: session.id,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return Response.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
