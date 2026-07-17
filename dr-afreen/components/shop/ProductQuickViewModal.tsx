"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

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

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductQuickViewModal({ product, onClose }: ProductQuickViewModalProps) {
  if (!product) return null;

  const whatsappUrl = `https://wa.me/16477819461?text=Hi%20Dr.%20Afreen%2C%20I'm%20interested%20in%20ordering%20${encodeURIComponent(product.name)}.%20Please%20share%20details.`;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9000] flex items-center justify-center p-4"
          style={{ background: "rgba(43,24,33,0.65)", backdropFilter: "blur(8px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
            style={{ background: "#FFFCF8", boxShadow: "0 24px 80px rgba(122,31,61,0.25)" }}
          >
            {/* Image */}
            <div className="h-52 relative overflow-hidden flex items-center justify-center" style={{ background: product.gradient }}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain object-center p-4"
                sizes="448px"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.85)" }}
                aria-label="Close"
              >
                <X className="w-4 h-4" style={{ color: "#7A1F3D" }} />
              </button>
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(255,255,255,0.85)", color: "#7A1F3D", fontFamily: "Nunito Sans, sans-serif" }}>
                {product.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-light mb-3 leading-tight" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}>
                {product.name}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}>
                {product.description}
              </p>

              <div className="p-4 rounded-2xl mb-5" style={{ background: "#FFE8F0" }}>
                <p className="text-xs font-semibold mb-1" style={{ color: "#7A1F3D", fontFamily: "Nunito Sans, sans-serif" }}>Suggested Use</p>
                <p className="text-sm" style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}>{product.suggestedUse}</p>
              </div>

              <div className="flex items-center justify-between mb-6 p-4 rounded-2xl" style={{ background: "#FFF8EF" }}>
                <div>
                  <p className="text-xs" style={{ color: "#9B6878", fontFamily: "Nunito Sans, sans-serif" }}>Price</p>
                  <p className="text-base font-semibold" style={{ color: "#F6C85F", fontFamily: "Nunito Sans, sans-serif" }}>{product.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-sm" style={{ color: "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}>{product.availability}</span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold text-white text-base"
                style={{ background: "#25D366", fontFamily: "Nunito Sans, sans-serif" }}
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
