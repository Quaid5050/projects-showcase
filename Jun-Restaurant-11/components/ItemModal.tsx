'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { IMenuItem, ICategory } from '@/types';
import { useCart } from './CartProvider';
import { CloseIcon, PlusIcon, MinusIcon } from './Icons';
import toast from 'react-hot-toast';

interface ItemModalProps {
  item: IMenuItem;
  allItems: IMenuItem[];   // full list so we can show "frequently bought together"
  onClose: () => void;
}

// Items that pair well — we pick 4 random items from OTHER categories
function getFrequentlyBought(current: IMenuItem, all: IMenuItem[]): IMenuItem[] {
  const currentCatId =
    typeof current.category === 'string'
      ? current.category
      : (current.category as ICategory)?._id;

  // Items from different categories, available, not the same item
  const pool = all.filter((i) => {
    const catId =
      typeof i.category === 'string'
        ? i.category
        : (i.category as ICategory)?._id;
    return i._id !== current._id && catId !== currentCatId && i.isAvailable;
  });

  // Shuffle and take 4
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
}

export default function ItemModal({ item, allItems, onClose }: ItemModalProps) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [suggestions] = useState<IMenuItem[]>(() => getFrequentlyBought(item, allItems));

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleAdd = useCallback(() => {
    addItem({ menuItemId: item._id, name: item.name, price: item.price, quantity: qty, image: item.image });
    setAdded(true);
    toast.success(`${item.name} × ${qty} added to cart`, {
      icon: '🥢',
      style: { background: '#1a0a00', color: '#FFD700', border: '1px solid #8B0000' },
    });
    setTimeout(() => { setAdded(false); onClose(); }, 600);
  }, [addItem, item, qty, onClose]);

  const handleSuggestionAdd = (suggestion: IMenuItem) => {
    addItem({ menuItemId: suggestion._id, name: suggestion.name, price: suggestion.price, quantity: 1, image: suggestion.image });
    toast.success(`${suggestion.name} added`, {
      icon: '🥢',
      style: { background: '#1a0a00', color: '#FFD700', border: '1px solid #8B0000' },
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
        role="dialog"
        aria-modal="true"
        aria-label={item.name}
      >
        <div className="relative bg-white w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[88vh] overflow-hidden">

          {/* ── CLOSE button ── */}
          <button
            onClick={onClose}
            className="absolute top-3 left-3 z-10 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <CloseIcon className="w-4 h-4 text-gray-600" />
          </button>

          {/* ── SCROLLABLE BODY ── */}
          <div className="overflow-y-auto flex-1 pb-24">

            {/* Hero image */}
            <div className="relative w-full h-56 sm:h-72 bg-gradient-to-br from-[#8B0000]/10 to-[#1a5c1a]/10 flex-shrink-0">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 672px"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <span className="text-7xl opacity-40">🍜</span>
                </div>
              )}
              {item.isFeatured && (
                <span className="absolute top-3 right-3 bg-[#FFD700] text-[#1a0a00] text-xs font-bold px-2.5 py-1 rounded-full shadow">
                  ⭐ Featured
                </span>
              )}
            </div>

            {/* Item details */}
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-900 leading-snug mb-1">
                {item.name}
              </h2>
              <p className="text-[#8B0000] font-bold text-xl mb-2">
                ${item.price.toFixed(2)}
              </p>
              {item.description && (
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              )}

              {/* Quantity selector */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-medium text-gray-700">Quantity</span>
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-1 py-1">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-40"
                    disabled={qty <= 1}
                    aria-label="Decrease quantity"
                  >
                    <MinusIcon className="w-3.5 h-3.5 text-gray-700" />
                  </button>
                  <span className="w-6 text-center font-semibold text-gray-900 text-sm select-none">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <PlusIcon className="w-3.5 h-3.5 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>

            {/* ── Frequently Bought Together ── */}
            {suggestions.length > 0 && (
              <div className="px-5 pb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Frequently bought together
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {suggestions.map((s) => (
                    <SuggestionCard key={s._id} item={s} onAdd={() => handleSuggestionAdd(s)} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── STICKY ADD TO ORDER BUTTON ── */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
            <button
              onClick={handleAdd}
              disabled={!item.isAvailable || added}
              className="w-full bg-[#1a1a1a] hover:bg-[#333] disabled:bg-gray-400 text-white font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm"
            >
              {added ? (
                '✓ Added!'
              ) : item.isAvailable ? (
                <>
                  Add {qty > 1 ? qty : 1} to order
                  <span className="opacity-70">·</span>
                  ${(item.price * qty).toFixed(2)}
                </>
              ) : (
                'Currently Unavailable'
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Small suggestion card ──────────────────────────────────────────────────────
function SuggestionCard({ item, onAdd }: { item: IMenuItem; onAdd: () => void }) {
  return (
    <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100">
      {/* Thumbnail */}
      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
        {item.image ? (
          <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px" />
        ) : (
          <div className="flex items-center justify-center h-full text-2xl">🍜</div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-gray-800 leading-snug line-clamp-2">{item.name}</p>
        <p className="text-[#8B0000] font-bold text-xs mt-0.5">${item.price.toFixed(2)}</p>
        {item.description && (
          <p className="text-gray-400 text-xs mt-0.5 line-clamp-2 leading-snug">{item.description}</p>
        )}
      </div>

      {/* Add button */}
      <button
        onClick={onAdd}
        className="w-7 h-7 bg-white border-2 border-gray-200 hover:border-[#8B0000] hover:bg-[#8B0000] hover:text-white text-gray-600 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 mt-1"
        aria-label={`Add ${item.name}`}
      >
        <PlusIcon className="w-3 h-3" />
      </button>
    </div>
  );
}
