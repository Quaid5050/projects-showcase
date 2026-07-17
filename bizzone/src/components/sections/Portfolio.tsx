"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

interface Project {
  name: string;
  category: string;
  description: string;
  url: string;
}

// Live projects — arranged as a 3D coverflow slider.
const PROJECTS: Project[] = [
  {
    name: "M2M Pro",
    category: "Business Platform",
    description:
      "A sleek, conversion-focused business platform with a bold, modern interface and a fully responsive experience.",
    url: "https://www.m2mprocleaners.ca",
  },
  {
    name: "Cobb Church",
    category: "Community Website",
    description:
      "A warm, welcoming community website with events, media and an effortless, easy-to-navigate layout.",
    url: "https://www.cobbchurchnetwork.org",
  },
  {
    name: "A1 Furnished",
    category: "Real Estate · Rentals",
    description:
      "A premium furnished-rentals website with rich listings and a clean, booking-ready presentation.",
    url: "https://www.a1furnished.ca",
  },
  {
    name: "Global Paradon",
    category: "Corporate · Business",
    description:
      "A professional corporate website with a confident, trustworthy design built to win clients.",
    url: "https://www.globalpardonwaivers.com",
  },
  {
    name: "AEM Quality ISO",
    category: "ISO Certification",
    description:
      "A clean, credible site for ISO certification and quality consulting that builds instant trust.",
    url: "https://www.aemqualityiso.com",
  },
  {
    name: "Bariis Pizza",
    category: "Restaurant",
    description:
      "An appetizing restaurant website with a vibrant menu showcase and a smooth ordering experience.",
    url: "https://www.bariishalalpizza.com",
  },
  {
    name: "Corner Store",
    category: "Retail · E-commerce",
    description:
      "A neon-styled retail storefront with a striking, high-energy design and slick product browsing.",
    url: "https://www.cornerstoreatlinwood.com",
  },
  
  {
    name: "Toronto",
    category: "Local Business",
    description:
      "A modern local-business website with a polished, location-focused layout that converts.",
    url: "https://www.torontonotaryoffice.ca",
  },
];

const BASE_W = 1440; // virtual desktop width rendered inside each browser frame

/** Browser-window mockup containing a scaled live preview of a site. */
function SiteFrame({ url, name, mounted }: { url: string; name: string; mounted: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / BASE_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#120c20] shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 hidden h-4 flex-1 items-center truncate rounded-full bg-white/5 px-3 text-[10px] text-white/40 sm:flex">
          {url.replace("https://", "")}
        </span>
      </div>
      <div ref={ref} className="relative aspect-[16/10] w-full overflow-hidden bg-[#05030a]">
        {mounted ? (
          <iframe
            src={url}
            title={`${name} preview`}
            loading="lazy"
            scrolling="no"
            className="absolute left-0 top-0 origin-top-left border-0"
            style={{
              width: `${BASE_W}px`,
              height: `${BASE_W * (10 / 16)}px`,
              transform: `scale(${scale})`,
              pointerEvents: "none",
            }}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#1a0b2e] to-[#05030a]">
            <div className="text-center">
              <div className="animate-pulse text-sm font-semibold text-white/50">{name}</div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-white/30">Preview</div>
            </div>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5" />
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = PROJECTS.length;

  const go = (dir: number) => setActive((a) => (a + dir + n) % n);

  // autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), 3000);
    return () => clearInterval(id);
  }, [paused, n]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -70) go(1);
    else if (info.offset.x > 70) go(-1);
  };

  const current = PROJECTS[active];

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-purple/15 blur-[130px]" />
      <div className="section">
        <SectionHeading
          eyebrow="Selected Work"
          title={<>Projects We&apos;re <span className="text-gradient-brand">Proud Of</span></>}
          subtitle="A look at real websites we've designed and built — slide through to explore."
        />

        {/* 3D coverflow stage */}
        <div
          className="relative mx-auto mt-16 flex h-[260px] max-w-5xl items-center justify-center sm:h-[340px] lg:h-[420px]"
          style={{ perspective: 1600 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {PROJECTS.map((p, i) => {
            let off = i - active;
            if (off > n / 2) off -= n;
            if (off < -n / 2) off += n;
            const isActive = off === 0;
            const abs = Math.abs(off);

            return (
              <motion.div
                key={p.name}
                className="absolute w-[80%] cursor-pointer sm:w-[64%] lg:w-[56%]"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  x: `${off * 58}%`,
                  rotateY: off * -34,
                  scale: isActive ? 1 : 0.82,
                  opacity: abs > 1 ? 0 : isActive ? 1 : 0.45,
                  filter: isActive ? "blur(0px)" : "blur(2px)",
                  zIndex: 20 - abs,
                  pointerEvents: abs > 1 ? "none" : "auto",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={isActive ? onDragEnd : undefined}
                onClick={() => !isActive && setActive(i)}
              >
                {/* only mount the live preview for visible cards (perf) */}
                <SiteFrame url={p.url} name={p.name} mounted={abs <= 1} />
              </motion.div>
            );
          })}

          {/* arrows */}
          <button
            aria-label="Previous"
            onClick={() => go(-1)}
            className="absolute left-0 z-30 grid h-11 w-11 place-items-center rounded-full glass-strong text-white transition-all hover:text-brand-green hover:shadow-glow-green sm:-left-2"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Next"
            onClick={() => go(1)}
            className="absolute right-0 z-30 grid h-11 w-11 place-items-center rounded-full glass-strong text-white transition-all hover:text-brand-green hover:shadow-glow-green sm:-right-2"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* active project details */}
        <div className="relative mx-auto mt-10 max-w-xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                {current.category}
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                {current.name}
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/60">
                {current.description}
              </p>
              <a
                href={current.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(100deg, var(--brand-green), var(--brand-purple-bright))" }}
              >
                Visit Project <ExternalLink size={15} />
              </a>
            </motion.div>
          </AnimatePresence>

          {/* dots */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {PROJECTS.map((p, i) => (
              <button
                key={p.name}
                aria-label={`Go to ${p.name}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-7 bg-brand-green" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}