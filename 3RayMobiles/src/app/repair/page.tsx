"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Wrench, Smartphone, Laptop, Battery, Wifi, Monitor,
  CheckCircle2, MessageCircle, Mail, ArrowRight, Clock, Shield, Star,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "14166693931";
const EMAIL_ADDRESS   = "info@3raymobile.com";

const services = [
  { icon: Monitor,    title: "Screen Replacement",    desc: "Cracked or broken display? We replace screens on all iPhone, Samsung, Google Pixel, and laptop models.", color: "text-primary",     bg: "bg-primary/10" },
  { icon: Battery,    title: "Battery Replacement",   desc: "Battery draining fast or not charging? We fit genuine-grade batteries to restore full battery life.",    color: "text-success",     bg: "bg-success/10" },
  { icon: Wifi,       title: "Charging Port Repair",  desc: "Loose or broken charging port? We repair or replace USB-C, Lightning, and MagSafe connectors.",          color: "text-purple-glow", bg: "bg-purple-glow/10" },
  { icon: Smartphone, title: "Water Damage Recovery", desc: "Dropped your device in water? Bring it in quickly — our technicians clean and restore water-damaged devices.", color: "text-primary",  bg: "bg-primary/10" },
  { icon: Laptop,     title: "Laptop Repairs",        desc: "Keyboard, trackpad, hinge, screen, or motherboard issues — we service MacBooks and Windows laptops.",    color: "text-success",     bg: "bg-success/10" },
  { icon: Wrench,     title: "Software & Unlocking",  desc: "Factory reset, iOS/Android restore, carrier unlock, and data recovery services available.",              color: "text-purple-glow", bg: "bg-purple-glow/10" },
];

const whyUs = [
  { icon: Clock,  title: "Fast turnaround",  text: "Most repairs completed same day or within 24 hours." },
  { icon: Shield, title: "Quality parts",    text: "We use high-quality replacement parts with a 90-day warranty on all repairs." },
  { icon: Star,   title: "Experienced techs", text: "Our technicians have repaired thousands of devices across all major brands." },
];

