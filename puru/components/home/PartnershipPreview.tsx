'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { partnershipTypes } from '@/lib/data/partnerships';
import { getIcon } from '@/lib/data/icons';

export default function PartnershipPreview() {
  // Show first 6 partnership types on the home page
  const featured = partnershipTypes.slice(0, 6);

  return (
    <section className="relative py-12 sm:py-20 lg:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #041e2b 0%, #06293A 100%)' }}>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(42,140,140,0.08) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(217,104,58,0.06) 0%, transparent 50%)' }} />

      <Container>
        <SectionHeading
          eyebrow="Partnership"
          title="Built for <span class='gradient-text'>Strategic Business Partnerships</span>"
          subtitle="YUVAAN INTERNATIONAL works with manufacturers, distributors, institutions, investors, and project developers seeking trade, sourcing, distribution, and partnership opportunities across target markets."
          className="mb-10 sm:mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 sm:mb-12 items-stretch">
          {featured.map((p, i) => {
            const Icon = getIcon(p.icon);
            return (
              <ScrollReveal key={p.slug} delay={i * 0.07} className="h-full">
                <div className="group h-full flex flex-col glass border border-teal/10 hover:border-teal/30 rounded-2xl p-4 sm:p-6 text-center card-hover transition-all">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                    <Icon className="w-5 h-5 text-teal group-hover:text-aqua transition-colors" />
                  </div>
                  <h3 className="font-sora font-semibold text-soft-white text-sm sm:text-base mb-2 flex-shrink-0">{p.title}</h3>
                  <p className="font-inter text-soft-white/40 text-xs leading-relaxed flex-grow">{p.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="text-center">
          <Link href="/partnerships" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-teal to-aqua text-navy font-semibold font-inter hover:shadow-glow-teal hover:scale-105 transition-all duration-300">
            Explore Partnerships
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  );
}
