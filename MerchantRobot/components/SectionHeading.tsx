"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        textAlign: center ? "center" : "left",
        marginBottom: 56,
      }}
    >
      {badge && (
        <span className="badge" style={{ marginBottom: 16 }}>
          {badge}
        </span>
      )}
      <h2 style={{
        fontFamily: "'Sora', sans-serif",
        fontSize: "clamp(28px, 4.5vw, 48px)",
        fontWeight: 700,
        color: light ? "#0d0d0d" : "#fafafa",
        lineHeight: 1.15,
        letterSpacing: "-0.025em",
        marginBottom: 16,
        marginTop: badge ? 12 : 0,
      }}>
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 17,
          color: light ? "rgba(42,42,42,0.7)" : "rgba(250,250,250,0.6)",
          lineHeight: 1.7,
          maxWidth: 580,
          margin: center ? "0 auto" : "0",
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
