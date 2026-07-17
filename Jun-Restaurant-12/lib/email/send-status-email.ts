import { isMailgunConfigured, sendMailgunEmail } from "@/lib/mailgun";
import {
  buildOrderStatusUpdateHtml,
  buildOrderStatusUpdateText,
} from "@/lib/emailTemplates/orderStatusUpdate";
import { loadRestaurantEmailContext } from "./restaurant-context";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

interface StatusEmailOrder {
  _id: unknown;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  total: number;
  orderStatus: string;
  paymentStatus: string;
  statusEmailLog?: Array<{ status: string; sentAt: Date; recipient: string }>;
}

export async function sendOrderStatusEmailIfNeeded(
  order: StatusEmailOrder,
  previousStatus: string
): Promise<void> {
  try {
    // Only send for completed and cancelled
    const targetStatuses = ["completed", "cancelled"];
    if (!targetStatuses.includes(order.orderStatus)) return;

    // Status must have actually changed
    if (order.orderStatus === previousStatus) return;

    // Completed orders must be paid
    if (order.orderStatus === "completed" && order.paymentStatus !== "paid") return;

    // Only send if Mailgun is configured
    if (!isMailgunConfigured()) {
      console.log("[Email] Mailgun not configured — skipping status email");
      return;
    }

    // Idempotency — check if already sent for this status
    const alreadySent = (order.statusEmailLog || []).some(
      (log) => log.status === order.orderStatus
    );
    if (alreadySent) {
      console.log(`[Email] Status email for ${order.orderStatus} already sent for order ${order.orderNumber}`);
      return;
    }

    if (!order.customerEmail) return;

    const ctx = await loadRestaurantEmailContext();
    const status = order.orderStatus as "completed" | "cancelled";

    const html = buildOrderStatusUpdateHtml(
      {
        orderNumber: order.orderNumber,
        orderId: String(order._id),
        customerName: order.customerName,
        total: order.total,
        status,
      },
      ctx
    );

    const text = buildOrderStatusUpdateText(
      {
        orderNumber: order.orderNumber,
        orderId: String(order._id),
        customerName: order.customerName,
        total: order.total,
        status,
      },
      ctx
    );

    const result = await sendMailgunEmail({
      to: order.customerEmail,
      subject: `Online Order Update - ${ctx.restaurantName}`,
      html,
      text,
    });

    if (result.success) {
      await connectDB();
      await Order.findByIdAndUpdate(String(order._id), {
        $push: {
          statusEmailLog: {
            status: order.orderStatus,
            sentAt: new Date(),
            recipient: order.customerEmail,
          },
        },
      });
      console.log(`[Email] Status update (${order.orderStatus}) sent for order ${order.orderNumber}`);
    } else {
      console.error(`[Email] Status update failed: ${result.error}`);
    }
  } catch (err) {
    console.error("[sendOrderStatusEmailIfNeeded] Error:", err);
  }
}
