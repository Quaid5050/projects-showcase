"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ServiceCardData {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
}

interface ServiceCardProps {
  service: ServiceCardData;
  index?: number;
  className?: string;
}

export default function ServiceCard({ service, index = 0, className }: ServiceCardProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          delay: index * 0.12,
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
      <Link href={`/services/${service.slug}`} className="block">
        <motion.div
          className="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-gold-primary/40"
          whileHover={{
            y: -6,
            boxShadow:
              "0 20px 50px -15px rgba(0,0,0,0.4), 0 0 40px rgba(249,200,51,0.15)",
            transition: { duration: 0.3 },
          }}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={service.image || "/images/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/placeholder.svg";
                }}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/95 via-luxury-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-display text-lg text-white sm:text-xl md:text-2xl">
                {service.title}
              </h3>
            </div>
          </div>
          <div className="p-5">
            <p className="text-sm text-yellow-pastel/80 line-clamp-2">
              {service.shortDescription}
            </p>
            <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gold-primary group-hover:gap-3 transition-all duration-300">
              Learn more <ArrowRight size={18} />
            </span>
          </div>
        </motion.div>
      </Link>
    </article>
  );
}
