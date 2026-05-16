"use client";

import { useState } from "react";
import { Filter, X, SlidersHorizontal } from "lucide-react";

export interface FilterState {
  categories: string[];
  conditions: string[];
  brands: string[];
}

interface ProductFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  availableCategories?: string[];
  availableBrands: string[];
  showCategory?: boolean;
}

const toggle = (arr: string[], v: string) =>
  arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];

const activeCount = (f: FilterState) =>
  f.categories.length + f.conditions.length + f.brands.length;

function FilterContent({
  filters,
  onChange,
  availableCategories,
  availableBrands,
  showCategory,
}: Required<ProductFiltersProps>) {
  const reset = () => onChange({ categories: [], conditions: [], brands: [] });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold">Filters</h3>
          {activeCount(filters) > 0 && (
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
              {activeCount(filters)}
            </span>
          )}
        </div>
        <button
          onClick={reset}
          className="inline-flex h-7 items-center rounded-md px-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Reset
        </button>
      </div>

      {showCategory && (
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Category
          </h4>
          <div className="space-y-2">
            {availableCategories.map((c) => (
              <label key={c} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(c)}
                  onChange={() => onChange({ ...filters, categories: toggle(filters.categories, c) })}
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm capitalize cursor-pointer">{c}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-3">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Condition
        </h4>
        <div className="space-y-2">
          {["New", "Used"].map((c) => (
            <label key={c} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.conditions.includes(c)}
                onChange={() => onChange({ ...filters, conditions: toggle(filters.conditions, c) })}
                className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
              />
              <span className="text-sm cursor-pointer">{c}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Brand
        </h4>
        <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
          {availableBrands.map((b) => (
            <label key={b} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.brands.includes(b)}
                onChange={() => onChange({ ...filters, brands: toggle(filters.brands, b) })}
                className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
              />
              <span className="text-sm cursor-pointer">{b}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProductFilters({
  filters,
  onChange,
  availableCategories = ["mobiles", "tablets", "laptops", "accessories"],
  availableBrands,
  showCategory = true,
}: ProductFiltersProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const count = activeCount(filters);

  return (
    <>
      {/* ── Mobile trigger button ── */}
      <div className="lg:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-surface"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {count > 0 && (
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
              {count}
            </span>
          )}
        </button>
      </div>

      {/* ── Mobile drawer overlay ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-3xl border-t border-border/60 bg-background p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <span className="text-base font-semibold">Filters</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-full p-1.5 hover:bg-surface transition-colors"
                aria-label="Close filters"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <FilterContent
              filters={filters}
              onChange={onChange}
              availableCategories={availableCategories}
              availableBrands={availableBrands}
              showCategory={showCategory}
            />
            <button
              className="w-full mt-6 rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              onClick={() => setMobileOpen(false)}
            >
              Show results
            </button>
          </div>
        </div>
      )}

      {/* ── Desktop sidebar ── */}
      <aside className="hidden lg:block sticky top-24 space-y-6 rounded-2xl border border-border/60 bg-surface/60 p-5 self-start">
        <FilterContent
          filters={filters}
          onChange={onChange}
          availableCategories={availableCategories}
          availableBrands={availableBrands}
          showCategory={showCategory}
        />
      </aside>
    </>
  );
}
