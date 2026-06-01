import Order from "@/models/Order";

export async function syncToOrderApp(orderId: string) {
  const ORDER_APP_API_URL = process.env.ORDER_APP_API_URL;
  const ORDER_APP_API_KEY = process.env.ORDER_APP_API_KEY;
  const RESTAURANT_KEY = process.env.ORDER_APP_RESTAURANT_KEY || "the_village_burger";

  if (!ORDER_APP_API_URL || !ORDER_APP_API_KEY) return;

  const order = await Order.findById(orderId).lean() as any;
  if (!order || order.paymentStatus !== "paid" || order.orderAppSynced) return;

  const payload = {
    restaurantKey: RESTAURANT_KEY,
    sourceOrderId: order._id.toString(),
    orderNumber: order.orderNumber,
    stripePaymentIntentId: order.stripePaymentIntentId || "",
    stripeCheckoutSessionId: order.stripeCheckoutSessionId || "",
    orderType: "pickup",
    customer: {
      name: order.customerName,
      email: order.customerEmail,
      phone: order.customerPhone,
      address: null,
    },
    items: order.items.map((i: any) => ({
      name: i.name,
      quantity: i.quantity,
      price: i.price,
      notes: i.notes || "",
    })),
    subtotal: order.subtotal,
    tax: order.tax,
    deliveryFee: 0,
    discount: order.discount,
    tip: order.tip,
    total: order.total,
    currency: "cad",
    paidAt: order.updatedAt?.toISOString() || new Date().toISOString(),
  };

  fetch(`${ORDER_APP_API_URL}/api/integration/orders/paid`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ORDER_APP_API_KEY,
    },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      if (res.ok) {
        await Order.findByIdAndUpdate(orderId, {
          orderAppSynced: true,
          orderAppSyncedAt: new Date(),
        });
      }
    })
    .catch((err) => {
      console.error("[OrderAppSync] Failed:", err);
    });
}
