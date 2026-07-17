"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Image from "next/image";

interface MenuCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

export default function MenuCard({
  id,
  name,
  description,
  price,
  category,
  image,
}: MenuCardProps) {
  const { addItem, items, increaseQty, decreaseQty } = useCart();
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const cartItem = items.find((i) => i.id === id);
  const qty = cartItem?.quantity ?? 0;

  function handleAdd() {
    addItem({ id, name, price, category, quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  const showImage = image && !imgError;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      {/* Image */}
      {showImage && (
        <div className="relative w-full h-40 bg-gray-100 shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setImgError(true)}
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex justify-between items-start gap-2 mb-1">
            <h3 className="font-semibold text-[#111111] text-sm leading-snug flex-1">
              {name}
            </h3>
            <span className="text-[#d60000] font-bold text-sm shrink-0">
              ${price.toFixed(2)}
            </span>
          </div>
          {description && (
            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
              {description}
            </p>
          )}
        </div>

        <div className="mt-3">
          {qty === 0 ? (
            <button
              onClick={handleAdd}
              className={`w-full py-2 rounded-lg text-sm font-semibold transition-colors ${
                added
                  ? "bg-green-500 text-white"
                  : "bg-[#d60000] hover:bg-[#b00000] text-white"
              }`}
            >
              {added ? "✓ Added" : "Add to Cart"}
            </button>
          ) : (
            <div className="flex items-center justify-between bg-[#f5f5f5] rounded-lg overflow-hidden">
              <button
                onClick={() => decreaseQty(id)}
                className="px-3 py-2 text-[#d60000] font-bold text-lg hover:bg-gray-200 transition-colors"
              >
                −
              </button>
              <span className="font-semibold text-sm text-[#111111]">{qty}</span>
              <button
                onClick={() => increaseQty(id)}
                className="px-3 py-2 text-[#d60000] font-bold text-lg hover:bg-gray-200 transition-colors"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
