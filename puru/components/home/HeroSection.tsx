'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';
import Counter from '@/components/ui/Counter';
import AuroraBackground from '@/components/ui/AuroraBackground';

const stats = [
  { value: 3, suffix: '-Part', label: 'Floor safety system' },
  { value: 11, suffix: '+', label: 'Target markets' },
  { value: 14, suffix: '+', label: 'Industries served' },
];

const words = ['Professional', 'Cleaning', '&', 'Floor', 'Safety', 'Solutions'];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '18%']);
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '-8%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink pb-14 pt-24 sm:pb-24 sm:pt-32">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <Image
          src="/images/hero/industrial-facility.jpg"
          alt="Professional industrial facility and commercial operations"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/55" />
      <AuroraBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-bright backdrop-blur-sm sm:mb-5 sm:text-[11px] sm:tracking-[0.22em]"
            >
              <Sparkles className="h-3.5 w-3.5 animate-pulse-glow" />
              Canada-Based Commercial Solutions
            </motion.span>

            <h1 className="mb-4 max-w-2xl font-sora text-[2rem] font-bold leading-[1.1] text-white min-[390px]:text-[2.25rem] sm:mb-5 sm:text-5xl lg:text-[3.4rem]">
              {words.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`mr-[0.28em] inline-block ${
                    word === 'Floor' || word === 'Safety' ? 'gradient-text-animated' : ''
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-6 max-w-xl text-[15px] leading-relaxed text-white/75 sm:mb-8 sm:text-lg"
            >
              Safe. Sustainable. Commercial performance for facilities that need reliable floor-safety programs, product sourcing, and partnership support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.72 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Link href="/contact#inquiry-form" className="btn-primary w-full sm:w-auto">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="shine inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                Browse Products
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-8 grid max-w-lg grid-cols-3 gap-3 sm:mt-10 sm:gap-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm sm:p-4">
                  <p className="font-sora text-xl font-bold text-white sm:text-2xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-[11px] leading-tight text-white/55 sm:text-xs">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-3 top-8 z-20 hidden items-center gap-2 rounded-2xl border border-white/15 bg-white/95 px-3 py-2 shadow-card-dark backdrop-blur sm:flex"
            >
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span className="text-xs font-semibold text-ink">Anti-slip treatment</span>
            </motion.div>

            <div className="ring-glow overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm">
              <div className="image-zoom relative aspect-[4/3]">
                <Image
                  src="/images/products/safe-solution.jpg"
                  alt="Commercial floor-safety and facility cleaning application"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              </div>
              <div className="p-4 sm:p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright">Featured System</p>
                <h2 className="mb-2 font-sora text-xl font-bold text-white">Safe Solution® Floor Safety System</h2>
                <p className="mb-4 text-sm leading-relaxed text-white/65">
                  Invisible anti-slip treatment, CRS™ rejuvenation, and Clean Step™ maintenance for commercial hard surfaces.
                </p>
                <Link
                  href="/products/new-products/safe-solution-floor-safety-system"
                  className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-accent-bright transition-colors hover:text-white"
                >
                  Explore Safe Solution® <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-surface-soft" />
    </section>
  );
}
