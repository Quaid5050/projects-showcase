"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import Link from "next/link";

const TAX_RATE = 0.05;

export default function CartPageClient() {
  const { items, subtotal, clearCart } = useCart();
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  if (items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 text-center">
        <div className="text-6xl mb-5">🛒</div>
        <h2 className="text-xl font-bold text-[#111111] mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-500 text-sm mb-7">
          Add items from the menu to get started.
        </p>
        <Link
          href="/menu"
          className="inline-block bg-[#d60000] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#b00000] transition-colors"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-[#111111]">
          {items.length} item{items.length > 1 ? "s" : ""} in your cart
        </h2>
        <button
          onClick={clearCart}
          className="text-sm text-gray-400 hover:text-red-500 transition-colors"
        >
          Clear all
        </button>
      </div>

      {/* Items */}
      <div className="space-y-3 mb-6">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Totals */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>GST (5%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-[#111111] text-base border-t border-gray-100 pt-2 mt-2">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <Link
          href="/checkout"
          className="mt-5 block w-full bg-[#d60000] hover:bg-[#b00000] text-white font-bold py-3.5 rounded-lg text-center transition-colors"
        >
          Proceed to Checkout
        </Link>
        <Link
          href="/menu"
          className="mt-2 block w-full text-center text-sm text-gray-500 hover:text-[#d60000] transition-colors py-2"
        >
          ← Continue Shopping
        </Link>
      </div>
    </div>
  );
}
