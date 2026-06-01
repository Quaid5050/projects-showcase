import stripe from "@/lib/stripe";
import connectDB from "@/lib/mongodb";
import { validateCart, CartItem } from "@/lib/cart-validate";
import { applyPromo } from "@/lib/promo";
import { generateOrderNumber } from "@/lib/order-number";
import { getSiteUrl } from "@/lib/site-url";
import Order from "@/models/Order";

const TAX_RATE = 0.13;

interface CreateSessionParams {
  items: CartItem[];
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  tip: number;
  promoCode?: string;
  notes?: string;
  pickupType: "ASAP" | "SCHEDULED";
  pickupTime?: string;
  userId?: string;
}

export async function createStripeCheckoutSession(params: CreateSessionParams) {
  await connectDB();

  const { items: validatedItems, subtotal } = await validateCart(params.items);

  // Promo
  let discount = 0;
  let promoCodeUsed: string | undefined;
  if (params.promoCode) {
    const promoResult = await applyPromo(params.promoCode, subtotal);
    if (promoResult.valid) {
      discount = promoResult.discount;
      promoCodeUsed = params.promoCode.toUpperCase();
    }
  }

  const afterDiscount = Math.max(0, subtotal - discount);
  const tax = Math.round(afterDiscount * TAX_RATE * 100) / 100;
  const tip = Math.max(0, Math.min(999, params.tip || 0));
  const total = Math.round((afterDiscount + tax + tip) * 100) / 100;

  const orderNumber = generateOrderNumber();
  const siteUrl = getSiteUrl();

  // Build Stripe line items
  const lineItems: any[] = validatedItems.map(item => ({
    price_data: {
      currency: "cad",
      product_data: { name: item.name },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));

  // Tax + discount adjustment line
  const taxAndAdjustment = Math.round((tax - discount) * 100);
  lineItems.push({
    price_data: {
      currency: "cad",
      product_data: { name: "Tax & promo adjustments" },
      unit_amount: taxAndAdjustment,
    },
    quantity: 1,
  });

  // Tip line
  if (tip > 0) {
    lineItems.push({
      price_data: {
        currency: "cad",
        product_data: { name: "Tip / gratuity" },
        unit_amount: Math.round(tip * 100),
      },
      quantity: 1,
    });
  }

  // Create unpaid order first
  const order = await Order.create({
    orderNumber,
    userId: params.userId,
    customerName: params.customerName,
    customerEmail: params.customerEmail,
    customerPhone: params.customerPhone,
    orderType: "pickup",
    servingMode: "in_store_pickup",
    items: validatedItems,
    subtotal,
    tax,
    deliveryFee: 0,
    discount,
    tip,
    total,
    promoCode: promoCodeUsed,
    paymentStatus: "unpaid",
    orderStatus: "pending",
    notes: params.notes,
    pickupType: params.pickupType,
    pickupTime: params.pickupType === "SCHEDULED" && params.pickupTime ? new Date(params.pickupTime) : null,
    orderAppSynced: false,
  });

  // Create Stripe session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: lineItems,
    customer_email: params.customerEmail,
    success_url: `${siteUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/cart`,
    metadata: {
      orderId: order._id.toString(),
      orderNumber,
    },
  });

  // Save session ID to order
  await Order.findByIdAndUpdate(order._id, {
    stripeCheckoutSessionId: session.id,
  });

  return { url: session.url, sessionId: session.id, orderNumber };
}
