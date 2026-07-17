"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, Clock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/services";

const SERVICE_OPTIONS = ["General inquiry", ...SERVICES.map((s) => s.title), "Other"];
const fieldCls = "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-brand-mint/60";

const TRUST = [
  { icon: Clock, text: "Reply within 24–48 hours" },
  { icon: Phone, text: "Free strategy consultation" },
  { icon: Mail, text: "No spam, ever" },
];

export default function FinalCTA() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "General inquiry", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const set = (k: string, v: string) => { setForm((p) => ({ ...p, [k]: v })); if (status === "error") setStatus("idle"); };

  const submit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("error"); setErrorMsg("Please fill in your name, email and message."); return;
    }
    setStatus("sending"); setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) setStatus("sent");
      else { setStatus("error"); setErrorMsg(data.error || "Something went wrong. Please try again."); }
    } catch {
      setStatus("error"); setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="section">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl neon-border px-6 py-12 sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-purple/30 blur-[100px]" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-brand-mint/20 blur-[100px]" />

            <div className="relative grid items-start gap-10 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-brand-mint">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-mint shadow-glow-mint" /> Get In Touch
                </span>
                <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Ready To Scale Your Business <span className="text-gradient">With Us?</span>
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60">
                  Tell us what you need and our team will reach out. Pick a service below and send us a message, it lands straight in our inbox.
                </p>
                <ul className="mt-8 space-y-3">
                  {TRUST.map((t) => (
                    <li key={t.text} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-mint/10 text-brand-mint"><t.icon size={16} /></span>
                      {t.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl glass-strong p-6 sm:p-7">
                {status === "sent" ? (
                  <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-mint/15 text-brand-mint shadow-glow-mint">
                      <CheckCircle2 size={34} />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-bold text-white">Message sent!</h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
                      Thanks {form.name.split(" ")[0] || "there"}, we&apos;ve received your message and will get back to you within 24–48 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-white/80">Full name <span className="text-brand-mint">*</span></label>
                        <input className={fieldCls} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-white/80">Phone</label>
                        <input type="tel" className={fieldCls} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+1 (___) ___-____" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="mb-1.5 block text-sm font-medium text-white/80">Email <span className="text-brand-mint">*</span></label>
                      <input type="email" className={fieldCls} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@business.com" />
                    </div>
                    <div className="mt-4">
                      <label className="mb-1.5 block text-sm font-medium text-white/80">Service you&apos;re interested in</label>
                      <select className={fieldCls} value={form.service} onChange={(e) => set("service", e.target.value)}>
                        {SERVICE_OPTIONS.map((opt) => <option key={opt} value={opt} style={{ background: "#0f0a1a", color: "#e9e6f2" }}>{opt}</option>)}
                      </select>
                    </div>
                    <div className="mt-4">
                      <label className="mb-1.5 block text-sm font-medium text-white/80">Message <span className="text-brand-mint">*</span></label>
                      <textarea className={`${fieldCls} min-h-[110px] resize-y leading-relaxed`} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Tell us a little about your project or goals..." />
                    </div>
                    {status === "error" && <p className="mt-4 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-2.5 text-sm text-red-300">{errorMsg}</p>}
                    {/* solid button — no gradient */}
                    <button onClick={submit} disabled={status === "sending"}
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-mint px-7 py-3.5 text-sm font-bold text-ink shadow-glow-mint transition-all hover:-translate-y-0.5 hover:brightness-110 disabled:opacity-60">
                      <Send size={16} /> {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}