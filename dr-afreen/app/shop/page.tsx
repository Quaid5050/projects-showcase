"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProductCard from "@/components/shop/ProductCard";
import ProductQuickViewModal from "@/components/shop/ProductQuickViewModal";
import MoonGlow from "@/components/ui/MoonGlow";

const allProducts = [
  {
    id: 1,
    name: "Women's Wellness Support Remedy",
    category: "Women's Wellness",
    shortDescription: "Gentle homeopathic support for women's everyday wellness.",
    description: "A carefully selected homeopathic remedy designed to offer gentle support for women's wellness concerns. Prepared with care to support your body's natural balance.",
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
    description: "A gentle homeopathic formula offering wellness support for children. Prepared with care and safety in mind.",
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
    name: "Skin & Hair Wellness Support",
    category: "Women's Wellness",
    shortDescription: "Holistic homeopathic support for skin and hair wellness.",
    description: "A thoughtfully prepared homeopathic remedy to support skin and hair wellness from the inside out.",
    price: "Contact on WhatsApp",
    availability: "Available",
    suggestedUse: "Best used alongside a personalized consultation with Dr. Afreen.",
    gradient: "linear-gradient(135deg, #FFF0F5 0%, #FFE8F0 100%)",
    image: "/product-skin-hair.png",
  },
  {
    id: 5,
    name: "Stress & Sleep Support",
    category: "General Wellness",
    shortDescription: "Calming homeopathic support for stress and sleep wellness.",
    description: "A soothing homeopathic remedy offering gentle support for stress management and sleep quality.",
    price: "Contact on WhatsApp",
    availability: "Available",
    suggestedUse: "Consult Dr. Afreen for individualized recommendations.",
    gradient: "linear-gradient(135deg, #FFF0F5 0%, #FFE8F0 100%)",
    image: "/product-stress-sleep.png",
  },
  {
    id: 6,
    name: "General Family Wellness Remedy",
    category: "General Wellness",
    shortDescription: "Comprehensive wellness support for the whole family.",
    description: "A versatile homeopathic remedy designed to support general wellness for family members of all ages.",
    price: "Contact on WhatsApp",
    availability: "Available",
    suggestedUse: "Suitable for adults. Consult for children's dosage guidance.",
    gradient: "linear-gradient(135deg, #FFE8F0 0%, #FFF8EF 100%)",
    image: "/product-family-wellness.png",
  },
  {
    id: 7,
    name: "Seasonal Wellness Support",
    category: "General Wellness",
    shortDescription: "Gentle support for seasonal wellness transitions.",
    description: "A carefully selected homeopathic remedy to support your body during seasonal changes and transitions.",
    price: "Contact on WhatsApp",
    availability: "Available",
    suggestedUse: "Consult Dr. Afreen for best seasonal wellness approach.",
    gradient: "linear-gradient(135deg, #FFF8EF 0%, #FBE4A0 100%)",
    image: "/product-seasonal.png",
  },
  {
    id: 8,
    name: "Natural Care Consultation Product",
    category: "Homeopathic Remedies",
    shortDescription: "Ask about available natural care remedies for your specific needs.",
    description: "A consultation-based product selection tailored to your individual wellness needs. Message Dr. Afreen to discuss the right option for you.",
    price: "Contact on WhatsApp",
    availability: "By Consultation",
    suggestedUse: "Available through personal consultation with Dr. Afreen only.",
    gradient: "linear-gradient(135deg, #FFE8F0 0%, #FFFCF8 100%)",
    image: "/product-consultation.png",
  },
];

const categories = ["All", "Women's Wellness", "Children's Support", "General Wellness", "Homeopathic Remedies"];

type Product = (typeof allProducts)[number];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = activeCategory === "All"
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory);

  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-[65vh] flex items-center pt-28 pb-24 sm:pb-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #FFFCF8 0%, #FFE8F0 50%, #FFF8EF 100%)" }}
      >
        <MoonGlow size={500} color="rgba(246,200,95,0.15)" className="top-1/2 left-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ background: "#F6C85F" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#F6C85F", fontFamily: "Nunito Sans, sans-serif" }}>Products</span>
              <span className="w-8 h-px" style={{ background: "#F6C85F" }} />
            </div>
            <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}>
              Homeopathic Products<br /><span className="italic">& Wellness Support</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}>
              Browse available wellness products and message directly on WhatsApp to order or ask questions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters + Products */}
      <section className="section-padding" style={{ background: "#FFF8EF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
                  style={{
                    background: activeCategory === cat ? "linear-gradient(135deg, #7A1F3D, #4B1025)" : "rgba(247,168,196,0.12)",
                    color: activeCategory === cat ? "white" : "#7A1F3D",
                    border: activeCategory === cat ? "none" : "1px solid rgba(247,168,196,0.3)",
                    fontFamily: "Nunito Sans, sans-serif",
                    boxShadow: activeCategory === cat ? "0 4px 16px rgba(122,31,61,0.2)" : "none",
                  }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {filtered.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.06} className="h-full">
                <ProductCard product={product} onQuickView={setSelectedProduct} />
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <ShoppingBag className="w-12 h-12 mx-auto mb-4" style={{ color: "#F7A8C4" }} />
              <p style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}>No products in this category yet.</p>
            </div>
          )}

          {/* Order note */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 p-6 rounded-3xl text-center max-w-2xl mx-auto" style={{ background: "rgba(247,168,196,0.1)", border: "1px solid rgba(247,168,196,0.3)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}>
                <strong style={{ color: "#7A1F3D" }}>How to Order:</strong> Click any product to view details, then tap &quot;Order on WhatsApp&quot; to message Dr. Afreen directly. All orders and inquiries are handled personally.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ProductQuickViewModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </main>
  );
}
