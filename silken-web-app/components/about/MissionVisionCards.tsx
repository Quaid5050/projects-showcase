"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const cards = [
  {
    title: "Mission",
    content:
      "To provide premium automotive interior products and expert installation that protect and elevate every vehicle we touch. We aim to make luxury interior protection accessible and hassle-free.",
    gradient: "from-gold-primary/20 to-yellow-glow/10",
    icon: "🎯",
  },
  {
    title: "Vision",
    content:
      "To be the go-to name for car owners who want the best in seat covers, mats, and accessories—backed by professional service and a commitment to quality.",
    gradient: "from-yellow-glow/15 to-gold-dark/20",
    icon: "🌟",
  },
];

export default function MissionVisionCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        }
      );

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="border-b border-white/10 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          ref={headingRef}
          className="font-display text-xl text-gold-primary sm:text-2xl lg:text-3xl mb-8 sm:mb-12"
          style={{ opacity: 0 }}
        >
          Mission &amp; Vision
        </h2>
        <div className="grid gap-4 sm:gap-8 md:grid-cols-2">
          {cards.map((card, i) => (
            <div
              key={card.title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${card.gradient} p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold-primary/30 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3),0_0_30px_rgba(249,200,51,0.1)] hover:-translate-y-1.5 sm:p-8`}
              style={{ opacity: 0 }}
            >
              <span className="text-3xl">{card.icon}</span>
              <h3 className="mt-4 font-display text-xl text-gold-primary">{card.title}</h3>
              <p className="mt-4 leading-relaxed text-yellow-pastel/90">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
