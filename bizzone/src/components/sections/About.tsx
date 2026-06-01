"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award, Rocket } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import LaptopFrame from "@/components/ui/LaptopFrame";

const panels = [
  {
    icon: Target,
    title: "Our Mission",
    body: "To empower businesses with technology that is beautiful, fast and built to scale — turning digital presence into real revenue.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "To be the go-to digital partner for ambitious brands worldwide, setting the standard for premium, results-driven work.",
  },
];

const achievements = [
  { icon: Award, label: "Award-Winning Design", sub: "Recognized craft & detail" },
  { icon: Rocket, label: "Growth-First Delivery", sub: "Built around your KPIs" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section">
        <SectionHeading
          eyebrow="Who We Are"
          title={<>A Technology Partner <span className="text-gradient-brand">Built for Growth</span></>}
          subtitle="BizzOne Digital blends design, engineering and marketing under one roof. We don't just deliver projects — we build digital ecosystems that compound your results over time."
        />

        {/* intro + laptop showing the old website */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="max-w-md text-lg leading-relaxed text-white/75">
              Since day one, we've helped <span className="text-brand-green">180+ brands</span> launch,
              grow and modernize. From startups to enterprises, our team ships work that feels
              premium and performs even better.
            </p>

            <div className="mt-7 grid max-w-md grid-cols-2 gap-4">
              {achievements.map((a, i) => {
                const Icon = a.icon;
                return (
                  <motion.div
                    key={a.label}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-2xl glass-strong p-4"
                  >
                    <Icon className="mb-2 h-5 w-5 text-brand-green" />
                    <div className="text-sm font-semibold text-white">{a.label}</div>
                    <div className="text-xs text-white/50">{a.sub}</div>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>

          {/* flat laptop playing our showreel */}
          <Reveal delay={0.1} className="relative">
            <span className="mb-4 block text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/40 lg:text-right">
              Our Work in Motion
            </span>
            <LaptopFrame videoSrc="/Bizz-one-Landscape-1.mp4" />
          </Reveal>
        </div>

        {/* mission / vision */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {panels.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group flex h-full items-start gap-5 rounded-3xl glass p-7 transition-shadow duration-300 hover:shadow-glow-green">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-ink-card">
                    <Icon className="h-5 w-5 text-brand-green" />
                  </span>
                  <div>
                    <h3 className="mb-1.5 font-display text-xl font-semibold text-white">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-white/60">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}