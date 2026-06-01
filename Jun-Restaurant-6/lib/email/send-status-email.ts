import { getMailgunClient, MAILGUN_DOMAIN, FROM_EMAIL, FROM_NAME } from "@/lib/mailgun";
import { orderStatusUpdateTemplate } from "@/lib/emailTemplates/orderStatusUpdate";
import { getRestaurantContext } from "./restaurant-context";

export async function sendStatusEmail({
  customerEmail,
  customerName,
  orderNumber,
  status,
}: {
  customerEmail: string;
  customerName: string;
  orderNumber: string;
  status: string;
}) {
  const ctx = await getRestaurantContext();
  const mg = getMailgunClient();

  const html = orderStatusUpdateTemplate({
    orderNumber,
    customerName,
    status,
    restaurantName: ctx.name,
    restaurantAddress: ctx.address,
    logoUrl: ctx.logoUrl,
  });

  await mg.messages.create(MAILGUN_DOMAIN, {
    from: `${FROM_NAME} <${FROM_EMAIL}>`,
    to: [customerEmail],
    subject: `Your order ${orderNumber} — ${status}`,
    html,
  });
}
