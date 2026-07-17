"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  status: string;
  description: string;
  image: string;
}

const inputClass =
  "w-full px-4 py-3 bg-[#f8f9fa] border border-[#c5c6cd] focus:border-[#006399] focus:ring-1 focus:ring-[#006399] transition-all outline-none rounded";

export default function CheckoutClient() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", quantity: "1", details: "" });

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    if (!id) {
      setNotFound(true);
      setLoading(false);
      return;
    }
    fetch(`/api/products/${id}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setProduct(data.product))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          product: product.brand ? `${product.brand} ${product.name}` : product.name,
          quantity: form.quantity,
          details: form.details
            ? `${form.details}\n\n[Price shown: ${product.price || "N/A"}]`
            : `[Price shown: ${product.price || "N/A"}]`,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to place order. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <p className="font-inter text-center text-[#44474d] py-20">Loading checkout...</p>;
  }

  if (notFound || !product) {
    return (
      <div className="text-center py-20">
        <span className="material-symbols-outlined text-[#c5c6cd] mb-4 block" style={{ fontSize: "56px" }}>search_off</span>
        <h2 className="font-montserrat text-2xl font-bold text-black mb-2">Product not found</h2>
        <p className="font-inter text-[#44474d] mb-6">This product may no longer be available.</p>
        <Link href="/products" className="inline-block bg-black text-white px-8 py-3 rounded font-inter font-semibold text-sm hover:bg-[#006399] transition-colors">
          Back to Products
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-16 bg-white border border-[#c5c6cd] rounded-xl px-8">
        <span className="material-symbols-outlined text-[#006399] mb-4 block" style={{ fontSize: "56px", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        <h2 className="font-montserrat text-2xl font-bold text-black mb-2">Order Placed!</h2>
        <p className="font-inter text-base text-[#44474d] mb-2">
          Thank you for ordering <strong>{product.name}</strong>.
        </p>
        <p className="font-inter text-sm text-[#44474d] mb-6">We&apos;ll review it and email you a confirmation shortly.</p>
        <Link href="/products" className="inline-block bg-black text-white px-8 py-3 rounded font-inter font-semibold text-sm hover:bg-[#006399] transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const soldOut = product.status === "Sold Out";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Product summary */}
      <div className="bg-white border border-[#c5c6cd] rounded-xl overflow-hidden lg:sticky lg:top-24">
        <div className="relative aspect-[4/3] bg-[#f8f9fa]">
          {product.image ? (
            <Image src={product.image} alt={product.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#c5c6cd]">
              <span className="material-symbols-outlined" style={{ fontSize: "56px" }}>sports_hockey</span>
            </div>
          )}
          {product.category && (
            <span className="absolute top-4 left-4 bg-black/70 text-white font-inter text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
              {product.category}
            </span>
          )}
        </div>
        <div className="p-6">
          {product.brand && <p className="font-inter text-xs font-semibold text-[#006399] uppercase tracking-widest mb-1">{product.brand}</p>}
          <h2 className="font-montserrat text-2xl font-bold text-black mb-2">{product.name}</h2>
          {product.description && <p className="font-inter text-sm text-[#44474d] mb-4">{product.description}</p>}
          <div className="flex items-center justify-between border-t border-[#e7e8e9] pt-4">
            <span className="font-inter text-sm text-[#44474d]">Price</span>
            <span className="font-montserrat text-2xl font-bold text-black">{product.price || "Contact for Pricing"}</span>
          </div>
        </div>
      </div>

      {/* Order form */}
      <div className="bg-white border border-[#c5c6cd] rounded-xl p-6 lg:p-8">
        <h2 className="font-montserrat text-xl font-bold text-black mb-1">Your Details</h2>
        <p className="font-inter text-sm text-[#44474d] mb-6">No online payment — we confirm your order and pricing by email.</p>

        {soldOut ? (
          <div className="p-4 bg-[#e7e8e9] border border-[#c5c6cd] rounded text-center font-inter font-semibold text-[#75777e]">
            This product is currently sold out.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="font-inter font-semibold text-sm text-black block" htmlFor="name">Full Name *</label>
                <input id="name" type="text" required value={form.name} onChange={handleChange} placeholder="Enter your name" className={inputClass} />
              </div>
              <div className="space-y-1">
                <label className="font-inter font-semibold text-sm text-black block" htmlFor="quantity">Quantity</label>
                <input id="quantity" type="number" min="1" value={form.quantity} onChange={handleChange} className={inputClass} />
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-inter font-semibold text-sm text-black block" htmlFor="email">Email Address *</label>
              <input id="email" type="email" required value={form.email} onChange={handleChange} placeholder="email@example.com" className={inputClass} />
            </div>
            <div className="space-y-1">
              <label className="font-inter font-semibold text-sm text-black block" htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClass} />
            </div>
            <div className="space-y-1">
              <label className="font-inter font-semibold text-sm text-black block" htmlFor="details">Notes (size, curve, colour, etc.)</label>
              <textarea id="details" rows={4} value={form.details} onChange={handleChange} placeholder="Any specific requirements..." className={`${inputClass} resize-none`} />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-black text-white px-10 py-4 font-inter font-semibold text-sm uppercase tracking-widest hover:bg-[#006399] active:scale-95 transition-all disabled:opacity-70 flex items-center justify-center gap-3 rounded"
            >
              {submitting ? "Placing Order..." : "Confirm Order"}
              <span className="material-symbols-outlined text-xl">shopping_cart_checkout</span>
            </button>
            {error && (
              <div className="p-4 bg-red-50 text-red-600 font-inter font-semibold text-center rounded border border-red-200">{error}</div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
