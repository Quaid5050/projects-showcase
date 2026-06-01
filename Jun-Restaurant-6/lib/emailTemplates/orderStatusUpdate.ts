interface StatusUpdateData {
  orderNumber: string;
  customerName: string;
  status: string;
  restaurantName: string;
  restaurantAddress: string;
  logoUrl?: string | null;
}

export function orderStatusUpdateTemplate(data: StatusUpdateData): string {
  const { orderNumber, customerName, status, restaurantName, restaurantAddress, logoUrl } = data;

  const logoHtml = logoUrl
    ? `<img src="${logoUrl}" alt="${restaurantName}" style="max-height:60px;margin-bottom:16px;" />`
    : `<h2 style="color:#c8102e;margin:0 0 16px;">${restaurantName}</h2>`;

  const statusMessages: Record<string, { emoji: string; message: string }> = {
    completed: { emoji: "✅", message: "Your order has been completed. Thank you for visiting us!" },
    cancelled: { emoji: "❌", message: "Your order has been cancelled. Please contact us if you have questions." },
    preparing: { emoji: "👨‍🍳", message: "Your order is now being prepared!" },
    ready: { emoji: "🎉", message: "Your order is ready for pickup!" },
  };

  const info = statusMessages[status] || { emoji: "📋", message: `Your order status has been updated to: ${status}` };

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Order Update</title></head>
<body style="font-family:Arial,sans-serif;background:#f9f9f9;margin:0;padding:0;">
  <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
    <div style="background:#c8102e;padding:24px;text-align:center;">
      ${logoHtml}
      <h1 style="color:#fff;margin:0;font-size:22px;">${info.emoji} Order Update</h1>
    </div>
    <div style="padding:24px;">
      <p style="font-size:16px;">Hi <strong>${customerName}</strong>,</p>
      <p>${info.message}</p>
      <div style="background:#fff8f0;border:1px solid #ffd700;border-radius:6px;padding:12px 16px;margin:16px 0;">
        <strong>Order #${orderNumber}</strong><br/>
        <span style="color:#666;">Status: <strong>${status.toUpperCase()}</strong></span>
      </div>
      <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />
      <p style="color:#666;font-size:14px;">📍 ${restaurantAddress}</p>
    </div>
  </div>
</body>
</html>`;
}
