import FormData from "form-data";
import Mailgun from "mailgun.js";
import { RESTAURANT_DISPLAY_NAME } from "@/lib/email/constants";

export interface MailgunEmailParams {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  cc?: string | string[];
  bcc?: string | string[];
  replyTo?: string;
}

export function isMailgunConfigured(): boolean {
  return Boolean(
    process.env.MAILGUN_API_KEY &&
      process.env.MAILGUN_DOMAIN &&
      (process.env.MAILGUN_FROM || process.env.MAILGUN_FROM_EMAIL)
  );
}

export function resolveMailgunFromHeader(): string {
  // Already formatted: "Name <email@domain.com>"
  if (process.env.MAILGUN_FROM) return process.env.MAILGUN_FROM;

  const email = process.env.MAILGUN_FROM_EMAIL;
  const name =
    process.env.MAILGUN_FROM_NAME ||
    RESTAURANT_DISPLAY_NAME;

  if (email && name) return `${name} <${email}>`;
  if (email) return email;

  return `${RESTAURANT_DISPLAY_NAME} <orders@chansgarden.com>`;
}

export async function sendMailgunEmail(
  params: MailgunEmailParams
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  if (!isMailgunConfigured()) {
    return { success: false, error: "Mailgun not configured" };
  }

  try {
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY as string,
      // EU region? Add: url: "https://api.eu.mailgun.net"
    });

    const toList = Array.isArray(params.to) ? params.to : [params.to];
    const data: Record<string, unknown> = {
      from: resolveMailgunFromHeader(),
      to: toList,
      subject: params.subject,
      html: params.html,
      text: params.text || stripHtml(params.html),
    };

    if (params.cc) {
      data["cc"] = Array.isArray(params.cc) ? params.cc : [params.cc];
    }
    if (params.bcc) {
      data["bcc"] = Array.isArray(params.bcc) ? params.bcc : [params.bcc];
    }
    if (params.replyTo) {
      data["h:Reply-To"] = params.replyTo;
    }

    const result = await mg.messages.create(
      process.env.MAILGUN_DOMAIN as string,
      data as Parameters<typeof mg.messages.create>[1]
    );

    return { success: true, messageId: result.id };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[Mailgun] Send error:", msg);
    return { success: false, error: msg };
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}
