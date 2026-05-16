"use client";

import { CinematicImage } from "@/components/ui/CinematicImage";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef } from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  href?: string;
};

export function ServiceCard({
  title,
  description,
  image,
  imageAlt,
  ctaLabel = "View details",
  href = "/contact",
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const smx = useSpring(mx, { stiffness: 180, damping: 20 });
  const smy = useSpring(my, { stiffness: 180, damping: 20 });
  const border = useMotionTemplate`radial-gradient(420px circle at ${smx}% ${smy}%, rgba(255,255,255,0.45), transparent 55%)`;

  const onMove = (e: React.PointerEvent) => {
    if (!ref.current || reduce) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  return (
    <motion.article
      ref={ref}
      onPointerMove={onMove}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -6, rotateX: 2, rotateY: -2 }}
      style={{ transformPerspective: 900 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl p-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: border }}
      />
      <div className="relative aspect-[16/11] overflow-hidden">
        <CinematicImage
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>
      <div className="relative space-y-3 p-6">
        <h3 className="font-display text-xl text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/60">{description}</p>
        <a
          href={href}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:text-white"
        >
          {ctaLabel}
          <span aria-hidden className="translate-x-0 transition group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </motion.article>
  );
}
