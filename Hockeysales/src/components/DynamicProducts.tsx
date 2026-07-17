"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  status: string;
  description: string;
  image: string;
}

const statusStyle: Record<string, string> = {
  "In Stock": "text-[#006399] bg-[#67bafd]/20 border border-[#67bafd]",
  "Coming Soon": "text-[#ed4a14] bg-[#ed4a14]/10 border border-[#ed4a14]",
  "Sold Out": "text-[#75777e] bg-[#e7e8e9] border border-[#c5c6cd]",
};

export default function DynamicProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Nothing to show yet — keep the page clean.
  if (loading || products.length === 0) return null;

  return (
    <section className="mb-20" id="featured">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#67bafd]/20 text-[#006399] border border-[#006399]/30 font-inter font-semibold text-sm mb-4">
          <span className="material-symbols-outlined text-base mr-2">new_releases</span>
          FRESH STOCK
        </div>
        <h2 className="font-montserrat text-[36px] md:text-[48px] font-extrabold text-black mb-2">Featured Products</h2>
        <p className="font-inter text-base text-[#44474d]">Hand-picked gear, updated regularly. Tap to order.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="group bg-white border border-[#c5c6cd] rounded-xl overflow-hidden flex flex-col hover:border-[#006399] hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[4/3] bg-[#f8f9fa] overflow-hidden">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#c5c6cd]">
                  <span className="material-symbols-outlined" style={{ fontSize: "56px" }}>sports_hockey</span>
                </div>
              )}
              {p.category && (
                <span className="absolute top-3 left-3 bg-black/70 text-white font-inter text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                  {p.category}
                </span>
              )}
              {p.status && (
                <span className={`absolute top-3 right-3 font-inter text-xs font-semibold px-2 py-1 rounded ${statusStyle[p.status] || statusStyle["In Stock"]}`}>
                  {p.status}
                </span>
              )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
              {p.brand && <p className="font-inter text-xs font-semibold text-[#006399] uppercase tracking-widest mb-1">{p.brand}</p>}
              <h3 className="font-montserrat text-xl font-bold text-black mb-2">{p.name}</h3>
              {p.description && <p className="font-inter text-sm text-[#44474d] mb-4 flex-grow">{p.description}</p>}
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="font-montserrat text-xl font-bold text-black">{p.price || "Contact for Pricing"}</span>
              </div>
              <Link
                href={`/checkout?id=${p.id}`}
                className={`mt-4 w-full py-3 rounded font-inter font-semibold text-sm flex justify-center items-center gap-2 transition-colors ${
                  p.status === "Sold Out"
                    ? "bg-[#e7e8e9] text-[#75777e] pointer-events-none"
                    : "bg-black text-white hover:bg-[#006399]"
                }`}
              >
                <span className="material-symbols-outlined text-lg">shopping_cart_checkout</span>
                {p.status === "Sold Out" ? "Sold Out" : "Buy Now"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
