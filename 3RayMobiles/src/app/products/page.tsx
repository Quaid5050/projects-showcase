"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilters, type FilterState } from "@/components/ProductFilters";
import { products } from "@/data/products";
import { useFilteredProducts } from "@/features/products/useFilteredProducts";

function ProductsContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";

  const [filters, setFilters] = useState<FilterState>({ categories: [], conditions: [], brands: [] });
  const [search, setSearch] = useState(q);

  useEffect(() => { setSearch(q); }, [q]);

  const filtered = useFilteredProducts(products, filters);
  const displayed = search.trim()
    ? filtered.filter((p) =>
        [p.name, p.brand, p.category, p.description, ...(p.specs ?? [])]
          .join(" ").toLowerCase().includes(search.toLowerCase())
      )
    : filtered;

  const brands = Array.from(new Set(products.map((p) => p.brand))).sort();

  return (
    <>
      <PageHeader
        eyebrow="Catalog"
        title="All Products"
        description="Curated mobiles, laptops, and accessories. New and certified pre-owned."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Search bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search phones, laptops, accessories…"
            className="w-full rounded-xl border border-border/60 bg-background/60 pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Mobile: filter button row */}
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <ProductFilters filters={filters} onChange={setFilters} availableBrands={brands} />
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">{displayed.length}</span> products
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* Desktop sidebar */}
          <ProductFilters filters={filters} onChange={setFilters} availableBrands={brands} />

          <div>
            <p className="hidden lg:block text-sm text-muted-foreground mb-4">
              Showing <span className="text-foreground font-medium">{displayed.length}</span> of {products.length} products
              {search.trim() && <span className="ml-1">for <span className="text-foreground font-medium">"{search}"</span></span>}
            </p>
            {displayed.length === 0 ? (
              <div className="rounded-2xl border border-border/60 bg-surface/60 p-12 text-center text-muted-foreground">
                No products match your search or filters.
              </div>
            ) : (
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 xl:grid-cols-3">
                {displayed.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="mx-auto max-w-7xl px-4 py-20 text-center text-muted-foreground">
        Loading products…
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
