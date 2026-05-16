import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group card-hover relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface">
      {/* Image — links to detail page */}
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-background">
          <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={600}
            height={600}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
            <span
              className={
                product.condition === "New"
                  ? "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold bg-success/15 text-success border-success/30"
                  : "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold bg-purple-glow/15 text-purple-glow border-purple-glow/30"
              }
            >
              {product.condition}
            </span>
          </div>
        </div>

        {/* Name */}
        <div className="px-3 sm:px-4 pt-3 pb-1">
          <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground truncate">
            {product.brand}
          </p>
          <h3 className="mt-0.5 text-xs sm:text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:gradient-text transition-all">
            {product.name}
          </h3>
        </div>
      </Link>

      {/* Buy Now button */}
      <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-2 mt-auto">
        <Link
          href={`/inquiry?product=${product.slug}`}
          className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-primary px-3 py-2 text-xs sm:text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <ShoppingCart className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
          Buy Now
        </Link>
      </div>
    </div>
  );
}
