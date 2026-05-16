"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";

interface ProductDetailClientProps {
  productId: string;
  productName: string;
  category: string;
  price: string;
  description?: string;
  image: string;
  features?: string[];
}

export default function ProductDetailClient({
  productName,
  category,
  price,
  description,
  image,
  features,
}: ProductDetailClientProps) {
  return (
    <div className="min-h-screen">
      {/* Back link */}
      <div className="border-b border-white/10 bg-luxury-black/80 backdrop-blur-sm sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-yellow-pastel/80 hover:text-gold-primary transition-colors"
            >
              <ArrowLeft size={18} /> Back to products
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <Image
              src={image}
              alt={productName}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/placeholder.svg";
              }}
            />
            <div className="absolute left-4 top-4 rounded-lg bg-luxury-black/85 px-3 py-1.5 text-sm font-medium text-gold-primary backdrop-blur-sm">
              {category}
            </div>
          </motion.div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-2xl tracking-wide text-white sm:text-3xl lg:text-4xl"
            >
              {productName}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-2xl font-semibold text-gold-primary"
            >
              {price}
            </motion.p>
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-6 text-lg leading-relaxed text-yellow-pastel/90"
              >
                {description}
              </motion.p>
            )}

            {features && features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-8"
              >
                <h3 className="font-display text-lg text-gold-primary">Features</h3>
                <ul className="mt-4 space-y-3">
                  {features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                      className="flex items-center gap-3 text-yellow-pastel/90"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-primary/20 text-gold-primary">
                        <Check size={14} />
                      </span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-block w-full rounded-md bg-gradient-to-r from-gold-primary to-yellow-glow px-8 py-4 font-semibold text-luxury-black shadow-[0_0_30px_rgba(249,200,51,0.35)] transition-shadow hover:shadow-[0_0_45px_rgba(249,200,51,0.45)] text-center sm:w-auto"
                >
                  Book Installation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-block w-full rounded-md border-2 border-gold-primary/70 px-8 py-4 font-semibold text-gold-primary transition-colors hover:bg-gold-primary/10 text-center sm:w-auto"
                >
                  Enquire Now
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
