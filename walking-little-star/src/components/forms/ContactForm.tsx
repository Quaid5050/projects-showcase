import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig, bookingPage } from "../../data/siteContent";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  contactMethod: string;
  consent: boolean;
  honeypot: string;
}

type Errors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  contactMethod: "email",
  consent: false,
  honeypot: "",
};

const inputClass = (hasError: boolean) =>
  `w-full font-body text-text-dark bg-cream-warm border-2 rounded-2xl px-4 py-3 text-base transition-all focus:outline-none focus:border-navy focus:bg-white placeholder:text-text-muted/60 ${
    hasError ? "border-red-400 bg-red-50" : "border-navy/15 hover:border-navy/30"
  }`;

const Field: React.FC<{ label: string; required?: boolean; error?: string; children: React.ReactNode }> = ({
  label, required, error, children,
}) => (
  <div className="space-y-1.5">
    <label className="block font-body font-700 text-navy text-sm">
      {label}
      {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
    </label>
    {children}
    {error && <p className="font-body text-red-600 text-sm" role="alert">{error}</p>}
  </div>
);

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "no-endpoint">("idle");

  const apiUrl = (import.meta.env.VITE_API_URL as string | undefined) || "";

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const e = { ...prev }; delete e[field]; return e; });
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Your name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "A valid email address is required.";
    if (!form.message.trim()) e.message = "A message is required.";
    if (!form.consent) e.consent = "Please accept the consent statement.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    if (form.honeypot) return;

    if (!apiUrl) { setStatus("no-endpoint"); return; }

    setStatus("loading");
    try {
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, honeypot: undefined }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        className="text-center py-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-peach rounded-full flex items-center justify-center">
            <CheckCircle size={28} className="text-navy" aria-hidden="true" />
          </div>
        </div>
        <h3 className="font-display font-semibold text-navy text-xl mb-2">Message Sent!</h3>
        <p className="font-body text-text-muted">We'll be in touch with you soon.</p>
      </motion.div>
    );
  }

  if (status === "no-endpoint") {
    return (
      <div className="bg-peach-light border-2 border-peach rounded-3xl p-6 text-center">
        <p className="font-display font-semibold text-navy text-lg mb-3">{bookingPage.noEndpointMessage}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={siteConfig.contact.phoneLink} className="inline-flex items-center justify-center gap-2 bg-navy text-white font-body font-700 px-6 py-3 rounded-full hover:bg-navy-light transition-all">
            Call Us
          </a>
          <a href={siteConfig.contact.emailLink} className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy font-body font-700 px-6 py-3 rounded-full hover:bg-cream-warm transition-all">
            Send Email
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <input type="text" name="website" value={form.honeypot} onChange={(e) => update("honeypot", e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Your name" required error={errors.name}>
            <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="First and last name" className={inputClass(!!errors.name)} autoComplete="name" aria-required="true" aria-invalid={!!errors.name} />
          </Field>
          <Field label="Email address" required error={errors.email}>
            <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" className={inputClass(!!errors.email)} autoComplete="email" aria-required="true" aria-invalid={!!errors.email} />
          </Field>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Phone number">
            <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(413) 000-0000" className={inputClass(false)} autoComplete="tel" />
          </Field>
          <Field label="Subject">
            <input type="text" value={form.subject} onChange={(e) => update("subject", e.target.value)} placeholder="How can we help?" className={inputClass(false)} />
          </Field>
        </div>

        <Field label="Message" required error={errors.message}>
          <textarea value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us about your childcare needs, questions, or how we can help..." rows={5} className={inputClass(!!errors.message) + " resize-none"} aria-required="true" aria-invalid={!!errors.message} />
        </Field>

        <Field label="Preferred contact method">
          <div className="flex flex-wrap gap-3" role="group" aria-label="Preferred contact method">
            {["Email", "Phone", "Text"].map((opt) => (
              <label key={opt} className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-2 cursor-pointer font-body font-700 text-sm transition-all ${form.contactMethod === opt.toLowerCase() ? "border-navy bg-peach text-navy" : "border-navy/15 text-text-muted hover:border-navy/40"}`}>
                <input type="radio" name="contactMethod" value={opt.toLowerCase()} checked={form.contactMethod === opt.toLowerCase()} onChange={(e) => update("contactMethod", e.target.value)} className="sr-only" />
                {opt}
              </label>
            ))}
          </div>
        </Field>

        <Field label="" error={errors.consent}>
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className={`relative w-5 h-5 mt-0.5 flex-shrink-0 rounded border-2 transition-all ${form.consent ? "bg-navy border-navy" : errors.consent ? "border-red-500" : "border-navy/30 group-hover:border-navy/60"}`}>
              <input type="checkbox" checked={form.consent} onChange={(e) => update("consent", e.target.checked)} className="sr-only" aria-required="true" aria-invalid={!!errors.consent} />
              {form.consent && (
                <svg className="absolute inset-0 w-full h-full p-0.5 text-white" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className="font-body text-text-muted text-sm leading-relaxed">
              I agree to be contacted by Walking Little Star Daycare regarding my inquiry.
            </span>
          </label>
        </Field>

        {status === "error" && (
          <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl p-4" role="alert" aria-live="assertive">
            <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
            <p className="font-body text-red-700 text-sm">Something went wrong. Please try again or contact us directly.</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full inline-flex items-center justify-center gap-2 bg-navy text-white font-body font-700 px-8 py-4 rounded-full hover:bg-navy-light hover:-translate-y-0.5 transition-all shadow-soft hover:shadow-hover disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-navy text-base"
        >
          {status === "loading" ? (
            <><Loader2 size={18} className="animate-spin" /> Sending...</>
          ) : (
            <><Star size={14} fill="white" aria-hidden="true" /> Send Message</>
          )}
        </button>
      </div>
    </form>
  );
};
