"use client";
import { useEffect, useState, useRef } from "react";
import { useCartStore } from "@/lib/store/cart-store";
import { toast } from "sonner";

interface MenuItem {
  _id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isPopular?: boolean;
  isFeatured?: boolean;
  category?: { name: string; slug: string };
  ingredients?: string[];
  badges?: string[];
  options?: OptionGroup[];
}

interface OptionGroup {
  groupKey: string;
  groupLabel: string;
  isRequired: boolean;
  minSelect: number;
  maxSelect: number;
  options: { key: string; label: string; priceModifier: number }[];
}

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function ItemModal({ item, onClose }: ItemModalProps) {
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState("");
  const [featuredItems, setFeaturedItems] = useState<MenuItem[]>([]);
  const [drinks, setDrinks] = useState<MenuItem[]>([]);
  const drinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!item) return;
    setQuantity(1);
    setSelectedOptions({});
    setNotes("");

    // Fetch featured items (excluding current)
    fetch("/api/menu?featured=true")
      .then(r => r.json())
      .then((data: MenuItem[]) => {
        if (Array.isArray(data)) {
          setFeaturedItems(data.filter(i => i._id !== item._id && i.isPopular).slice(0, 6));
        }
      })
      .catch(() => {});

    // Fetch drinks
    fetch("/api/menu?category=drink")
      .then(r => r.json())
      .then((data: MenuItem[]) => {
        if (Array.isArray(data)) setDrinks(data);
      })
      .catch(() => {});
  }, [item]);

  // Close on backdrop click or Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!item) return null;

  // Calculate price with options
  const optionExtra = Object.entries(selectedOptions).reduce((sum, [groupKey, optKey]) => {
    const group = item.options?.find(g => g.groupKey === groupKey);
    const opt = group?.options.find(o => o.key === optKey);
    return sum + (opt?.priceModifier || 0);
  }, 0);
  const unitPrice = item.price + optionExtra;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    // Check required options
    const missingRequired = item.options?.filter(g => g.isRequired && !selectedOptions[g.groupKey]);
    if (missingRequired && missingRequired.length > 0) {
      toast.error(`Please select: ${missingRequired.map(g => g.groupLabel).join(", ")}`);
      return;
    }
    addItem({
      menuItemId: item._id,
      name: item.name,
      price: unitPrice,
      quantity,
      image: item.image,
      selectedOptions: Object.keys(selectedOptions).length > 0 ? selectedOptions : undefined,
      notes: notes.trim() || undefined,
    });
    toast.success(`${item.name} added to cart!`);
    onClose();
  };

  const handleAddDrink = (drink: MenuItem) => {
    addItem({ menuItemId: drink._id, name: drink.name, price: drink.price, quantity: 1, image: drink.image });
    toast.success(`${drink.name} added!`);
  };

  const scrollDrinks = (dir: "left" | "right") => {
    if (drinksRef.current) {
      drinksRef.current.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl max-h-[92vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 shadow-sm"
        >
          ✕
        </button>

        {/* Item image */}
        {item.image ? (
          <div className="h-52 sm:h-60 overflow-hidden rounded-t-2xl">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="h-40 bg-gradient-to-br from-[#c8102e]/10 to-[#ffd700]/20 flex items-center justify-center text-6xl rounded-t-2xl">
            🍔
          </div>
        )}

        <div className="p-5">
          {/* Title & badges */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h2 className="text-xl font-black text-[#1a1a1a] leading-tight">{item.name}</h2>
            <div className="flex gap-1 flex-shrink-0 mt-0.5">
              {item.isSpicy && <span className="text-lg" title="Spicy">🌶️</span>}
              {item.isVegetarian && <span className="text-lg" title="Vegetarian">🌿</span>}
              {item.isPopular && (
                <span className="text-xs bg-[#ffd700] text-[#1a1a1a] px-2 py-0.5 rounded-full font-bold">Popular</span>
              )}
            </div>
          </div>

          {/* Category */}
          {item.category && (
            <p className="text-xs text-[#c8102e] font-semibold uppercase tracking-wide mb-2">
              {item.category.name}
            </p>
          )}

          {/* Description */}
          {item.description && (
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
          )}

          {/* Ingredients */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Ingredients</p>
              <p className="text-sm text-gray-600">{item.ingredients.join(", ")}</p>
            </div>
          )}

          {/* Option groups */}
          {item.options && item.options.length > 0 && (
            <div className="space-y-4 mb-4">
              {item.options.map(group => (
                <div key={group.groupKey}>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm font-bold text-[#1a1a1a]">{group.groupLabel}</p>
                    {group.isRequired && (
                      <span className="text-xs bg-[#c8102e] text-white px-1.5 py-0.5 rounded-full">Required</span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {group.options.map(opt => (
                      <button
                        key={opt.key}
                        onClick={() => setSelectedOptions(prev => ({ ...prev, [group.groupKey]: opt.key }))}
                        className={`text-left px-3 py-2 rounded-xl border-2 text-sm transition-colors ${
                          selectedOptions[group.groupKey] === opt.key
                            ? "border-[#c8102e] bg-[#c8102e]/5 text-[#c8102e] font-semibold"
                            : "border-gray-200 text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        <span>{opt.label}</span>
                        {opt.priceModifier !== 0 && (
                          <span className="block text-xs text-gray-400">
                            {opt.priceModifier > 0 ? `+$${opt.priceModifier.toFixed(2)}` : `-$${Math.abs(opt.priceModifier).toFixed(2)}`}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Notes */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Special Instructions</label>
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              rows={2}
              placeholder="Allergies, extra sauce, no onions..."
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#c8102e] resize-none"
            />
          </div>

          {/* Quantity + Add to cart */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-gray-700 hover:text-[#c8102e] transition-colors"
              >
                −
              </button>
              <span className="w-6 text-center font-bold text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-gray-700 hover:text-[#c8102e] transition-colors"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#c8102e] hover:bg-red-700 text-white font-black py-3 rounded-full transition-colors text-base shadow-lg"
            >
              Add to Cart — ${totalPrice.toFixed(2)}
            </button>
          </div>

          {/* ── DRINKS SLIDER ── */}
          {drinks.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-black text-[#1a1a1a] text-base">Add a Drink 🥤</h3>
                <div className="flex gap-1">
                  <button
                    onClick={() => scrollDrinks("left")}
                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm transition-colors"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => scrollDrinks("right")}
                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-sm transition-colors"
                  >
                    ›
                  </button>
                </div>
              </div>
              <div
                ref={drinksRef}
                className="flex gap-3 overflow-x-auto pb-2"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {drinks.map(drink => (
                  <div
                    key={drink._id}
                    className="flex-shrink-0 w-28 bg-gray-50 border border-gray-100 rounded-xl p-3 text-center hover:border-[#c8102e] transition-colors group"
                  >
                    <div className="text-2xl mb-1">
                      {drink.image ? (
                        <img src={drink.image} alt={drink.name} className="w-10 h-10 object-cover rounded-lg mx-auto" />
                      ) : "☕"}
                    </div>
                    <p className="text-xs font-semibold text-gray-800 leading-tight mb-1 line-clamp-2">{drink.name}</p>
                    <p className="text-xs text-[#c8102e] font-bold mb-2">${drink.price.toFixed(2)}</p>
                    <button
                      onClick={() => handleAddDrink(drink)}
                      className="w-full bg-[#c8102e] text-white text-xs font-bold py-1 rounded-full hover:bg-red-700 transition-colors"
                    >
                      + Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── FEATURED / POPULAR ITEMS ── */}
          {featuredItems.length > 0 && (
            <div>
              <h3 className="font-black text-[#1a1a1a] text-base mb-3">You Might Also Like ⭐</h3>
              <div className="space-y-2">
                {featuredItems.map(fi => (
                  <div
                    key={fi._id}
                    className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100 hover:border-[#c8102e] transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#c8102e]/10 to-[#ffd700]/20 flex items-center justify-center">
                      {fi.image ? (
                        <img src={fi.image} alt={fi.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-xl">🍔</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-[#1a1a1a] truncate">{fi.name}</p>
                      <p className="text-xs text-[#c8102e] font-bold">${fi.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => {
                        addItem({ menuItemId: fi._id, name: fi.name, price: fi.price, quantity: 1, image: fi.image });
                        toast.success(`${fi.name} added!`);
                      }}
                      className="flex-shrink-0 bg-[#c8102e] text-white text-xs font-bold px-3 py-1.5 rounded-full hover:bg-red-700 transition-colors"
                    >
                      + Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
