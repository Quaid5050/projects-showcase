import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { IOrder } from '@/types';

// Lazy client — only instantiated at call time, not at import time
function getMailgunClient() {
  const apiKey = process.env.MAILGUN_API_KEY;
  if (!apiKey) throw new Error('MAILGUN_API_KEY is not defined');
  const mg = new Mailgun(formData);
  return mg.client({ username: 'api', key: apiKey });
}

const DOMAIN     = () => process.env.MAILGUN_DOMAIN     || '';
const FROM_EMAIL = () => process.env.MAILGUN_FROM_EMAIL || '';
const FROM_NAME  = () => process.env.MAILGUN_FROM_NAME  || 'Burnaby Palace Restaurant';

// ─────────────────────────────────────────────────────────────
//  1.  CUSTOMER CONFIRMATION EMAIL
// ─────────────────────────────────────────────────────────────

function buildCustomerEmailHtml(order: IOrder): string {
  const itemRows = order.items.map((item) => `
    <tr>
      <td style="padding:10px 14px;border-bottom:1px solid #f0e6d3;font-size:14px;color:#333;">${item.name}</td>
      <td style="padding:10px 14px;border-bottom:1px solid #f0e6d3;text-align:center;font-size:14px;color:#333;">${item.quantity}</td>
      <td style="padding:10px 14px;border-bottom:1px solid #f0e6d3;text-align:right;font-size:14px;color:#333;">$${item.price.toFixed(2)}</td>
      <td style="padding:10px 14px;border-bottom:1px solid #f0e6d3;text-align:right;font-size:14px;font-weight:600;color:#333;">$${item.subtotal.toFixed(2)}</td>
    </tr>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Order Confirmation – Burnaby Palace</title>
</head>
<body style="margin:0;padding:0;background:#f9f5f0;font-family:Georgia,'Times New Roman',serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f5f0;padding:32px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0"
  style="max-width:600px;width:100%;background:#ffffff;border-radius:10px;
         overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.10);">

  <!-- ── HEADER ── -->
  <tr>
    <td style="background:#8B0000;padding:36px 40px;text-align:center;">
      <p style="margin:0 0 6px;color:#FFD700;font-size:13px;letter-spacing:3px;text-transform:uppercase;">口得福</p>
      <h1 style="margin:0;color:#FFD700;font-size:26px;font-family:Georgia,serif;">Burnaby Palace Restaurant</h1>
      <p style="margin:6px 0 0;color:#f8d7b0;font-size:13px;">Chinese Cuisine · Burnaby, BC</p>
    </td>
  </tr>

  <!-- ── HERO MESSAGE ── -->
  <tr>
    <td style="padding:36px 40px 0;text-align:center;">
      <div style="display:inline-block;background:#f0fdf4;border:1px solid #86efac;
                  border-radius:50px;padding:8px 20px;margin-bottom:20px;">
        <span style="color:#16a34a;font-size:13px;font-weight:bold;">✓ Order Confirmed &amp; Payment Received</span>
      </div>
      <h2 style="margin:0 0 10px;color:#1a0a00;font-size:22px;">Thank you, ${order.customerName}!</h2>
      <p style="margin:0;color:#666;font-size:15px;line-height:1.6;">
        Your order has been received and will be prepared for pickup.<br>
        We look forward to seeing you soon.
      </p>
    </td>
  </tr>

  <!-- ── ORDER SUMMARY BOX ── -->
  <tr>
    <td style="padding:28px 40px 0;">
      <table width="100%" cellpadding="0" cellspacing="0"
        style="background:#fdf8f2;border:1px solid #f0e6d3;border-radius:8px;">
        <tr>
          <td style="padding:20px 24px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:5px 0;color:#888;font-size:13px;">Order Number</td>
                <td style="padding:5px 0;text-align:right;font-size:14px;font-weight:bold;color:#8B0000;">#${order.orderNumber}</td>
              </tr>
              <tr>
                <td style="padding:5px 0;color:#888;font-size:13px;">Customer Name</td>
                <td style="padding:5px 0;text-align:right;font-size:14px;color:#333;">${order.customerName}</td>
              </tr>
              <tr>
                <td style="padding:5px 0;color:#888;font-size:13px;">Phone</td>
                <td style="padding:5px 0;text-align:right;font-size:14px;color:#333;">${order.customerPhone}</td>
              </tr>
              <tr>
                <td style="padding:5px 0;color:#888;font-size:13px;">Email</td>
                <td style="padding:5px 0;text-align:right;font-size:14px;color:#333;">${order.customerEmail}</td>
              </tr>
              <tr>
                <td style="padding:5px 0;color:#888;font-size:13px;">Payment</td>
                <td style="padding:5px 0;text-align:right;">
                  <span style="background:#16a34a;color:#fff;padding:3px 12px;
                               border-radius:20px;font-size:12px;font-weight:bold;">✓ PAID</span>
                </td>
              </tr>
              ${order.notes ? `
              <tr>
                <td style="padding:5px 0;color:#888;font-size:13px;vertical-align:top;">Notes</td>
                <td style="padding:5px 0;text-align:right;font-size:13px;color:#555;font-style:italic;">${order.notes}</td>
              </tr>` : ''}
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- ── ORDER ITEMS ── -->
  <tr>
    <td style="padding:28px 40px 0;">
      <h3 style="margin:0 0 14px;color:#8B0000;font-size:15px;font-family:Georgia,serif;
                 text-transform:uppercase;letter-spacing:1px;">Order Items</h3>
      <table width="100%" cellpadding="0" cellspacing="0"
        style="border:1px solid #f0e6d3;border-radius:8px;overflow:hidden;">
        <tr style="background:#8B0000;">
          <th style="padding:10px 14px;color:#FFD700;text-align:left;font-size:12px;
                     font-weight:600;text-transform:uppercase;">Item</th>
          <th style="padding:10px 14px;color:#FFD700;text-align:center;font-size:12px;
                     font-weight:600;text-transform:uppercase;">Qty</th>
          <th style="padding:10px 14px;color:#FFD700;text-align:right;font-size:12px;
                     font-weight:600;text-transform:uppercase;">Price</th>
          <th style="padding:10px 14px;color:#FFD700;text-align:right;font-size:12px;
                     font-weight:600;text-transform:uppercase;">Total</th>
        </tr>
        ${itemRows}
        <!-- subtotal row -->
        <tr style="background:#fdf8f2;">
          <td colspan="3" style="padding:8px 14px;text-align:right;color:#888;font-size:13px;">Subtotal</td>
          <td style="padding:8px 14px;text-align:right;color:#333;font-size:13px;">$${order.subtotal.toFixed(2)}</td>
        </tr>
        <tr style="background:#fdf8f2;">
          <td colspan="3" style="padding:8px 14px;text-align:right;color:#888;font-size:13px;">Tax (5% GST)</td>
          <td style="padding:8px 14px;text-align:right;color:#333;font-size:13px;">$${order.tax.toFixed(2)}</td>
        </tr>
        <!-- total row -->
        <tr style="background:#8B0000;">
          <td colspan="3" style="padding:12px 14px;text-align:right;color:#FFD700;
                                  font-size:15px;font-weight:bold;">ORDER TOTAL</td>
          <td style="padding:12px 14px;text-align:right;color:#FFD700;
                     font-size:17px;font-weight:bold;">$${order.total.toFixed(2)}</td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- ── PICKUP NOTICE ── -->
  <tr>
    <td style="padding:24px 40px 0;">
      <table width="100%" cellpadding="0" cellspacing="0"
        style="background:#fffbeb;border-left:4px solid #FFD700;border-radius:4px;">
        <tr>
          <td style="padding:16px 20px;">
            <p style="margin:0;color:#78350f;font-size:14px;line-height:1.6;">
              🍜 <strong>Your order is being prepared for pickup.</strong><br>
              Please come to the restaurant to collect your order. No delivery — pickup only.
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- ── RESTAURANT INFO ── -->
  <tr>
    <td style="padding:24px 40px 0;">
      <h3 style="margin:0 0 14px;color:#8B0000;font-size:15px;font-family:Georgia,serif;
                 text-transform:uppercase;letter-spacing:1px;">Pickup Location</h3>
      <table width="100%" cellpadding="0" cellspacing="0"
        style="background:#fdf8f2;border:1px solid #f0e6d3;border-radius:8px;">
        <tr>
          <td style="padding:20px 24px;">
            <p style="margin:0 0 8px;font-size:15px;font-weight:bold;color:#1a0a00;">Burnaby Palace Restaurant</p>
            <p style="margin:0 0 6px;font-size:14px;color:#555;">📍 3110 Boundary Rd, Burnaby, BC V5M 4A2</p>
            <p style="margin:0 0 6px;font-size:14px;color:#555;">📞 +1 604-437-1818</p>
            <p style="margin:0;font-size:14px;color:#555;">🕐 Open Daily: 11:00 AM – 9:30 PM</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- ── FOOTER ── -->
  <tr>
    <td style="padding:32px 40px;text-align:center;">
      <p style="margin:0 0 6px;color:#aaa;font-size:12px;">
        © ${new Date().getFullYear()} Burnaby Palace Restaurant · Chinese Cuisine
      </p>
      <p style="margin:0;color:#ccc;font-size:11px;">
        3110 Boundary Rd, Burnaby, BC V5M 4A2 · +1 604-437-1818
      </p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

function buildCustomerEmailText(order: IOrder): string {
  const items = order.items
    .map((item) => `  ${item.name} x${item.quantity}  –  $${item.subtotal.toFixed(2)}`)
    .join('\n');

  return `BURNABY PALACE RESTAURANT
Order Confirmation
==========================================

Hi ${order.customerName}, your order has been confirmed and payment received.

ORDER #${order.orderNumber}
------------------------------------------
${items}
------------------------------------------
Subtotal : $${order.subtotal.toFixed(2)}
Tax (GST): $${order.tax.toFixed(2)}
TOTAL    : $${order.total.toFixed(2)}

Customer : ${order.customerName}
Phone    : ${order.customerPhone}
Email    : ${order.customerEmail}
Payment  : PAID
${order.notes ? `Notes    : ${order.notes}` : ''}

Your order is being prepared for pickup.

PICKUP LOCATION
------------------------------------------
Burnaby Palace Restaurant
3110 Boundary Rd, Burnaby, BC V5M 4A2
Phone : +1 604-437-1818
Hours : Open Daily  11:00 AM – 9:30 PM
`;
}

// ─────────────────────────────────────────────────────────────
//  2.  ADMIN / MERCHANT NOTIFICATION EMAIL  (CC to restaurant)
// ─────────────────────────────────────────────────────────────

function buildAdminEmailHtml(order: IOrder): string {
  const itemRows = order.items.map((item) => `
    <tr>
      <td style="padding:10px 14px;border-bottom:1px solid #2a2a2a;font-size:14px;color:#e5e5e5;">${item.name}</td>
      <td style="padding:10px 14px;border-bottom:1px solid #2a2a2a;text-align:center;
                 font-size:14px;color:#e5e5e5;">${item.quantity}</td>
      <td style="padding:10px 14px;border-bottom:1px solid #2a2a2a;text-align:right;
                 font-size:14px;color:#e5e5e5;">$${item.price.toFixed(2)}</td>
      <td style="padding:10px 14px;border-bottom:1px solid #2a2a2a;text-align:right;
                 font-size:14px;font-weight:bold;color:#FFD700;">$${item.subtotal.toFixed(2)}</td>
    </tr>`).join('');

  const orderDate = new Date(order.createdAt).toLocaleString('en-CA', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/Vancouver',
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>New Order #${order.orderNumber}</title>
</head>
<body style="margin:0;padding:0;background:#0d0d0d;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d0d;padding:24px 16px;">
<tr><td align="center">
<table width="620" cellpadding="0" cellspacing="0"
  style="max-width:620px;width:100%;background:#1a1a1a;border-radius:10px;
         overflow:hidden;border:1px solid #8B0000;">

  <!-- ── ALERT HEADER ── -->
  <tr>
    <td style="background:#8B0000;padding:28px 32px;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <p style="margin:0 0 4px;color:#FFD700;font-size:12px;
                      letter-spacing:3px;text-transform:uppercase;">Burnaby Palace Restaurant</p>
            <h1 style="margin:0;color:#ffffff;font-size:22px;">🔔 New Paid Order</h1>
          </td>
          <td style="text-align:right;vertical-align:middle;">
            <p style="margin:0;color:#FFD700;font-size:26px;font-weight:bold;">#${order.orderNumber}</p>
            <p style="margin:4px 0 0;color:#f8d7b0;font-size:12px;">${orderDate}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- ── CUSTOMER DETAILS ── -->
  <tr>
    <td style="padding:24px 32px 0;">
      <h2 style="margin:0 0 14px;color:#FFD700;font-size:13px;
                 text-transform:uppercase;letter-spacing:2px;">Customer Details</h2>
      <table width="100%" cellpadding="0" cellspacing="0"
        style="background:#242424;border-radius:8px;">
        <tr>
          <td style="padding:18px 20px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:4px 0;color:#888;font-size:13px;width:110px;">Name</td>
                <td style="padding:4px 0;color:#fff;font-size:14px;font-weight:bold;">${order.customerName}</td>
              </tr>
              <tr>
                <td style="padding:4px 0;color:#888;font-size:13px;">Phone</td>
                <td style="padding:4px 0;color:#fff;font-size:14px;">
                  <a href="tel:${order.customerPhone.replace(/\s/g,'')}"
                     style="color:#FFD700;text-decoration:none;">${order.customerPhone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:4px 0;color:#888;font-size:13px;">Email</td>
                <td style="padding:4px 0;color:#fff;font-size:14px;">
                  <a href="mailto:${order.customerEmail}"
                     style="color:#FFD700;text-decoration:none;">${order.customerEmail}</a>
                </td>
              </tr>
              ${order.notes ? `
              <tr>
                <td style="padding:4px 0;color:#888;font-size:13px;vertical-align:top;">Notes</td>
                <td style="padding:4px 0;font-size:13px;color:#f97316;font-style:italic;">${order.notes}</td>
              </tr>` : ''}
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- ── ORDER ITEMS ── -->
  <tr>
    <td style="padding:24px 32px 0;">
      <h2 style="margin:0 0 14px;color:#FFD700;font-size:13px;
                 text-transform:uppercase;letter-spacing:2px;">Items to Prepare</h2>
      <table width="100%" cellpadding="0" cellspacing="0"
        style="border-radius:8px;overflow:hidden;border:1px solid #333;">
        <tr style="background:#8B0000;">
          <th style="padding:10px 14px;color:#FFD700;text-align:left;
                     font-size:12px;text-transform:uppercase;">Item</th>
          <th style="padding:10px 14px;color:#FFD700;text-align:center;
                     font-size:12px;text-transform:uppercase;">Qty</th>
          <th style="padding:10px 14px;color:#FFD700;text-align:right;
                     font-size:12px;text-transform:uppercase;">Unit</th>
          <th style="padding:10px 14px;color:#FFD700;text-align:right;
                     font-size:12px;text-transform:uppercase;">Line Total</th>
        </tr>
        ${itemRows}
        <!-- subtotal -->
        <tr style="background:#1a1a1a;">
          <td colspan="3" style="padding:8px 14px;text-align:right;color:#888;font-size:13px;">Subtotal</td>
          <td style="padding:8px 14px;text-align:right;color:#ccc;font-size:13px;">$${order.subtotal.toFixed(2)}</td>
        </tr>
        <tr style="background:#1a1a1a;">
          <td colspan="3" style="padding:8px 14px;text-align:right;color:#888;font-size:13px;">Tax (5% GST)</td>
          <td style="padding:8px 14px;text-align:right;color:#ccc;font-size:13px;">$${order.tax.toFixed(2)}</td>
        </tr>
        <!-- grand total -->
        <tr style="background:#8B0000;">
          <td colspan="3"
            style="padding:14px;text-align:right;color:#FFD700;font-size:15px;font-weight:bold;">
            ORDER TOTAL
          </td>
          <td style="padding:14px;text-align:right;color:#FFD700;font-size:19px;font-weight:bold;">
            $${order.total.toFixed(2)}
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- ── PAYMENT STATUS BADGE ── -->
  <tr>
    <td style="padding:20px 32px 0;text-align:center;">
      <p style="display:inline-block;background:#16a34a;color:#fff;
                padding:10px 28px;border-radius:50px;font-size:14px;
                font-weight:bold;margin:0;">
        ✓ Payment Confirmed via Stripe
      </p>
    </td>
  </tr>

  <!-- ── FOOTER ── -->
  <tr>
    <td style="padding:28px 32px;text-align:center;border-top:1px solid #2a2a2a;margin-top:24px;">
      <p style="margin:0;color:#555;font-size:12px;">
        This is an automated notification from your online ordering system.<br>
        Burnaby Palace Restaurant · 3110 Boundary Rd, Burnaby, BC
      </p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

function buildAdminEmailText(order: IOrder): string {
  const items = order.items
    .map((item) => `  ${item.quantity}x  ${item.name.padEnd(30)}  $${item.subtotal.toFixed(2)}`)
    .join('\n');

  return `
🔔 NEW PAID ORDER — Burnaby Palace Restaurant
=============================================
Order   : #${order.orderNumber}
Time    : ${new Date(order.createdAt).toLocaleString('en-CA', { timeZone: 'America/Vancouver' })}

CUSTOMER
--------
Name    : ${order.customerName}
Phone   : ${order.customerPhone}
Email   : ${order.customerEmail}
${order.notes ? `Notes   : ${order.notes}` : ''}

ITEMS TO PREPARE
----------------
${items}

Subtotal: $${order.subtotal.toFixed(2)}
Tax GST : $${order.tax.toFixed(2)}
TOTAL   : $${order.total.toFixed(2)}

Payment : ✓ PAID via Stripe
`;
}

// ─────────────────────────────────────────────────────────────
//  EXPORTED SEND FUNCTIONS
// ─────────────────────────────────────────────────────────────

/**
 * Send order confirmation email to the CUSTOMER.
 * Called inside Stripe webhook after payment is confirmed.
 * Duplicate-safe — caller checks confirmationEmailSent before calling.
 */
export async function sendOrderConfirmationEmail(order: IOrder): Promise<boolean> {
  try {
    const client = getMailgunClient();
    await client.messages.create(DOMAIN(), {
      from: `${FROM_NAME()} <${FROM_EMAIL()}>`,
      to: [order.customerEmail],
      subject: `Your Burnaby Palace Order Confirmation – #${order.orderNumber}`,
      html: buildCustomerEmailHtml(order),
      text: buildCustomerEmailText(order),
    });
    console.log(`✉ Confirmation email sent to customer: ${order.customerEmail}`);
    return true;
  } catch (error) {
    console.error('Failed to send customer confirmation email:', error);
    return false;
  }
}

/**
 * Send new-order notification email to the ADMIN / MERCHANT.
 * Only runs if ADMIN_ORDER_EMAIL is set in env.
 * Duplicate-safe — caller checks adminEmailSent before calling.
 */
export async function sendAdminOrderNotificationEmail(order: IOrder): Promise<boolean> {
  const adminEmail = process.env.ADMIN_ORDER_EMAIL;
  if (!adminEmail || !adminEmail.trim()) {
    console.log('ADMIN_ORDER_EMAIL not set — skipping admin notification');
    return false;
  }

  try {
    const client = getMailgunClient();
    await client.messages.create(DOMAIN(), {
      from: `${FROM_NAME()} <${FROM_EMAIL()}>`,
      to: [adminEmail.trim()],
      subject: `🔔 New Order #${order.orderNumber} – $${order.total.toFixed(2)} – ${order.customerName}`,
      html: buildAdminEmailHtml(order),
      text: buildAdminEmailText(order),
    });
    console.log(`✉ Admin notification email sent to: ${adminEmail}`);
    return true;
  } catch (error) {
    console.error('Failed to send admin notification email:', error);
    return false;
  }
}
