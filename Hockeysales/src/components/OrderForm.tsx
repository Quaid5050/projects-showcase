"use client";

import { useEffect, useState } from "react";

const inputClass =
  "w-full px-4 py-3 bg-[#f8f9fa] border border-[#c5c6cd] focus:border-[#006399] focus:ring-1 focus:ring-[#006399] transition-all outline-none rounded";

export default function OrderForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", product: "", quantity: "1", details: "" });

  // Prefill the product field when arriving from a "Order This" button.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");
    if (product) setForm((f) => ({ ...f, product }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", product: "", quantity: "1", details: "" });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to place order. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <span className="material-symbols-outlined text-[#006399] mb-4 block" style={{ fontSize: "48px", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        <h3 className="font-montserrat text-2xl font-bold text-black mb-2">Order Request Received!</h3>
        <p className="font-inter text-base text-[#44474d]">Thank you. We&apos;ll review your order and email you a confirmation shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="font-inter font-semibold text-sm text-black block" htmlFor="name">Full Name *</label>
          <input id="name" type="text" required value={form.name} onChange={handleChange} placeholder="Enter your name" className={inputClass} />
        </div>
        <div className="space-y-1">
          <label className="font-inter font-semibold text-sm text-black block" htmlFor="email">Email Address *</label>
          <input id="email" type="email" required value={form.email} onChange={handleChange} placeholder="email@example.com" className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="font-inter font-semibold text-sm text-black block" htmlFor="phone">Phone Number</label>
          <input id="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClass} />
        </div>
        <div className="space-y-1">
          <label className="font-inter font-semibold text-sm text-black block" htmlFor="quantity">Quantity</label>
          <input id="quantity" type="number" min="1" value={form.quantity} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div className="space-y-1">
        <label className="font-inter font-semibold text-sm text-black block" htmlFor="product">Product You Want *</label>
        <input id="product" type="text" required value={form.product} onChange={handleChange} placeholder="e.g. CCM FT9 Pro Stick, P28, 75 Flex, RH" className={inputClass} />
      </div>
      <div className="space-y-1">
        <label className="font-inter font-semibold text-sm text-black block" htmlFor="details">Additional Details</label>
        <textarea id="details" rows={5} value={form.details} onChange={handleChange} placeholder="Sizing, colour, curve, or any other requirements..." className={`${inputClass} resize-none`} />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full md:w-auto bg-black text-white px-10 py-4 font-inter font-semibold text-sm uppercase tracking-widest hover:bg-[#006399] active:scale-95 transition-all disabled:opacity-70 flex items-center justify-center gap-3 rounded"
      >
        {submitting ? "Submitting..." : "Place Order Request"}
        <span className="material-symbols-outlined text-xl">shopping_cart_checkout</span>
      </button>
      {error && (
        <div className="p-4 bg-red-50 text-red-600 font-inter font-semibold text-center rounded border border-red-200">{error}</div>
      )}
    </form>
  );
}
