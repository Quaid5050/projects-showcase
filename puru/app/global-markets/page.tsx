import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Globe2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { safeSolutionRoutes } from '@/lib/data/safe-solution';
import { company, distributorOpenMarkets, markets } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Global Markets | Yuvaan International',
  description:
    'Review Yuvaan International market focus, target regions, distributor territories, and regional partnership opportunities.',
  alternates: { canonical: '/global-markets' },
};

const existingMarkets = markets.filter((market) => market.status === 'existing');
const targetMarkets = markets.filter((market) => market.status === 'target');
const underEvaluationMarkets = markets.filter((market) => market.status === 'under-evaluation');

export default function GlobalMarketsPage() {
  return (
    <div className="min-h-screen bg-surface-soft">
      <section className="relative pt-28 sm:pt-32 pb-12 overflow-hidden bg-ink">
        <Container className="relative z-10">
          <ScrollReveal>
            <span className="inline-block text-xs tracking-[0.28em] uppercase text-accent-bright font-semibold mb-4">Global Markets</span>
            <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4 max-w-3xl">
              Market Focus and <span className="text-accent-bright">Territory Opportunities</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl">
              {company.displayName} is based in {company.country} and evaluates international trade, product distribution, sourcing, project collaboration, and distributor opportunities across target markets.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-5">
            {[
              ['Existing market', existingMarkets.map((market) => market.name), 'Confirmed company base and current public contact market.'],
              ['Target markets', targetMarkets.map((market) => market.name), 'Markets relevant to product sourcing, trade development, and partnership evaluation.'],
              ['Distributor applications open', distributorOpenMarkets, 'Regions where Safe Solution® distributor applications may be reviewed.'],
              ['Under evaluation', underEvaluationMarkets.map((market) => market.name), 'Market opportunity under evaluation.'],
            ].map(([title, list, desc]) => (
              <div key={String(title)} className="surface-card p-6 h-full">
                <Globe2 className="w-8 h-8 text-accent mb-5" />
                <h2 className="font-sora font-bold text-ink text-xl mb-3">{title}</h2>
                <p className="font-inter text-steel-grey text-sm leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {(list as string[]).map((market) => (
                    <span key={market} className="px-3 py-1.5 rounded-full bg-surface-soft border border-surface-border text-steel-grey text-xs font-inter">
                      {market}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow="Regional Opportunities"
            title="Product Categories Available <span class='gradient-text'>by Review</span>"
            subtitle="Availability varies by jurisdiction, compliance requirements, supplier confirmation, documentation, and partner capability."
            className="mb-10"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Safe Solution® Floor Safety System', 'Energy Solutions', 'Industrial Machinery', 'Wholesale Products', 'Agricultural & Food Trade', 'Custom Product Sourcing', 'Manufacturing Partnerships', 'Project Collaboration'].map((item) => (
              <div key={item} className="surface-card p-5">
                <p className="font-sora font-semibold text-ink">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <Link href={safeSolutionRoutes.distributor} className="btn-primary">
              Apply for Distributor Territory <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact?inquiry=regional#inquiry-form" className="btn-secondary">
              Regional Inquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
