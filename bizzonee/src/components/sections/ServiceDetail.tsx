"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import NeonButton from "@/components/ui/NeonButton";
import { getService } from "@/lib/services";

export default function ServiceDetail({ slug }: { slug: string }) {
  const svc = getService(slug);
  if (!svc) return null;
  const Icon = svc.icon;

  return (
    <>
      {/* HERO */}
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute -top-10 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[130px]" />
        <div className="section">
          <Reveal>
            <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-brand-mint">
              <ArrowLeft size={15} /> Back to Services
            </Link>
          </Reveal>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full neon-border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-mint">
                Our Services
              </span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                <span className="text-gradient">{svc.title}</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/65">{svc.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <NeonButton href="/#contact" variant="primary">Book Strategy Call <ArrowRight size={16} /></NeonButton>
                <NeonButton href="/#services" variant="ghost">All Services</NeonButton>
              </div>
            </Reveal>

            {/* icon panel */}
            <Reveal delay={0.1}>
              <div className="relative mx-auto grid aspect-square w-full max-w-sm place-items-center overflow-hidden rounded-3xl glass-strong p-10">
                <span className="absolute right-5 top-5 rounded-xl border border-brand-mint/30 bg-brand-mint/5 px-4 py-1.5 text-center leading-tight">
                  <span className="block text-[9px] font-medium uppercase tracking-wide text-white/45">{svc.badgeLabel}</span>
                  <span className="block text-sm font-bold text-brand-mint">{svc.badgeValue}</span>
                </span>
                <span className="absolute inset-0 m-auto h-40 w-40 rounded-full bg-brand-purple/30 blur-3xl" />
                <span className="absolute inset-0 m-auto h-48 w-48 animate-spin-slow rounded-full opacity-50 blur-md" style={{ background: "conic-gradient(from 0deg, transparent, rgba(200,243,29,0.5), transparent 40%, rgba(140,0,255,0.5), transparent 80%)" }} />
                <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative">
                  <Icon className="text-brand-mint drop-shadow-[0_0_18px_rgba(200,243,29,0.8)]" size={92} strokeWidth={1.4} />
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative py-12">
        <div className="section">
          <div className="mx-auto max-w-3xl rounded-3xl glass p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Overview</h2>
            <div className="mt-5 space-y-4">
              {svc.overview.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="text-base leading-relaxed text-white/65">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="relative py-12">
        <div className="section">
          <Reveal className="text-center">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">What&apos;s <span className="text-gradient">Included</span></h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-white/55">Everything you get when you work with us on {svc.title}.</p>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {svc.features.map((f, i) => (
              <Reveal key={f} delay={i * 0.06}>
                <div className="flex items-center gap-4 rounded-2xl glass p-5 transition-shadow duration-300 hover:shadow-glow-mint">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand-mint/40 text-brand-mint">
                    <Check size={16} />
                  </span>
                  <span className="text-sm font-medium text-white/85">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16">
        <div className="section">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl neon-border px-8 py-12 text-center sm:px-14">
              <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-brand-purple/30 blur-[100px]" />
              <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-brand-mint/15 blur-[100px]" />
              <h2 className="relative font-display text-3xl font-extrabold text-white sm:text-4xl">
                Ready to grow with <span className="text-gradient">{svc.title}</span>?
              </h2>
              <p className="relative mx-auto mt-4 max-w-md text-base text-white/60">Book a free strategy call and let&apos;s build your growth engine together.</p>
              <div className="relative mt-8 flex justify-center">
                <NeonButton href="/#contact" variant="primary">Book Free Strategy Call <ArrowRight size={16} /></NeonButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}