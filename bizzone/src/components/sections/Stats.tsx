"use client";

import { motion } from "framer-motion";
import {
  Sparkles, Wallet, Palette, Headphones, TrendingUp, ShieldCheck, type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Counter from "@/components/ui/Counter";
import { STATS } from "@/lib/site";

interface Reason {
  title: string;
  desc: string;
  icon: LucideIcon;
}

const REASONS: Reason[] = [
  { title: "Modern Design", desc: "Cutting-edge, premium interfaces.", icon: Sparkles },
  { title: "Creative Solutions", desc: "Distinctive, on-brand creative.", icon: Palette },
  { title: "Affordable Cost", desc: "Premium quality, fair pricing.", icon: Wallet },
  { title: "24/7 Support", desc: "Always-on, responsive help.", icon: Headphones },
  { title: "Business Growth", desc: "Built to scale your revenue.", icon: TrendingUp },
  { title: "Safe & Secure", desc: "Best-practice security baked in.", icon: ShieldCheck },
];

const HEX = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
const HW = 204;
const HH = 228;
const S = HW + 14;
const V = Math.round(HH * 0.76);

// honeycomb positions (two offset rows of three)
const POS = [
  { x: 0, y: 0 },
  { x: S, y: 0 },
  { x: 2 * S, y: 0 },
  { x: S / 2, y: V },
  { x: S / 2 + S, y: V },
  { x: S / 2 + 2 * S, y: V },
];
const BOARD_W = S / 2 + 2 * S + HW;
const BOARD_H = V + HH;

function HexCard({ reason, i, style }: { reason: Reason; i: number; style?: React.CSSProperties }) {
  const Icon = reason.icon;
  return (
    <motion.div
      className="group"
      style={style}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 200, damping: 18, delay: i * 0.09 }}
      whileHover={{ scale: 1.06, zIndex: 20 }}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
      >
        {/* glow */}
        <div className="pointer-events-none absolute inset-4 -z-10 rounded-full bg-brand-purple/25 blur-xl transition-opacity duration-500 group-hover:bg-brand-green/30 group-hover:opacity-100" />
        {/* gradient border */}
        <div className="absolute inset-0" style={{ clipPath: HEX, background: "linear-gradient(160deg, rgba(217,255,77,0.9), rgba(164,53,255,0.9))" }} />
        {/* inner glass */}
        <div
          className="absolute inset-[2px] flex flex-col items-center justify-center gap-2.5 px-10 text-center"
          style={{ clipPath: HEX, background: "linear-gradient(160deg, rgba(18,12,32,0.96), rgba(8,5,16,0.98))" }}
        >
          <span className="relative grid h-14 w-14 place-items-center">
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-purple/40 to-brand-green/30 blur-sm transition-all duration-500 group-hover:from-brand-green/40 group-hover:to-brand-purple/40" />
            <span className="relative grid h-full w-full place-items-center rounded-2xl border border-white/10 bg-ink-card">
              <Icon className="h-6 w-6 text-brand-green transition-transform duration-500 group-hover:scale-110" strokeWidth={1.7} />
            </span>
          </span>
          <h3 className="font-display text-sm font-semibold text-white">{reason.title}</h3>
          <p className="text-[11px] leading-relaxed text-white/55">{reason.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-purple/15 blur-[130px]" />
      <div className="section">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>Built Around <span className="text-gradient-brand">Your Success</span></>}
          subtitle="Six reasons ambitious brands trust BizzOne Digital to design, build and grow with them."
        />

        {/* Desktop honeycomb */}
        <div className="mt-16 hidden justify-center lg:flex">
          <div className="relative" style={{ width: BOARD_W, height: BOARD_H }}>
            {REASONS.map((r, i) => (
              <HexCard
                key={r.title}
                reason={r}
                i={i}
                style={{ position: "absolute", left: POS[i].x, top: POS[i].y, width: HW, height: HH }}
              />
            ))}
          </div>
        </div>

        {/* Mobile honeycomb-ish grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:hidden">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.06 }}
                className="relative mx-auto aspect-[204/228] w-full max-w-[200px]"
              >
                <div className="absolute inset-0" style={{ clipPath: HEX, background: "linear-gradient(160deg, rgba(217,255,77,0.9), rgba(164,53,255,0.9))" }} />
                <div className="absolute inset-[2px] flex flex-col items-center justify-center gap-2 px-7 text-center" style={{ clipPath: HEX, background: "linear-gradient(160deg, rgba(18,12,32,0.96), rgba(8,5,16,0.98))" }}>
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-ink-card">
                    <Icon className="h-5 w-5 text-brand-green" strokeWidth={1.7} />
                  </span>
                  <h3 className="font-display text-xs font-semibold text-white">{r.title}</h3>
                  <p className="text-[10px] leading-snug text-white/55">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* stat counters */}
        <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass p-7 text-center"
            >
              <div
                className="pointer-events-none absolute inset-x-0 -top-10 h-24 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(50% 100% at 50% 0%, rgba(198,245,41,0.4), transparent)" }}
              />
              <div className="relative font-display text-4xl font-extrabold text-gradient sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="relative mt-2 text-sm font-medium text-white/55">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}