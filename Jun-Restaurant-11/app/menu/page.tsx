'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuItemCard from '@/components/MenuItemCard';
import { ICategory, IMenuItem } from '@/types';
import { SearchIcon } from '@/components/Icons';

function MenuContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [allItems, setAllItems] = useState<IMenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [catRes, itemRes] = await Promise.all([
          fetch('/api/categories'),
          fetch('/api/menu-items'),
        ]);
        const catData = await catRes.json();
        const itemData = await itemRes.json();
        setCategories(catData.categories || []);
        setAllItems(itemData.items || []);
      } catch (err) {
        console.error('Failed to load menu:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filteredItems = useCallback(() => {
    let items = allItems;

    if (activeCategory !== 'all') {
      items = items.filter((item) => {
        const cat = item.category as ICategory;
        return cat?.slug === activeCategory;
      });
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          (item.description && item.description.toLowerCase().includes(q))
      );
    }

    return items;
  }, [allItems, activeCategory, searchQuery]);

  const itemsByCategory = useCallback(() => {
    const result: Record<string, IMenuItem[]> = {};
    const items = filteredItems();

    if (activeCategory !== 'all') {
      result[activeCategory] = items;
      return result;
    }

    // Group by category
    for (const item of items) {
      const cat = item.category as ICategory;
      const catSlug = cat?.slug || 'other';
      if (!result[catSlug]) result[catSlug] = [];
      result[catSlug].push(item);
    }

    return result;
  }, [filteredItems, activeCategory]);

  const getCategoryName = (slug: string) =>
    categories.find((c) => c.slug === slug)?.name || slug;

  const grouped = itemsByCategory();
  const totalItems = filteredItems().length;

  return (
    <div className="min-h-screen bg-[#f9f5f0]">
      <Header />

      {/* Page Header */}
      <div className="bg-[#1a0a00] pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#FFD700] text-sm font-semibold uppercase tracking-widest">
            口得福
          </span>
          <h1 className="text-4xl font-bold text-white mt-2">Our Menu</h1>
          <p className="text-gray-400 mt-3 text-sm max-w-md mx-auto">
            Authentic Chinese dishes prepared fresh daily. Add items to your cart and order for pickup.
          </p>
        </div>
      </div>

      {/* Sticky Category + Search Bar */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="py-3 border-b border-gray-100">
            <div className="relative max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#8B0000]/30 focus:border-[#8B0000]"
                aria-label="Search menu items"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 py-3 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === 'all'
                  ? 'bg-[#8B0000] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Items
            </button>
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => setActiveCategory(cat.slug)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === cat.slug
                    ? 'bg-[#8B0000] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="py-20 text-center">
            <div className="w-10 h-10 border-4 border-[#8B0000] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-500">Loading menu...</p>
          </div>
        ) : totalItems === 0 ? (
          <div className="py-20 text-center">
            <span className="text-6xl block mb-4">🍜</span>
            <p className="text-gray-600 text-lg font-medium">No items found</p>
            <p className="text-gray-400 text-sm mt-1">
              {searchQuery ? 'Try a different search term' : 'Menu items will appear here once added'}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-[#8B0000] hover:underline text-sm"
              >
                Clear search
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-12">
            {activeCategory === 'all'
              ? categories
                  .filter((cat) => grouped[cat.slug] && grouped[cat.slug].length > 0)
                  .map((cat) => (
                    <section key={cat._id} id={`cat-${cat.slug}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">{cat.name}</h2>
                          {cat.description && (
                            <p className="text-gray-500 text-sm mt-0.5">{cat.description}</p>
                          )}
                        </div>
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-sm text-gray-400 flex-shrink-0">
                          {grouped[cat.slug]?.length} items
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {grouped[cat.slug]?.map((item) => (
                          <MenuItemCard key={item._id} item={item} allItems={allItems} />
                        ))}
                      </div>
                    </section>
                  ))
              : grouped[activeCategory] && (
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {getCategoryName(activeCategory)}
                      </h2>
                      <div className="flex-1 h-px bg-gray-200" />
                      <span className="text-sm text-gray-400">
                        {grouped[activeCategory]?.length} items
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                      {grouped[activeCategory]?.map((item) => (
                        <MenuItemCard key={item._id} item={item} allItems={allItems} />
                      ))}
                    </div>
                  </section>
                )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#f9f5f0] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-[#8B0000] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Loading menu...</p>
        </div>
      </div>
    }>
      <MenuContent />
    </Suspense>
  );
}
