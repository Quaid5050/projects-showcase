import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Silken Trading",
  description:
    "Contact Silken Trading for seat cover installation, car mats, and accessories. Phone, WhatsApp, and contact form.",
  openGraph: { title: "Contact | Silken Trading", description: "Get in touch for installation and quotes." },
};

export default function ContactLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
