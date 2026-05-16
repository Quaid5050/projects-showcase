"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  delay?: number;
  variant?: "default" | "dark" | "gradient" | "glow";
}

export function Section({
  children,
  className,
  innerClassName,
  variant = "default",
}: SectionProps) {
  const bgClass =
    variant === "dark"
      ? "bg-luxury-black"
      : variant === "gradient"
        ? "bg-gradient-to-b from-luxury-black to-gold-dark/20"
        : variant === "glow"
          ? "bg-gradient-to-b from-gold-dark/20 to-luxury-black"
          : "bg-luxury-black";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-t border-white/10 py-16 sm:py-24",
        bgClass,
        className
      )}
    >
      {variant === "glow" && (
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(249,200,51,0.08), transparent 60%)",
          }}
        />
      )}
      <div
        className={cn(
          "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  title: ReactNode;
  subtitle?: string;
  className?: string;
  delay?: number;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  delay = 0,
}: SectionHeadingProps) {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const els = headingRef.current?.querySelectorAll("[data-gsap]");
      if (!els) return;
      gsap.fromTo(
        els,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );
    }, headingRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={headingRef} className={cn("text-center", className)}>
      <h2
        data-gsap
        className="font-display text-2xl tracking-wide text-white sm:text-3xl md:text-4xl"
        style={{ opacity: 0 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          data-gsap
          className="mx-auto mt-3 max-w-2xl text-yellow-pastel/80"
          style={{ opacity: 0 }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function AnimatedLink({ href, children, className }: AnimatedLinkProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="text-center" style={{ opacity: 0 }}>
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center justify-center gap-2 text-gold-primary font-medium transition-colors hover:text-yellow-glow",
          className
        )}
      >
        {children}
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
          →
        </span>
      </Link>
    </div>
  );
}
