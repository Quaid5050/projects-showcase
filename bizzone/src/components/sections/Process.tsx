"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search, ClipboardList, Palette, Code2, Rocket, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

interface Step {
  n: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const STEPS: Step[] = [
  { n: "01", title: "Discovery", description: "We learn your goals, audience and market to set the strategy.", icon: Search },
  { n: "02", title: "Planning", description: "A clear roadmap, scope and architecture — aligned upfront.", icon: ClipboardList },
  { n: "03", title: "Design", description: "Premium UI/UX crafted around your brand.", icon: Palette },
  { n: "04", title: "Development", description: "Clean, scalable, future-proof engineering.", icon: Code2 },
  { n: "05", title: "Launch & Support", description: "A smooth launch, then ongoing growth and support.", icon: Rocket },
];

const H = 480;
const UP_Y = 150;
const DOWN_Y = 330;
const BADGE = 80;
const R = 48; // trim radius for connector endpoints
const OFFSET = 72; // text distance from badge center

function Badge({ icon: Icon, size = BADGE }: { icon: LucideIcon; size?: number }) {
  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <div className="absolute -inset-0.5 -z-10 rounded-full bg-brand-purple/25 blur-md" />
      <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(160deg, #d9ff4d, #a435ff)" }} />
      <div className="absolute inset-[3px] grid place-items-center rounded-full bg-ink-card">
        <Icon className="text-brand-green" style={{ width: size * 0.34, height: size * 0.34 }} strokeWidth={1.6} />
      </div>
      <div
        className="absolute inset-0 rounded-full opacity-40"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.35), transparent 45%)" }}
      />
    </div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(1100);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setW(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const n = STEPS.length;
  const pad = Math.max(100, w * 0.09);
  const cx = (i: number) => pad + (i * (w - 2 * pad)) / (n - 1);
  const cy = (i: number) => (i % 2 === 0 ? UP_Y : DOWN_Y);

  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-brand-green/10 blur-[120px]" />
      <div className="section">
        <SectionHeading
          eyebrow="How We Work"
          title={<>A Process Built for <span className="text-gradient-brand">Clarity</span></>}
          subtitle="Five proven steps that keep every project on time, on budget and aligned with your goals."
        />

        {/* Desktop zig-zag flow */}
        <div ref={ref} className="relative mx-auto mt-10 hidden max-w-6xl lg:block" style={{ height: H }}>
          {/* dashed connectors (trimmed to circle edges) */}
          <svg className="absolute inset-0" width="100%" height={H} viewBox={`0 0 ${w} ${H}`} preserveAspectRatio="none" fill="none">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#c6f529" />
              </marker>
            </defs>
            {Array.from({ length: n - 1 }).map((_, i) => {
              const x1 = cx(i) + R;
              const y1 = cy(i);
              const x2 = cx(i + 1) - R;
              const y2 = cy(i + 1);
              const mx = (cx(i) + cx(i + 1)) / 2;
              const d = `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
              return (
                <motion.path
                  key={i}
                  d={d}
                  stroke="rgba(198,245,41,0.6)"
                  strokeWidth={2}
                  strokeDasharray="5 10"
                  strokeLinecap="round"
                  markerEnd="url(#arrow)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, strokeDashoffset: [0, -30] }}
                  viewport={{ once: true }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.2 + i * 0.2 },
                    strokeDashoffset: { duration: 1.4, repeat: Infinity, ease: "linear" },
                  }}
                />
              );
            })}
          </svg>

          {/* steps — outer div positions (static transform), inner motion handles animation */}
          {STEPS.map((step, i) => {
            const up = i % 2 === 0;
            const x = cx(i);
            const y = cy(i);
            return (
              <div key={step.n}>
                {/* badge */}
                <div className="absolute z-10" style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}>
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 220, damping: 16, delay: i * 0.16 }}
                  >
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}>
                      <Badge icon={step.icon} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* text */}
                <div
                  className="absolute z-10 w-44 text-center"
                  style={{
                    left: x,
                    top: up ? y + OFFSET : y - OFFSET,
                    transform: up ? "translateX(-50%)" : "translate(-50%, -100%)",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: up ? 12 : -12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.16 + 0.15 }}
                  >
                    <div className="font-display text-2xl font-extrabold text-white/85">{step.n}</div>
                    <h3 className="mt-1 font-display text-base font-semibold text-brand-green">{step.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/55">{step.description}</p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile vertical timeline */}
        <div className="relative mt-12 pl-20 lg:hidden">
          <div className="absolute left-[34px] top-3 bottom-3 border-l-2 border-dashed border-brand-green/30" />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative mb-9 last:mb-0"
            >
              <div className="absolute -left-20 top-0">
                <Badge icon={step.icon} size={58} />
              </div>
              <div className="font-display text-xl font-extrabold text-white/85">{step.n}</div>
              <h3 className="mt-0.5 font-display text-base font-semibold text-brand-green">{step.title}</h3>
              <p className="mt-1 max-w-xs text-sm leading-relaxed text-white/55">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}