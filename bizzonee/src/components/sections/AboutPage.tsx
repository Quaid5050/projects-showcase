"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award, Rocket, Users, TrendingUp, Globe, Zap, Heart, Shield, Lightbulb, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import NeonButton from "@/components/ui/NeonButton";
import Counter from "@/components/ui/Counter";
import LaptopFrame from "@/components/ui/LaptopFrame";

const STATS = [
  { value: 180, suffix: "+", label: "Brands Scaled" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 10, suffix: "M+", label: "Leads Generated" },
];

const VALUES = [
  { icon: Zap, title: "Speed & Execution", body: "We move fast without cutting corners. Every project has clear milestones, weekly updates and on-time delivery." },
  { icon: Heart, title: "Client-First Always", body: "Your success is our success. We treat every brand like our own: no cookie-cutter solutions, no shortcuts." },
  { icon: Shield, title: "Transparency", body: "Honest reporting, clear communication, no hidden fees. You always know exactly where your project stands." },
  { icon: Lightbulb, title: "Innovation", body: "We stay ahead of trends so you don't have to. From AI automation to the latest ad strategies, we bring the cutting edge to your business." },
];

const TEAM_HIGHLIGHTS = [
  { icon: Users, stat: "25+", label: "Dedicated team members" },
  { icon: Globe, stat: "12+", label: "Countries served" },
  { icon: TrendingUp, stat: "₹250Cr+", label: "Revenue generated for clients" },
];

const PANELS = [
  { icon: Target, title: "Our Mission", body: "To empower businesses with technology that is beautiful, fast and built to scale, turning digital presence into real revenue. We believe every business deserves a world-class online presence, regardless of size." },
  { icon: Eye, title: "Our Vision", body: "To be the go-to digital partner for ambitious brands worldwide, setting the standard for premium, results-driven digital work. We're building a future where growth is engineered, not guessed." },
];

const TIMELINE = [
  { year: "Founded", title: "BizzOne Digital is Born", desc: "Started with a simple belief: businesses deserve better digital partners. We began with web development and a handful of clients who believed in our vision." },
  { year: "Growth", title: "Expanding Services", desc: "Added SEO, social media management, Meta advertising, content strategy and graphic design. Our team grew from 3 to 15+ dedicated professionals." },
  { year: "Scale", title: "AI & Automation", desc: "Launched our AI automation division: CRM integrations, intelligent workflows, WhatsApp & email automation. Helping businesses work smarter, not harder." },
  { year: "Today", title: "180+ Brands & Counting", desc: "A full-service digital growth agency with 25+ team members, serving clients across 12+ countries. From startups to enterprises, we deliver results that compound." },
];

export default function AboutPage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute -top-10 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[130px]" />
        <div className="section">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionLabel>About Us</SectionLabel>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              We Don&apos;t Just Build Websites. We Build <span className="text-gradient">Growth Engines</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
              BizzOne Digital is a full-service AI automation and digital growth agency. We blend design, engineering and marketing under one roof to deliver digital ecosystems that compound your results over time.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <NeonButton href="/#contact" variant="primary">Work With Us <ArrowRight size={16} /></NeonButton>
              <NeonButton href="/#services" variant="ghost">Our Services</NeonButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── STATS ───────── */}
      <section className="relative py-10">
        <div className="section">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="rounded-2xl glass-strong p-5 text-center">
                  <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                    <Counter value={s.value} />{s.suffix}
                  </div>
                  <div className="mt-1 text-xs font-medium text-white/90">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── OUR STORY ───────── */}
      <section className="relative py-16 sm:py-20">
        <div className="section">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                From a Small Team to a <span className="text-gradient">Global Agency</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/90">
                BizzOne Digital started with a simple belief: every business, no matter how small, deserves a premium digital presence that actually drives results. We saw too many agencies delivering pretty websites that didn&apos;t convert, flashy ads that didn&apos;t sell, and social media that didn&apos;t grow.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/90">
                So we built something different. A team obsessed with performance, design and real business outcomes. Today, we&apos;ve helped <span className="font-semibold text-brand-mint">180+ brands</span> scale with websites, advertising, social media, SEO, AI automation and more, generating over <span className="font-semibold text-brand-mint">₹250 Crore</span> in client revenue.
              </p>
              <div className="mt-8 flex flex-wrap gap-5">
                {TEAM_HIGHLIGHTS.map((t) => (
                  <div key={t.label} className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-mint/10 text-brand-mint"><t.icon size={18} /></span>
                    <div>
                      <div className="font-display text-lg font-bold text-white">{t.stat}</div>
                      <div className="text-xs text-white/90">{t.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <LaptopFrame videoSrc="/Bizz-one-Landscape-1.mp4" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── TIMELINE ───────── */}
      <section className="relative py-16 sm:py-20">
        <div className="section">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Our <span className="text-gradient">Journey</span>
            </h2>
          </Reveal>
          <div className="relative mx-auto mt-12 max-w-3xl">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-brand-mint/60 via-brand-purple/40 to-transparent sm:left-1/2" />
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.1}>
                <div className={`relative mb-10 flex items-start gap-6 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className="absolute left-5 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-mint shadow-glow-mint sm:left-1/2" />
                  <div className={`ml-12 max-w-sm rounded-2xl glass p-5 sm:ml-0 ${i % 2 === 0 ? "sm:mr-auto sm:ml-0 sm:pr-10" : "sm:ml-auto sm:mr-0 sm:pl-10"}`}>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-mint">{t.year}</span>
                    <h3 className="mt-1 font-display text-lg font-bold text-white">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/90">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── MISSION & VISION ───────── */}
      <section className="relative py-16 sm:py-20">
        <div className="section">
          <div className="grid gap-6 md:grid-cols-2">
            {PANELS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="group flex h-full items-start gap-5 rounded-3xl glass p-7 transition-shadow duration-300 hover:shadow-glow-mint">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl neon-border text-brand-mint">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="mb-1.5 font-display text-xl font-bold text-white">{p.title}</h3>
                      <p className="text-sm leading-relaxed text-white/90">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── OUR VALUES ───────── */}
      <section className="relative py-16 sm:py-20">
        <div className="section">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionLabel>What Drives Us</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Our Core <span className="text-gradient">Values</span>
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.07}>
                  <motion.div whileHover={{ y: -6 }} className="group flex h-full items-start gap-4 rounded-2xl glass p-6 transition-shadow duration-300 hover:shadow-glow-purple">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-mint/10 text-brand-mint transition-colors group-hover:bg-brand-mint/20">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-white">{v.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/90">{v.body}</p>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="relative py-16">
        <div className="section">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl neon-border px-8 py-12 text-center sm:px-14">
              <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-brand-purple/30 blur-[100px]" />
              <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-brand-mint/15 blur-[100px]" />
              <h2 className="relative font-display text-3xl font-extrabold text-white sm:text-4xl">
                Ready to Work With a Team That <span className="text-gradient">Delivers</span>?
              </h2>
              <p className="relative mx-auto mt-4 max-w-md text-base text-white/90">
                Let&apos;s talk about your goals. Book a free strategy call and see how we can grow your business.
              </p>
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