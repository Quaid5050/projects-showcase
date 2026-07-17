"use client";

import { motion } from "framer-motion";

interface MoonGlowProps {
  size?: number;
  color?: string;
  className?: string;
  intensity?: "soft" | "medium" | "strong";
}

export default function MoonGlow({
  size = 400,
  color = "rgba(246, 200, 95, 0.25)",
  className = "",
  intensity = "soft",
}: MoonGlowProps) {
  const opacityMap = { soft: [0.4, 0.7], medium: [0.5, 0.9], strong: [0.7, 1] };
  const [minOp, maxOp] = opacityMap[intensity];

  return (
    <motion.div
      animate={{ opacity: [minOp, maxOp, minOp], scale: [1, 1.08, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
