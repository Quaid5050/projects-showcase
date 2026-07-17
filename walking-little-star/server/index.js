require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// ─── Gmail Transporter ───────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Verify transporter on startup
transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP connection failed:", error.message);
    console.error("   Check your GMAIL_USER and GMAIL_APP_PASSWORD in server/.env");
  } else {
    console.log("✅ SMTP connected — ready to send emails");
  }
});

// ─── Helpers ─────────────────────────────────────────────────────────────────
function sanitize(value) {
  if (typeof value !== "string") return "";
  return value.replace(/[<>]/g, "").trim().slice(0, 1000);
}

function formatRow(label, value) {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 12px;font-weight:600;color:#183b65;background:#fff8f0;width:180px;vertical-align:top;">${label}</td>
    <td style="padding:8px 12px;color:#14283d;">${value}</td>
  </tr>`;
}

function baseEmailHtml(title, rows, note) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:'Nunito Sans',Arial,sans-serif;background:#f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#183b65;padding:28px 32px;text-align:center;">
              <h1 style="margin:0;color:#fedebe;font-size:22px;font-weight:700;">
                ⭐ Walking Little Star Daycare
              </h1>
              <p style="margin:6px 0 0;color:#9fcaf4;font-size:14px;">${title}</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:28px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;">
                ${rows}
              </table>
              ${
                note
                  ? `<p style="margin:20px 0 0;padding:16px;background:#fff8f0;border-left:4px solid #fedebe;border-radius:4px;color:#5f7184;font-size:13px;">${note}</p>`
                  : ""
              }
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9f9f9;padding:18px 32px;text-align:center;border-top:1px solid #eee;">
              <p style="margin:0;color:#9fcaf4;font-size:12px;">
                Walking Little Star Daycare LLC &bull; Westfield, Massachusetts<br>
                <a href="mailto:walkinglittlestar@gmail.com" style="color:#183b65;">walkinglittlestar@gmail.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Routes ───────────────────────────────────────────────────────────────────

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ── Contact Form ──────────────────────────────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  try {
    // Honeypot check
    if (req.body.honeypot) {
      return res.status(200).json({ ok: true }); // Silent reject
    }

    const name = sanitize(req.body.name);
    const email = sanitize(req.body.email);
    const phone = sanitize(req.body.phone);
    const subject = sanitize(req.body.subject);
    const message = sanitize(req.body.message);
    const contactMethod = sanitize(req.body.contactMethod);

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields." });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    const rows =
      formatRow("Name", name) +
      formatRow("Email", `<a href="mailto:${email}" style="color:#183b65;">${email}</a>`) +
      formatRow("Phone", phone) +
      formatRow("Subject", subject || "General inquiry") +
      formatRow("Preferred Contact", contactMethod) +
      formatRow("Message", message.replace(/\n/g, "<br>"));

    const html = baseEmailHtml(
      "New Contact Form Submission",
      rows,
      "Reply directly to this email to respond to the inquiry."
    );

    await transporter.sendMail({
      from: `"Walking Little Star Website" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Contact: ${subject || name} — Walking Little Star`,
      html,
      text: `New contact from ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Walking Little Star Daycare" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We received your message — Walking Little Star Daycare",
      html: `
        <body style="font-family:'Nunito Sans',Arial,sans-serif;color:#14283d;padding:32px;max-width:520px;">
          <h2 style="color:#183b65;">Hi ${name},</h2>
          <p>Thank you for reaching out to <strong>Walking Little Star Daycare</strong>!</p>
          <p>We received your message and will be in touch shortly to answer your questions.</p>
          <p style="margin-top:24px;padding:16px;background:#fff8f0;border-radius:8px;border-left:4px solid #fedebe;">
            If you need to reach us directly:<br>
            📞 <a href="tel:+14138838466" style="color:#183b65;">+1 (413) 883-8466</a><br>
            ✉️ <a href="mailto:walkinglittlestar@gmail.com" style="color:#183b65;">walkinglittlestar@gmail.com</a>
          </p>
          <p style="color:#5f7184;font-size:13px;margin-top:24px;">
            Walking Little Star Daycare LLC &bull; Westfield, Massachusetts
          </p>
        </body>
      `,
      text: `Hi ${name},\n\nThank you for contacting Walking Little Star Daycare! We will be in touch shortly.\n\nWalking Little Star Daycare LLC\nWestfield, Massachusetts`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

// ── Booking / Visit Request Form ──────────────────────────────────────────────
app.post("/api/booking", async (req, res) => {
  try {
    // Honeypot check
    if (req.body.honeypot) {
      return res.status(200).json({ ok: true });
    }

    const parentName = sanitize(req.body.parentName);
    const email = sanitize(req.body.email);
    const phone = sanitize(req.body.phone);
    const contactMethod = sanitize(req.body.contactMethod);
    const ageGroup = sanitize(req.body.ageGroup);
    const startDate = sanitize(req.body.startDate);
    const careType = sanitize(req.body.careType);
    const preferredDays = sanitize(req.body.preferredDays);
    const scheduleNeeds = sanitize(req.body.scheduleNeeds);
    const visitDate = sanitize(req.body.visitDate);
    const visitTime = sanitize(req.body.visitTime);
    const message = sanitize(req.body.message);

    // Basic validation
    if (!parentName || !email || !phone) {
      return res.status(400).json({ error: "Missing required fields." });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    const ageLabels = {
      "2-12mo": "2–12 months",
      "1-2yr": "1–2 years",
      "2-3yr": "2–3 years",
      "3-4yr": "3–4 years",
      "4-5yr": "4–5 years",
    };

    const rows =
      formatRow("Parent / Guardian", parentName) +
      formatRow("Email", `<a href="mailto:${email}" style="color:#183b65;">${email}</a>`) +
      formatRow("Phone", `<a href="tel:${phone.replace(/\D/g, "")}" style="color:#183b65;">${phone}</a>`) +
      formatRow("Preferred Contact", contactMethod) +
      formatRow("Child Age Group", ageLabels[ageGroup] || ageGroup) +
      formatRow("Desired Start Date", startDate) +
      formatRow("Care Type", careType) +
      formatRow("Preferred Days", preferredDays) +
      formatRow("Schedule Needs", scheduleNeeds) +
      formatRow("Preferred Visit Date", visitDate) +
      formatRow("Preferred Visit Time", visitTime) +
      formatRow("Message", message ? message.replace(/\n/g, "<br>") : "—");

    const html = baseEmailHtml(
      "New Visit Request",
      rows,
      "⚠️ This is a visit request only. Submitting the form does not guarantee enrollment or availability."
    );

    await transporter.sendMail({
      from: `"Walking Little Star Website" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Visit Request: ${parentName} — Walking Little Star`,
      html,
      text: `New visit request from ${parentName}\nEmail: ${email}\nPhone: ${phone}\nAge Group: ${ageGroup}\nCare Type: ${careType}\nVisit Date: ${visitDate}\nVisit Time: ${visitTime}\nMessage: ${message}`,
    });

    // Auto-reply to parent
    await transporter.sendMail({
      from: `"Walking Little Star Daycare" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Your visit request was received — Walking Little Star Daycare",
      html: `
        <body style="font-family:'Nunito Sans',Arial,sans-serif;color:#14283d;padding:32px;max-width:520px;">
          <h2 style="color:#183b65;">Hi ${parentName},</h2>
          <p>Thank you for your interest in <strong>Walking Little Star Daycare</strong>!</p>
          <p>We received your visit request and Angélica will reach out soon to discuss availability and arrange your visit.</p>
          <p style="padding:16px;background:#fff8f0;border-radius:8px;border-left:4px solid #fedebe;font-size:14px;color:#5f7184;">
            Please note: submitting this form does not guarantee enrollment or availability.
          </p>
          <p style="margin-top:24px;">If you need to reach us directly:</p>
          <p style="padding:16px;background:#fff8f0;border-radius:8px;">
            📞 <a href="tel:+14138838466" style="color:#183b65;">+1 (413) 883-8466</a><br>
            ✉️ <a href="mailto:walkinglittlestar@gmail.com" style="color:#183b65;">walkinglittlestar@gmail.com</a>
          </p>
          <p style="color:#5f7184;font-size:13px;margin-top:24px;">
            Walking Little Star Daycare LLC &bull; Westfield, Massachusetts
          </p>
        </body>
      `,
      text: `Hi ${parentName},\n\nThank you for your visit request! Angélica will be in touch shortly.\n\nNote: this form does not guarantee enrollment or availability.\n\nWalking Little Star Daycare LLC\nWestfield, Massachusetts`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Booking form error:", err);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Walking Little Star email server running on port ${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/health\n`);
});
