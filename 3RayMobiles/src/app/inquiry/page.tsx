"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2, MessageCircle, Mail,
  ShoppingCart, DollarSign, Wrench,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { products } from "@/data/products";
import { toast } from "sonner";

const WHATSAPP = "14166693931";
const EMAIL    = "info@3raymobile.com";

type QuoteType = "buy" | "sell" | "repair";

const quoteTypes = [
  { id: "buy"    as QuoteType, icon: ShoppingCart, label: "Buy a Device",   color: "text-primary",     bg: "bg-primary/10",     border: "border-primary/30",     ring: "ring-primary" },
  { id: "sell"   as QuoteType, icon: DollarSign,   label: "Sell My Device", color: "text-success",     bg: "bg-success/10",     border: "border-success/30",     ring: "ring-success" },
  { id: "repair" as QuoteType, icon: Wrench,       label: "Repair Service", color: "text-purple-glow", bg: "bg-purple-glow/10", border: "border-purple-glow/30", ring: "ring-purple-glow" },
];

const repairIssues = [
  "Screen replacement", "Battery replacement", "Charging port repair",
  "Water damage recovery", "Camera repair", "Speaker / microphone repair",
  "Software issue / restore", "Carrier unlock",
  "Laptop keyboard / trackpad", "Laptop screen replacement", "Other",
];

const deviceConditions = ["Like New", "Good", "Fair", "Poor", "Cracked screen", "Not turning on", "Water damaged"];
const storageOptions   = ["16GB", "32GB", "64GB", "128GB", "256GB", "512GB", "1TB", "Other"];

const mobileProducts    = products.filter(p => p.category === "mobiles");
const tabletProducts    = products.filter(p => p.category === "tablets");
const laptopProducts    = products.filter(p => p.category === "laptops");
const accessoryProducts = products.filter(p => p.category === "accessories");