export default function RepairPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", device: "", issue: "", message: "" });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const buildWAMsg = () => {
    const text = [
      "🔧 *Repair Request — 3 Ray Mobiles*",
      "",
      `👤 Name: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      `📧 Email: ${form.email}`,
      `📱 Device: ${form.device || "Not specified"}`,
      `🛠 Issue: ${form.issue || "Not specified"}`,
      form.message ? `💬 Details: ${form.message}` : "",
    ].filter(Boolean).join("\n");
    return encodeURIComponent(text);
  };

  const buildEmailBody = () =>
    encodeURIComponent(
      `Repair Request — 3 Ray Mobiles\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nDevice: ${form.device || "—"}\nIssue: ${form.issue || "—"}\nDetails: ${form.message || "—"}`
    );

  const sendWhatsApp = () => {
    if (!form.name || !form.phone) { toast.error("Please fill in your name and phone."); return; }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWAMsg()}`, "_blank");
    setSubmitted(true);
  };

  const sendEmail = () => {
    if (!form.name || !form.email) { toast.error("Please fill in your name and email."); return; }
    const subject = encodeURIComponent(`Repair Request: ${form.device || "Device"} — 3 Ray Mobiles`);
    window.open(`mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${buildEmailBody()}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <div className="mx-auto mb-6 inline-flex items-center justify-center h-20 w-20 rounded-full bg-success/15 border border-success/30">
          <CheckCircle2 className="h-10 w-10 text-success" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold">Repair request sent!</h1>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground">
          We'll get back to you with a quote as soon as possible. You can also reach us directly at{" "}
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="text-primary underline">WhatsApp</a>
          {" "}or{" "}
          <a href={`mailto:${EMAIL_ADDRESS}`} className="text-primary underline">{EMAIL_ADDRESS}</a>.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", device: "", issue: "", message: "" }); }}
            className="inline-flex items-center justify-center rounded-md border border-border/60 bg-background hover:bg-surface h-10 px-4 text-sm font-medium transition-colors"
          >
            Submit another
          </button>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-md bg-gradient-primary border-0 hover:opacity-90 h-10 px-4 text-sm font-medium text-primary-foreground transition-opacity"
          >
            Browse products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Repair Services"
        title="We fix what's broken"
        description="Professional phone and laptop repairs in Mississauga. Get a free quote — no fix, no fee."
      />

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">What we repair</p>
          <h2 className="text-xl sm:text-2xl font-bold">Common repair services</h2>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border/60 bg-surface p-5 sm:p-6 card-hover">
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${s.bg} border border-border/40 mb-4`}>
                <s.icon className={`h-5 w-5 ${s.color}`} />
              </div>
              <h3 className="text-sm sm:text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
          {whyUs.map((w) => (
            <div key={w.title} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-surface/60 p-5">
              <div className="shrink-0 h-10 w-10 rounded-xl bg-gradient-primary/15 border border-primary/20 flex items-center justify-center">
                <w.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{w.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote form */}
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Get a quote</p>
          <h2 className="text-xl sm:text-2xl font-bold">Tell us about your device</h2>
          <p className="mt-2 text-sm text-muted-foreground">Fill in the form and send via WhatsApp or Email. We'll respond with a quote within a few hours.</p>
        </div>

        <div className="space-y-4 rounded-2xl border border-border/60 bg-surface/60 p-5 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="r-name" className="text-sm font-medium">Full name *</label>
              <input id="r-name" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Jane Doe"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
            </div>
            <div className="space-y-2">
              <label htmlFor="r-phone" className="text-sm font-medium">Phone *</label>
              <input id="r-phone" type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+1 416 669 3931"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="r-email" className="text-sm font-medium">Email</label>
            <input id="r-email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
          </div>

          <div className="space-y-2">
            <label htmlFor="r-device" className="text-sm font-medium">Device model *</label>
            <input id="r-device" value={form.device} onChange={(e) => set("device", e.target.value)} placeholder="e.g. iPhone 13, Samsung S23, MacBook Pro 14"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
          </div>

          <div className="space-y-2">
            <label htmlFor="r-issue" className="text-sm font-medium">Issue / repair needed *</label>
            <select
              id="r-issue"
              value={form.issue}
              onChange={(e) => set("issue", e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">— Select an issue —</option>
              <option>Screen replacement</option>
              <option>Battery replacement</option>
              <option>Charging port repair</option>
              <option>Water damage recovery</option>
              <option>Camera repair</option>
              <option>Speaker / microphone repair</option>
              <option>Software issue / restore</option>
              <option>Carrier unlock</option>
              <option>Laptop keyboard / trackpad</option>
              <option>Laptop screen replacement</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="r-msg" className="text-sm font-medium">Additional details</label>
            <textarea id="r-msg" rows={3} value={form.message} onChange={(e) => set("message", e.target.value)}
              placeholder="Describe the problem in more detail, or mention any urgency…"
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <button type="button" onClick={sendWhatsApp}
              className="inline-flex items-center justify-center gap-2 w-full rounded-md bg-[#25D366] hover:bg-[#1ebe5d] border-0 text-white font-semibold h-11 px-4 text-sm transition-colors">
              <MessageCircle className="h-5 w-5" />
              Send via WhatsApp
            </button>
            <button type="button" onClick={sendEmail}
              className="inline-flex items-center justify-center gap-2 w-full rounded-md bg-gradient-primary border-0 hover:opacity-90 glow-blue h-11 px-4 text-sm font-semibold text-primary-foreground transition-opacity">
              <Mail className="h-5 w-5" />
              Send via Email
            </button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Free quote — no obligation. No fix, no fee policy on most repairs.
          </p>
        </div>
      </section>

      {/* CTA to products */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-surface p-8 sm:p-10 text-center">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="relative space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold">Device beyond repair?</h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Browse our curated selection of new and certified pre-owned phones and laptops.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-primary border-0 hover:opacity-90 glow-blue w-full sm:w-auto h-11 px-6 text-sm font-semibold text-primary-foreground transition-opacity"
            >
              Shop devices <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
