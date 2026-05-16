"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ProductCardData {
  id: string;
  name: string;
  category: string;
  price: string;
  description?: string;
  image: string;
}

interface ProductCardProps {
  product: ProductCardData;
  index?: number;
  className?: string;
  showQuickView?: boolean;
}

export default function ProductCard({
  product,
  index = 0,
  className,
  showQuickView = true,
}: ProductCardProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [index]);

  return (
    <article ref={ref} className={cn("group", className)} style={{ opacity: 0 }}>
      <Link href={`/products/${product.id}`} className="block">
        <motion.div
          className="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-gold-primary/40"
          whileHover={{
            y: -6,
            boxShadow:
              "0 20px 50px -15px rgba(0,0,0,0.4), 0 0 35px rgba(249,200,51,0.12)",
            transition: { duration: 0.3 },
          }}
        >
          <div className="relative aspect-square overflow-hidden">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={product.image || "/images/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/placeholder.svg";
                }}
              />
            </motion.div>
            {showQuickView && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-luxury-black/70"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                <span className="flex items-center gap-2 rounded-full border border-gold-primary/60 bg-luxury-black/90 px-5 py-2.5 text-sm font-medium text-gold-primary shadow-lg">
                  <Eye size={18} /> Quick view
                </span>
              </motion.div>
            )}
            <div className="absolute left-3 top-3 rounded-md bg-luxury-black/85 px-2.5 py-1.5 text-xs font-medium text-gold-primary backdrop-blur-sm">
              {product.category}
            </div>
          </div>
          <div className="p-3 sm:p-4">
            <h3 className="font-display text-base text-white sm:text-lg">{product.name}</h3>
            <p className="mt-1 text-sm text-gold-primary font-medium sm:text-base">{product.price}</p>
            {product.description && (
              <p className="mt-1 line-clamp-2 text-xs text-yellow-pastel/70 sm:mt-2 sm:text-sm">
                {product.description}
              </p>
            )}
          </div>
        </motion.div>
      </Link>
    </article>
  );
}
