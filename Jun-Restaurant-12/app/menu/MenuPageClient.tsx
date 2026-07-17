"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import MenuCard from "@/components/MenuCard";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

interface Props {
  items: MenuItem[];
}

export default function MenuPageClient({ items }: Props) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.category))).sort()],
    [items]
  );

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchCat =
        activeCategory === "All" || item.category === activeCategory;
      const matchSearch =
        !search ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description?.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [items, activeCategory, search]);

  const grouped = useMemo(() => {
    const map: Record<string, MenuItem[]> = {};
    filtered.forEach((item) => {
      if (!map[item.category]) map[item.category] = [];
      map[item.category].push(item);
    });
    return map;
  }, [filtered]);

  if (items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 text-center">
        <div className="text-5xl mb-4">🍜</div>
        <h2 className="text-xl font-bold text-[#111111] mb-2">
          Menu not loaded yet
        </h2>
        <p className="text-gray-500 text-sm">
          Run{" "}
          <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">
            npm run seed
          </code>{" "}
          to import the menu from SkipTheDishes.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
      {/* Search */}
      <div className="mb-5 relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search menu items..."
          className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#d60000] focus:border-transparent shadow-sm"
        />
        <svg
          className="absolute left-3 top-3 h-4 w-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
              activeCategory === cat
                ? "bg-[#d60000] text-white border-[#d60000]"
                : "bg-white text-[#333333] border-gray-200 hover:border-[#d60000] hover:text-[#d60000]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          No items found for &ldquo;{search}&rdquo;
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(grouped).map(([category, catItems]) => (
            <div key={category}>
              <h2 className="text-lg font-bold text-[#111111] mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#d60000] rounded-full inline-block" />
                {category}
                <span className="text-gray-400 text-sm font-normal">
                  ({catItems.length})
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {catItems.map((item) => (
                  <MenuCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    category={item.category}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
