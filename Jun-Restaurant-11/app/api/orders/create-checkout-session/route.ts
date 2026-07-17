import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import { getStripeClient } from '@/lib/stripe';
import { generateOrderNumber, calculateOrderTotals } from '@/lib/order-utils';

interface CartItemPayload {
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutPayload {
  items: CartItemPayload[];
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes?: string;
  tip?: number; // tip amount in dollars
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body: CheckoutPayload = await req.json();
    const { items, customerName, customerEmail, customerPhone, notes, tip = 0 } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No items in cart' }, { status: 400 });
    }
    if (!customerName || !customerEmail || !customerPhone) {
      return NextResponse.json({ error: 'Customer details are required' }, { status: 400 });
    }

    // Build order items with subtotals
    const orderItems = items.map((item) => ({
      menuItemId: item.menuItemId,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      subtotal: Math.round(item.price * item.quantity * 100) / 100,
    }));

    const { subtotal, tax } = calculateOrderTotals(items);
    const tipAmount = Math.round((tip || 0) * 100) / 100;
    const total = Math.round((subtotal + tax + tipAmount) * 100) / 100;
    const orderNumber = generateOrderNumber();

    // Create pending order in DB
    const order = await Order.create({
      orderNumber,
      customerName,
      customerEmail,
      customerPhone,
      notes: notes || '',
      items: orderItems,
      subtotal,
      tax,
      total,
      paymentStatus: 'unpaid',
      orderStatus: 'pending',
    });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Build Stripe line items — only add lines with amount > 0
    const lineItems: {
      price_data: { currency: string; product_data: { name: string }; unit_amount: number };
      quantity: number;
    }[] = items.map((item) => ({
      price_data: {
        currency: 'cad',
        product_data: { name: item.name },
        unit_amount: Math.round(item.price * 100), // cents
      },
      quantity: item.quantity,
    }));

    // Tax line (only if > 0)
    const taxCents = Math.round(tax * 100);
    if (taxCents > 0) {
      lineItems.push({
        price_data: {
          currency: 'cad',
          product_data: { name: 'Tax (5% GST)' },
          unit_amount: taxCents,
        },
        quantity: 1,
      });
    }

    // Tip line (only if > 0)
    const tipCents = Math.round(tipAmount * 100);
    if (tipCents > 0) {
      lineItems.push({
        price_data: {
          currency: 'cad',
          product_data: { name: 'Tip — Thank you!' },
          unit_amount: tipCents,
        },
        quantity: 1,
      });
    }

    // Create Stripe Checkout Session
    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      customer_email: customerEmail,
      metadata: {
        orderId: order._id.toString(),
        orderNumber,
      },
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cancel`,
    });

    // Store Stripe session ID on order
    await Order.findByIdAndUpdate(order._id, {
      stripeCheckoutSessionId: session.id,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Create checkout session error:', error);
    // Return the actual Stripe error message in dev
    const message = error instanceof Error ? error.message : 'Failed to create checkout session';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
