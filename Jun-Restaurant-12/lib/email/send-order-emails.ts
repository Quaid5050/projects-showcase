import { isMailgunConfigured, sendMailgunEmail } from "@/lib/mailgun";
import {
  buildOrderConfirmationHtml,
  buildOrderConfirmationText,
} from "@/lib/emailTemplates/orderConfirmation";
import {
  buildAdminNewOrderHtml,
  buildAdminNewOrderSubject,
} from "@/lib/emailTemplates/adminNewOrder";
import { loadRestaurantEmailContext } from "./restaurant-context";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

interface OrderEmailPayload {
  _id: unknown;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  specialInstructions?: string;
  items: Array<{ name: string; quantity: number; price: number }>;
  subtotal: number;
  tax: number;
  tip?: number;
  total: number;
  merchantNotificationEmailSent?: boolean;
  confirmationEmailSent?: boolean;
  createdAt: Date;
}

interface EmailOptions {
  stripeSessionId?: string;
  stripePaymentIntentId?: string;
  siteOrigin?: string;
}

export async function sendPaidOrderEmails(
  order: OrderEmailPayload,
  opts: EmailOptions = {}
): Promise<void> {
  const siteOrigin =
    opts.siteOrigin ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000";

  try {
    if (isMailgunConfigured()) {
      await sendViaMailgun(order, opts, siteOrigin);
    } else {
      await sendViaLegacy(order, opts, siteOrigin);
    }
  } catch (err) {
    // Never throw — log and continue
    console.error("[sendPaidOrderEmails] Unexpected error:", err);
  }
}

// ─── Mailgun path ────────────────────────────────────────────────────────────

async function sendViaMailgun(
  order: OrderEmailPayload,
  opts: EmailOptions,
  siteOrigin: string
): Promise<void> {
  const ctx = await loadRestaurantEmailContext(siteOrigin);

  const restaurantEmail =
    process.env.RESTAURANT_ORDER_EMAIL || ctx.email || "";
  const ccEmail = process.env.ORDER_CC_EMAIL || "";
  const bccEmail = process.env.ADMIN_ORDER_EMAIL || "";
  const sendCustomer = process.env.ORDER_SEND_CUSTOMER_CONFIRMATION !== "false";

  const orderId = String(order._id);

  // ── 1. Admin / kitchen notification ────────────────────────────────────────
  if (!order.merchantNotificationEmailSent && restaurantEmail) {
    try {
      const html = buildAdminNewOrderHtml(
        {
          orderNumber: order.orderNumber,
          orderId,
          customerName: order.customerName,
          customerEmail: order.customerEmail,
          customerPhone: order.customerPhone,
          specialInstructions: order.specialInstructions,
          items: order.items,
          subtotal: order.subtotal,
          tax: order.tax,
          tip: order.tip,
          total: order.total,
          stripeSessionId: opts.stripeSessionId,
          stripePaymentIntentId: opts.stripePaymentIntentId,
          createdAt: order.createdAt,
        },
        ctx
      );
      const subject = buildAdminNewOrderSubject(
        {
          orderNumber: order.orderNumber,
          orderId,
          customerName: order.customerName,
          customerEmail: order.customerEmail,
          customerPhone: order.customerPhone,
          items: order.items,
          subtotal: order.subtotal,
          tax: order.tax,
          tip: order.tip,
          total: order.total,
          createdAt: order.createdAt,
        },
        ctx
      );

      const result = await sendMailgunEmail({
        to: restaurantEmail,
        subject,
        html,
        cc: ccEmail || undefined,
        bcc:
          bccEmail && bccEmail !== restaurantEmail ? bccEmail : undefined,
      });

      if (result.success) {
        await connectDB();
        await Order.findByIdAndUpdate(orderId, {
          merchantNotificationEmailSent: true,
          merchantNotificationEmailSentAt: new Date(),
          restaurantOrderEmailSent: true,
          restaurantOrderEmailSentAt: new Date(),
        });
        console.log(`[Email] Admin notification sent for order ${order.orderNumber}`);
      } else {
        console.error(`[Email] Admin notification failed: ${result.error}`);
      }
    } catch (err) {
      console.error("[Email] Admin notification error:", err);
    }
  }

  // ── 2. Customer confirmation ────────────────────────────────────────────────
  if (!order.confirmationEmailSent && sendCustomer && order.customerEmail) {
    try {
      const html = buildOrderConfirmationHtml(
        {
          orderNumber: order.orderNumber,
          orderId,
          customerName: order.customerName,
          items: order.items,
          subtotal: order.subtotal,
          tax: order.tax,
          tip: order.tip,
          total: order.total,
          stripePaymentIntentId: opts.stripePaymentIntentId,
          specialInstructions: order.specialInstructions,
          createdAt: order.createdAt,
        },
        ctx
      );
      const text = buildOrderConfirmationText(
        {
          orderNumber: order.orderNumber,
          orderId,
          customerName: order.customerName,
          items: order.items,
          subtotal: order.subtotal,
          tax: order.tax,
          tip: order.tip,
          total: order.total,
          stripePaymentIntentId: opts.stripePaymentIntentId,
          specialInstructions: order.specialInstructions,
          createdAt: order.createdAt,
        },
        ctx
      );

      const result = await sendMailgunEmail({
        to: order.customerEmail,
        subject: `Order confirmation - ${ctx.restaurantName}`,
        html,
        text,
        cc: ccEmail || undefined,
        replyTo: restaurantEmail || undefined,
      });

      if (result.success) {
        await connectDB();
        await Order.findByIdAndUpdate(orderId, {
          confirmationEmailSent: true,
          confirmationEmailSentAt: new Date(),
          confirmationEmailStatus: "sent",
          customerOrderConfirmationSentAt: new Date(),
        });
        console.log(`[Email] Customer confirmation sent for order ${order.orderNumber}`);
      } else {
        await connectDB();
        await Order.findByIdAndUpdate(orderId, {
          confirmationEmailStatus: "failed",
          confirmationEmailError: result.error,
        });
        console.error(`[Email] Customer confirmation failed: ${result.error}`);
      }
    } catch (err) {
      console.error("[Email] Customer confirmation error:", err);
    }
  }
}

