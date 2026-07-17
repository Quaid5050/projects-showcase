'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/components/CartProvider';
import { PlusIcon, MinusIcon, TrashIcon, CartIcon } from '@/components/Icons';
import toast from 'react-hot-toast';

const TIP_OPTIONS = [
  { label: 'No tip', value: 0 },
  { label: '15%', value: 0.15 },
  { label: '18%', value: 0.18 },
  { label: '20%', value: 0.20 },
  { label: '25%', value: 0.25 },
  { label: 'Custom', value: -1 },
];

export default function CartPage() {
  const {
    items,
    customerDetails,
    subtotal,
    tax,
    total,
    updateQuantity,
    removeItem,
    setCustomerDetails,
  } = useCart();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // ── Tip state ──
  const [selectedTip, setSelectedTip] = useState<number>(0);         // % as decimal (0, 0.15, etc.) or -1 for custom
  const [customTipInput, setCustomTipInput] = useState('');           // raw string for custom input

  const tipAmount =
    selectedTip === -1
      ? Math.max(0, parseFloat(customTipInput) || 0)
      : Math.round(subtotal * selectedTip * 100) / 100;

  const grandTotal = Math.round((total + tipAmount) * 100) / 100;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!customerDetails.name.trim()) newErrors.name = 'Name is required';
    if (!customerDetails.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerDetails.email))
      newErrors.email = 'Invalid email address';
    if (!customerDetails.phone.trim()) newErrors.phone = 'Phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = async () => {
    if (items.length === 0) { toast.error('Your cart is empty'); return; }
    if (!validate()) { toast.error('Please fill in all required fields'); return; }

    setLoading(true);
    try {
      const payload = {
        items: items.map((item) => ({
          menuItemId: item.menuItemId,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        customerName: customerDetails.name,
        customerEmail: customerDetails.email,
        customerPhone: customerDetails.phone,
        notes: customerDetails.notes,
        tip: tipAmount,
      };

      const res = await fetch('/api/orders/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL returned from server');
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to proceed to payment';
      console.error('Checkout error:', msg);
      toast.error(msg);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f5f0]">
      <Header />

      {/* Page Header */}
      <div className="bg-[#1a0a00] pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Your Cart</h1>
          <p className="text-gray-400 mt-1 text-sm">
            {items.length === 0
              ? 'Your cart is empty'
              : `${items.reduce((s, i) => s + i.quantity, 0)} items`}
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CartIcon className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add some delicious dishes from our menu</p>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-[#8B0000] hover:bg-[#a00000] text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">

            {/* ── LEFT column ── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Cart Items */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-900">Order Items</h2>
                </div>
                <div className="divide-y divide-gray-50">
                  {items.map((item) => (
                    <div key={item.menuItemId} className="p-4 flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#8B0000]/10 to-[#1a5c1a]/10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {item.image ? (
                          <Image src={item.image} alt={item.name} width={56} height={56} className="object-cover" />
                        ) : (
                          <span className="text-2xl">🍜</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm truncate">{item.name}</p>
                        <p className="text-[#8B0000] font-semibold text-sm">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(item.menuItemId, item.quantity - 1)} className="w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors" aria-label="Decrease">
                          <MinusIcon className="w-3 h-3 text-gray-600" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold text-gray-900">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.menuItemId, item.quantity + 1)} className="w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors" aria-label="Increase">
                          <PlusIcon className="w-3 h-3 text-gray-600" />
                        </button>
                      </div>
                      <p className="text-sm font-bold text-gray-900 w-16 text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button onClick={() => { removeItem(item.menuItemId); toast.success(`${item.name} removed`); }} className="text-gray-400 hover:text-red-500 transition-colors p-1" aria-label={`Remove ${item.name}`}>
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── TIP SECTION ── */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-900">Tip</h2>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Percentages are based on your order subtotal (before tax).
                  </p>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {TIP_OPTIONS.map((opt) => {
                      const isActive = selectedTip === opt.value;
                      const dollarAmt = opt.value > 0
                        ? ` ($${(subtotal * opt.value).toFixed(2)})`
                        : '';
                      return (
                        <button
                          key={opt.label}
                          onClick={() => {
                            setSelectedTip(opt.value);
                            if (opt.value !== -1) setCustomTipInput('');
                          }}
                          className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                            isActive
                              ? 'bg-[#FFD700] border-[#FFD700] text-[#1a1a1a]'
                              : 'bg-gray-100 border-gray-100 text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          {opt.label}{opt.value > 0 ? dollarAmt : ''}
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom tip input */}
                  {selectedTip === -1 && (
                    <div className="mt-4 flex items-center gap-2 max-w-xs">
                      <span className="text-gray-500 font-medium text-sm">$</span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={customTipInput}
                        onChange={(e) => setCustomTipInput(e.target.value)}
                        placeholder="Enter tip amount"
                        className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000]/30 focus:border-[#8B0000]"
                        autoFocus
                      />
                    </div>
                  )}

                  {tipAmount > 0 && (
                    <p className="mt-3 text-sm text-gray-500">
                      Tip: <span className="font-semibold text-gray-800">${tipAmount.toFixed(2)}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Customer Details */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-900">Your Details</h2>
                  <p className="text-gray-500 text-xs mt-0.5">Required for order confirmation email</p>
                </div>
                <div className="p-5 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name" type="text"
                      value={customerDetails.name}
                      onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                      placeholder="John Smith"
                      className={`w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000]/30 focus:border-[#8B0000] ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone" type="tel"
                      value={customerDetails.phone}
                      onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                      placeholder="+1 604-555-0100"
                      className={`w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000]/30 focus:border-[#8B0000] ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email" type="email"
                      value={customerDetails.email}
                      onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
                      placeholder="john@example.com"
                      className={`w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000]/30 focus:border-[#8B0000] ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                      Special Instructions <span className="text-gray-400 text-xs">(optional)</span>
                    </label>
                    <textarea
                      id="notes" rows={3}
                      value={customerDetails.notes}
                      onChange={(e) => setCustomerDetails({ ...customerDetails, notes: e.target.value })}
                      placeholder="Allergies, special requests, etc."
                      className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000]/30 focus:border-[#8B0000] resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT column — Order Summary ── */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm sticky top-24">
                <div className="p-5 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-900">Order Summary</h2>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Tax (5% GST)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  {tipAmount > 0 && (
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Tip</span>
                      <span>${tipAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900">
                    <span>Total</span>
                    <span className="text-[#8B0000] text-lg">${grandTotal.toFixed(2)}</span>
                  </div>

                  <div className="pt-2 space-y-1.5 text-xs text-gray-500">
                    <p>🏪 Pickup only — no delivery</p>
                    <p>📍 3110 Boundary Rd, Burnaby, BC</p>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={loading || items.length === 0}
                    className="w-full mt-4 bg-[#8B0000] hover:bg-[#a00000] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-full transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Redirecting to Stripe...
                      </>
                    ) : (
                      <>
                        <CartIcon className="w-4 h-4" />
                        Proceed to Payment · ${grandTotal.toFixed(2)}
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center pt-1">
                    🔒 Secured by Stripe. Your card info is never stored.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
