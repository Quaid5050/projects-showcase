"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function FAQHero() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1.03, opacity: 1, duration: 2, ease: "power2.out" }
      );
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1.4 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(badgeRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, 0.5)
        .fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, 0.7)
        .fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 1.1);

      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 14;
        const y = (e.clientY / window.innerHeight - 0.5) * 7;
        gsap.to(bgRef.current, { x, y, duration: 1.4, ease: "power1.out" });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden border-b border-white/10 min-h-[50vh] flex items-center"
    >
      {/* Background — seat cover image, relevant to FAQ about products */}
      <div ref={bgRef} className="absolute inset-[-5%] will-change-transform">
        <Image
          src="/images/gallery/video-seat.jpeg"
          alt="Premium seat interior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Overlays */}
      <div ref={overlayRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-luxury-black/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/85 via-luxury-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
      </div>

      {/* Glow */}
      <div className="absolute right-1/3 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-gold-primary/10 blur-[110px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div
          ref={badgeRef}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-gold-primary/10 px-4 py-1.5 text-sm font-medium text-gold-primary backdrop-blur-sm"
          style={{ opacity: 0 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-primary animate-pulse" />
          Help Center
        </div>
        <h1
          ref={headingRef}
          className="font-display text-3xl tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ opacity: 0 }}
        >
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-gold-primary to-yellow-glow bg-clip-text text-transparent">
            Questions
          </span>
        </h1>
        <p
          ref={subRef}
          className="mt-5 max-w-2xl text-lg text-yellow-pastel/90"
          style={{ opacity: 0 }}
        >
          Find answers to common questions about our products and installation services.
        </p>
      </div>
    </section>
  );
}
