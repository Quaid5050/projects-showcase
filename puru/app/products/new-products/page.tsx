import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  DistributorCTA,
  MetricsAndBenefitsSection,
  ProductSystemSection,
} from '@/components/safe-solution/SafetyComponents';
import {
  productSystem,
  safeSolutionRoutes,
  safeSolutionSummary,
  safetyBenefits,
  targetIndustries,
} from '@/lib/data/safe-solution';

export const metadata: Metadata = {
  title: 'New Products | Yuvaan International',
  description:
    'Discover newly introduced products and commercial solutions available through Yuvaan International for international distribution, institutional supply, facilities management, and industrial markets.',
  alternates: { canonical: '/products/new-products' },
  openGraph: {
    title: 'New Products | Yuvaan International',
    description:
      'Safe Solution® Floor Safety System and other newly introduced commercial solutions available through Yuvaan International.',
  },
};

export default function NewProductsPage() {
  return (
    <div className="min-h-screen bg-surface-soft">
      <section className="relative pt-28 sm:pt-32 pb-12 overflow-hidden bg-ink">
        <Container className="relative z-10">
          <ScrollReveal>
            <span className="inline-block text-xs tracking-[0.28em] uppercase text-accent-bright font-semibold mb-4">New Products</span>
            <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4 max-w-3xl">
              New <span className="text-accent-bright">Products</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl">
              Discover newly introduced products and commercial solutions available through Yuvaan International for international distribution, institutional supply, facilities management, and industrial markets.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="surface-card overflow-hidden grid lg:grid-cols-[1fr_0.8fr] gap-0">
            <ScrollReveal>
              <div className="p-6 sm:p-8 lg:p-10">
                <span className="inline-flex px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-inter font-bold uppercase tracking-[0.25em] mb-5">
                  Main Featured Product
                </span>
                <h2 className="mb-5 font-sora text-2xl font-bold text-ink sm:text-4xl lg:text-5xl">
                  {safeSolutionSummary.title}
                </h2>
                <p className="font-inter text-steel-grey text-base sm:text-lg leading-relaxed mb-7">
                  {safeSolutionSummary.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={safeSolutionRoutes.detail} className="btn-primary">
                    Explore Safe Solution® <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href={safeSolutionRoutes.distributor} className="btn-secondary">
                    Apply to Become a Distributor <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative min-h-[280px] border-t border-surface-border lg:border-l lg:border-t-0">
                <Image
                  src="/images/products/safe-solution.jpg"
                  alt="Safe Solution floor safety application context"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 40vw"
                />
              </div>
            </ScrollReveal>
          </div>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {productSystem.map((item) => (
              <div key={item.name} className="surface-card p-4">
                <ShieldCheck className="w-6 h-6 text-accent mb-3" />
                <p className="font-sora font-bold text-ink">{item.name}</p>
                <p className="font-inter text-steel-grey text-sm mt-1">{item.shortLabel}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProductSystemSection compact />

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow="Target Markets"
            title="Commercial and Institutional <span class='gradient-text'>Applications</span>"
            subtitle="Safe Solution® is positioned for commercial and industrial markets where floor condition, maintenance, documentation, and distributor support matter."
            className="mb-10"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {targetIndustries.slice(0, 8).map((industry) => (
              <Link key={industry.title} href={industry.href} className="surface-card p-5 card-hover transition-all">
                <p className="font-sora font-semibold text-ink">{industry.title}</p>
                <span className="inline-flex items-center gap-1 text-accent text-xs font-inter font-semibold mt-4">
                  View fit <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-surface-soft">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {safetyBenefits.map((benefit) => (
              <div key={benefit} className="surface-card p-5 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="font-inter text-steel-grey text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <MetricsAndBenefitsSection />
      <DistributorCTA />
    </div>
  );
}