function buildWAMsg(type: QuoteType, form: Record<string, string>) {
  const label = quoteTypes.find(t => t.id === type)?.label ?? "Inquiry";
  const lines = [
    `📋 *${label} — 3 Ray Mobiles*`, "",
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

function buildEmailBody(type: QuoteType, form: Record<string, string>) {
  const label = quoteTypes.find(t => t.id === type)?.label ?? "Inquiry";
  return encodeURIComponent([
    `${label} — 3 Ray Mobiles`, "",
    `Name: ${form.name}`, `Phone: ${form.phone}`,
    `Email: ${form.email || "—"}`, `Device: ${form.device || "—"}`,
    `Condition: ${form.condition || "—"}`, `Storage: ${form.storage || "—"}`,
    `Issue: ${form.issue || "—"}`, `Budget: ${form.budget || "—"}`,
    `Details: ${form.message || "—"}`,
  ].join("\n"));
}

function buildEmailSubject(type: QuoteType, form: Record<string, string>) {
  const label = quoteTypes.find(t => t.id === type)?.label ?? "Inquiry";
  return encodeURIComponent(`${label}${form.device ? ` — ${form.device}` : ""} | 3 Ray Mobiles`);
}

function InquiryContent() {
  const searchParams = useSearchParams();
  const preProduct   = searchParams.get("product") ?? "";
  const preType      = (searchParams.get("type") as QuoteType) || "buy";

  const [type, setType]           = useState<QuoteType>(preType);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    device: preProduct, condition: "", storage: "",
    issue: "", budget: "", message: "",
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const sendWhatsApp = () => {
    if (!form.name || !form.phone) { toast.error("Please fill in your name and phone."); return; }
    window.open(`https://wa.me/${WHATSAPP}?text=${buildWAMsg(type, form)}`, "_blank");
    setSubmitted(true);
  };

  const sendEmail = () => {
    if (!form.name || !form.email) { toast.error("Please fill in your name and email."); return; }
    window.open(`mailto:${EMAIL}?subject=${buildEmailSubject(type, form)}&body=${buildEmailBody(type, form)}`, "_blank");
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ name: "", phone: "", email: "", device: "", condition: "", storage: "", issue: "", budget: "", message: "" });
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <div className="mx-auto mb-6 inline-flex items-center justify-center h-20 w-20 rounded-full bg-success/15 border border-success/30">
          <CheckCircle2 className="h-10 w-10 text-success" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold">Quote sent!</h1>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground">
          We'll respond within 24 hours at{" "}
          <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a>
          {" "}or{" "}
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="text-primary underline">WhatsApp</a>.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <button onClick={reset} className="inline-flex items-center justify-center rounded-md border border-border/60 bg-background hover:bg-surface h-10 px-4 text-sm font-medium transition-colors">
            Send another
          </button>
          <Link href="/products" className="inline-flex items-center justify-center rounded-md bg-gradient-primary border-0 hover:opacity-90 h-10 px-4 text-sm font-medium text-primary-foreground transition-opacity">
            Browse products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Get a Quote"
        title="What can we help with?"
        description="Buy a device, sell yours for cash, or book a repair — free quote, no obligation."
      />
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="space-y-5 rounded-2xl border border-border/60 bg-surface/60 p-5 sm:p-6 md:p-8">

          {/* Type selector */}
          <div>
            <p className="text-sm font-semibold mb-3">I want to…</p>
            <div className="grid grid-cols-3 gap-2">
              {quoteTypes.map(t => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => { setType(t.id); set("device", ""); set("condition", ""); set("storage", ""); set("issue", ""); }}
                  className={`flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center transition-all ${
                    type === t.id
                      ? `${t.bg} ${t.border} ring-2 ring-offset-1 ring-offset-background ${t.ring}`
                      : "border-border/60 bg-background/40 hover:bg-surface"
                  }`}
                >
                  <t.icon className={`h-5 w-5 ${type === t.id ? t.color : "text-muted-foreground"}`} />
                  <span className={`text-xs font-medium leading-tight ${type === t.id ? t.color : "text-muted-foreground"}`}>
                    {t.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="iq-name" className="text-sm font-medium">Full name *</label>
              <input id="iq-name" value={form.name} onChange={e => set("name", e.target.value)} placeholder="Jane Doe"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="iq-phone" className="text-sm font-medium">Phone *</label>
              <input id="iq-phone" type="tel" value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="+1 416 669 3931"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="iq-email" className="text-sm font-medium">Email</label>
            <input id="iq-email" type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="you@example.com"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
          </div>

          {/* BUY — product dropdown grouped */}
          {type === "buy" && (
            <>
              <div className="space-y-1.5">
                <label htmlFor="iq-device-buy" className="text-sm font-medium">Which device do you want?</label>
                <select id="iq-device-buy" value={form.device} onChange={e => set("device", e.target.value)}
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
                <label htmlFor="iq-budget" className="text-sm font-medium">Budget (optional)</label>
                <input id="iq-budget" value={form.budget} onChange={e => set("budget", e.target.value)} placeholder="e.g. $500 – $800 CAD"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </div>
            </>
          )}

          {/* SELL — device + condition + storage */}
          {type === "sell" && (
            <>
              <div className="space-y-1.5">
                <label htmlFor="iq-device-sell" className="text-sm font-medium">Device you want to sell *</label>
                <input id="iq-device-sell" value={form.device} onChange={e => set("device", e.target.value)}
                  placeholder='e.g. iPhone 13 Pro 256GB, Samsung S22, MacBook Air M1, iPad Pro 13"'
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="iq-condition" className="text-sm font-medium">Device condition</label>
                  <select id="iq-condition" value={form.condition} onChange={e => set("condition", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="">— Select condition —</option>
                    {deviceConditions.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="iq-storage" className="text-sm font-medium">Storage size</label>
                  <select id="iq-storage" value={form.storage} onChange={e => set("storage", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="">— Select storage —</option>
                    {storageOptions.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </>
          )}

          {/* REPAIR — device + issue */}
          {type === "repair" && (
            <>
              <div className="space-y-1.5">
                <label htmlFor="iq-device-repair" className="text-sm font-medium">Device to repair *</label>
                <input id="iq-device-repair" value={form.device} onChange={e => set("device", e.target.value)}
                  placeholder='e.g. iPhone 14, Samsung S23, MacBook Pro 14&quot;, iPad Pro 13&quot;'
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="iq-issue" className="text-sm font-medium">Issue / repair needed</label>
                <select id="iq-issue" value={form.issue} onChange={e => set("issue", e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <option value="">— Select an issue —</option>
                  {repairIssues.map(i => <option key={i}>{i}</option>)}
                </select>
              </div>
            </>
          )}

          {/* Additional details */}
          <div className="space-y-1.5">
            <label htmlFor="iq-msg" className="text-sm font-medium">Additional details</label>
            <textarea id="iq-msg" rows={3} value={form.message} onChange={e => set("message", e.target.value)}
              placeholder={
                type === "buy"    ? "Preferred colour, storage, new or used…" :
                type === "sell"   ? "Any accessories included? Original box? Unlocked?" :
                "Describe the problem in more detail…"
              }
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none" />
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
            Free quote — no obligation. Received at <strong>info@3raymobile.com</strong> & WhatsApp.
          </p>
        </div>
      </section>
    </>
  );
}

export default function InquiryPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-20 text-center text-muted-foreground">Loading…</div>}>
      <InquiryContent />
    </Suspense>
  );
}
