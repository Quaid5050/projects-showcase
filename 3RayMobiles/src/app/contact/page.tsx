"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail, Phone, MapPin, MessageCircle,
  ShoppingCart, DollarSign, Wrench, CheckCircle2,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { products } from "@/data/products";
import { toast } from "sonner";

const WHATSAPP = "14166693931";
const EMAIL    = "info@3raymobile.com";

// ─── Quote receives go to: info@3raymobile.com AND WhatsApp +1 416-669-3931 ─

type QuoteType = "buy" | "sell" | "repair" | "general";

const quoteTypes: { id: QuoteType; icon: typeof ShoppingCart; label: string; color: string; bg: string }[] = [
  { id: "buy",     icon: ShoppingCart, label: "Buy a Device",   color: "text-primary",          bg: "bg-primary/10 border-primary/30" },
  { id: "sell",    icon: DollarSign,   label: "Sell My Device", color: "text-success",          bg: "bg-success/10 border-success/30" },
  { id: "repair",  icon: Wrench,       label: "Repair Service", color: "text-purple-glow",      bg: "bg-purple-glow/10 border-purple-glow/30" },
  { id: "general", icon: Mail,         label: "General Query",  color: "text-muted-foreground", bg: "bg-surface border-border/60" },
];

const repairIssues = [
  "Screen replacement", "Battery replacement", "Charging port repair",
  "Water damage recovery", "Camera repair", "Speaker / microphone repair",
  "Software issue / restore", "Carrier unlock", "Laptop keyboard / trackpad",
  "Laptop screen replacement", "Other",
];

const deviceConditions = ["Like New", "Good", "Fair", "Poor", "Cracked screen", "Not turning on", "Water damaged"];
const storageOptions   = ["16GB", "32GB", "64GB", "128GB", "256GB", "512GB", "1TB", "Other"];

// Group products by category for the buy dropdown
const mobileProducts    = products.filter(p => p.category === "mobiles");
const tabletProducts    = products.filter(p => p.category === "tablets");
const laptopProducts    = products.filter(p => p.category === "laptops");
const accessoryProducts = products.filter(p => p.category === "accessories");

function buildWAMessage(type: QuoteType, form: Record<string, string>) {
  const typeLabel = quoteTypes.find((t) => t.id === type)?.label ?? "Inquiry";
  const lines = [
    `📋 *${typeLabel} — 3 Ray Mobiles*`,
    "",
    `👤 Name: ${form.name}`,
    `📞 Phone: ${form.phone}`,
    form.email     ? `📧 Email: ${form.email}`         : "",
    form.device    ? `📱 Device: ${form.device}`       : "",
    form.condition ? `✅ Condition: ${form.condition}` : "",
    form.storage   ? `💾 Storage: ${form.storage}`     : "",
    form.issue     ? `🛠 Issue: ${form.issue}`         : "",
    form.budget    ? `💰 Budget: ${form.budget}`       : "",
    form.message   ? `💬 Details: ${form.message}`     : "",
  ].filter(Boolean).join("\n");
  return encodeURIComponent(lines);
}

function buildEmailSubject(type: QuoteType, form: Record<string, string>) {
  const label = quoteTypes.find((t) => t.id === type)?.label ?? "Inquiry";
  return encodeURIComponent(`${label}${form.device ? ` — ${form.device}` : ""} | 3 Ray Mobiles`);
}

