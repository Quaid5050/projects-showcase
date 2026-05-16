"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
};

export function LightSweepHeading({
  as: Tag = "h2",
  children,
  className = "",
}: Props) {
  const reduce = useReducedMotion();

  return (
    <Tag className={`relative inline-block overflow-hidden ${className}`}>
      <span className="relative z-10">{children}</span>
      {!reduce && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 mix-blend-screen"
          initial={false}
          animate={{ x: ["-120%", "120%"] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.35) 50%, transparent 65%)",
            width: "45%",
            height: "100%",
            opacity: 0.55,
          }}
        />
      )}
    </Tag>
  );
}
