"use client";

import { FEATURED_CUSTOM } from "@/lib/content";
import { resolvePlaceholderSrc } from "@/lib/placeholder-images";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function FeaturedCustomizationSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative border-y border-white/10 bg-[#050507] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45">
              Featured customization
            </p>
            <h2 className="mt-2 max-w-xl font-display text-3xl text-white sm:text-4xl">
              High-impact presence. Surgical install.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/55">
            Horizontal reel of our most cinematic upgrades — wraps, light
            architecture, PPF, ceramic, and cockpit tech done with OEM discipline.
          </p>
        </div>

        <div className="mt-12 flex gap-5 overflow-x-auto pb-4 pt-2 [scrollbar-width:thin]">
          {FEATURED_CUSTOM.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={reduce ? false : { opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: idx * 0.05, duration: 0.55 }}
              className="group relative min-w-[280px] max-w-[320px] flex-1 overflow-hidden rounded-2xl border border-white/10 bg-black/40 sm:min-w-[320px]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={resolvePlaceholderSrc(item.image)}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="360px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                {!reduce && (
                  <motion.div
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/25 to-transparent opacity-0 blur-2xl transition duration-700 group-hover:opacity-100"
                    animate={{ x: ["-20%", "40%"] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
                    {item.tag}
                  </p>
                  <p className="mt-1 font-display text-2xl text-white">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
