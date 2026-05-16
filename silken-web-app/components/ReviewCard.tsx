"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ReviewCardData {
  id: string;
  name: string;
  carModel: string;
  review: string;
  rating: number;
}

interface ReviewCardProps {
  review: ReviewCardData;
  index?: number;
  className?: string;
}

export default function ReviewCard({ review, index = 0, className }: ReviewCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
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
    <motion.div
      ref={ref}
      whileHover={{
        y: -4,
        boxShadow:
          "0 20px 45px -15px rgba(0,0,0,0.35), 0 0 30px rgba(249,200,51,0.1)",
        borderColor: "rgba(249,200,51,0.25)",
        transition: { duration: 0.3 },
      }}
      className={cn(
        "rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors duration-300 sm:p-6",
        className
      )}
      style={{ opacity: 0 }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex gap-1 text-gold-primary">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < review.rating ? "fill-current" : "opacity-40"}
            />
          ))}
        </div>
        <Quote className="h-8 w-8 shrink-0 text-gold-primary/20" />
      </div>
      <p className="mt-4 text-yellow-pastel/90 leading-relaxed">
        &ldquo;{review.review}&rdquo;
      </p>
      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="font-semibold text-white">{review.name}</p>
        <p className="text-sm text-gold-primary/90">{review.carModel}</p>
      </div>
    </motion.div>
  );
}
