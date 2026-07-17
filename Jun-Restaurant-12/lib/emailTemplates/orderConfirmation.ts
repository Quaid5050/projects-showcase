import { RestaurantEmailContext } from "@/lib/email/restaurant-context";

export interface OrderConfirmationData {
  orderNumber: string;
  orderId: string;
  customerName: string;
  items: Array<{ name: string; quantity: number; price: number }>;
  subtotal: number;
  tax: number;
  tip?: number;
  total: number;
  stripePaymentIntentId?: string;
  specialInstructions?: string;
  createdAt: Date;
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

export function buildOrderConfirmationHtml(
  data: OrderConfirmationData,
  ctx: RestaurantEmailContext
): string {
  const itemRows = data.items
    .map(
      (item) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#374151;font-size:14px;">${escapeHtml(String(item.quantity))}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#374151;font-size:14px;">${escapeHtml(item.name)}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#374151;font-size:14px;text-align:right;">${fmt(item.price * item.quantity)}</td>
      </tr>`
    )
    .join("");

  const tipRow =
    data.tip && data.tip > 0
      ? `<tr><td colspan="2" style="padding:4px 12px;font-size:13px;color:#6b7280;">Tip</td><td style="padding:4px 12px;font-size:13px;color:#6b7280;text-align:right;">${fmt(data.tip)}</td></tr>`
      : "";

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
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Order Confirmation</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
      <tr><td style="background:#111111;padding:28px 32px;text-align:center;">${logoSection}</td></tr>
      <tr><td style="padding:32px;">
        <p style="margin:0 0 16px;font-size:16px;color:#111111;font-weight:600;">${greeting}</p>
        <p style="margin:0 0 24px;font-size:15px;color:#374151;line-height:1.6;">We have received your order. Thank you &mdash; we&rsquo;ll prepare it for pickup.</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;margin-bottom:24px;">
          <tr><td style="padding:20px 24px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td style="font-size:13px;color:#6b7280;padding-bottom:8px;">Order Number</td><td style="font-size:13px;color:#111111;font-weight:600;text-align:right;padding-bottom:8px;">${escapeHtml(data.orderNumber)}</td></tr>
              <tr><td style="font-size:13px;color:#6b7280;padding-bottom:8px;">Order ID</td><td style="font-size:12px;color:#374151;font-family:monospace;text-align:right;padding-bottom:8px;">${escapeHtml(data.orderId)}</td></tr>
              <tr><td style="font-size:13px;color:#6b7280;padding-bottom:8px;">Order Type</td><td style="font-size:13px;color:#111111;font-weight:600;text-align:right;padding-bottom:8px;">Pickup</td></tr>
              <tr><td style="font-size:13px;color:#6b7280;padding-bottom:8px;">Order Total</td><td style="font-size:15px;color:#d60000;font-weight:700;text-align:right;padding-bottom:8px;">${fmt(data.total)}</td></tr>
              <tr><td style="font-size:13px;color:#6b7280;">Payment</td><td style="font-size:13px;color:#16a34a;font-weight:600;text-align:right;">&#10003; Paid${data.stripePaymentIntentId ? ` &middot; <span style="font-family:monospace;font-size:11px;color:#9ca3af;">${escapeHtml(data.stripePaymentIntentId.substring(0, 20))}&hellip;</span>` : ""}</td></tr>
            </table>
          </td></tr>
        </table>
        <p style="font-size:13px;font-weight:700;color:#111111;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.05em;">Order Items</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;margin-bottom:24px;">
          <thead><tr style="background:#f9fafb;">
            <th style="padding:10px 12px;text-align:left;font-size:12px;color:#6b7280;font-weight:600;border-bottom:1px solid #e5e7eb;">QTY</th>
            <th style="padding:10px 12px;text-align:left;font-size:12px;color:#6b7280;font-weight:600;border-bottom:1px solid #e5e7eb;">ITEM</th>
            <th style="padding:10px 12px;text-align:right;font-size:12px;color:#6b7280;font-weight:600;border-bottom:1px solid #e5e7eb;">PRICE</th>
          </tr></thead>
          <tbody>${itemRows}</tbody>
          <tfoot><tr><td colspan="3" style="padding:0;"><table width="100%" cellpadding="0" cellspacing="0" style="border-top:2px solid #e5e7eb;">
            <tr><td colspan="2" style="padding:8px 12px;font-size:13px;color:#6b7280;">Subtotal</td><td style="padding:8px 12px;font-size:13px;color:#6b7280;text-align:right;">${fmt(data.subtotal)}</td></tr>
            <tr><td colspan="2" style="padding:4px 12px;font-size:13px;color:#6b7280;">GST (5%)</td><td style="padding:4px 12px;font-size:13px;color:#6b7280;text-align:right;">${fmt(data.tax)}</td></tr>
            ${tipRow}
            <tr style="background:#f9fafb;"><td colspan="2" style="padding:10px 12px;font-size:15px;font-weight:700;color:#111111;">Total</td><td style="padding:10px 12px;font-size:15px;font-weight:700;color:#d60000;text-align:right;">${fmt(data.total)}</td></tr>
          </table></td></tr></tfoot>
        </table>
        ${data.specialInstructions ? `<div style="background:#fffbeb;border:1px solid #fcd34d;border-radius:8px;padding:12px 16px;margin-bottom:24px;"><p style="margin:0;font-size:13px;color:#92400e;"><strong>Special Instructions:</strong> ${escapeHtml(data.specialInstructions)}</p></div>` : ""}
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;margin-bottom:24px;">
          <tr><td style="padding:16px 20px;">
            <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#111111;text-transform:uppercase;letter-spacing:0.05em;">Pickup Location</p>
            <div style="font-size:14px;color:#374151;line-height:1.6;">${addressBlock}</div>
          </td></tr>
        </table>
        <p style="margin:0;font-size:13px;color:#9ca3af;line-height:1.6;">This is an automated message from ${escapeHtml(ctx.restaurantName)}. Please contact the restaurant directly with any questions.</p>
      </td></tr>
      <tr><td style="background:#f9fafb;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb;">
        <p style="margin:0;font-size:12px;color:#9ca3af;">&copy; ${new Date().getFullYear()} ${escapeHtml(ctx.restaurantName)}. All rights reserved.</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

export function buildOrderConfirmationText(
  data: OrderConfirmationData,
  ctx: RestaurantEmailContext
): string {
  const greeting = data.customerName ? `Hi ${data.customerName},` : "Hello,";
  const itemLines = data.items
    .map((i) => `  ${i.quantity}x ${i.name} — ${fmt(i.price * i.quantity)}`)
    .join("\n");
  const tipLine = data.tip && data.tip > 0 ? `Tip: ${fmt(data.tip)}\n` : "";

  return `${greeting}

We have received your order. Thank you — we'll prepare it for pickup.

ORDER DETAILS
─────────────
Order Number: ${data.orderNumber}
Order ID: ${data.orderId}
Order Type: Pickup
Total: ${fmt(data.total)}
Payment: PAID${data.stripePaymentIntentId ? ` (${data.stripePaymentIntentId})` : ""}

ITEMS
─────
${itemLines}

Subtotal: ${fmt(data.subtotal)}
GST (5%): ${fmt(data.tax)}
${tipLine}Total: ${fmt(data.total)}

PICKUP LOCATION
───────────────
${ctx.addressLines.join("\n")}

${data.specialInstructions ? `Special Instructions: ${data.specialInstructions}\n\n` : ""}This is an automated message from ${ctx.restaurantName}.`;
}
