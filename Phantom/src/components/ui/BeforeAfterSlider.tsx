"use client";

import { useReducedMotion, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { resolvePlaceholderSrc } from "@/lib/placeholder-images";

const BEFORE = "/placeholders/before-after-before.jpg";
const AFTER = "/placeholders/before-after-after.jpg";

export function BeforeAfterSlider() {
  const reduce = useReducedMotion();
  const [pct, setPct] = useState(52);
  const dragging = useRef(false);
  const track = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = track.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - r.left, 0), r.width);
    setPct(Math.round((x / r.width) * 100));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  return (
    <figure
      className="glass-panel relative aspect-[16/10] w-full overflow-hidden rounded-2xl"
      aria-label="Before and after vehicle detailing comparison; drag to compare"
    >
      {/* Full frame = "after" service result (gloss / corrected). */}
      <Image
        src={resolvePlaceholderSrc(AFTER)}
        alt="After detailing and paint correction: high-gloss finish and depth"
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 960px"
        priority={false}
      />
      {/* Clipped overlay on the left = "before" condition; drag handle reveals more "after" on the right. */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
      >
        <Image
          src={resolvePlaceholderSrc(BEFORE)}
          alt="Before service: duller finish and less clarity prior to correction"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 960px"
        />
      </div>
      <div
        ref={track}
        className="absolute inset-0 cursor-ew-resize"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-label="Drag to compare before and after"
        tabIndex={0}
        onKeyDown={(e) => {
          const step = e.shiftKey ? 10 : 3;
          if (e.key === "ArrowLeft") setPct((p) => Math.max(0, p - step));
          if (e.key === "ArrowRight") setPct((p) => Math.min(100, p + step));
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-white/80 shadow-[0_0_24px_rgba(255,255,255,0.45)]"
        style={{ left: `${pct}%` }}
      />
      <motion.div
        className="absolute top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/60 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md"
        style={{ left: `${pct}%` }}
        animate={reduce ? undefined : { boxShadow: ["0 0 0 0 rgba(255,255,255,0)", "0 0 0 10px rgba(255,255,255,0.06)", "0 0 0 0 rgba(255,255,255,0)"] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        ⟷
      </motion.div>
      <figcaption className="pointer-events-none absolute bottom-3 left-3 right-3 flex justify-between text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
        <span>Before</span>
        <span>After</span>
      </figcaption>
    </figure>
  );
}
