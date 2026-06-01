import { getMailgunClient, MAILGUN_DOMAIN, FROM_EMAIL, FROM_NAME } from "@/lib/mailgun";
import { orderConfirmationTemplate } from "@/lib/emailTemplates/orderConfirmation";
import { adminNewOrderTemplate } from "@/lib/emailTemplates/adminNewOrder";
import { getRestaurantContext } from "./restaurant-context";

interface SendOrderEmailsParams {
  order: {
    _id: string;
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    items: Array<{
      name: string;
      quantity: number;
      price: number;
      selectedOptions?: Record<string, string>;
      notes?: string;
    }>;
    subtotal: number;
    discount: number;
    tax: number;
    tip: number;
    total: number;
    pickupType: string;
    pickupTime?: Date | null;
    notes?: string;
  };
}

export async function sendOrderEmails({ order }: SendOrderEmailsParams) {
  const ctx = await getRestaurantContext();
  const mg = getMailgunClient();

  const restaurantEmail = process.env.RESTAURANT_ORDER_EMAIL;
  const ccEmail = process.env.ORDER_CC_EMAIL;
  const sendCustomer = process.env.ORDER_SEND_CUSTOMER_CONFIRMATION !== "false";

  const from = `${FROM_NAME} <${FROM_EMAIL}>`;

  const itemsForTemplate = order.items.map(i => ({
    name: i.name,
    quantity: i.quantity,
    price: i.price,
    selectedOptions: i.selectedOptions,
    notes: i.notes,
  }));

  // Kitchen email
  if (restaurantEmail) {
    const html = adminNewOrderTemplate({
      orderNumber: order.orderNumber,
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      customerPhone: order.customerPhone,
      items: itemsForTemplate,
      subtotal: order.subtotal,
      discount: order.discount,
      tax: order.tax,
      tip: order.tip,
      total: order.total,
      pickupType: order.pickupType,
      pickupTime: order.pickupTime?.toISOString(),
      notes: order.notes,
      restaurantName: ctx.name,
      logoUrl: ctx.logoUrl,
    });

    await mg.messages.create(MAILGUN_DOMAIN, {
      from,
      to: [restaurantEmail],
      cc: ccEmail ? [ccEmail] : [],
      "h:Reply-To": order.customerEmail,
      subject: `[New order] ${ctx.name} ${order.orderNumber} — $${order.total.toFixed(2)} paid`,
      html,
    });
  }

  // Customer confirmation
  if (sendCustomer && order.customerEmail) {
    const html = orderConfirmationTemplate({
      orderNumber: order.orderNumber,
      customerName: order.customerName,
      items: itemsForTemplate,
      subtotal: order.subtotal,
      discount: order.discount,
      tax: order.tax,
      tip: order.tip,
      total: order.total,
      pickupType: order.pickupType,
      pickupTime: order.pickupTime?.toISOString(),
      notes: order.notes,
      pickupPrepareTimeMinutes: ctx.pickupPrepareTimeMinutes,
      restaurantName: ctx.name,
      restaurantAddress: ctx.address,
      logoUrl: ctx.logoUrl,
    });

    await mg.messages.create(MAILGUN_DOMAIN, {
      from,
      to: [order.customerEmail],
      cc: ccEmail ? [ccEmail] : [],
      "h:Reply-To": restaurantEmail || FROM_EMAIL,
      subject: `Order confirmation - ${ctx.name}`,
      html,
    });
  }
}
