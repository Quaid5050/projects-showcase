"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const PRIORITY_OPTS = ["Urgent (ASAP)", "High (1 to 2 weeks)", "Medium (3 to 4 weeks)", "Low (flexible)"];
const PKG_OPTIONS = ["Starter ($79)", "Standard ($149)", "Advanced ($399)", "Premium ($499)", "Not sure yet"];
const LOGO_OPTS = ["Yes", "No", "Needs updating"];
const BRAND_COLOR_OPTS = ["Yes", "No"];
const DOMAIN_OPTS = ["Yes", "No"];
const HOSTING_OPTS = ["Yes", "No"];
const STYLES = ["Modern & minimalist", "Bold & graphic", "Corporate & professional", "Warm & approachable", "Luxury & high-end", "Playful & creative", "Dark & sleek"];
const PAGES = ["Home", "About Us", "Services", "Contact", "Gallery / Portfolio", "Testimonials", "FAQ", "Pricing", "Blog / News", "Products / Shop", "Booking", "Our Team"];
const FEATURES = ["Contact form", "Google Maps", "Social media feed", "Gallery management", "Admin portal", "Blog CMS", "Online booking", "Customer portal", "Payment integration", "Email newsletter", "CRM integration", "eCommerce / store", "Multi-language"];

const field = "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-brand-mint/60";
const labelCls = "mb-1.5 block text-sm font-medium text-white/80";
const darkOpt = { background: "#0f0a1a", color: "#e9e6f2" };

function Divider({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-mint/80">
      <span className="h-px flex-1 bg-white/10" />{children}<span className="h-px flex-1 bg-white/10" />
    </div>
  );
}

function Pills({ options, selected, onToggle }: { options: string[]; selected: string[]; onToggle: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = selected.includes(o);
        return (
          <button key={o} type="button" onClick={() => onToggle(o)}
            className={`rounded-full border px-3.5 py-2 text-sm font-medium transition-all ${on ? "border-brand-mint bg-brand-mint/15 text-brand-mint" : "border-white/12 text-white/65 hover:border-white/30"}`}>
            {o}
          </button>
        );
      })}
    </div>
  );
}

function Select({ value, onChange, placeholder, options }: { value: string; onChange: (v: string) => void; placeholder: string; options: string[] }) {
  return (
    <select className={field} value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="" style={darkOpt}>{placeholder}</option>
      {options.map((o) => <option key={o} value={o} style={darkOpt}>{o}</option>)}
    </select>
  );
}

