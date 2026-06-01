interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  selectedOptions?: Record<string, string>;
  notes?: string;
}

interface AdminNewOrderData {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  tax: number;
  tip: number;
  total: number;
  pickupType: string;
  pickupTime?: string | null;
  notes?: string;
  restaurantName: string;
  logoUrl?: string | null;
}

export function adminNewOrderTemplate(data: AdminNewOrderData): string {
  const {
    orderNumber, customerName, customerEmail, customerPhone,
    items, subtotal, discount, tax, tip, total,
    pickupType, pickupTime, notes, restaurantName, logoUrl,
  } = data;

  const logoHtml = logoUrl
    ? `<img src="${logoUrl}" alt="${restaurantName}" style="max-height:50px;margin-bottom:12px;" />`
    : `<strong style="color:#c8102e;font-size:18px;">${restaurantName}</strong>`;

  const itemsHtml = items.map(item => `
    <tr>
      <td style="padding:6px 0;border-bottom:1px solid #eee;">${item.quantity}x ${item.name}</td>
      <td style="padding:6px 0;border-bottom:1px solid #eee;text-align:right;">$${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  `).join("");

  const pickupInfo = pickupType === "SCHEDULED" && pickupTime
    ? `Scheduled: ${new Date(pickupTime).toLocaleString("en-CA", { timeZone: "America/Vancouver" })}`
    : "ASAP";

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>New Order Alert</title></head>
<body style="font-family:Arial,sans-serif;background:#f9f9f9;margin:0;padding:0;">
  <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
    <div style="background:#c8102e;padding:20px;text-align:center;">
      ${logoHtml}
      <h1 style="color:#fff;margin:8px 0 0;font-size:20px;">🔔 New Order Received</h1>
    </div>
    <div style="padding:24px;">
      <div style="background:#fff3cd;border:1px solid #ffc107;border-radius:6px;padding:12px 16px;margin-bottom:16px;">
        <strong>Order #${orderNumber}</strong> — $${total.toFixed(2)} CAD<br/>
        <span style="color:#666;">Pickup: ${pickupInfo}</span>
      </div>
      <h3 style="margin:0 0 8px;color:#333;">Customer</h3>
      <p style="margin:0 0 4px;">${customerName}</p>
      <p style="margin:0 0 4px;"><a href="mailto:${customerEmail}">${customerEmail}</a></p>
      <p style="margin:0 0 16px;"><a href="tel:${customerPhone}">${customerPhone}</a></p>
      <h3 style="margin:0 0 8px;color:#333;">Items</h3>
      <table style="width:100%;border-collapse:collapse;">
        ${itemsHtml}
        <tr><td style="padding:6px 0;color:#666;">Subtotal</td><td style="text-align:right;">$${subtotal.toFixed(2)}</td></tr>
        ${discount > 0 ? `<tr><td style="padding:4px 0;color:#22c55e;">Discount</td><td style="text-align:right;color:#22c55e;">-$${discount.toFixed(2)}</td></tr>` : ""}
        <tr><td style="padding:4px 0;color:#666;">Tax</td><td style="text-align:right;">$${tax.toFixed(2)}</td></tr>
        ${tip > 0 ? `<tr><td style="padding:4px 0;color:#666;">Tip</td><td style="text-align:right;">$${tip.toFixed(2)}</td></tr>` : ""}
        <tr style="font-weight:bold;border-top:2px solid #c8102e;">
          <td style="padding:10px 0;">TOTAL</td>
          <td style="text-align:right;">$${total.toFixed(2)} CAD</td>
        </tr>
      </table>
      ${notes ? `<p style="background:#f5f5f5;padding:12px;border-radius:4px;margin-top:16px;"><strong>Notes:</strong> ${notes}</p>` : ""}
    </div>
  </div>
</body>
</html>`;
}