// ─── Legacy path (Resend or SMTP) ────────────────────────────────────────────

async function sendViaLegacy(
  order: OrderEmailPayload,
  opts: EmailOptions,
  siteOrigin: string
): Promise<void> {
  const provider = process.env.EMAIL_PROVIDER || "resend";
  const ctx = await loadRestaurantEmailContext(siteOrigin);
  const restaurantEmail = process.env.RESTAURANT_ORDER_EMAIL || ctx.email || "";
  const sendCustomer = process.env.ORDER_SEND_CUSTOMER_CONFIRMATION !== "false";
  const orderId = String(order._id);

  const adminHtml = buildAdminNewOrderHtml(
    {
      orderNumber: order.orderNumber,
      orderId,
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      customerPhone: order.customerPhone,
      specialInstructions: order.specialInstructions,
      items: order.items,
      subtotal: order.subtotal,
      tax: order.tax,
      tip: order.tip,
      total: order.total,
      stripeSessionId: opts.stripeSessionId,
      stripePaymentIntentId: opts.stripePaymentIntentId,
      createdAt: order.createdAt,
    },
    ctx
  );

  if (provider === "resend") {
    await sendViaResend(
      restaurantEmail,
      buildAdminNewOrderSubject(
        { orderNumber: order.orderNumber, orderId, customerName: order.customerName, customerEmail: order.customerEmail, customerPhone: order.customerPhone, items: order.items, subtotal: order.subtotal, tax: order.tax, tip: order.tip, total: order.total, createdAt: order.createdAt },
        ctx
      ),
      adminHtml
    );

    if (sendCustomer && order.customerEmail) {
      const custHtml = buildOrderConfirmationHtml(
        { orderNumber: order.orderNumber, orderId, customerName: order.customerName, items: order.items, subtotal: order.subtotal, tax: order.tax, tip: order.tip, total: order.total, stripePaymentIntentId: opts.stripePaymentIntentId, specialInstructions: order.specialInstructions, createdAt: order.createdAt },
        ctx
      );
      await sendViaResend(
        order.customerEmail,
        `Order confirmation - ${ctx.restaurantName}`,
        custHtml
      );
    }
  } else if (provider === "smtp") {
    await sendViaSmtp(
      restaurantEmail,
      buildAdminNewOrderSubject(
        { orderNumber: order.orderNumber, orderId, customerName: order.customerName, customerEmail: order.customerEmail, customerPhone: order.customerPhone, items: order.items, subtotal: order.subtotal, tax: order.tax, tip: order.tip, total: order.total, createdAt: order.createdAt },
        ctx
      ),
      adminHtml
    );

    if (sendCustomer && order.customerEmail) {
      const custHtml = buildOrderConfirmationHtml(
        { orderNumber: order.orderNumber, orderId, customerName: order.customerName, items: order.items, subtotal: order.subtotal, tax: order.tax, tip: order.tip, total: order.total, stripePaymentIntentId: opts.stripePaymentIntentId, specialInstructions: order.specialInstructions, createdAt: order.createdAt },
        ctx
      );
      await sendViaSmtp(
        order.customerEmail,
        `Order confirmation - ${ctx.restaurantName}`,
        custHtml
      );
    }
  }

  // Update flags
  try {
    await connectDB();
    await Order.findByIdAndUpdate(orderId, {
      merchantNotificationEmailSent: true,
      merchantNotificationEmailSentAt: new Date(),
      restaurantOrderEmailSent: true,
      restaurantOrderEmailSentAt: new Date(),
      ...(sendCustomer && order.customerEmail
        ? {
            confirmationEmailSent: true,
            confirmationEmailSentAt: new Date(),
            confirmationEmailStatus: "sent",
            customerOrderConfirmationSentAt: new Date(),
          }
        : {}),
    });
  } catch (err) {
    console.error("[Email] Failed to update email flags:", err);
  }
}

async function sendViaResend(to: string, subject: string, html: string) {
  if (!to) return;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.ORDER_FROM_EMAIL || "orders@chansgarden.com",
        to,
        subject,
        html,
      }),
    });
    if (!res.ok) {
      const err = await res.text();
      console.error("[Resend] Error:", err);
    }
  } catch (err) {
    console.error("[Resend] Fetch error:", err);
  }
}

async function sendViaSmtp(to: string, subject: string, html: string) {
  if (!to) return;
  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.ORDER_FROM_EMAIL || "orders@chansgarden.com",
      to,
      subject,
      html,
    });
  } catch (err) {
    console.error("[SMTP] Send error:", err);
  }
}
