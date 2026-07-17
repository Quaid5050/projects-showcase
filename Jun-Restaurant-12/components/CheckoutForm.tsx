"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const TAX_RATE = 0.05;
const TIP_PRESETS = [
  { label: "No tip", value: 0 },
  { label: "15%", value: 0.15 },
  { label: "20%", value: 0.20 },
  { label: "25%", value: 0.25 },
];

export default function CheckoutForm() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    specialInstructions: "",
  });

  // Tip state
  const [selectedTip, setSelectedTip] = useState<number | "custom">(0);
  const [customTipInput, setCustomTipInput] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Calculations
  const tax = subtotal * TAX_RATE;

  const tipAmount =
    selectedTip === "custom"
      ? parseFloat(customTipInput) > 0
        ? parseFloat(customTipInput)
        : 0
      : subtotal * selectedTip;

  const total = subtotal + tax + tipAmount;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleTipSelect(value: number | "custom") {
    setSelectedTip(value);
    if (value !== "custom") setCustomTipInput("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (items.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          items: items.map((i) => ({
            menuItemId: i.id,
            name: i.name,
            quantity: i.quantity,
            price: i.price,
          })),
          subtotal: parseFloat(subtotal.toFixed(2)),
          tax: parseFloat(tax.toFixed(2)),
          tip: parseFloat(tipAmount.toFixed(2)),
          total: parseFloat(total.toFixed(2)),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Customer Info */}
      <div>
        <label className="block text-sm font-semibold text-[#111111] mb-1">
          Full Name <span className="text-[#d60000]">*</span>
        </label>
        <input
          type="text"
          name="customerName"
          value={form.customerName}
          onChange={handleChange}
          required
          placeholder="Your full name"
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#d60000] focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#111111] mb-1">
          Phone Number <span className="text-[#d60000]">*</span>
        </label>
        <input
          type="tel"
          name="customerPhone"
          value={form.customerPhone}
          onChange={handleChange}
          required
          placeholder="+1 604-XXX-XXXX"
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#d60000] focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#111111] mb-1">
          Email Address <span className="text-[#d60000]">*</span>
        </label>
        <input
          type="email"
          name="customerEmail"
          value={form.customerEmail}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#d60000] focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#111111] mb-1">
          Special Instructions{" "}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          name="specialInstructions"
          value={form.specialInstructions}
          onChange={handleChange}
          rows={3}
          placeholder="Allergies, preferences, etc."
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#d60000] focus:border-transparent resize-none"
        />
      </div>

      {/* Pickup badge */}
      <div className="bg-[#f5f5f5] rounded-lg px-4 py-3 flex items-center gap-2 text-sm text-[#333333]">
        <svg
          className="h-4 w-4 text-[#d60000]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.4 5M7 13l-1.4 5m0 0h9.8"
          />
        </svg>
        <span className="font-medium">Pickup Order</span>
        <span className="text-gray-500">— 441 E Columbia St</span>
      </div>

      {/* ── Tip Section ── */}
      <div className="border border-gray-200 rounded-xl p-4 bg-white">
        <h3 className="font-semibold text-sm text-[#111111] mb-1">Tip</h3>
        <p className="text-xs text-gray-500 mb-3">
          Percentages are based on your order subtotal (before tax).
        </p>

        {/* Preset buttons */}
        <div className="flex flex-wrap gap-2">
          {TIP_PRESETS.map((preset) => {
            const isActive = selectedTip === preset.value;
            const dollarAmt = subtotal * preset.value;
            return (
              <button
                key={preset.label}
                type="button"
                onClick={() => handleTipSelect(preset.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  isActive
                    ? "bg-[#f5c842] text-[#111111] border-[#f5c842]"
                    : "bg-white text-[#111111] border-gray-300 hover:border-[#111111]"
                }`}
              >
                {preset.value === 0
                  ? "No tip"
                  : `${Math.round(preset.value * 100)}% ($${dollarAmt.toFixed(2)})`}
              </button>
            );
          })}

          {/* Custom button */}
          <button
            type="button"
            onClick={() => handleTipSelect("custom")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
              selectedTip === "custom"
                ? "bg-[#f5c842] text-[#111111] border-[#f5c842]"
                : "bg-white text-[#111111] border-gray-300 hover:border-[#111111]"
            }`}
          >
            Custom
          </button>
        </div>

        {/* Custom tip input */}
        {selectedTip === "custom" && (
          <div className="mt-3 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium">
              $
            </span>
            <input
              type="number"
              min="0"
              step="0.01"
              value={customTipInput}
              onChange={(e) => setCustomTipInput(e.target.value)}
              placeholder="0.00"
              className="w-full border border-gray-200 rounded-lg pl-7 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#d60000] focus:border-transparent"
            />
          </div>
        )}

        {/* Tip amount confirmation */}
        {tipAmount > 0 && (
          <p className="mt-2 text-xs text-gray-500">
            Tip added:{" "}
            <span className="font-semibold text-[#111111]">
              ${tipAmount.toFixed(2)}
            </span>
          </p>
        )}
      </div>

      {/* Order Summary */}
      <div className="border border-gray-100 rounded-xl p-4 bg-[#f5f5f5]">
        <h3 className="font-semibold text-sm text-[#111111] mb-3">
          Order Summary
        </h3>
        <div className="space-y-1.5 text-sm">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-gray-600">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 mt-3 pt-3 space-y-1.5 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>GST (5%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          {tipAmount > 0 && (
            <div className="flex justify-between text-gray-600">
              <span>Tip</span>
              <span>${tipAmount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between font-bold text-[#111111] text-base border-t border-gray-200 pt-2 mt-1">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading || items.length === 0}
        className="w-full bg-[#d60000] hover:bg-[#b00000] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-lg transition-colors text-sm"
      >
        {loading
          ? "Redirecting to payment..."
          : `Pay Now — $${total.toFixed(2)}`}
      </button>

      <p className="text-center text-xs text-gray-400">
        Secured by Stripe. Your card details are never stored on our servers.
      </p>
    </form>
  );
}
