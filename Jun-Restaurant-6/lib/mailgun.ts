import Mailgun from "mailgun.js";
import FormData from "form-data";

const mailgun = new Mailgun(FormData);

export function getMailgunClient() {
  const apiKey = process.env.MAILGUN_API_KEY;
  if (!apiKey) throw new Error("MAILGUN_API_KEY not set");
  return mailgun.client({ username: "api", key: apiKey });
}

export const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || "merchantorders.io";
export const FROM_EMAIL = process.env.MAILGUN_FROM_EMAIL || "orders@merchantorders.io";
export const FROM_NAME = process.env.MAILGUN_FROM_NAME || "The Village Burger";
