interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  selectedOptions?: Record<string, string>;
  notes?: string;
}

interface OrderConfirmationData {
  orderNumber: string;
  customerName: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  tax: number;
  tip: number;
  total: number;
  pickupType: string;
  pickupTime?: string | null;
  notes?: string;
  pickupPrepareTimeMinutes: number;
  restaurantName: string;
  restaurantAddress: string;
  logoUrl?: string | null;
}

export function orderConfirmationTemplate(data: OrderConfirmationData): string {
  const {
    orderNumber, customerName, items, subtotal, discount, tax, tip, total,
    pickupType, pickupTime, notes, pickupPrepareTimeMinutes,
    restaurantName, restaurantAddress, logoUrl,
  } = data;

  const logoHtml = logoUrl
    ? `<img src="${logoUrl}" alt="${restaurantName}" style="max-height:60px;margin-bottom:16px;" />`
    : `<h2 style="color:#c8102e;margin:0 0 16px;">${restaurantName}</h2>`;

  const itemsHtml = items.map(item => `
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;">${item.quantity}x ${item.name}</td>
      <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;text-align:right;">$${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  `).join("");

  const pickupInfo = pickupType === "SCHEDULED" && pickupTime
    ? `Scheduled: ${new Date(pickupTime).toLocaleString("en-CA", { timeZone: "America/Vancouver" })}`
    : `ASAP (~${pickupPrepareTimeMinutes} minutes)`;

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Order Confirmation</title></head>
<body style="font-family:Arial,sans-serif;background:#f9f9f9;margin:0;padding:0;">
  <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
    <div style="background:#c8102e;padding:24px;text-align:center;">
      ${logoHtml}
      <h1 style="color:#fff;margin:0;font-size:22px;">Order Confirmed!</h1>
    </div>
    <div style="padding:24px;">
      <p style="font-size:16px;">Hi <strong>${customerName}</strong>,</p>
      <p>Thank you for your order! Here's your summary:</p>
      <div style="background:#fff8f0;border:1px solid #ffd700;border-radius:6px;padding:12px 16px;margin:16px 0;">
        <strong>Order #${orderNumber}</strong><br/>
        <span style="color:#666;">Pickup: ${pickupInfo}</span>
      </div>
      <table style="width:100%;border-collapse:collapse;margin:16px 0;">
        ${itemsHtml}
        <tr><td style="padding:8px 0;color:#666;">Subtotal</td><td style="text-align:right;">$${subtotal.toFixed(2)}</td></tr>
        ${discount > 0 ? `<tr><td style="padding:4px 0;color:#22c55e;">Discount</td><td style="text-align:right;color:#22c55e;">-$${discount.toFixed(2)}</td></tr>` : ""}
        <tr><td style="padding:4px 0;color:#666;">Tax (13%)</td><td style="text-align:right;">$${tax.toFixed(2)}</td></tr>
        ${tip > 0 ? `<tr><td style="padding:4px 0;color:#666;">Tip</td><td style="text-align:right;">$${tip.toFixed(2)}</td></tr>` : ""}
        <tr style="font-weight:bold;font-size:16px;border-top:2px solid #c8102e;">
          <td style="padding:12px 0;">Total</td>
          <td style="text-align:right;">$${total.toFixed(2)} CAD</td>
        </tr>
      </table>
      ${notes ? `<p style="background:#f5f5f5;padding:12px;border-radius:4px;"><strong>Order Notes:</strong> ${notes}</p>` : ""}
      <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />
      <p style="color:#666;font-size:14px;">📍 ${restaurantAddress}</p>
      <p style="color:#999;font-size:12px;">If you have questions, reply to this email.</p>
    </div>
  </div>
</body>
</html>`;
}
