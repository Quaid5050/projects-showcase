"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/site";

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-brand-purple/20 blur-[120px]" />
      <div className="section">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Trusted by <span className="text-gradient-brand">Leaders</span></>}
          subtitle="We're proud of the long-term partnerships we've built. Here's what our clients say."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass p-8"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-brand-purple/30" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={15} className="fill-brand-green text-brand-green" />
                ))}
              </div>
              <p className="relative text-base leading-relaxed text-white/75">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-purple to-brand-green text-sm font-bold text-ink">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/50">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
