import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle, AlertCircle, ChevronRight, ChevronLeft, Loader2 } from "lucide-react";
import { siteConfig, bookingPage } from "../../data/siteContent";

interface FormData {
  parentName: string;
  email: string;
  phone: string;
  contactMethod: string;
  ageGroup: string;
  startDate: string;
  careType: string;
  preferredDays: string;
  scheduleNeeds: string;
  visitDate: string;
  visitTime: string;
  message: string;
  consent: boolean;
  honeypot: string;
}

const initialForm: FormData = {
  parentName: "",
  email: "",
  phone: "",
  contactMethod: "phone",
  ageGroup: "",
  startDate: "",
  careType: "",
  preferredDays: "",
  scheduleNeeds: "",
  visitDate: "",
  visitTime: "",
  message: "",
  consent: false,
  honeypot: "",
};

type Errors = Partial<Record<keyof FormData, string>>;

const STEPS = ["Your Info", "Childcare Needs", "Visit Preferences"];

export const BookingForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "no-endpoint">("idle");

  const apiUrl = (import.meta.env.VITE_API_URL as string | undefined) || "";

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => { const e = { ...prev }; delete e[field]; return e; });
    }
  };

  const validateStep = (s: number): Errors => {
    const e: Errors = {};
    if (s === 0) {
      if (!form.parentName.trim()) e.parentName = "Your name is required.";
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        e.email = "A valid email address is required.";
      if (!form.phone.trim()) e.phone = "A phone number is required.";
    }
    if (s === 1) {
      if (!form.ageGroup) e.ageGroup = "Please select a child age group.";
      if (!form.careType) e.careType = "Please select care type.";
    }
    if (s === 2) {
      if (!form.consent) e.consent = "Please read and accept the consent statement.";
    }
    return e;
  };

  const goNext = () => {
    const e = validateStep(step);
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => { setStep((s) => s - 1); setErrors({}); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const stepErrors = validateStep(2);
    if (Object.keys(stepErrors).length > 0) { setErrors(stepErrors); return; }
    if (form.honeypot) return; // Honeypot triggered

    if (!apiUrl) {
      setStatus("no-endpoint");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(`${apiUrl}/api/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, honeypot: undefined }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        className="bg-white rounded-4xl p-10 shadow-card text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 bg-peach rounded-full flex items-center justify-center">
            <CheckCircle size={32} className="text-navy" aria-hidden="true" />
          </div>
        </div>
        <h2 className="font-display font-semibold text-navy text-2xl mb-3">Request Received!</h2>
        <p className="font-body text-text-muted text-lg mb-2">
          Thank you for reaching out. We'll be in touch soon to discuss availability and arrange your visit.
        </p>
        <p className="font-body text-text-muted text-sm italic">{bookingPage.sidebarNote}</p>
      </motion.div>
    );
  }

  if (status === "no-endpoint") {
    return (
      <div className="bg-peach-light border-2 border-peach rounded-3xl p-8 text-center">
        <Star size={32} fill="#183b65" className="text-navy mx-auto mb-4" aria-hidden="true" />
        <p className="font-display font-semibold text-navy text-xl mb-3">
          {bookingPage.noEndpointMessage}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
          <a
            href={siteConfig.contact.phoneLink}
            className="inline-flex items-center justify-center gap-2 bg-navy text-white font-body font-700 px-6 py-3 rounded-full hover:bg-navy-light transition-all focus-visible:ring-2 focus-visible:ring-navy"
          >
            Call {siteConfig.contact.phone}
          </a>
          <a
            href={siteConfig.contact.emailLink}
            className="inline-flex items-center justify-center gap-2 bg-white text-navy border-2 border-navy font-body font-700 px-6 py-3 rounded-full hover:bg-cream-warm transition-all focus-visible:ring-2 focus-visible:ring-navy"
          >
            Send Email
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Book a visit request form">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="website"
        value={form.honeypot}
        onChange={(e) => update("honeypot", e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Step indicator */}
      <div className="mb-8" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={3} aria-label={`Step ${step + 1} of 3: ${STEPS[step]}`}>
        <div className="flex items-center gap-0 mb-3">
          {STEPS.map((label, i) => (
            <React.Fragment key={label}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-body font-700 text-sm transition-all duration-300 ${
                    i < step
                      ? "bg-navy text-white"
                      : i === step
                      ? "bg-peach text-navy ring-2 ring-navy ring-offset-2"
                      : "bg-cream-warm text-text-muted"
                  }`}
                >
                  {i < step ? <CheckCircle size={16} /> : i + 1}
                </div>
                <span className={`font-body text-xs mt-1 hidden sm:block ${i === step ? "text-navy font-700" : "text-text-muted"}`}>
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-0.5 mx-1 transition-all duration-300 ${i < step ? "bg-navy" : "bg-cream-warm"}`} />
              )}
            </React.Fragment>
          ))}
        </div>
        <p className="font-body font-700 text-navy text-sm sm:hidden">
          Step {step + 1} of {STEPS.length}: {STEPS[step]}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            <h2 className="font-display font-semibold text-navy text-2xl mb-1">Parent or Guardian</h2>
            <p className="font-body text-text-muted text-sm mb-5">Tell us a little about yourself.</p>

            <Field label="Your name" required error={errors.parentName}>
              <input
                type="text"
                value={form.parentName}
                onChange={(e) => update("parentName", e.target.value)}
                placeholder="First and last name"
                className={inputClass(!!errors.parentName)}
                autoComplete="name"
                aria-required="true"
                aria-invalid={!!errors.parentName}
                aria-describedby={errors.parentName ? "parentName-error" : undefined}
              />
            </Field>

            <Field label="Email address" required error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
                className={inputClass(!!errors.email)}
                autoComplete="email"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
            </Field>

            <Field label="Phone number" required error={errors.phone}>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="(413) 000-0000"
                className={inputClass(!!errors.phone)}
                autoComplete="tel"
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
            </Field>

            <Field label="Preferred contact method">
              <div className="flex flex-wrap gap-3" role="group" aria-label="Preferred contact method">
                {["Phone", "Text", "Email"].map((opt) => (
                  <label key={opt} className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-2 cursor-pointer font-body font-700 text-sm transition-all ${
                    form.contactMethod === opt.toLowerCase()
                      ? "border-navy bg-peach text-navy"
                      : "border-navy/15 text-text-muted hover:border-navy/40"
                  }`}>
                    <input
                      type="radio"
                      name="contactMethod"
                      value={opt.toLowerCase()}
                      checked={form.contactMethod === opt.toLowerCase()}
                      onChange={(e) => update("contactMethod", e.target.value)}
                      className="sr-only"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </Field>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            <h2 className="font-display font-semibold text-navy text-2xl mb-1">Childcare Needs</h2>
            <p className="font-body text-text-muted text-sm mb-5">Help us understand what you're looking for.</p>

            <Field label="Child's age group" required error={errors.ageGroup}>
              <select
                value={form.ageGroup}
                onChange={(e) => update("ageGroup", e.target.value)}
                className={inputClass(!!errors.ageGroup)}
                aria-required="true"
                aria-invalid={!!errors.ageGroup}
              >
                <option value="">Select age group</option>
                <option value="2-12mo">2–12 months</option>
                <option value="1-2yr">1–2 years</option>
                <option value="2-3yr">2–3 years</option>
                <option value="3-4yr">3–4 years</option>
                <option value="4-5yr">4–5 years</option>
              </select>
            </Field>

            <Field label="Desired start date">
              <input
                type="text"
                value={form.startDate}
                onChange={(e) => update("startDate", e.target.value)}
                placeholder="e.g. September 2025 or as soon as possible"
                className={inputClass(false)}
              />
            </Field>

            <Field label="Care needed" required error={errors.careType}>
              <div className="flex flex-wrap gap-3" role="group" aria-label="Type of care needed">
                {["Full-time", "Part-time", "Not sure yet"].map((opt) => (
                  <label key={opt} className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-2 cursor-pointer font-body font-700 text-sm transition-all ${
                    form.careType === opt
                      ? "border-navy bg-peach text-navy"
                      : "border-navy/15 text-text-muted hover:border-navy/40"
                  }`}>
                    <input
                      type="radio"
                      name="careType"
                      value={opt}
                      checked={form.careType === opt}
                      onChange={(e) => update("careType", e.target.value)}
                      className="sr-only"
                    />
                    {opt}
                  </label>
                ))}
              </div>
              {errors.careType && <p className="text-red-600 text-sm mt-1" role="alert">{errors.careType}</p>}
            </Field>

            <Field label="Preferred days">
              <input
                type="text"
                value={form.preferredDays}
                onChange={(e) => update("preferredDays", e.target.value)}
                placeholder="e.g. Monday to Friday, or Mon/Wed/Fri"
                className={inputClass(false)}
              />
            </Field>

            <Field label="General schedule needs">
              <textarea
                value={form.scheduleNeeds}
                onChange={(e) => update("scheduleNeeds", e.target.value)}
                placeholder="Anything else we should know about your schedule?"
                rows={3}
                className={inputClass(false) + " resize-none"}
              />
            </Field>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            <h2 className="font-display font-semibold text-navy text-2xl mb-1">Visit Preferences</h2>
            <p className="font-body text-text-muted text-sm mb-5">When would you like to visit?</p>

            <Field label="Preferred visit date">
              <input
                type="text"
                value={form.visitDate}
                onChange={(e) => update("visitDate", e.target.value)}
                placeholder="e.g. Any weekday morning, or a specific date"
                className={inputClass(false)}
              />
            </Field>

            <Field label="Preferred time of day">
              <div className="flex flex-wrap gap-3" role="group" aria-label="Preferred time of day for visit">
                {["Morning", "Afternoon", "Flexible"].map((opt) => (
                  <label key={opt} className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-2 cursor-pointer font-body font-700 text-sm transition-all ${
                    form.visitTime === opt
                      ? "border-navy bg-peach text-navy"
                      : "border-navy/15 text-text-muted hover:border-navy/40"
                  }`}>
                    <input
                      type="radio"
                      name="visitTime"
                      value={opt}
                      checked={form.visitTime === opt}
                      onChange={(e) => update("visitTime", e.target.value)}
                      className="sr-only"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Message or questions">
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Tell us anything else you'd like us to know..."
                rows={4}
                className={inputClass(false) + " resize-none"}
              />
            </Field>

            <Field label="" error={errors.consent}>
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className={`relative w-5 h-5 mt-0.5 flex-shrink-0 rounded border-2 transition-all ${
                  form.consent ? "bg-navy border-navy" : errors.consent ? "border-red-500" : "border-navy/30 group-hover:border-navy/60"
                }`}>
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                    className="sr-only"
                    aria-required="true"
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? "consent-error" : "consent-text"}
                  />
                  {form.consent && (
                    <svg className="absolute inset-0 w-full h-full p-0.5 text-white" fill="none" viewBox="0 0 16 16">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span
                  id="consent-text"
                  className="font-body text-text-muted text-sm leading-relaxed"
                >
                  {bookingPage.consentText}
                </span>
              </label>
            </Field>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error alert */}
      {status === "error" && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl p-4 mt-4" role="alert" aria-live="assertive">
          <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
          <p className="font-body text-red-700 text-sm">Something went wrong. Please try again or contact us directly.</p>
        </div>
      )}

      {/* Navigation buttons */}
      <div className={`flex gap-3 mt-8 ${step > 0 ? "justify-between" : "justify-end"}`}>
        {step > 0 && (
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 bg-cream-warm text-navy font-body font-700 px-6 py-3 rounded-full hover:bg-peach transition-all focus-visible:ring-2 focus-visible:ring-navy"
          >
            <ChevronLeft size={18} />
            Back
          </button>
        )}
        {step < 2 ? (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex items-center gap-2 bg-navy text-white font-body font-700 px-7 py-3.5 rounded-full hover:bg-navy-light hover:-translate-y-0.5 transition-all shadow-soft hover:shadow-hover focus-visible:ring-2 focus-visible:ring-navy"
          >
            Next
            <ChevronRight size={18} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center gap-2 bg-navy text-white font-body font-700 px-8 py-3.5 rounded-full hover:bg-navy-light hover:-translate-y-0.5 transition-all shadow-soft hover:shadow-hover disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-navy"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Star size={14} fill="white" aria-hidden="true" />
                Send Visit Request
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
};

// Helper components
const Field: React.FC<{
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}> = ({ label, required, error, children }) => (
  <div className="space-y-1.5">
    {label && (
      <label className="block font-body font-700 text-navy text-sm">
        {label}
        {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
      </label>
    )}
    {children}
    {error && (
      <p className="font-body text-red-600 text-sm" role="alert" id={`${label.replace(/\s/g, "")}-error`}>
        {error}
      </p>
    )}
  </div>
);

const inputClass = (hasError: boolean) =>
  `w-full font-body text-text-dark bg-cream-warm border-2 rounded-2xl px-4 py-3 text-base transition-all focus:outline-none focus:border-navy focus:bg-white placeholder:text-text-muted/60 ${
    hasError ? "border-red-400 bg-red-50" : "border-navy/15 hover:border-navy/30"
  }`;
