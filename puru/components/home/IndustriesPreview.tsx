'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { industries } from '@/lib/data/industries';
import { getIcon } from '@/lib/data/icons';

// Show first 14 industries (all) on home — in a grid
export default function IndustriesPreview() {
  return (
    <section className="relative py-12 sm:py-20 lg:py-24 bg-navy overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(42,140,140,0.08) 0%, transparent 60%)' }} />

      <Container>
        <SectionHeading
          eyebrow="Industries Served"
          title="Solutions Across <span class='gradient-text'>Every Sector</span>"
          subtitle="From government infrastructure to commercial real estate, we deliver strategic trade solutions tailored to the unique demands of each industry."
          className="mb-10 sm:mb-16"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {industries.map((ind, i) => {
            const Icon = getIcon(ind.icon);
            return (
              <ScrollReveal key={ind.slug} delay={i * 0.03}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group glass border border-white/5 hover:border-teal/20 rounded-xl p-3 sm:p-4 flex flex-col items-center text-center card-hover transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal/10 border border-teal/15 flex items-center justify-center mb-2 group-hover:bg-teal/20 transition-colors">
                    <Icon className="w-4 h-4 text-teal group-hover:text-aqua transition-colors" />
                  </div>
                  <p className="font-inter text-soft-white/60 text-[11px] sm:text-xs font-medium group-hover:text-soft-white/80 transition-colors leading-snug">
                    {ind.title}
                  </p>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="text-center">
          <Link href="/industries" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-teal/30 text-soft-white font-inter font-medium hover:border-teal hover:bg-teal/10 transition-all duration-300">
            Explore All Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  );
}
