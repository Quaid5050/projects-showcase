"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { FormField, inputClass } from "@/components/forms/FormField";
import { DURATION_OPTIONS, SERVICE_OPTIONS } from "@/lib/site";
import { cn } from "@/lib/cn";

const initial = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  description: "",
  address: "",
  duration: "",
};

export function BookingForm({ className }: { className?: string }) {
  const [form, setForm] = useState(initial);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.service) e.service = "Select a service type.";
    if (!form.date) e.date = "Choose a date.";
    if (!form.time) e.time = "Choose a time.";
    if (!form.description.trim())
      e.description = "Tell us about the job.";
    if (!form.address.trim()) e.address = "Please enter the service address.";
    if (!form.duration) e.duration = "Select an estimated duration.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSuccess(true);
    setForm(initial);
    setFiles([]);
  }

  if (success) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center",
          className
        )}
      >
        <p className="text-lg font-semibold text-emerald-900">Booking received</p>
        <p className="mt-2 text-sm text-emerald-800">
          Thank you. Our team will confirm your appointment shortly. This demo
          does not send data yet—your form is ready for CRM or booking API
          integration.
        </p>
        <CTAButton
          variant="outline"
          className="mt-6"
          onClick={() => setSuccess(false)}
        >
          Book another service
        </CTAButton>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("grid gap-5 sm:grid-cols-2", className)}
      noValidate
    >
      <FormField
        label="Customer name"
        htmlFor="bf-name"
        error={errors.name}
        required
      >
        <input
          id="bf-name"
          className={inputClass(!!errors.name)}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          autoComplete="name"
        />
      </FormField>
      <FormField
        label="Phone"
        htmlFor="bf-phone"
        error={errors.phone}
        required
      >
        <input
          id="bf-phone"
          type="tel"
          className={inputClass(!!errors.phone)}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          autoComplete="tel"
        />
      </FormField>
      <FormField
        label="Email"
        htmlFor="bf-email"
        error={errors.email}
        required
        className="sm:col-span-2"
      >
        <input
          id="bf-email"
          type="email"
          className={inputClass(!!errors.email)}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          autoComplete="email"
        />
      </FormField>
      <FormField
        label="Service type"
        htmlFor="bf-service"
        error={errors.service}
        required
      >
        <select
          id="bf-service"
          className={inputClass(!!errors.service)}
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
        >
          <option value="">Select…</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </FormField>
      <FormField
        label="Estimated duration"
        htmlFor="bf-duration"
        error={errors.duration}
        required
      >
        <select
          id="bf-duration"
          className={inputClass(!!errors.duration)}
          value={form.duration}
          onChange={(e) => setForm({ ...form, duration: e.target.value })}
        >
          <option value="">Select…</option>
          {DURATION_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label="Preferred date" htmlFor="bf-date" error={errors.date} required>
        <input
          id="bf-date"
          type="date"
          className={inputClass(!!errors.date)}
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
      </FormField>
      <FormField label="Preferred time" htmlFor="bf-time" error={errors.time} required>
        <input
          id="bf-time"
          type="time"
          className={inputClass(!!errors.time)}
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />
      </FormField>
      <FormField
        label="Service address"
        htmlFor="bf-address"
        error={errors.address}
        required
        className="sm:col-span-2"
      >
        <input
          id="bf-address"
          className={inputClass(!!errors.address)}
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          autoComplete="street-address"
        />
      </FormField>
      <FormField
        label="Job description"
        htmlFor="bf-desc"
        error={errors.description}
        required
        className="sm:col-span-2"
      >
        <textarea
          id="bf-desc"
          rows={4}
          className={cn(inputClass(!!errors.description), "resize-y min-h-[120px]")}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </FormField>
      <div className="sm:col-span-2">
        <FormField
          label="Upload project photos"
          htmlFor="bf-files"
          hint="Optional — helps us prepare tools and materials."
        >
          <input
            id="bf-files"
            type="file"
            accept="image/*"
            multiple
            className={cn(
              inputClass(),
              "cursor-pointer file:mr-4 file:rounded-lg file:border-0 file:bg-charcoal file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
            )}
            onChange={(e) =>
              setFiles(e.target.files ? Array.from(e.target.files) : [])
            }
          />
          {files.length > 0 ? (
            <ul className="mt-2 space-y-1 text-xs text-muted">
              {files.map((f) => (
                <li key={f.name}>{f.name}</li>
              ))}
            </ul>
          ) : null}
        </FormField>
      </div>
      <div className="sm:col-span-2">
        <CTAButton
          type="submit"
          disabled={loading}
          className="w-full justify-center sm:w-auto"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Book My Service"
          )}
        </CTAButton>
      </div>
    </form>
  );
}
