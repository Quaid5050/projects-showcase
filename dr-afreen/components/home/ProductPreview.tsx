"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, MessageCircle, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const WHATSAPP_BASE = "https://wa.me/16477819461?text=";

const featuredProducts = [
  {
    id: 1,
    name: "Women's Wellness Support Remedy",
    category: "Women's Wellness",
    shortDescription: "Gentle homeopathic support for women's everyday wellness.",
    description: "A carefully selected homeopathic remedy designed to offer gentle support for women's wellness concerns. Each bottle is prepared with care to support your body's natural balance.",
    price: "Contact on WhatsApp",
    availability: "Available",
    suggestedUse: "Please consult with Dr. Afreen for personalized guidance on use and dosage.",
    gradient: "linear-gradient(135deg, #FFE8F0 0%, #FFF0F5 100%)",
    image: "/product-women-wellness.png",
  },
  {
    id: 2,
    name: "Children's Gentle Wellness Remedy",
    category: "Children's Support",
    shortDescription: "Safe, gentle homeopathic support tailored for children.",
    description: "A gentle homeopathic formula offering wellness support for children. Prepared with care and safety in mind, suitable for consultation with Dr. Afreen.",
    price: "Contact on WhatsApp",
    availability: "Available",
    suggestedUse: "Consult Dr. Afreen before use. Dosage varies by age and concern.",
    gradient: "linear-gradient(135deg, #FFF8EF 0%, #FBE4A0 100%)",
    image: "/product-children-wellness.png",
  },
  {
    id: 3,
    name: "Digestive Comfort Support",
    category: "General Wellness",
    shortDescription: "Homeopathic support for everyday digestive comfort.",
    description: "Gentle homeopathic support to promote digestive comfort and wellbeing. Best used in conjunction with a personalized consultation.",
    price: "Contact on WhatsApp",
    availability: "Available",
    suggestedUse: "For best results, discuss your specific concerns with Dr. Afreen.",
    gradient: "linear-gradient(135deg, #FFE8F0 0%, #FFFCF8 100%)",
    image: "/product-digestive.png",
  },
  {
    id: 4,
    name: "Stress & Sleep Support",
    category: "General Wellness",
    shortDescription: "Calming homeopathic support for stress and sleep wellness.",
    description: "A soothing homeopathic remedy offering gentle support for stress management and sleep quality. Personalized guidance available through consultation.",
    price: "Contact on WhatsApp",
    availability: "Available",
    suggestedUse: "Consult Dr. Afreen for individualized recommendations.",
    gradient: "linear-gradient(135deg, #FFF0F5 0%, #FFE8F0 100%)",
    image: "/product-stress-sleep.png",
  },
];

type Product = (typeof featuredProducts)[number];

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <ScrollReveal className="h-full">
      <motion.div
        whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(122,31,61,0.12)" }}
        transition={{ duration: 0.3 }}
        className="h-full flex flex-col rounded-3xl overflow-hidden cursor-pointer group"
        style={{ background: product.gradient, border: "1px solid rgba(247,168,196,0.2)", boxShadow: "0 4px 20px rgba(122,31,61,0.06)" }}
        onClick={onClick}
      >
        {/* Image area */}
        <div className="h-44 shrink-0 relative overflow-hidden flex items-center justify-center" style={{ background: "rgba(255,252,248,0.6)" }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain object-center p-3 transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, 25vw"
          />
          <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(255,255,255,0.8)", color: "#7A1F3D", fontFamily: "Nunito Sans, sans-serif" }}>
            {product.category}
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-medium mb-2 leading-tight min-h-[3.25rem]" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}>
            {product.name}
          </h3>
          <p className="text-sm mb-4 leading-relaxed flex-1" style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}>
            {product.shortDescription}
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mt-auto">
            <span className="text-xs font-semibold" style={{ color: "#5C5C5C", fontFamily: "Nunito Sans, sans-serif" }}>
              {product.price}
            </span>
            <button
              onClick={(e) => { e.stopPropagation(); onClick(); }}
              className="text-xs px-3.5 py-1.5 rounded-full font-semibold whitespace-nowrap w-full sm:w-auto text-center transition-colors"
              style={{ background: "rgba(122,31,61,0.08)", color: "#7A1F3D", fontFamily: "Nunito Sans, sans-serif" }}
            >
              Quick View
            </button>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9000] flex items-center justify-center p-4"
      style={{ background: "rgba(43,24,33,0.6)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-3xl overflow-hidden"
        style={{ background: "#FFFCF8", boxShadow: "0 24px 80px rgba(122,31,61,0.25)" }}
      >
        <div className="h-48 relative overflow-hidden flex items-center justify-center" style={{ background: product.gradient }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain object-center p-4"
            sizes="448px"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.8)" }}
          >
            <X className="w-4 h-4" style={{ color: "#7A1F3D" }} />
          </button>
          <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(255,255,255,0.85)", color: "#7A1F3D", fontFamily: "Nunito Sans, sans-serif" }}>
            {product.category}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-light mb-3" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}>
            {product.name}
          </h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}>
            {product.description}
          </p>

          <div className="p-3 rounded-xl mb-4" style={{ background: "#FFE8F0" }}>
            <p className="text-xs font-semibold mb-1" style={{ color: "#7A1F3D", fontFamily: "Nunito Sans, sans-serif" }}>Suggested Use</p>
            <p className="text-xs" style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}>{product.suggestedUse}</p>
          </div>

          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs" style={{ color: "#9B6878", fontFamily: "Nunito Sans, sans-serif" }}>Price</p>
              <p className="text-sm font-semibold" style={{ color: "#5C5C5C", fontFamily: "Nunito Sans, sans-serif" }}>{product.price}</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs" style={{ color: "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}>{product.availability}</span>
            </div>
          </div>

          <a
            href={`${WHATSAPP_BASE}Hi%20Dr.%20Afreen%2C%20I'm%20interested%20in%20ordering%20${encodeURIComponent(product.name)}.%20Please%20share%20details.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-white"
            style={{ background: "#25D366", fontFamily: "Nunito Sans, sans-serif" }}
          >
            <MessageCircle className="w-5 h-5" />
            Order on WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProductPreview() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="section-padding" style={{ background: "#FFFCF8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeading
            label="Products"
            title="Homeopathic Wellness Products"
            subtitle="Browse our available wellness products. Message Dr. Afreen on WhatsApp to order or ask questions."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-10">
            <a
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold border-2 transition-all hover:-translate-y-0.5"
              style={{ borderColor: "#7A1F3D", color: "#7A1F3D", fontFamily: "Nunito Sans, sans-serif" }}
            >
              <ShoppingBag className="w-4 h-4" />
              View All Products
            </a>
          </div>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
