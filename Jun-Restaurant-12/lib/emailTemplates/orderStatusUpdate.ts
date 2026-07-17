import { RestaurantEmailContext } from "@/lib/email/restaurant-context";

export interface OrderStatusUpdateData {
  orderNumber: string;
  orderId: string;
  customerName: string;
  total: number;
  status: "completed" | "cancelled";
}

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fmt(n: number): string {
  return `$${n.toFixed(2)}`;
}

export function buildOrderStatusUpdateHtml(
  data: OrderStatusUpdateData,
  ctx: RestaurantEmailContext
): string {
  const isCompleted = data.status === "completed";

  const badgeBg = isCompleted ? "#e0e7ff" : "#fee2e2";
  const badgeColor = isCompleted ? "#3730a3" : "#991b1b";
  const badgeText = isCompleted ? "Order Completed" : "Order Cancelled";
  const message = isCompleted
    ? "Your order has been completed. Thank you for choosing us!"
    : "Your order has been cancelled. Please contact us if you have any questions.";

  const logoSection = ctx.logoUrl
    ? `<img src="${escapeHtml(ctx.logoUrl)}" alt="${escapeHtml(ctx.restaurantName)}" style="max-height:60px;max-width:180px;margin-bottom:8px;" />`
    : `<div style="font-size:22px;font-weight:700;color:#ffffff;">${escapeHtml(ctx.restaurantName)}</div>`;

  const greeting = data.customerName
    ? `Hi ${escapeHtml(data.customerName)},`
    : "Hello,";

  const addressBlock = ctx.addressLines
    .map((l) => `<div>${escapeHtml(l)}</div>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Order Update</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
      <!-- Header -->
      <tr><td style="background:#111111;padding:28px 32px;text-align:center;">
        ${logoSection}
      </td></tr>
      <!-- Body -->
      <tr><td style="padding:32px;">
        <p style="margin:0 0 20px;font-size:16px;color:#111111;font-weight:600;">${greeting}</p>

        <!-- Status badge -->
        <div style="text-align:center;margin-bottom:24px;">
          <span style="display:inline-block;background:${badgeBg};color:${badgeColor};font-size:14px;font-weight:700;padding:8px 24px;border-radius:99px;letter-spacing:0.04em;">
            ${badgeText}
          </span>
        </div>

        <p style="margin:0 0 24px;font-size:15px;color:#374151;line-height:1.6;text-align:center;">
          ${message}
        </p>

        <!-- Order summary card -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;margin-bottom:24px;">
          <tr><td style="padding:20px 24px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size:13px;color:#6b7280;padding-bottom:8px;">Order Number</td>
                <td style="font-size:13px;color:#111111;font-weight:600;text-align:right;padding-bottom:8px;">${escapeHtml(data.orderNumber)}</td>
              </tr>
              <tr>
                <td style="font-size:13px;color:#6b7280;padding-bottom:8px;">Order ID</td>
                <td style="font-size:12px;color:#374151;font-family:monospace;text-align:right;padding-bottom:8px;">${escapeHtml(data.orderId)}</td>
              </tr>
              <tr>
                <td style="font-size:13px;color:#6b7280;">Total</td>
                <td style="font-size:15px;color:#111111;font-weight:700;text-align:right;">${fmt(data.total)}</td>
              </tr>
            </table>
          </td></tr>
        </table>

        <!-- Restaurant address -->
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;margin-bottom:24px;">
          <tr><td style="padding:16px 20px;">
            <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#111111;text-transform:uppercase;letter-spacing:0.05em;">Restaurant</p>
            <div style="font-size:14px;color:#374151;line-height:1.6;">${addressBlock}</div>
          </td></tr>
        </table>

        <p style="margin:0;font-size:13px;color:#9ca3af;line-height:1.6;">
          This is an automated message from ${escapeHtml(ctx.restaurantName)}. Please contact the restaurant directly with any questions.
        </p>
      </td></tr>
      <!-- Footer -->
      <tr><td style="background:#f9fafb;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb;">
        <p style="margin:0;font-size:12px;color:#9ca3af;">&copy; ${new Date().getFullYear()} ${escapeHtml(ctx.restaurantName)}. All rights reserved.</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

export function buildOrderStatusUpdateText(
  data: OrderStatusUpdateData,
  ctx: RestaurantEmailContext
): string {
  const greeting = data.customerName ? `Hi ${data.customerName},` : "Hello,";
  const message =
    data.status === "completed"
      ? "Your order has been completed. Thank you for choosing us!"
      : "Your order has been cancelled. Please contact us if you have any questions.";

  return `${greeting}

${message}

ORDER SUMMARY
─────────────
Order Number: ${data.orderNumber}
Order ID: ${data.orderId}
Total: ${fmt(data.total)}
Status: ${data.status.toUpperCase()}

${ctx.addressLines.join("\n")}

This is an automated message from ${ctx.restaurantName}.`;
}