export default function OnboardForm() {
  const [f, setF] = useState({
    // Contact & Project
    priority: "", launch: "", business: "", name: "", email: "", phone: "", address: "",
    existingLogin: "", pkg: "",
    // About & Content
    about: "", headline: "", contactInfo: "", pages: [] as string[],
    // Brand & Design
    logo: "", hasBrandColors: "", brandColorsDetail: "", style: "", inspo: "",
    // Technical
    domain: "", hosting: "", pricingDetail: "",
    features: [] as string[], tools: "", bizEmail: "", notes: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [err, setErr] = useState("");
  const [taskUrl, setTaskUrl] = useState("");

  const set = (k: string, v: string) => { setF((p) => ({ ...p, [k]: v })); if (status === "error") setStatus("idle"); };
  const toggle = (k: "pages" | "features", v: string) =>
    setF((p) => ({ ...p, [k]: p[k].includes(v) ? p[k].filter((x) => x !== v) : [...p[k], v] }));

  const submit = async () => {
    if (!f.business || !f.name || !f.email || !f.phone) {
      setStatus("error"); setErr("Please fill in business name, contact person, email and phone."); return;
    }
    setStatus("sending"); setErr("");
    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) { setTaskUrl(data.url || ""); setStatus("sent"); }
      else { setStatus("error"); setErr(data.error || "Something went wrong."); }
    } catch { setStatus("error"); setErr("Network error."); }
  };

  if (status === "sent") {
    return (
      <div className="mx-auto mt-10 max-w-3xl rounded-3xl glass-strong p-10 text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-mint/15 text-brand-mint shadow-glow-mint"><CheckCircle2 size={34} /></span>
        <h3 className="mt-5 font-display text-2xl font-bold text-white">Submitted successfully!</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/60">Thanks {f.name.split(" ")[0] || "there"}, we&apos;ll reach out within 24–48 hours.</p>
        {taskUrl && <a href={taskUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full neon-border px-6 py-3 text-sm font-bold text-white transition-all hover:shadow-glow-purple">View in ClickUp</a>}
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-3xl glass-strong p-6 sm:p-8">

      {/* ── Contact & Project ── */}
      <Divider>Contact &amp; Project Info</Divider>
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label className={labelCls}>What is the priority of this project?</label><Select value={f.priority} onChange={(v) => set("priority", v)} placeholder="Select Priority" options={PRIORITY_OPTS} /></div>
        <div><label className={labelCls}>Expected timeline for completion</label><input type="date" className={field} style={{ colorScheme: "dark" }} value={f.launch} onChange={(e) => set("launch", e.target.value)} /></div>
        <div><label className={labelCls}>Business Name <span className="text-brand-mint">*</span></label><input className={field} value={f.business} onChange={(e) => set("business", e.target.value)} placeholder="ABC Consulting" /></div>
        <div><label className={labelCls}>Main Contact Person <span className="text-brand-mint">*</span></label><input className={field} value={f.name} onChange={(e) => set("name", e.target.value)} placeholder="First and last name" /></div>
        <div><label className={labelCls}>Email Address <span className="text-brand-mint">*</span></label><input type="email" className={field} value={f.email} onChange={(e) => set("email", e.target.value)} placeholder="you@business.com" /></div>
        <div><label className={labelCls}>Phone Number <span className="text-brand-mint">*</span></label><input type="tel" className={field} value={f.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+1 (___) ___-____" /></div>
      </div>
      <div className="mt-4"><label className={labelCls}>Business Address</label><input className={field} value={f.address} onChange={(e) => set("address", e.target.value)} placeholder="Street, City, Country" /></div>
      <div className="mt-4"><label className={labelCls}>Existing website login (if any)</label><input className={field} value={f.existingLogin} onChange={(e) => set("existingLogin", e.target.value)} placeholder="WordPress/Wix admin URL, or 'none'" /></div>
      <div className="mt-4"><label className={labelCls}>Any special offers or packages?</label><Select value={f.pkg} onChange={(v) => set("pkg", v)} placeholder="Select package" options={PKG_OPTIONS} /></div>

      {/* ── Brand & Design ── */}
      <Divider>Brand &amp; Design</Divider>
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label className={labelCls}>Do you have a logo?</label><Select value={f.logo} onChange={(v) => set("logo", v)} placeholder="Select" options={LOGO_OPTS} /></div>
        <div><label className={labelCls}>Do you have brand colours?</label><Select value={f.hasBrandColors} onChange={(v) => set("hasBrandColors", v)} placeholder="Select" options={BRAND_COLOR_OPTS} /></div>
      </div>
      {f.hasBrandColors === "Yes" && (
        <div className="mt-4"><label className={labelCls}>If yes, please provide the colours</label><input className={field} value={f.brandColorsDetail} onChange={(e) => set("brandColorsDetail", e.target.value)} placeholder="e.g. Purple #8C00FF, Lime #C8F31D" /></div>
      )}
      <div className="mt-4"><label className={labelCls}>Design style preference</label><Select value={f.style} onChange={(v) => set("style", v)} placeholder="Select style" options={STYLES} /></div>
      <div className="mt-4"><label className={labelCls}>Inspiration websites</label><textarea className={`${field} min-h-[80px] resize-y`} value={f.inspo} onChange={(e) => set("inspo", e.target.value)} placeholder="2–3 links and what you like about them" /></div>

      {/* ── Website Content ── */}
      <Divider>Website Content</Divider>
      <label className={labelCls}>Which pages do you need?</label>
      <Pills options={PAGES} selected={f.pages} onToggle={(v) => toggle("pages", v)} />
      <div className="mt-4"><label className={labelCls}>Home Page - What should the headline / tagline be?</label><input className={field} value={f.headline} onChange={(e) => set("headline", e.target.value)} placeholder="The first thing visitors read" /></div>
      <div className="mt-4"><label className={labelCls}>About Us - Tell us about your business</label><textarea className={`${field} min-h-[90px] resize-y`} value={f.about} onChange={(e) => set("about", e.target.value)} placeholder="What you do, mission, story, team size..." /></div>
      <div className="mt-4"><label className={labelCls}>Contact Page - What contact info should be displayed?</label><textarea className={`${field} min-h-[70px] resize-y`} value={f.contactInfo} onChange={(e) => set("contactInfo", e.target.value)} placeholder="Phone, email, hours, address to show on site..." /></div>
      <div className="mt-4"><label className={labelCls}>Do you have pricing details?</label><textarea className={`${field} min-h-[70px] resize-y`} value={f.pricingDetail} onChange={(e) => set("pricingDetail", e.target.value)} placeholder="List services/products with prices, or 'contact for pricing'" /></div>

      {/* ── Technical ── */}
      <Divider>Technical &amp; Access</Divider>
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label className={labelCls}>Do you have domain access?</label><Select value={f.domain} onChange={(v) => set("domain", v)} placeholder="Select" options={DOMAIN_OPTS} /></div>
        <div><label className={labelCls}>Do you have hosting?</label><Select value={f.hosting} onChange={(v) => set("hosting", v)} placeholder="Select" options={HOSTING_OPTS} /></div>
      </div>
      <div className="mt-4"><label className={labelCls}>Business email access needed?</label><input className={field} value={f.bizEmail} onChange={(e) => set("bizEmail", e.target.value)} placeholder="e.g. info@yourbusiness.com or 'not needed'" /></div>
      <div className="mt-4"><label className={labelCls}>Any special features needed?</label><Pills options={FEATURES} selected={f.features} onToggle={(v) => toggle("features", v)} /></div>
      <div className="mt-4"><label className={labelCls}>Any third-party tools to integrate?</label><input className={field} value={f.tools} onChange={(e) => set("tools", e.target.value)} placeholder="GoHighLevel, Calendly, Stripe, Mailchimp..." /></div>
      <div className="mt-4"><label className={labelCls}>Anything else we should know?</label><textarea className={`${field} min-h-[70px] resize-y`} value={f.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Deadlines, special requests, concerns..." /></div>

      {status === "error" && <p className="mt-5 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-2.5 text-sm text-red-300">{err}</p>}

      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <span className="text-xs text-white/40">🔒 Secure &amp; private. Used only for your project.</span>
           <button onClick={submit} disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-mint px-7 py-3.5 text-sm font-bold text-ink shadow-glow-mint transition-all hover:-translate-y-0.5 hover:brightness-110 disabled:opacity-60 sm:w-auto">
          <Send size={16} /> {status === "sending" ? "Submitting..." : "Submit Onboarding"}
        </button>
      </div>
    </div>
  );
}