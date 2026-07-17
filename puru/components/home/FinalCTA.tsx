'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Handshake, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import TradeRouteLines from '@/components/ui/TradeRouteLines';
import { siteContent } from '@/lib/data/site-content';

const { finalCta } = siteContent;

export default function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 50%, #083048 100%)' }}>
      <TradeRouteLines />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(42,140,140,0.12) 0%, transparent 70%)' }} />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-copper font-medium mb-6">
            Start Today
          </span>
          <h2 className="font-sora font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-white leading-tight mb-5 sm:mb-6">
            {finalCta.heading}
          </h2>
          <p className="font-inter text-soft-white/60 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            {finalCta.subheading}
          </p>
        </motion.div>

        {/* Option cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-12">
          {finalCta.options.map((opt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                href={opt.href}
                className="group flex flex-col p-7 glass border border-teal/15 hover:border-teal/35 rounded-2xl card-hover transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center mb-4">
                  {i === 0 ? <Handshake className="w-5 h-5 text-teal" /> : <TrendingUp className="w-5 h-5 text-teal" />}
                </div>
                <p className="font-sora font-bold text-soft-white text-lg mb-2 group-hover:text-aqua transition-colors">{opt.title}</p>
                <p className="font-inter text-soft-white/50 text-sm leading-relaxed flex-grow">{opt.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-teal text-xs font-inter font-semibold mt-4">
                  Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/contact#inquiry-form"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-sora font-bold text-base hover:shadow-glow-teal hover:scale-105 transition-all duration-300"
          >
            {finalCta.cta}
            <ArrowRight className="w-5 h-5" />
          </Link>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center">
            <div className="hidden sm:block h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-teal/30" />
            <span className="text-soft-white/20 font-inter text-[10px] sm:text-xs tracking-widest uppercase">YUVAAN International Trade Canada</span>
            <div className="hidden sm:block h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-teal/30" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
