"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Sparkles, ShoppingCart, Phone } from "lucide-react";
import type { Product } from "@/types/product";

export function ProductDetail({ product }: { product: Product }) {
  const gallery: string[] =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image];

  const [active, setActive] = useState<string>(gallery[0]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      {/* Back button */}
      <Link
        href="/products"
        className="inline-flex items-center gap-1.5 mb-4 md:mb-6 text-sm text-muted-foreground hover:text-foreground transition-colors -ml-2 px-2 py-1 rounded-md hover:bg-surface"
      >
        <ArrowLeft className="h-4 w-4" /> Back to products
      </Link>

      <div className="grid gap-6 md:gap-10 lg:grid-cols-2">
        {/* ── GALLERY ── */}
        <div className="space-y-3">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/60 bg-surface">
            <div className="absolute inset-0 bg-radial-glow opacity-50" />
            <img
              src={active}
              alt={product.name}
              width={1024}
              height={1024}
              className="relative h-full w-full object-cover"
            />
          </div>
          {gallery.length > 1 && (
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(img)}
                  className={`aspect-square overflow-hidden rounded-xl border bg-surface transition-all ${
                    active === img
                      ? "border-primary glow-blue"
                      : "border-border/60 hover:border-border"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── INFO ── */}
        <div className="space-y-5">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              {product.brand} · {product.category}
            </p>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-2">
              <span
                className={
                  product.condition === "New"
                    ? "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-success/15 text-success border-success/30"
                    : "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-glow/15 text-purple-glow border-purple-glow/30"
                }
              >
                {product.condition === "New" ? (
                  <Sparkles className="h-3 w-3" />
                ) : (
                  <ShieldCheck className="h-3 w-3" />
                )}
                {product.condition === "New" ? "Brand New" : "Certified Pre-Owned"}
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <div className="rounded-2xl border border-border/60 bg-surface/60 p-4 sm:p-5">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Specifications
            </h3>
            <ul className="space-y-2">
              {product.specs.map((spec, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-primary" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <Link
              href={`/inquiry?product=${product.slug}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 glow-blue"
            >
              <ShoppingCart className="h-4 w-4" />
              Buy Now
            </Link>
            <a
              href="tel:+14166693931"
              className="flex items-center justify-center gap-2 rounded-xl border border-border/60 bg-surface px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-surface/80"
            >
              <Phone className="h-4 w-4 text-primary" />
              Call Us
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            Inquiry-only — we'll respond within 24 hours with availability and pricing.
          </p>
        </div>
      </div>
    </div>
  );
}
