"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, x)));
  };

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, x)));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      ref={containerRef}
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/30 ring-1 ring-gold-primary/20",
        className,
      )}
      onMouseMove={handleMove}
      onMouseLeave={() => setPosition(50)}
      onTouchMove={handleTouch}
    >
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt="After"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/placeholder.svg";
          }}
        />
        <span className="absolute left-4 top-4 rounded bg-luxury-black/80 px-3 py-1 text-sm font-medium text-yellow-pastel">
          {afterLabel}
        </span>
      </div>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Before"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/placeholder.svg";
          }}
        />
        <span className="absolute right-4 top-4 rounded bg-gold-primary/90 px-3 py-1 text-sm font-medium text-luxury-black">
          {beforeLabel}
        </span>
      </div>
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-gold-primary transition-[left] duration-75"
        style={{ left: `${position}%`, transform: "translateX(-50%)", boxShadow: "0 0 20px rgba(249,200,51,0.6)" }}
      >
        <motion.div
          className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold-primary bg-luxury-black flex items-center justify-center cursor-ew-resize sm:h-14 sm:w-14"
          whileHover={{ scale: 1.1 }}
          style={{ boxShadow: "0 0 25px rgba(249,200,51,0.4)" }}
        >
          <span className="text-gold-primary text-xl">⟷</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
