"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const CATS = [
  {
    id: "logo",
    title: "Logo Design",
    sub: "Brand Identity",
    color: "#B47BFF",
    accent: "#4C0A8F",
    images: [
      { src: "/portfolio/logo/1.png", span: "col-span-1 row-span-2" },
      { src: "/portfolio/logo/2.png", span: "col-span-1 row-span-2" },
      { src: "/portfolio/logo/3.png", span: "col-span-1" },
      { src: "/portfolio/logo/4.png", span: "col-span-1" },
      { src: "/portfolio/logo/5.png", span: "col-span-1 row-span-2" },
      { src: "/portfolio/logo/6.png", span: "col-span-1" },
      { src: "/portfolio/logo/7.png", span: "col-span-1" },
      { src: "/portfolio/logo/8.png", span: "col-span-1" },
      { src: "/portfolio/logo/9.png", span: "col-span-1 row-span-2" },
      { src: "/portfolio/logo/10.png", span: "col-span-1" },
      { src: "/portfolio/logo/11.png", span: "col-span-1" },
      { src: "/portfolio/logo/12.png", span: "col-span-1" },
      { src: "/portfolio/logo/13.png", span: "col-span-1" },
      { src: "/portfolio/logo/14.png", span: "col-span-1" },
    ],
  },
  {
    id: "web",
    title: "Web Design Portfolio",
    sub: "Website Design & Development",
    color: "#C8F31D",
    accent: "#1a3a00",
    images: [
      { src: "/portfolio/web/1.png", span: "col-span-1 row-span-2" },
      { src: "/portfolio/web/2.png", span: "col-span-1" },
      { src: "/portfolio/web/3.png", span: "col-span-1" },
      { src: "/portfolio/web/4.png", span: "col-span-1" },
      { src: "/portfolio/web/5.png", span: "col-span-1" },
      { src: "/portfolio/web/6.png", span: "col-span-1" },
    ],
  },
  {
    id: "social",
    title: "Social Media",
    sub: "Content Creation & Creative",
    color: "#EA4335",
    accent: "#4e0a0a",
    images: [
      { src: "/portfolio/media/1.png", span: "col-span-1" },
      { src: "/portfolio/media/2.png", span: "col-span-1" },
      { src: "/portfolio/media/3.png", span: "col-span-1" },
       { src: "/portfolio/media/4.png", span: "col-span-1 row-span-2"  },
       { src: "/portfolio/media/7.png", span: "col-span-1 row-span-2" },
      { src: "/portfolio/media/8.png", span: "col-span-1 row-span-2" },
      { src: "/portfolio/media/9.png", span: "col-span-1 row-span-2" },
       { src: "/portfolio/media/10.png", span: "col-span-1 row-span-2" },
      { src: "/portfolio/media/12.png", span: "col-span-1 row-span-2" },
       { src: "/portfolio/media/13.png", span: "col-span-1 row-span-2" },
      { src: "/portfolio/media/14.png", span: "col-span-1 row-span-2" },
    ],
  },
  {
    id: "content",
    title: "Content Creation",
    sub: "Video Editing & Production",
    color: "#FBBC05",
    accent: "#4e3a00",
    images: [
      
      { src: "/portfolio/content/1.png", span: "col-span-1 row-span-2" },
      { src: "/portfolio/content/2.png", span: "col-span-1 row-span-2" },
      { src: "/portfolio/content/3.png", span: "col-span-1" },
      { src: "/portfolio/content/4.png", span: "col-span-1" },
   
    ],
  },
];

type ImgItem = { src: string; span: string; video?: boolean };
type Cat = { id: string; title: string; sub: string; color: string; accent: string; images: ImgItem[] };

/* ─── media item: image or video ─── */
function MediaItem({
  src, accent, color, video = false, autoPlay = false, controls = false,
}: {
  src: string; accent: string; color: string; video?: boolean; autoPlay?: boolean; controls?: boolean;
}) {
  const [err, setErr] = useState(false);

  if (err) return (
    <div className="h-full w-full flex items-center justify-center"
      style={{ background: `radial-gradient(ellipse at 30% 30%, ${accent}, #050508 75%)` }}>
      <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: `${color}50` }}>Add media</span>
    </div>
  );

  if (video) return (
    <video
      src={src}
      className="h-full w-full object-cover"
      autoPlay={autoPlay}
      muted
      loop
      playsInline
      controls={controls}
      onError={() => setErr(true)}
    />
  );

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" className="h-full w-full object-cover" onError={() => setErr(true)} />
  );
}

