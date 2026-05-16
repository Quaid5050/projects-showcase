"use client";

import { useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { motion } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  "aria-label"?: string;
  disabled?: boolean;
};

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  type = "button",
  "aria-label": ariaLabel,
  disabled,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e: React.PointerEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = e.clientX - (r.left + r.width / 2);
    const py = e.clientY - (r.top + r.height / 2);
    x.set(px * 0.12);
    y.set(py * 0.12);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.span
      style={reduce ? undefined : { x: sx, y: sy }}
      className="inline-flex items-center justify-center"
    >
      {children}
    </motion.span>
  );

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      className="inline-flex"
    >
      {href ? (
        <a
          href={href}
          className={className}
          aria-label={ariaLabel}
          onClick={onClick}
        >
          {inner}
        </a>
      ) : (
        <button
          type={type}
          className={className}
          aria-label={ariaLabel}
          onClick={onClick}
          disabled={disabled}
        >
          {inner}
        </button>
      )}
    </div>
  );
}
