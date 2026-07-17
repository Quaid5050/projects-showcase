"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const CATS = [
  { id: "logo",    title: "Logo Design",            emoji: "✏️", description: "Custom logos and brand identities that last.", color: "#B47BFF", preview: ["/portfolio/logo/1.png","/portfolio/logo/2.png","/portfolio/logo/3.png"] },
  { id: "web",     title: "Web Design Portfolio",   emoji: "🌐", description: "High-performance websites live in 24–48 hrs.", color: "#C8F31D", preview: ["/portfolio/web/1.png","/portfolio/web/2.png","/portfolio/web/3.png"] },
  { id: "social",  title: "Social Media",           emoji: "📱", description: "Scroll-stopping content that grows your brand.", color: "#EA4335", preview: ["/portfolio/media/1.png","/portfolio/media/2.png","/portfolio/media/3.png"] },
  { id: "content", title: "Content Creation",       emoji: "🎬", description: "Video editing and production that converts.", color: "#FBBC05", preview: ["/portfolio/content/1.png","/portfolio/content/2.png"] },
];

function PreviewImg({ src, color }: { src: string; color: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" className="h-full w-full object-cover"
      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
  );
}

export default function OurWork() {
  return (
    <section id="work" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-brand-purple/15 blur-[120px]" />
      <div className="section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Projects We&apos;re <span className="text-gradient">Proud Of</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75">
            Real work delivered for real businesses. Click any category to explore.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {CATS.map((cat, i) => (
              <Link key={cat.id} href={`/our-work#${cat.id}`}
                className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                style={{ minHeight: i < 2 ? 260 : 210, display: "block" }}>

                {/* image preview grid (3 stacked) or solid gradient */}
                <div className="absolute inset-0">
                  {cat.preview.length >= 3 ? (
                    <div className="grid h-full grid-cols-3 gap-0.5">
                      {cat.preview.map((src, pi) => (
                        <div key={pi} className="relative overflow-hidden"
                          style={{ background: `${cat.color}18` }}>
                          <PreviewImg src={src} color={cat.color} />
                        </div>
                      ))}
                    </div>
                  ) : cat.preview.length > 0 ? (
                    <div className="relative h-full overflow-hidden" style={{ background: `${cat.color}18` }}>
                      <PreviewImg src={cat.preview[0]} color={cat.color} />
                    </div>
                  ) : (
                    <div className="h-full w-full" style={{
                      background: `radial-gradient(ellipse at 30% 30%, ${cat.color}30, #05060a 75%)`
                    }} />
                  )}
                </div>

                {/* dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/60" />

                {/* bottom color line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: cat.color }} />

                {/* content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="mb-2 text-2xl">{cat.emoji}</div>
                  <span className="mb-1.5 inline-block w-fit rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: `${cat.color}22`, border: `1px solid ${cat.color}55`, color: cat.color }}>
                    View Work
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-white">{cat.title}</h3>
                  <p className="mt-1.5 text-sm text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {cat.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold opacity-0 transition-all duration-300 group-hover:opacity-100"
                    style={{ color: cat.color }}>
                    Explore <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}