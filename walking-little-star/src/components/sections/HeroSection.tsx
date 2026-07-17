import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Star, Shield, BookOpen, Languages, UtensilsCrossed } from "lucide-react";
import { gsap } from "gsap";
import { heroContent, siteConfig } from "../../data/siteContent";
import { images } from "../../data/images";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { CloudSVG } from "../common/StarSVG";

const trustIcons: Record<string, React.ReactNode> = {
  "Licensed Childcare": <Shield size={13} />,
  "Ages 2 Months–5 Years": <Star size={13} fill="currentColor" />,
  "Early Learning": <BookOpen size={13} />,
  "Spanish Learning": <Languages size={13} />,
  "Healthy Meals & Snacks": <UtensilsCrossed size={13} />,
};

export const HeroSection: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const cloud1Ref = useRef<HTMLDivElement>(null);
  const cloud2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced) return;
    const handleScroll = () => {
      const y = window.scrollY;
      if (cloud1Ref.current) cloud1Ref.current.style.transform = `translateY(${y * 0.08}px)`;
      if (cloud2Ref.current) cloud2Ref.current.style.transform = `translateY(${y * 0.12}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReduced]);

  const starPathRef = useRef<SVGCircleElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (prefersReduced || !starPathRef.current || !pathRef.current) return;
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(starPathRef.current, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" });
    const path = pathRef.current;
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    tl.to(path, { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" }, "-=0.3");
    return () => { tl.kill(); };
  }, [prefersReduced]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero section">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={images.home.hero.src}
          alt={images.home.hero.alt}
          width={images.home.hero.width}
          height={images.home.hero.height}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/65 via-navy/35 to-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-transparent" />
      </div>

      {/* Clouds — hidden on small screens to avoid clutter */}
      <div ref={cloud1Ref} className="absolute top-[12%] right-[5%] pointer-events-none hidden md:block" aria-hidden="true">
        <CloudSVG width={200} color="rgba(255,255,255,0.18)" className="animate-float-slow" />
      </div>
      <div ref={cloud2Ref} className="absolute top-[30%] right-[20%] pointer-events-none hidden lg:block" aria-hidden="true">
        <CloudSVG width={120} color="rgba(189,216,244,0.15)" className="animate-float" />
      </div>

      {/* Star path — desktop only */}
      <div className="absolute bottom-[20%] right-[8%] pointer-events-none hidden lg:block" aria-hidden="true">
        <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
          <path ref={pathRef} d="M 10 100 Q 60 20 110 60 Q 160 100 210 20" stroke="rgba(254,222,190,0.5)" strokeWidth="2" strokeDasharray="6 5" strokeLinecap="round" fill="none" />
          <circle ref={starPathRef} cx="210" cy="20" r="5" fill="#fedebe" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-20">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-3xl">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-5">
            <span className="inline-flex items-center gap-2 bg-peach/90 text-navy font-body font-700 text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full shadow-soft">
              <Star size={11} fill="#183b65" />
              Westfield, Massachusetts
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-semibold text-white leading-tight text-balance mb-4 sm:mb-6"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
          >
            {heroContent.headline}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="font-body text-white/85 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-xl"
          >
            {heroContent.subtext}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8 sm:mb-10">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 bg-peach text-navy font-body font-700 text-sm sm:text-base px-5 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-peach-dark hover:-translate-y-0.5 transition-all shadow-soft hover:shadow-hover focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-navy min-h-[44px]"
            >
              <Star size={13} fill="#183b65" />
              {heroContent.primaryCta}
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white border border-white/30 font-body font-700 text-sm sm:text-base px-5 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-white/25 hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy min-h-[44px]"
            >
              {heroContent.secondaryCta}
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div variants={itemVariants}>
            <ul className="flex flex-wrap gap-2" role="list">
              {heroContent.trustIndicators.map((indicator) => (
                <li key={indicator}>
                  <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 font-body text-xs px-2.5 sm:px-3.5 py-1.5 rounded-full border border-white/15">
                    {trustIcons[indicator]}
                    <span className="leading-none">{indicator}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on very short screens */}
      <motion.div
        className="absolute bottom-14 left-1/2 -translate-x-1/2 text-white/60 flex-col items-center gap-1 hidden sm:flex"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="#fffdf9" preserveAspectRatio="none" className="w-full block">
          <path d="M0,40 C480,80 960,10 1440,50 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
};
