"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilters, type FilterState } from "@/components/ProductFilters";
import { getProductsByCategory } from "@/data/products";
import { useFilteredProducts } from "@/features/products/useFilteredProducts";

export default function TabletsPage() {
  const all = getProductsByCategory("tablets");
  const [filters, setFilters] = useState<FilterState>({ categories: [], conditions: [], brands: [] });
  const filtered = useFilteredProducts(all, filters);
  const brands = Array.from(new Set(all.map((p) => p.brand))).sort();

  const newTablets  = filtered.filter((p) => p.condition === "New");
  const usedTablets = filtered.filter((p) => p.condition === "Used");

  return (
    <>
      <PageHeader
        eyebrow="Tablets"
        title="iPads & tablets"
        description="Powerful tablets for work, creativity, and entertainment. New and certified pre-owned."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Mobile filter row */}
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <ProductFilters filters={filters} onChange={setFilters} availableBrands={brands} showCategory={false} />
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">{filtered.length}</span> tablets
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <ProductFilters filters={filters} onChange={setFilters} availableBrands={brands} showCategory={false} />
          <div className="space-y-10">
            {newTablets.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-lg sm:text-xl font-bold">New Tablets</h2>
                  <span className="text-xs text-muted-foreground">{newTablets.length} items</span>
                </div>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 xl:grid-cols-3">
                  {newTablets.map((p) => <ProductCard key={p.id} product={p} />)}
                </div>
              </div>
            )}
            {usedTablets.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-lg sm:text-xl font-bold">Used Tablets</h2>
                  <span className="text-xs text-muted-foreground">{usedTablets.length} items</span>
                </div>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 xl:grid-cols-3">
                  {usedTablets.map((p) => <ProductCard key={p.id} product={p} />)}
                </div>
              </div>
            )}
            {filtered.length === 0 && (
              <div className="rounded-2xl border border-border/60 bg-surface/60 p-12 text-center text-muted-foreground">
                No tablets match your filters.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
