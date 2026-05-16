import { useMemo } from "react";
import type { Product } from "@/types/product";
import type { FilterState } from "@/components/ProductFilters";

export function useFilteredProducts(products: Product[], filters: FilterState) {
  return useMemo(() => {
    return products.filter((p) => {
      if (filters.categories.length && !filters.categories.includes(p.category)) return false;
      if (filters.conditions.length && !filters.conditions.includes(p.condition)) return false;
      if (filters.brands.length && !filters.brands.includes(p.brand)) return false;
      return true;
    });
  }, [products, filters]);
}