/* ─── lightbox ─── */
function Lightbox({ cat, startIdx, onClose }: { cat: Cat; startIdx: number; onClose: () => void }) {
  const [idx, setIdx] = useState(startIdx);
  const n = cat.images.length;
  const prev = () => setIdx((i) => (i - 1 + n) % n);
  const next = () => setIdx((i) => (i + 1) % n);
  const cur = cat.images[idx];

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [idx]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center"
      onClick={onClose}>
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />

      <button onClick={onClose}
        className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/20 transition-colors">
        <X size={18} />
      </button>
      <div className="absolute left-5 top-5 z-10 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs font-bold text-white/70 backdrop-blur-sm">
        {idx + 1} / {n}
      </div>

      <motion.div initial={{ scale: 0.94 }} animate={{ scale: 1 }} exit={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="relative z-10 w-full max-w-5xl px-4 sm:px-16"
        onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div key={idx}
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.2 }}
            className={`relative w-full overflow-hidden rounded-2xl border border-white/10 ${cur.video ? "aspect-[9/16] max-w-sm mx-auto" : "aspect-[4/3]"}`}>
            <MediaItem src={cur.src} accent={cat.accent} color={cat.color}
              video={cur.video} autoPlay={cur.video} controls={!!cur.video} />
          </motion.div>
        </AnimatePresence>

        <div className="mt-5 flex items-center justify-between px-1">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: cat.color }}>{cat.sub}</span>
            <p className="mt-0.5 text-base font-bold text-white">{cat.title}</p>
          </div>
          <div className="flex gap-2 flex-wrap justify-end">
            {cat.images.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "w-8" : "w-1.5 bg-white/25"}`}
                style={i === idx ? { background: cat.color } : {}} />
            ))}
          </div>
        </div>
      </motion.div>

      <button onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/20 transition-colors">
        <ChevronLeft size={22} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/20 transition-colors">
        <ChevronRight size={22} />
      </button>
    </motion.div>
  );
}

/* ─── category section ─── */
function CategorySection({ cat, onImageClick }: { cat: Cat; onImageClick: (i: number) => void }) {
  return (
    <section id={cat.id} className="scroll-mt-24 mb-20">
      <Reveal>
        <div className="mb-6 flex items-end justify-between gap-4 border-b pb-5" style={{ borderColor: `${cat.color}30` }}>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: cat.color }}>{cat.sub}</span>
            <h2 className="mt-1 font-display text-2xl font-extrabold text-white sm:text-3xl">{cat.title}</h2>
          </div>
          <span className="shrink-0 rounded-full px-3 py-1 text-xs font-bold"
            style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}40`, color: cat.color }}>
            {cat.images.length} works
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="grid auto-rows-[200px] grid-cols-1 sm:grid-cols-3 gap-3">
          {cat.images.map((img, i) => (
            <motion.button key={i} onClick={() => onImageClick(i)}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}>

              <MediaItem src={img.src} accent={cat.accent} color={cat.color}
                video={img.video} autoPlay={img.video} />

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40" />

              {/* center icon — play for video, zoom for image */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white/20 backdrop-blur-sm">
                  {img.video ? <Play size={20} className="text-white ml-1" /> : <ZoomIn size={20} className="text-white" />}
                </div>
              </div>

              {/* video badge */}
              {img.video && (
                <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 backdrop-blur-sm">
                  <Play size={10} className="text-white fill-white" />
                  <span className="text-[9px] font-bold uppercase tracking-wide text-white">Video</span>
                </div>
              )}

              {/* bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                style={{ background: cat.color }} />
            </motion.button>
          ))}
        </div>
      </Reveal>

      <div className="mt-16 h-px bg-white/8" />
    </section>
  );
}

/* ─── page ─── */
export default function OurWorkPage() {
  const [lightbox, setLightbox] = useState<{ cat: Cat; idx: number } | null>(null);
  const [active, setActive] = useState("logo");

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    CATS.forEach((c) => { const el = document.getElementById(c.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-20">
      <div className="pointer-events-none absolute -top-10 left-1/2 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-brand-purple/15 blur-[140px]" />

      <div className="section pt-20 pb-12 sm:pt-24">
        <Reveal className="max-w-2xl">
          <SectionLabel>Our Work</SectionLabel>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Work That <span className="text-gradient">Speaks For Itself</span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75">
            Five categories. Real clients. Scroll to explore or jump to a category.
          </p>
        </Reveal>

        <div className="sticky top-4 z-40 mt-10">
          <div className="inline-flex flex-wrap gap-2 rounded-2xl border border-white/8 bg-[#07080f]/80 p-2 backdrop-blur-xl">
            {CATS.map((cat) => {
              const on = active === cat.id;
              return (
                <button key={cat.id} onClick={() => scrollTo(cat.id)}
                  className="rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200"
                  style={{
                    background: on ? `${cat.color}22` : "transparent",
                    color: on ? cat.color : "rgba(255,255,255,0.55)",
                    border: on ? `1px solid ${cat.color}50` : "1px solid transparent",
                  }}>
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="section pb-20">
        {CATS.map((cat) => (
          <CategorySection key={cat.id} cat={cat}
            onImageClick={(i) => setLightbox({ cat, idx: i })} />
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox cat={lightbox.cat} startIdx={lightbox.idx} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </main>
    <Footer />
    </>
  );
}