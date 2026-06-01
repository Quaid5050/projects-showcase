"use client";
import { useState } from "react";
import { useCartStore } from "@/lib/store/cart-store";
import Link from "next/link";
import { toast } from "sonner";

type TipOption = "none" | "15" | "20" | "25" | "custom";
type PickupType = "ASAP" | "SCHEDULED";

export default function CheckoutPage() {
  const { items, getSubtotal } = useCartStore();
  const subtotal = getSubtotal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tipOption, setTipOption] = useState<TipOption>("none");
  const [customTip, setCustomTip] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [notes, setNotes] = useState("");
  const [pickupType, setPickupType] = useState<PickupType>("ASAP");
  const [pickupTime, setPickupTime] = useState("");
  const [loading, setLoading] = useState(false);

  const getTipAmount = () => {
    if (tipOption === "15") return Math.round(subtotal * 0.15 * 100) / 100;
    if (tipOption === "20") return Math.round(subtotal * 0.20 * 100) / 100;
    if (tipOption === "25") return Math.round(subtotal * 0.25 * 100) / 100;
    if (tipOption === "custom") return Math.min(parseFloat(customTip) || 0, 999);
    return 0;
  };

  const tip = getTipAmount();
  const tax = Math.round(subtotal * 0.13 * 100) / 100;
  const estimatedTotal = subtotal + tax + tip;

  const minPickupTime = new Date(Date.now() + 30 * 60 * 1000).toISOString().slice(0, 16);
  const maxPickupTime = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 16);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) { toast.error("Your cart is empty"); return; }
    if (!name.trim() || !email.trim() || !phone.trim()) { toast.error("Please fill in all required fields"); return; }
    if (pickupType === "SCHEDULED" && !pickupTime) { toast.error("Please select a pickup time"); return; }

    setLoading(true);
    try {
      const res = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map(i => ({
            menuItemId: i.menuItemId,
            name: i.name,
            quantity: i.quantity,
            price: i.price,
            selectedOptions: i.selectedOptions,
            notes: i.notes,
          })),
          customerName: name.trim(),
          customerEmail: email.trim(),
          customerPhone: phone.trim(),
          tip,
          promoCode: promoCode.trim() || undefined,
          notes: notes.trim() || undefined,
          pickupType,
          pickupTime: pickupType === "SCHEDULED" ? pickupTime : undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) { toast.error(data.error || "Failed to create checkout"); setLoading(false); return; }
      window.location.href = data.url;
    } catch {
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <p className="text-5xl mb-4">🛒</p>
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link href="/menu" className="bg-[#c8102e] text-white font-bold px-8 py-3 rounded-full">Browse Menu</Link>
      </div>
    );
  }

  const TIP_OPTIONS: { key: TipOption; label: string }[] = [
    { key: "none", label: "No tip" },
    { key: "15", label: `15%\n$${(subtotal * 0.15).toFixed(2)}` },
    { key: "20", label: `20%\n$${(subtotal * 0.20).toFixed(2)}` },
    { key: "25", label: `25%\n$${(subtotal * 0.25).toFixed(2)}` },
    { key: "custom", label: "Custom" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#c8102e] text-white py-4 px-4 shadow-md">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/cart" className="text-white hover:text-[#ffd700] font-medium text-sm sm:text-base">← Cart</Link>
          <h1 className="font-black text-lg sm:text-xl">Checkout</h1>
          <span />
        </div>
      </header>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto px-4 py-6 sm:py-8 space-y-5 sm:space-y-6">

        {/* Contact */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
          <h2 className="font-black text-base sm:text-lg mb-4 text-[#1a1a1a]">Your Details</h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              { label: "Full Name *", value: name, setter: setName, type: "text", placeholder: "John Smith" },
              { label: "Email *", value: email, setter: setEmail, type: "email", placeholder: "john@example.com" },
              { label: "Phone *", value: phone, setter: setPhone, type: "tel", placeholder: "604-555-0100" },
            ].map(f => (
              <div key={f.label}>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">{f.label}</label>
                <input
                  type={f.type}
                  value={f.value}
                  onChange={e => f.setter(e.target.value)}
                  required
                  placeholder={f.placeholder}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-[#c8102e]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pickup */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
          <h2 className="font-black text-base sm:text-lg mb-4 text-[#1a1a1a]">Pickup Time</h2>
          <div className="flex gap-3 mb-4">
            {(["ASAP", "SCHEDULED"] as PickupType[]).map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => setPickupType(opt)}
                className={`flex-1 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm border-2 transition-colors ${
                  pickupType === opt
                    ? "border-[#c8102e] bg-[#c8102e]/5 text-[#c8102e]"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                {opt === "ASAP" ? "⚡ ASAP (~20 min)" : "📅 Schedule"}
              </button>
            ))}
          </div>
          {pickupType === "SCHEDULED" && (
            <input
              type="datetime-local"
              value={pickupTime}
              onChange={e => setPickupTime(e.target.value)}
              min={minPickupTime}
              max={maxPickupTime}
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]"
            />
          )}
        </div>

        {/* Tip */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
          <h2 className="font-black text-base sm:text-lg mb-1 text-[#1a1a1a]">Add a Tip</h2>
          <p className="text-xs text-gray-400 mb-4">Percentages are based on your order subtotal (before tax).</p>
          <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-3">
            {TIP_OPTIONS.map(opt => (
              <button
                key={opt.key}
                type="button"
                onClick={() => setTipOption(opt.key)}
                className={`py-2 sm:py-2.5 rounded-xl text-xs font-semibold border-2 transition-colors whitespace-pre-line leading-tight ${
                  tipOption === opt.key
                    ? "border-[#c8102e] bg-[#c8102e] text-white"
                    : "border-gray-200 text-gray-600 hover:border-[#c8102e]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          {tipOption === "custom" && (
            <div className="flex items-center gap-2">
              <span className="text-gray-500 font-semibold">$</span>
              <input
                type="number"
                min="0"
                max="999"
                step="0.01"
                value={customTip}
                onChange={e => setCustomTip(e.target.value)}
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]"
                placeholder="Enter tip amount"
              />
            </div>
          )}
        </div>

        {/* Promo & Notes */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 space-y-3 sm:space-y-4">
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">Promo Code</label>
            <input
              value={promoCode}
              onChange={e => setPromoCode(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8102e] uppercase"
              placeholder="Enter promo code (optional)"
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">Order Notes</label>
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              rows={3}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8102e] resize-none"
              placeholder="Allergies, special requests..."
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
          <h2 className="font-black text-base sm:text-lg mb-4 text-[#1a1a1a]">Order Summary</h2>
          <div className="space-y-2 text-sm">
            {items.map(item => (
              <div key={item.id} className="flex justify-between text-gray-600">
                <span className="truncate mr-2">{item.quantity}× {item.name}</span>
                <span className="flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-gray-100 pt-2 mt-2 space-y-1">
              <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-gray-500"><span>Tax (13%)</span><span>${tax.toFixed(2)}</span></div>
              {tip > 0 && <div className="flex justify-between text-gray-500"><span>Tip</span><span>${tip.toFixed(2)}</span></div>}
            </div>
            <div className="border-t border-gray-200 pt-3 flex justify-between font-black text-base sm:text-lg">
              <span>Estimated Total</span>
              <span className="text-[#c8102e]">${estimatedTotal.toFixed(2)} CAD</span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#c8102e] hover:bg-red-700 disabled:opacity-60 text-white font-black text-base sm:text-lg py-4 rounded-full transition-colors shadow-lg"
        >
          {loading ? "Redirecting to payment..." : "Pay with Stripe →"}
        </button>
        <p className="text-center text-xs text-gray-400 pb-4">
          You will be redirected to Stripe&apos;s secure payment page. Pickup only — no delivery.
        </p>
      </form>
    </div>
  );
}
