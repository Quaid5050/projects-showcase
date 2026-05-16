"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { FormField, inputClass } from "@/components/forms/FormField";
import { cn } from "@/lib/cn";

export function ContactForm({ className }: { className?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Enter a valid email.";
    if (!message.trim()) e.message = "Please enter a message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  if (success) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-sm text-emerald-900",
          className
        )}
      >
        Message sent. We will reply soon. (Demo — connect to your inbox or CRM
        when ready.)
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-4", className)} noValidate>
      <FormField label="Name" htmlFor="cf-name" error={errors.name} required>
        <input
          id="cf-name"
          className={inputClass(!!errors.name)}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormField>
      <FormField label="Email" htmlFor="cf-email" error={errors.email} required>
        <input
          id="cf-email"
          type="email"
          className={inputClass(!!errors.email)}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>
      <FormField label="Message" htmlFor="cf-msg" error={errors.message} required>
        <textarea
          id="cf-msg"
          rows={4}
          className={cn(inputClass(!!errors.message), "min-h-[120px] resize-y")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </FormField>
      <CTAButton type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </CTAButton>
    </form>
  );
}
