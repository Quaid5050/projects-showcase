"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

interface PageHeroProps {
  label: string;
  badge?: string;
  title: React.ReactNode;
  subtitle: string;
  description?: string;
  backgroundImage?: string;
  imagePosition?: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
}

export default function PageHero({
  label,
  badge,
  title,
  subtitle,
  description,
  backgroundImage = "/moon-glow.png",
  imagePosition = "center center",
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[72vh] flex items-center pt-28 pb-16 sm:pb-20 overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        style={{ objectPosition: imagePosition }}
        sizes="100vw"
        priority
        aria-hidden
      />

      {/* Site-color gradient overlay — darker left for text, lighter right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(75,16,37,0.88) 0%, rgba(122,31,61,0.72) 32%, rgba(122,31,61,0.45) 55%, rgba(255,232,240,0.35) 78%, rgba(255,252,248,0.2) 100%)",
        }}
      />

      {/* Soft gold accent glow */}
      <div
        className="absolute top-1/4 left-0 w-[55%] h-[60%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, rgba(246,200,95,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Pill badge */}
          <div
            className="inline-flex items-center px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(255,252,248,0.15)",
              border: "1px solid rgba(255,252,248,0.25)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#F6C85F", fontFamily: "Nunito Sans, sans-serif" }}
            >
              {badge ?? label}
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] mb-6"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#FFFCF8" }}
          >
            {title}
          </h1>

          <p
            className="text-base sm:text-lg leading-relaxed mb-4 max-w-xl"
            style={{ color: "rgba(255,240,245,0.92)", fontFamily: "Nunito Sans, sans-serif" }}
          >
            {subtitle}
          </p>

          {description && (
            <p
              className="text-sm sm:text-base leading-relaxed mb-8 max-w-xl"
              style={{ color: "rgba(255,232,240,0.8)", fontFamily: "Nunito Sans, sans-serif" }}
            >
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
            {primaryCta.external ? (
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5 whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #F6C85F, #E8B84A)",
                  color: "#4B1025",
                  fontFamily: "Nunito Sans, sans-serif",
                  boxShadow: "0 4px 20px rgba(246,200,95,0.35)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                {primaryCta.label}
                <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5 whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #F6C85F, #E8B84A)",
                  color: "#4B1025",
                  fontFamily: "Nunito Sans, sans-serif",
                  boxShadow: "0 4px 20px rgba(246,200,95,0.35)",
                }}
              >
                {primaryCta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5 whitespace-nowrap"
                style={{
                  background: "rgba(255,252,248,0.12)",
                  border: "1px solid rgba(255,252,248,0.35)",
                  color: "#FFFCF8",
                  fontFamily: "Nunito Sans, sans-serif",
                  backdropFilter: "blur(8px)",
                }}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
