"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Award, CheckCircle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap = {
  shield: Shield,
  award: Award,
  "check-circle": CheckCircle,
  lock: Lock,
} as const;

export type WhyChooseIconName = keyof typeof iconMap;

interface WhyChooseCardProps {
  item: {
    icon: WhyChooseIconName;
    title: string;
    description: string;
  };
  index: number;
  className?: string;
}

export default function WhyChooseCard({ item, index, className }: WhyChooseCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = iconMap[item.icon] ?? Shield;

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 36, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-colors duration-300 hover:border-gold-primary/30 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.35),0_0_30px_rgba(249,200,51,0.12)]",
        className
      )}
      style={{ opacity: 0 }}
    >
      <motion.div
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-primary/20 text-gold-primary transition-colors duration-300 group-hover:bg-gold-primary/30 sm:h-16 sm:w-16"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Icon size={28} />
      </motion.div>
      <h3 className="mt-5 font-display text-lg text-white">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-yellow-pastel/80">
        {item.description}
      </p>
    </motion.div>
  );
}
