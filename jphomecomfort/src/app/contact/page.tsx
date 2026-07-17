"use client";
import { useState, FormEvent } from "react";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch { setStatus("error"); }
  };

  const info = [
    { icon: "M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.64 21 20.28 21 19.92 21C10.4 21 2.83 13.42 3.03 3.92C3.05 3.41 3.49 3 4 3H7C7.55 3 8 3.45 8 4C8 5.25 8.21 6.45 8.59 7.57L6.78 9.38C8.06 12.15 10.36 14.45 13.13 15.73L14.94 13.92C16.06 14.3 17.26 14.51 18.51 14.51C19.05 14.51 19.5 14.95 19.5 15.51V16.92Z", title: "Phone", val: "+1 647-948-5859", sub: "Call during business hours", href: "tel:+16479485859" },
    { icon: "M2 4h20v16H2z M2 7L12 13L22 7", title: "Email", val: "info@jphomecomfort.ca", sub: "Reply within 1 business hour", href: "mailto:info@jphomecomfort.ca" },
    { icon: "M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z", title: "Location", val: "Brampton, ON", sub: "Serving the entire GTA" },
    { icon: "M12 2a10 10 0 100 20 10 10 0 000-20z M12 6V12L16 14", title: "Business Hours", val: "Mon–Sat: 9AM–7PM", sub: "Closed Sundays" },
  ];

  return (
    <>
      <PageHeader title="Contact" highlight="Us" subtitle="Have questions or need a quote? We would love to hear from you." />
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {info.map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-xl shadow-black/5 border border-slate-100 text-center hover:shadow-2xl transition-shadow">
                <div className="w-12 h-12 mx-auto rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0099D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={c.icon}/></svg>
                </div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-1">{c.title}</div>
                {c.href ? <a href={c.href} className="font-bold text-brand-navy hover:text-brand-red transition-colors block">{c.val}</a> : <div className="font-bold text-brand-navy">{c.val}</div>}
                <div className="text-slate-400 text-sm mt-0.5">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">Send Us a <span className="text-brand-red">Message</span></h2>
            <p className="text-slate-500 text-lg">Our team will get back to you promptly during business hours.</p>
          </div>
          {status === "success" ? (
            <div className="bg-white rounded-2xl p-12 shadow-lg text-center border border-slate-100">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-100 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M8 12L11 15L16 9"/></svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-navy mb-3">Message Sent!</h3>
              <p className="text-slate-500 text-lg mb-6">Thank you! We will respond as soon as possible.</p>
              <button onClick={() => setStatus("idle")} className="btn-red">Send Another</button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-semibold text-brand-navy mb-2">Full Name *</label>
                    <input type="text" required className="input-field" placeholder="John Smith" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></div>
                  <div><label className="block text-sm font-semibold text-brand-navy mb-2">Phone</label>
                    <input type="tel" className="input-field" placeholder="(647) 000-0000" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} /></div>
                </div>
                <div><label className="block text-sm font-semibold text-brand-navy mb-2">Email *</label>
                  <input type="email" required className="input-field" placeholder="john@example.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></div>
                <div><label className="block text-sm font-semibold text-brand-navy mb-2">Subject *</label>
                  <input type="text" required className="input-field" placeholder="How can we help?" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} /></div>
                <div><label className="block text-sm font-semibold text-brand-navy mb-2">Message *</label>
                  <textarea rows={6} required className="input-field resize-none" placeholder="Tell us about your needs..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} /></div>
                {status === "error" && <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm font-medium">Something went wrong. Please try again or call us directly.</div>}
                <button type="submit" disabled={status==="loading"} className="btn-red w-full text-lg py-4 disabled:opacity-60">{status === "loading" ? "Sending..." : "Send Message"}</button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}