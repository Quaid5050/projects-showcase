"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  price: string;
  availability: string;
  suggestedUse: string;
  gradient: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(122,31,61,0.12)" }}
      transition={{ duration: 0.3 }}
      className="h-full flex flex-col rounded-3xl overflow-hidden group"
      style={{ background: "#FFFCF8", border: "1px solid rgba(247,168,196,0.2)", boxShadow: "0 4px 20px rgba(122,31,61,0.06)" }}
    >
      {/* Image area */}
      <div
        className="h-48 shrink-0 relative overflow-hidden cursor-pointer flex items-center justify-center"
        style={{ background: product.gradient }}
        onClick={() => onQuickView(product)}
      >
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            unoptimized
          />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "rgba(122,31,61,0.15)" }}>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "white", color: "#7A1F3D", fontFamily: "Nunito Sans, sans-serif" }}>
            <Eye className="w-4 h-4" />
            Quick View
          </div>
        </div>

        <div className="absolute top-3 right-3 max-w-[48%] px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold truncate" style={{ background: "rgba(255,255,255,0.85)", color: "#7A1F3D", fontFamily: "Nunito Sans, sans-serif" }}>
          {product.category}
        </div>
        <div className="absolute top-3 left-3 flex items-center gap-1 max-w-[48%]">
          <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
          <span className="text-[10px] sm:text-xs truncate" style={{ color: "#2B1821", background: "rgba(255,255,255,0.85)", padding: "1px 6px", borderRadius: "9999px", fontFamily: "Nunito Sans, sans-serif" }}>{product.availability}</span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3
          className="text-lg font-medium mb-2 leading-tight min-h-[3.25rem] cursor-pointer hover:text-maroon-light"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}
          onClick={() => onQuickView(product)}
        >
          {product.name}
        </h3>
        <p className="text-sm mb-4 leading-relaxed flex-1" style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}>
          {product.shortDescription}
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mt-auto">
          <span className="text-xs sm:text-sm font-semibold" style={{ color: "#5C5C5C", fontFamily: "Nunito Sans, sans-serif" }}>
            {product.price}
          </span>
          <button
            onClick={() => onQuickView(product)}
            className="text-xs px-3.5 py-1.5 rounded-full font-semibold whitespace-nowrap w-full sm:w-auto text-center"
            style={{ background: "rgba(122,31,61,0.08)", color: "#7A1F3D", fontFamily: "Nunito Sans, sans-serif" }}
          >
            Quick View
          </button>
        </div>
      </div>
    </motion.div>
  );
}
