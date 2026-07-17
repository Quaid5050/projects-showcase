"use client";

import { useCart, CartItem as CartItemType } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { increaseQty, decreaseQty, removeItem } = useCart();

  return (
    <div className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 p-4">
      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[#111111] text-sm truncate">
          {item.name}
        </p>
        <p className="text-xs text-gray-500 mt-0.5">{item.category}</p>
        <p className="text-[#d60000] font-bold text-sm mt-1">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Qty control */}
      <div className="flex items-center bg-[#f5f5f5] rounded-lg overflow-hidden">
        <button
          onClick={() => decreaseQty(item.id)}
          className="px-3 py-1.5 text-[#d60000] font-bold text-base hover:bg-gray-200 transition-colors"
        >
          −
        </button>
        <span className="px-2 font-semibold text-sm text-[#111111]">
          {item.quantity}
        </span>
        <button
          onClick={() => increaseQty(item.id)}
          className="px-3 py-1.5 text-[#d60000] font-bold text-base hover:bg-gray-200 transition-colors"
        >
          +
        </button>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeItem(item.id)}
        className="text-gray-400 hover:text-red-500 transition-colors p-1"
        aria-label="Remove item"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
}
