"use client";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { useCartStore } from "@/lib/store/cart-store";
import ItemModal from "@/components/ItemModal";

interface Category { _id: string; name: string; slug: string; }
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
  options?: any[];
}

export default function MenuContent() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get("category") || "all";
  const { addItem, getItemCount } = useCartStore();

  useEffect(() => {
    fetch("/api/categories").then(r => r.json()).then(setCategories);
  }, []);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (activeCategory !== "all") params.set("category", activeCategory);
    if (search) params.set("search", search);
    const res = await fetch(`/api/menu?${params}`);
    const data = await res.json();
    setItems(Array.isArray(data) ? data : []);
    setLoading(false);
  }, [activeCategory, search]);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  const handleQuickAdd = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    addItem({ menuItemId: item._id, name: item.name, price: item.price, quantity: 1, image: item.image });
    toast.success(`${item.name} added to cart`);
  };

  const cartCount = getItemCount();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#c8102e] text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <img src="/logo.png" alt="The Village Burger" className="h-9 w-9 rounded-full object-cover border-2 border-white/30 flex-shrink-0" />
            <span className="hidden sm:block text-sm sm:text-base">The Village Burger</span>
          </Link>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search menu..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="hidden sm:block bg-white/20 placeholder-white/70 text-white border border-white/30 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 w-48 transition-all"
            />
            <Link href="/cart" className="relative bg-[#ffd700] text-[#c8102e] px-4 py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors">
              🛒 Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-[#c8102e] text-xs font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#c8102e]">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Mobile search */}
        <div className="sm:hidden mb-4">
          <input
            type="text"
            placeholder="Search menu..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-[#c8102e]"
          />
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8" style={{ scrollbarWidth: "none" }}>
          <button
            onClick={() => router.push("/menu")}
            className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeCategory === "all"
                ? "bg-[#c8102e] text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#c8102e] hover:text-[#c8102e]"
            }`}
          >
            All Items
          </button>
          {categories.map(cat => (
            <button
              key={cat._id}
              onClick={() => router.push(`/menu?category=${cat.slug}`)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat.slug
                  ? "bg-[#c8102e] text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#c8102e] hover:text-[#c8102e]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Items grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl h-56 animate-pulse" />
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-5xl mb-4">🍔</p>
            <p className="text-xl font-semibold">No items found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(item => (
              <div
                key={item._id}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-[#c8102e]/30 transition-all cursor-pointer flex flex-col group"
              >
                {/* Image */}
                {item.image ? (
                  <div className="h-44 bg-gray-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-44 bg-gradient-to-br from-[#c8102e]/10 to-[#ffd700]/20 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-300">
                    🍔
                  </div>
                )}

                <div className="p-4 flex flex-col flex-1">
                  {/* Name & badges */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-[#1a1a1a] text-base leading-tight group-hover:text-[#c8102e] transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex gap-1 flex-shrink-0">
                      {item.isSpicy && <span title="Spicy" className="text-sm">🌶️</span>}
                      {item.isVegetarian && <span title="Vegetarian" className="text-sm">🌿</span>}
                      {item.isPopular && (
                        <span className="text-xs bg-[#ffd700] text-[#1a1a1a] px-1.5 py-0.5 rounded-full font-bold">Popular</span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-1">{item.description}</p>
                  )}

                  {/* Price + buttons */}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                    <span className="text-[#c8102e] font-black text-lg">${item.price.toFixed(2)}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={e => handleQuickAdd(e, item)}
                        className="bg-[#c8102e] hover:bg-red-700 text-white font-bold px-4 py-2 rounded-full text-sm transition-colors"
                      >
                        + Add
                      </button>
                    </div>
                  </div>

                  {/* Tap hint */}
                  <p className="text-xs text-gray-400 mt-1.5 text-center">Tap card for details</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <ItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
