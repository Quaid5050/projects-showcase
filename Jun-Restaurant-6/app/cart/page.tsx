"use client";
import { useCartStore } from "@/lib/store/cart-store";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getSubtotal } = useCartStore();
  const router = useRouter();
  const subtotal = getSubtotal();
  const tax = Math.round(subtotal * 0.13 * 100) / 100;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-[#c8102e] text-white py-4 px-4 shadow-md">
          <div className="max-w-2xl mx-auto flex items-center gap-3">
            <Link href="/menu" className="text-white hover:text-[#ffd700] font-medium text-sm sm:text-base">← Back to Menu</Link>
          </div>
        </header>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16">
          <p className="text-5xl sm:text-6xl mb-4">🛒</p>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">Add some delicious items from our menu</p>
          <Link href="/menu" className="bg-[#c8102e] text-white font-bold px-8 py-3 rounded-full hover:bg-red-700 transition-colors">
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#c8102e] text-white py-4 px-4 shadow-md">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/menu" className="text-white hover:text-[#ffd700] font-medium text-sm sm:text-base">← Menu</Link>
          <h1 className="font-black text-lg sm:text-xl">Your Cart</h1>
          <span className="text-xs sm:text-sm opacity-70">{items.length} item{items.length !== 1 ? "s" : ""}</span>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6 sm:py-8">
        {/* Items */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-5 sm:mb-6">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 sm:gap-4 p-4 ${idx < items.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              {/* Image */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#c8102e]/10 to-[#ffd700]/20 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 overflow-hidden">
                {item.image
                  ? <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
                  : "🍔"}
              </div>

              {/* Name & price */}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[#1a1a1a] text-sm sm:text-base truncate">{item.name}</p>
                <p className="text-[#c8102e] font-semibold text-xs sm:text-sm">${item.price.toFixed(2)} each</p>
              </div>

              {/* Qty controls */}
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-gray-200 flex items-center justify-center font-bold text-gray-600 hover:border-[#c8102e] hover:text-[#c8102e] transition-colors text-sm"
                >
                  −
                </button>
                <span className="w-5 sm:w-6 text-center font-bold text-sm sm:text-base">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-gray-200 flex items-center justify-center font-bold text-gray-600 hover:border-[#c8102e] hover:text-[#c8102e] transition-colors text-sm"
                >
                  +
                </button>
              </div>

              {/* Line total */}
              <div className="text-right min-w-[56px] sm:min-w-[64px]">
                <p className="font-black text-[#1a1a1a] text-sm sm:text-base">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-xs text-red-400 hover:text-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 mb-5 sm:mb-6">
          <div className="space-y-2 text-sm sm:text-base">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-400 text-xs sm:text-sm">
              <span>Tax (13%) — calculated at checkout</span><span>~${tax.toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-100 pt-3 flex justify-between font-black text-lg sm:text-xl">
              <span>Subtotal</span>
              <span className="text-[#c8102e]">${subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => router.push("/checkout")}
          className="w-full bg-[#c8102e] hover:bg-red-700 text-white font-black text-base sm:text-lg py-4 rounded-full transition-colors shadow-lg"
        >
          Proceed to Checkout →
        </button>
        <Link href="/menu" className="block text-center mt-4 text-gray-500 hover:text-[#c8102e] transition-colors text-sm">
          + Add more items
        </Link>
      </div>
    </div>
  );
}
