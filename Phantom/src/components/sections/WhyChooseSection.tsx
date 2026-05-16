"use client";

import { LightSweepHeading } from "@/components/ui/LightSweepHeading";
import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    title: "Precision workmanship",
    body: "Measured tolerances, clean routing, and finishes inspected under critical light.",
  },
  {
    title: "Premium materials",
    body: "Films, coatings, fluids, and lighting components chosen for longevity — not shortcuts.",
  },
  {
    title: "Mechanical + customization",
    body: "One roof for safety certs, service, and the aesthetic upgrades that complete the build.",
  },
  {
    title: "Mobile detailing convenience",
    body: "Driveway-ready crews with the same discipline we bring to the shop floor.",
  },
  {
    title: "Customer-focused booking",
    body: "Clear packages, confirmed windows, and transparent communication end-to-end.",
  },
  {
    title: "Certified safety services",
    body: "Inspections and corrections handled in-house with documentation you can trust.",
  },
];

const highlights = [
  "Premium auto care",
  "Mechanical services",
  "Custom builds",
  "Mobile detailing available",
];

type WhyProps = { withTopBorder?: boolean };

export function WhyChooseSection({ withTopBorder = true }: WhyProps) {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className={`relative scroll-mt-28 bg-gradient-to-b from-black via-[#070709] to-black py-24 ${withTopBorder ? "border-t border-white/10" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45">
            Why PAC Phantom
          </p>
          <LightSweepHeading
            as="h2"
            className="mt-3 font-display text-3xl text-white sm:text-4xl"
          >
            Built for drivers who notice everything
          </LightSweepHeading>
          <p className="mt-4 text-base text-white/60">
            No inflated metrics — just the pillars that define how we operate and
            how your vehicle leaves our care.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-3">
          {highlights.map((h, i) => (
            <motion.span
              key={h}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70"
            >
              {h}
            </motion.span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.55 }}
              className="glass-panel rounded-2xl p-6"
            >
              <h3 className="font-display text-xl text-white">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
