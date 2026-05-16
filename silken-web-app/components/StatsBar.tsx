"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 500, suffix: "+", label: "Happy Customers" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
  { value: 50, suffix: "+", label: "Vehicle Models" },
];

export default function StatsBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slide in the bar
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );

      // Count up each number
      stats.forEach((stat, i) => {
        const el = numRefs.current[i];
        if (!el) return;
        const counter = { val: 0 };
        gsap.to(counter, {
          val: stat.value,
          duration: 1.8,
          ease: "power2.out",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
          onUpdate: () => {
            el.textContent = Math.round(counter.val).toString();
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative border-y border-gold-primary/20 bg-gradient-to-r from-luxury-black via-gold-dark/10 to-luxury-black py-10"
      style={{ opacity: 0 }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
            <p className="font-display text-3xl text-gold-primary sm:text-4xl md:text-5xl">
              <span ref={(el) => { numRefs.current[i] = el; }}>0</span>
              {stat.suffix}
            </p>
            <p className="text-sm text-yellow-pastel/70 tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
