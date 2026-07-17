"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={center ? "text-center" : ""}
    >
      {label && (
        <div className="flex items-center gap-3 mb-3 justify-center">
          <span className="w-8 h-px" style={{ background: "#F6C85F" }} />
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: "#F6C85F", fontFamily: "Nunito Sans, sans-serif" }}
          >
            {label}
          </span>
          <span className="w-8 h-px" style={{ background: "#F6C85F" }} />
        </div>
      )}
      <h2
        className="text-4xl md:text-5xl font-light leading-tight"
        style={{
          fontFamily: "Cormorant Garamond, Georgia, serif",
          color: light ? "#FFFCF8" : "#7A1F3D",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: light ? "rgba(255,240,245,0.85)" : "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
