"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { type Service } from "@/lib/site";

const HEX = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className="group relative flex h-full flex-col items-center overflow-hidden rounded-[1.75rem] glass p-7 text-center transition-shadow duration-500 hover:shadow-glow-purple"
    >
      {/* soft inner glow that brightens on hover (like the featured card) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(120% 90% at 50% -10%, rgba(164,53,255,0.28), transparent 60%)" }}
      />

      {/* diagonal light-ray sheen */}
      <div className="pointer-events-none absolute -top-10 left-0 h-32 w-full -rotate-12 opacity-40 transition-opacity duration-500 group-hover:opacity-90"
        style={{ background: "linear-gradient(100deg, transparent 20%, rgba(255,255,255,0.16) 50%, transparent 80%)" }}
      />

      {/* glowing hexagon icon badge */}
      <div className="relative mb-6 mt-2 h-16 w-16">
        <div className="absolute inset-0 -z-10 scale-[1.7] rounded-full bg-brand-purple/35 blur-xl opacity-50 transition-opacity duration-500 group-hover:opacity-90" />
        {/* gradient edge */}
        <div
          className="absolute inset-0"
          style={{ clipPath: HEX, background: "linear-gradient(160deg, rgba(217,255,77,0.95), rgba(164,53,255,0.95))" }}
        />
        {/* frosted inner */}
        <div
          className="absolute inset-[2px] grid place-items-center"
          style={{ clipPath: HEX, background: "linear-gradient(160deg, rgba(22,14,38,0.9), rgba(8,5,16,0.95))" }}
        >
          <Icon className="h-6 w-6 text-brand-green transition-transform duration-500 group-hover:scale-110" strokeWidth={1.6} />
        </div>
        {/* glass sheen */}
        <div
          className="absolute inset-0 opacity-50"
          style={{ clipPath: HEX, background: "linear-gradient(180deg, rgba(255,255,255,0.4), transparent 45%)" }}
        />
      </div>

      <h3 className="relative font-display text-lg font-semibold text-white">{service.title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-white/55 line-clamp-4">
        {service.description}
      </p>

      <a
        href="#contact"
        className="relative mt-auto inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 pt-2 text-xs font-semibold text-white transition-all duration-300 group-hover:border-transparent group-hover:text-ink"
        style={{ marginTop: "1.5rem" }}
      >
        <span
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "linear-gradient(100deg, var(--brand-green), var(--brand-purple-bright))" }}
        />
        <span className="relative z-10 inline-flex items-center gap-1.5">
          Learn more <ArrowRight size={13} />
        </span>
      </a>
    </motion.div>
  );
}