function buildEmailBody(type: QuoteType, form: Record<string, string>) {
  const label = quoteTypes.find((t) => t.id === type)?.label ?? "Inquiry";
  return encodeURIComponent([
    `${label} — 3 Ray Mobiles`,
    "",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email || "—"}`,
    `Device: ${form.device || "—"}`,
    `Condition: ${form.condition || "—"}`,
    `Storage: ${form.storage || "—"}`,
    `Issue: ${form.issue || "—"}`,
    `Budget: ${form.budget || "—"}`,
    `Details: ${form.message || "—"}`,
  ].join("\n"));
}

export default function ContactPage() {
  const [quoteType, setQuoteType] = useState<QuoteType>("buy");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    device: "", condition: "", storage: "",
    issue: "", budget: "", message: "",
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const sendWhatsApp = () => {
    if (!form.name || !form.phone) { toast.error("Please fill in your name and phone."); return; }
    window.open(`https://wa.me/${WHATSAPP}?text=${buildWAMessage(quoteType, form)}`, "_blank");
    setSubmitted(true);
  };

  const sendEmail = () => {
    if (!form.name || !form.email) { toast.error("Please fill in your name and email."); return; }
    window.open(`mailto:${EMAIL}?subject=${buildEmailSubject(quoteType, form)}&body=${buildEmailBody(quoteType, form)}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="mx-auto mb-6 inline-flex items-center justify-center h-20 w-20 rounded-full bg-success/15 border border-success/30">
            <CheckCircle2 className="h-10 w-10 text-success" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">Quote sent!</h1>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Your quote request has been sent to{" "}
            <a href={`mailto:${EMAIL}`} className="text-primary underline font-medium">{EMAIL}</a>
            {" "}and/or WhatsApp. We'll respond within 24 hours.
          </p>
          <div className="mt-4 rounded-xl border border-border/60 bg-surface/60 p-4 text-left text-sm text-muted-foreground max-w-sm mx-auto">
            <p className="font-semibold text-foreground mb-1">📬 Where your quote goes:</p>
            <p>• <strong>Email:</strong> info@3raymobile.com</p>
            <p>• <strong>WhatsApp:</strong> +1 416-669-3931</p>
            <p className="mt-1 text-xs">We respond within 24 hours, usually much faster.</p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", device: "", condition: "", storage: "", issue: "", budget: "", message: "" }); }}
              className="inline-flex items-center justify-center rounded-md border border-border/60 bg-background hover:bg-surface h-10 px-4 text-sm font-medium transition-colors"
            >
              Send another
            </button>
            <Link href="/products" className="inline-flex items-center justify-center rounded-md bg-gradient-primary border-0 hover:opacity-90 h-10 px-4 text-sm font-medium text-primary-foreground transition-opacity">
              Browse products
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact & Quote"
        title="How can we help?"
        description="Get a free quote for buying, selling, or repairing your device — or just say hello."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        {/* Quick contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          <a href="mailto:info@3raymobile.com" className="flex items-center gap-3 rounded-2xl border border-border/60 bg-surface p-4 card-hover">
            <div className="shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Email us</p>
              <p className="text-sm font-medium truncate">info@3raymobile.com</p>
            </div>
          </a>
          <a href="tel:+14166693931" className="flex items-center gap-3 rounded-2xl border border-border/60 bg-surface p-4 card-hover">
            <div className="shrink-0 h-10 w-10 rounded-xl bg-purple-glow/10 flex items-center justify-center">
              <Phone className="h-5 w-5 text-purple-glow" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Call us</p>
              <p className="text-sm font-medium">+1 416-669-3931</p>
            </div>
          </a>
          <a href="https://wa.me/14166693931" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-border/60 bg-surface p-4 card-hover">
            <div className="shrink-0 h-10 w-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">WhatsApp</p>
              <p className="text-sm font-medium">Chat with us</p>
            </div>
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">

          {/* Left — address + map */}
          <div className="space-y-4">
            <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-surface p-5">
              <div className="shrink-0 h-10 w-10 rounded-xl bg-success/10 flex items-center justify-center mt-0.5">
                <MapPin className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="font-semibold">Our Location</p>
                <p className="text-sm text-muted-foreground mt-1">
                  7025 Tomken Rd<br />Mississauga, ON L5T 2J8<br />Canada
                </p>
                <a href="https://maps.google.com/?q=7025+Tomken+Rd+Mississauga+ON" target="_blank" rel="noreferrer" className="inline-block mt-2 text-xs text-primary hover:underline">
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Where quotes are received — info box */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <p className="text-sm font-semibold text-foreground mb-2">📬 Where your quote is received</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <span><strong className="text-foreground">Email:</strong> info@3raymobile.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-[#25D366] shrink-0" />
                  <span><strong className="text-foreground">WhatsApp:</strong> +1 416-669-3931</span>
                </li>
              </ul>
              <p className="mt-2 text-xs text-muted-foreground">We respond within 24 hours — usually much faster.</p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border/60 bg-surface aspect-video">
              <iframe
                title="3 Ray Mobiles location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.123456789!2d-79.6441!3d43.6532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3b0000000001%3A0x1!2s7025+Tomken+Rd%2C+Mississauga%2C+ON+L5T+2J8!5e0!3m2!1sen!2sca!4v1234567890"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — quote form */}
          <div className="rounded-2xl border border-border/60 bg-surface/60 p-5 sm:p-6 md:p-8 space-y-5">
            <div>
              <h2 className="text-lg font-bold">Request a Free Quote</h2>
              <p className="text-sm text-muted-foreground mt-1">Select what you need and fill in the details. We'll respond within 24 hours.</p>
            </div>

            {/* Quote type selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {quoteTypes.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => { setQuoteType(t.id); set("device", ""); set("condition", ""); set("storage", ""); set("issue", ""); }}
                  className={`flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center transition-all ${
                    quoteType === t.id
                      ? `${t.bg} ring-2 ring-offset-1 ring-offset-background ${t.id === "buy" ? "ring-primary" : t.id === "sell" ? "ring-success" : t.id === "repair" ? "ring-purple-glow" : "ring-border"}`
                      : "border-border/60 bg-background/40 hover:bg-surface"
                  }`}
                >
                  <t.icon className={`h-5 w-5 ${quoteType === t.id ? t.color : "text-muted-foreground"}`} />
                  <span className={`text-xs font-medium leading-tight ${quoteType === t.id ? t.color : "text-muted-foreground"}`}>
                    {t.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="c-name" className="text-sm font-medium">Full name *</label>
                <input id="c-name" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Jane Doe"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="c-phone" className="text-sm font-medium">Phone *</label>
                <input id="c-phone" type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+1 416 669 3931"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="c-email" className="text-sm font-medium">Email</label>
              <input id="c-email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
            </div>

            {/* ── BUY: product dropdown grouped by category ── */}
            {quoteType === "buy" && (
              <>
                <div className="space-y-1.5">
                  <label htmlFor="c-device-buy" className="text-sm font-medium">Which device do you want to buy?</label>
                  <select id="c-device-buy" value={form.device} onChange={(e) => set("device", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="">— Select a product (optional) —</option>
                    <optgroup label="📱 Mobiles">
                      {mobileProducts.map(p => <option key={p.id} value={p.name}>{p.name} · {p.brand} · {p.condition}</option>)}
                    </optgroup>
                    <optgroup label="📟 Tablets">
                      {tabletProducts.map(p => <option key={p.id} value={p.name}>{p.name} · {p.brand} · {p.condition}</option>)}
                    </optgroup>
                    <optgroup label="💻 Laptops">
                      {laptopProducts.map(p => <option key={p.id} value={p.name}>{p.name} · {p.brand} · {p.condition}</option>)}
                    </optgroup>
                    <optgroup label="🎧 Accessories">
                      {accessoryProducts.map(p => <option key={p.id} value={p.name}>{p.name} · {p.brand}</option>)}
                    </optgroup>
                    <option value="Other / Not listed">Other / Not listed</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="c-budget" className="text-sm font-medium">Budget (optional)</label>
                  <input id="c-budget" value={form.budget} onChange={(e) => set("budget", e.target.value)} placeholder="e.g. $500 – $800 CAD"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                </div>
              </>
            )}

            {/* ── SELL: device + condition + storage ── */}
            {quoteType === "sell" && (
              <>
                <div className="space-y-1.5">
                  <label htmlFor="c-device-sell" className="text-sm font-medium">Device you want to sell *</label>
                  <input id="c-device-sell" value={form.device} onChange={(e) => set("device", e.target.value)}
                    placeholder="e.g. iPhone 13 Pro, Samsung S22, MacBook Air M1"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="c-condition" className="text-sm font-medium">Device condition</label>
                    <select id="c-condition" value={form.condition} onChange={(e) => set("condition", e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">— Select condition —</option>
                      {deviceConditions.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="c-storage" className="text-sm font-medium">Storage size</label>
                    <select id="c-storage" value={form.storage} onChange={(e) => set("storage", e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">— Select storage —</option>
                      {storageOptions.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              </>
            )}

            {/* ── REPAIR: device + issue ── */}
            {quoteType === "repair" && (
              <>
                <div className="space-y-1.5">
                  <label htmlFor="c-device-repair" className="text-sm font-medium">Device to repair *</label>
                  <input id="c-device-repair" value={form.device} onChange={(e) => set("device", e.target.value)}
                    placeholder='e.g. iPhone 14, Samsung S23, MacBook Pro 14"'
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="c-issue" className="text-sm font-medium">Issue / repair needed</label>
                  <select id="c-issue" value={form.issue} onChange={(e) => set("issue", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="">— Select an issue —</option>
                    {repairIssues.map((i) => <option key={i}>{i}</option>)}
                  </select>
                </div>
              </>
            )}

            {/* Additional details */}
            <div className="space-y-1.5">
              <label htmlFor="c-msg" className="text-sm font-medium">Additional details</label>
              <textarea
                id="c-msg"
                rows={3}
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder={
                  quoteType === "buy"    ? "Preferred colour, storage, new or used preference…" :
                  quoteType === "sell"   ? "Any accessories included? Original box? Unlocked?" :
                  quoteType === "repair" ? "Describe the problem in more detail, any urgency?" :
                  "How can we help you?"
                }
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
              />
            </div>

            {/* Send buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <button type="button" onClick={sendWhatsApp}
                className="inline-flex items-center justify-center gap-2 w-full rounded-md bg-[#25D366] hover:bg-[#1ebe5d] border-0 text-white font-semibold h-11 px-4 text-sm transition-colors">
                <MessageCircle className="h-5 w-5" /> Send via WhatsApp
              </button>
              <button type="button" onClick={sendEmail}
                className="inline-flex items-center justify-center gap-2 w-full rounded-md bg-gradient-primary border-0 hover:opacity-90 glow-blue h-11 px-4 text-sm font-semibold text-primary-foreground transition-opacity">
                <Mail className="h-5 w-5" /> Send via Email
              </button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Free quote — no obligation. Quotes received at <strong>info@3raymobile.com</strong> & WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
