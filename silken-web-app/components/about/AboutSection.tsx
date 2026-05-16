"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AboutSectionProps {
  title: string;
  children: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
  index?: number;
}

export default function AboutSection({
  title,
  children,
  imageSrc,
  imageAlt = "",
  reverse = false,
  index = 0,
}: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Text side
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: reverse ? 40 : -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      // Image side
      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { opacity: 0, x: reverse ? -40 : 40, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.9,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reverse]);

  return (
    <section ref={sectionRef} className="border-b border-white/10 py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Text */}
          <div
            ref={textRef}
            className={reverse ? "lg:order-2" : ""}
            style={{ opacity: 0 }}
          >
            <h2 className="font-display text-xl text-gold-primary sm:text-2xl lg:text-3xl">{title}</h2>
            <div className="mt-4 text-sm text-yellow-pastel/90 leading-relaxed sm:mt-6 sm:text-base">{children}</div>
          </div>

          {/* Image */}
          {imageSrc && (
            <div
              ref={imgRef}
              className={`relative aspect-video overflow-hidden rounded-2xl border border-white/10 lg:aspect-[4/3] ${reverse ? "lg:order-1" : ""}`}
              style={{ opacity: 0 }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/placeholder.svg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
