import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { siteConfig } from "../../data/siteContent";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { StarSVG } from "../common/StarSVG";

gsap.registerPlugin(ScrollTrigger);

export const MissionSection: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (prefersReduced || !textRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 0.5 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1.8,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            end: "bottom 40%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-navy relative overflow-hidden"
      aria-labelledby="mission-heading"
    >
      {/* Background stars */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          { top: "8%", left: "4%", size: 16, delay: 0 },
          { top: "15%", left: "20%", size: 10, delay: 0.5 },
          { top: "5%", right: "8%", size: 20, delay: 0.3 },
          { top: "25%", right: "15%", size: 12, delay: 0.8 },
          { bottom: "10%", left: "8%", size: 14, delay: 1 },
          { bottom: "20%", left: "35%", size: 8, delay: 0.6 },
          { bottom: "8%", right: "10%", size: 18, delay: 0.2 },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              top: s.top,
              left: s.left,
              right: s.right,
              bottom: s.bottom,
              animationDelay: `${s.delay}s`,
            } as React.CSSProperties}
          >
            <StarSVG size={s.size} color="#fedebe" />
          </div>
        ))}
      </div>

      {/* Cloud decorations */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none opacity-5" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="#9fcaf4" preserveAspectRatio="none" className="w-full">
          <path d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 C1300,40 1380,70 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full opacity-30 animate-pulse-slow"
              style={{ background: "radial-gradient(circle, rgba(254,222,190,0.5) 0%, transparent 70%)" }}
            />
            <Star size={48} fill="#fedebe" className="text-peach" aria-hidden="true" />
          </div>
        </motion.div>

        <h2
          id="mission-heading"
          className="font-display font-semibold text-white text-2xl sm:text-3xl mb-6 sr-only"
        >
          Our Mission
        </h2>

        <p
          ref={textRef}
          className="font-display font-semibold text-white leading-relaxed text-balance"
          style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
        >
          "{siteConfig.missionStatement}"
        </p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-peach text-navy font-body font-700 px-7 py-3.5 rounded-full hover:bg-peach-dark hover:-translate-y-0.5 transition-all shadow-soft hover:shadow-hover focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            <Star size={14} fill="#183b65" aria-hidden="true" />
            Book a Visit
          </Link>
          <a
            href={siteConfig.contact.phoneLink}
            className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 font-body font-700 px-7 py-3.5 rounded-full hover:bg-white/20 hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Call {siteConfig.contact.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
