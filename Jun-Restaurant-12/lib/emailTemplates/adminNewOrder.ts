import { RestaurantEmailContext } from "@/lib/email/restaurant-context";

export interface AdminNewOrderData {
  orderNumber: string;
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  specialInstructions?: string;
  items: Array<{ name: string; quantity: number; price: number }>;
  subtotal: number;
  tax: number;
  tip?: number;
  total: number;
  stripeSessionId?: string;
  stripePaymentIntentId?: string;
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

export function buildAdminNewOrderSubject(
  data: AdminNewOrderData,
  ctx: RestaurantEmailContext
): string {
  return `[New order] ${ctx.restaurantName} ${data.orderNumber} — ${fmt(data.total)} paid`;
}

export function buildAdminNewOrderHtml(
  data: AdminNewOrderData,
  ctx: RestaurantEmailContext
): string {
  const itemRows = data.items
    .map(
      (item) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #374151;color:#d1d5db;font-size:14px;">${escapeHtml(String(item.quantity))}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #374151;color:#d1d5db;font-size:14px;">${escapeHtml(item.name)}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #374151;color:#d1d5db;font-size:14px;text-align:right;">${fmt(item.price * item.quantity)}</td>
      </tr>`
    )
    .join("");

  const tipRow =
    data.tip && data.tip > 0
      ? `<tr><td colspan="2" style="padding:4px 12px;font-size:13px;color:#9ca3af;">Tip</td><td style="padding:4px 12px;font-size:13px;color:#9ca3af;text-align:right;">${fmt(data.tip)}</td></tr>`
      : "";

  const logoSection = ctx.logoUrl
    ? `<img src="${escapeHtml(ctx.logoUrl)}" alt="${escapeHtml(ctx.restaurantName)}" style="max-height:48px;max-width:140px;margin-bottom:6px;" />`
    : `<div style="font-size:18px;font-weight:700;color:#ffffff;">${escapeHtml(ctx.restaurantName)}</div>`;

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>New Order</title></head>
<body style="margin:0;padding:0;background:#0f1117;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1117;padding:32px 0;">
  <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#1a1d27;border-radius:12px;overflow:hidden;border:1px solid #374151;">
      <!-- Header -->
      <tr><td style="background:#111111;padding:24px 32px;text-align:center;">
        ${logoSection}
        <div style="margin-top:8px;display:inline-block;background:#d60000;color:#ffffff;font-size:13px;font-weight:700;padding:4px 14px;border-radius:99px;letter-spacing:0.05em;">NEW PAID ORDER</div>
      </td></tr>
      <!-- Body -->
      <tr><td style="padding:28px 32px;">

        <!-- Order meta -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1117;border-radius:8px;margin-bottom:20px;">
          <tr><td style="padding:18px 20px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size:13px;color:#9ca3af;padding-bottom:8px;">Order Number</td>
                <td style="font-size:16px;color:#ffffff;font-weight:700;text-align:right;padding-bottom:8px;">${escapeHtml(data.orderNumber)}</td>
              </tr>
              <tr>
                <td style="font-size:13px;color:#9ca3af;padding-bottom:8px;">Pickup Type</td>
                <td style="font-size:14px;color:#ffffff;font-weight:700;text-align:right;padding-bottom:8px;">ASAP</td>
              </tr>
              <tr>
                <td style="font-size:13px;color:#9ca3af;padding-bottom:8px;">Total Paid</td>
                <td style="font-size:18px;color:#d60000;font-weight:700;text-align:right;padding-bottom:8px;">${fmt(data.total)}</td>
              </tr>
              ${data.stripeSessionId ? `<tr><td style="font-size:12px;color:#6b7280;padding-bottom:4px;">Session ID</td><td style="font-size:11px;color:#6b7280;font-family:monospace;text-align:right;word-break:break-all;padding-bottom:4px;">${escapeHtml(data.stripeSessionId)}</td></tr>` : ""}
              ${data.stripePaymentIntentId ? `<tr><td style="font-size:12px;color:#6b7280;">Payment Intent</td><td style="font-size:11px;color:#6b7280;font-family:monospace;text-align:right;word-break:break-all;">${escapeHtml(data.stripePaymentIntentId)}</td></tr>` : ""}
            </table>
          </td></tr>
        </table>

        <!-- Customer -->
        <p style="font-size:12px;font-weight:700;color:#9ca3af;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.08em;">Customer</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1117;border-radius:8px;margin-bottom:20px;">
          <tr><td style="padding:16px 20px;">
            <p style="margin:0 0 4px;font-size:15px;color:#ffffff;font-weight:600;">${escapeHtml(data.customerName)}</p>
            <p style="margin:0 0 4px;font-size:13px;color:#9ca3af;">${escapeHtml(data.customerEmail)}</p>
            <p style="margin:0;font-size:13px;color:#9ca3af;">${escapeHtml(data.customerPhone)}</p>
            ${data.specialInstructions ? `<p style="margin:10px 0 0;font-size:13px;color:#fcd34d;"><strong>Notes:</strong> ${escapeHtml(data.specialInstructions)}</p>` : ""}
          </td></tr>
        </table>

        <!-- Items -->
        <p style="font-size:12px;font-weight:700;color:#9ca3af;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.08em;">Items</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #374151;border-radius:8px;overflow:hidden;margin-bottom:20px;">
          <thead>
            <tr style="background:#0f1117;">
              <th style="padding:10px 12px;text-align:left;font-size:11px;color:#6b7280;font-weight:600;border-bottom:1px solid #374151;">QTY</th>
              <th style="padding:10px 12px;text-align:left;font-size:11px;color:#6b7280;font-weight:600;border-bottom:1px solid #374151;">ITEM</th>
              <th style="padding:10px 12px;text-align:right;font-size:11px;color:#6b7280;font-weight:600;border-bottom:1px solid #374151;">PRICE</th>
            </tr>
          </thead>
          <tbody>${itemRows}</tbody>
          <tfoot>
            <tr><td colspan="3" style="padding:0;"><table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #374151;">
              <tr><td colspan="2" style="padding:8px 12px;font-size:13px;color:#9ca3af;">Subtotal</td><td style="padding:8px 12px;font-size:13px;color:#9ca3af;text-align:right;">${fmt(data.subtotal)}</td></tr>
              <tr><td colspan="2" style="padding:4px 12px;font-size:13px;color:#9ca3af;">Tax</td><td style="padding:4px 12px;font-size:13px;color:#9ca3af;text-align:right;">${fmt(data.tax)}</td></tr>
              ${tipRow}
              <tr style="background:#0f1117;"><td colspan="2" style="padding:10px 12px;font-size:15px;font-weight:700;color:#ffffff;">Total</td><td style="padding:10px 12px;font-size:15px;font-weight:700;color:#d60000;text-align:right;">${fmt(data.total)}</td></tr>
            </table></td></tr>
          </tfoot>
        </table>

        <p style="margin:0;font-size:12px;color:#4b5563;text-align:center;">
          Automated kitchen notification &mdash; ${escapeHtml(ctx.restaurantName)}
        </p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}
