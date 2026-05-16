"use client";

import { useState } from "react";
import { Loader2, Upload } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { FormField, inputClass } from "@/components/forms/FormField";
import { SERVICE_OPTIONS } from "@/lib/site";
import { cn } from "@/lib/cn";

const initial = {
  name: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  description: "",
  date: "",
  time: "",
};

export function UploadProjectForm({ className }: { className?: string }) {
  const [form, setForm] = useState(initial);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.service) e.service = "Select a service type.";
    if (!form.location.trim()) e.location = "Enter the project location.";
    if (!form.description.trim())
      e.description = "Describe your project.";
    if (!form.date) e.date = "Choose a preferred date.";
    if (!form.time) e.time = "Choose a preferred time.";
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
        <p className="text-lg font-semibold text-emerald-900">
          Estimate request sent
        </p>
        <p className="mt-2 text-sm text-emerald-800">
          Thanks—we will review your details and photos and follow up shortly.
        </p>
        <CTAButton
          variant="outline"
          className="mt-6"
          onClick={() => setSuccess(false)}
        >
          Submit another project
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
      <FormField label="Full name" htmlFor="up-name" error={errors.name} required>
        <input
          id="up-name"
          className={inputClass(!!errors.name)}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          autoComplete="name"
        />
      </FormField>
      <FormField label="Phone number" htmlFor="up-phone" error={errors.phone} required>
        <input
          id="up-phone"
          type="tel"
          className={inputClass(!!errors.phone)}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          autoComplete="tel"
        />
      </FormField>
      <FormField
        label="Email"
        htmlFor="up-email"
        error={errors.email}
        required
        className="sm:col-span-2"
      >
        <input
          id="up-email"
          type="email"
          className={inputClass(!!errors.email)}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          autoComplete="email"
        />
      </FormField>
      <FormField
        label="Service type"
        htmlFor="up-service"
        error={errors.service}
        required
      >
        <select
          id="up-service"
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
        label="Project location"
        htmlFor="up-loc"
        error={errors.location}
        required
      >
        <input
          id="up-loc"
          className={inputClass(!!errors.location)}
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
      </FormField>
      <FormField
        label="Job description"
        htmlFor="up-desc"
        error={errors.description}
        required
        className="sm:col-span-2"
      >
        <textarea
          id="up-desc"
          rows={4}
          className={cn(inputClass(!!errors.description), "min-h-[120px] resize-y")}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </FormField>
      <div className="sm:col-span-2">
        <FormField
          label="Upload project photos"
          htmlFor="up-files"
          hint="Photos help us quote accurately for drywall repair, painting services, TV mounting, and more."
        >
          <div className="relative">
            <input
              id="up-files"
              type="file"
              accept="image/*"
              multiple
              className={cn(
                inputClass(),
                "cursor-pointer file:mr-4 file:rounded-lg file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
              )}
              onChange={(e) =>
                setFiles(e.target.files ? Array.from(e.target.files) : [])
              }
            />
            <Upload
              className="pointer-events-none absolute right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-muted sm:block"
              aria-hidden
            />
          </div>
          {files.length > 0 ? (
            <ul className="mt-2 space-y-1 text-xs text-muted">
              {files.map((f) => (
                <li key={f.name}>{f.name}</li>
              ))}
            </ul>
          ) : null}
        </FormField>
      </div>
      <FormField label="Preferred date" htmlFor="up-date" error={errors.date} required>
        <input
          id="up-date"
          type="date"
          className={inputClass(!!errors.date)}
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
      </FormField>
      <FormField label="Preferred time" htmlFor="up-time" error={errors.time} required>
        <input
          id="up-time"
          type="time"
          className={inputClass(!!errors.time)}
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />
      </FormField>
      <div className="sm:col-span-2">
        <CTAButton
          type="submit"
          disabled={loading}
          className="w-full justify-center px-10 sm:w-auto"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Request My Free Estimate"
          )}
        </CTAButton>
      </div>
    </form>
  );
}
