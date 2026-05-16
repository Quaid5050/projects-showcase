"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface HeroProps {
  headline?: string;
  subtext?: string;
  showButtons?: boolean;
  backgroundImage?: string;
}

export default function Hero({
  headline = "Transform Your Car Interior with Premium Protection",
  subtext = "Premium seat covers, car mats, and accessories installed professionally.",
  showButtons = true,
  backgroundImage = "/images/gallery/interior-1.jpeg",
}: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Background Ken Burns
      gsap.fromTo(
        bgRef.current,
        { scale: 1.12, opacity: 0 },
        { scale: 1.04, opacity: 1, duration: 2.2, ease: "power2.out" }
      );

      // Overlay fade in
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

      // Orbs float in
      gsap.fromTo(
        [orb1Ref.current, orb2Ref.current],
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 2, delay: 0.4, stagger: 0.3, ease: "power2.out" }
      );

      // Content stagger
      tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.6)
        .fromTo(headlineRef.current, { opacity: 0, y: 50, clipPath: "inset(0 0 100% 0)" }, { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.9 }, 0.85)
        .fromTo(subtextRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, 1.3)
        .fromTo(buttonsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 1.6)
        .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 2.0);

      // Continuous orb float
      gsap.to(orb1Ref.current, {
        y: -30,
        x: 20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(orb2Ref.current, {
        y: 25,
        x: -15,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      // Scroll indicator bounce
      gsap.to(scrollRef.current, {
        y: 8,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.2,
      });

      // Parallax on mouse move
      const handleMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 20;
        const y = (e.clientY / innerHeight - 0.5) * 10;
        gsap.to(bgRef.current, { x, y, duration: 1.2, ease: "power1.out" });
        gsap.to(orb1Ref.current, { x: x * 1.5, y: y * 1.5, duration: 1.5, ease: "power1.out" });
        gsap.to(orb2Ref.current, { x: -x * 1.2, y: -y * 1.2, duration: 1.8, ease: "power1.out" });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] overflow-hidden">
      {/* Background image */}
      <div ref={bgRef} className="absolute inset-[-5%] will-change-transform">
        <Image
          src={backgroundImage}
          alt="Premium car interior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Layered overlays */}
      <div ref={overlayRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-luxury-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/50 via-transparent to-luxury-black/30" />
      </div>

      {/* Glow orbs */}
      <div
        ref={orb1Ref}
        className="absolute left-[15%] top-[30%] h-[500px] w-[500px] rounded-full bg-gold-primary/15 blur-[130px] will-change-transform pointer-events-none"
      />
      <div
        ref={orb2Ref}
        className="absolute right-[10%] bottom-[20%] h-[350px] w-[350px] rounded-full bg-yellow-glow/12 blur-[100px] will-change-transform pointer-events-none"
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-gold-primary/10 px-4 py-1.5 text-sm font-medium text-gold-primary backdrop-blur-sm"
          style={{ opacity: 0 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-primary animate-pulse" />
          Premium Automotive Interiors
        </div>

        <h1
          ref={headlineRef}
          className="font-display text-3xl tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-5xl"
          style={{ opacity: 0 }}
        >
          <span className="bg-gradient-to-r from-gold-primary via-yellow-glow to-gold-primary bg-clip-text text-transparent">
            {headline}
          </span>
        </h1>

        <p
          ref={subtextRef}
          className="mt-6 max-w-2xl text-lg tracking-wide text-yellow-pastel/90 sm:text-xl"
          style={{ opacity: 0 }}
        >
          {subtext}
        </p>

        {showButtons && (
          <div
            ref={buttonsRef}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-5"
            style={{ opacity: 0 }}
          >
            <Link
              href="/products"
              className="group relative inline-block w-full rounded-md bg-gradient-to-r from-gold-primary to-yellow-glow px-8 py-4 font-semibold text-luxury-black shadow-[0_0_40px_rgba(249,200,51,0.35)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(249,200,51,0.55)] hover:scale-105 sm:w-auto"
            >
              Shop Products
            </Link>
            <Link
              href="/contact"
              className="inline-block w-full rounded-md border-2 border-gold-primary/70 px-8 py-4 font-semibold text-gold-primary transition-all duration-300 hover:bg-gold-primary/15 hover:shadow-[0_0_35px_rgba(249,200,51,0.25)] hover:scale-105 sm:w-auto"
            >
              Book Installation
            </Link>
          </div>
        )}

        {/* Scroll indicator */}
        <div
          ref={scrollRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: 0 }}
        >
          <span className="text-xs tracking-widest text-yellow-pastel/50 uppercase">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-gold-primary/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
