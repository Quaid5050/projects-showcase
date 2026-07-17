"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send. Please try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="font-inter font-semibold text-sm text-black block" htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#c5c6cd] focus:border-[#006399] focus:ring-1 focus:ring-[#006399] transition-all outline-none"
          />
        </div>
        <div className="space-y-1">
          <label className="font-inter font-semibold text-sm text-black block" htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="email@example.com"
            className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#c5c6cd] focus:border-[#006399] focus:ring-1 focus:ring-[#006399] transition-all outline-none"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="font-inter font-semibold text-sm text-black block" htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#c5c6cd] focus:border-[#006399] focus:ring-1 focus:ring-[#006399] transition-all outline-none"
        />
      </div>
      <div className="space-y-1">
        <label className="font-inter font-semibold text-sm text-black block" htmlFor="message">Your Message</label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you today?"
          className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#c5c6cd] focus:border-[#006399] focus:ring-1 focus:ring-[#006399] transition-all outline-none resize-none"
        />
      </div>
      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full md:w-auto bg-black text-white px-10 py-4 font-inter font-semibold text-sm uppercase tracking-widest hover:bg-[#006399] active:scale-95 transition-all disabled:opacity-70 flex items-center justify-center gap-3"
        >
          {submitting ? "Sending..." : "Send Message"}
          <span className="material-symbols-outlined text-xl">send</span>
        </button>
      </div>
      {submitted && (
        <div className="p-4 bg-[#cde5ff] text-[#001d32] font-inter font-semibold text-center rounded">
          ✓ Message sent successfully! We will be in touch soon.
        </div>
      )}
      {error && (
        <div className="p-4 bg-red-50 text-red-600 font-inter font-semibold text-center rounded border border-red-200">
          {error}
        </div>
      )}
    </form>
  );
}