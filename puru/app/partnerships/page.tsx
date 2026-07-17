import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { partnershipTypes } from '@/lib/data/partnerships';
import { getIcon } from '@/lib/data/icons';
import { distributorBenefits, safeSolutionRoutes } from '@/lib/data/safe-solution';

export const metadata: Metadata = {
  title: 'Partnerships | Yuvaan International',
  description:
    'Explore distributor, manufacturer, country representative, importer/exporter, joint venture, institutional, investment, and technology-transfer partnerships with Yuvaan International.',
  alternates: { canonical: '/partnerships' },
  openGraph: {
    title: 'Partnerships | Yuvaan International',
    description:
      'Distributors Wanted Worldwide and other strategic partnership opportunities through Yuvaan International.',
  },
};

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-surface-soft">
      <section className="relative pt-28 sm:pt-32 pb-12 overflow-hidden bg-ink">
        <Container className="relative z-10">
          <ScrollReveal>
            <span className="inline-block text-xs tracking-[0.28em] uppercase text-accent-bright font-semibold mb-4">Partnerships</span>
            <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4 max-w-3xl">
              Strategic Partnerships for <span className="text-accent-bright">Global Trade Growth</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl">
              Yuvaan International works with manufacturers, distributors, country representatives, importers, exporters, institutions, and project partners seeking reliable international trade pathways.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="surface-card overflow-hidden p-6 sm:p-8 lg:p-10 border-accent/20 bg-accent-soft/30">
            <div className="grid lg:grid-cols-[1fr_0.85fr] gap-8 items-center">
              <ScrollReveal>
                <span className="inline-flex px-3 py-1 rounded-full bg-white border border-accent/20 text-accent text-xs font-inter font-bold uppercase tracking-[0.25em] mb-5">
                  Featured Opportunity
                </span>
                <h2 className="font-sora font-bold text-3xl sm:text-4xl text-ink mb-4">
                  Distributors Wanted Worldwide
                </h2>
                <p className="font-inter text-steel-grey text-base leading-relaxed mb-6">
                  We are seeking qualified commercial cleaning companies, safety-product suppliers, flooring specialists, facilities-service providers, and established B2B distributors to introduce the Safe Solution® Floor Safety System in new markets.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={safeSolutionRoutes.distributor} className="btn-primary">
                    Apply for Your Territory <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href={safeSolutionRoutes.detail} className="btn-secondary">
                    Explore Safe Solution® <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="grid sm:grid-cols-2 gap-3">
                  {distributorBenefits.slice(0, 6).map((benefit) => (
                    <div key={benefit} className="surface-card p-4 flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <p className="font-inter text-steel-grey text-sm leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow="Partnership Types"
            title="Types of <span class='gradient-text'>Partnerships</span>"
            subtitle="Explore distribution, manufacturing, representation, import/export, joint venture, institutional, investment, and technology-transfer opportunities."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {partnershipTypes.map((p) => {
              const Icon = p.slug === 'distributors-wanted-worldwide' ? ShieldCheck : getIcon(p.icon);
              const sectionId =
                p.slug === 'country-representative' ? 'country-representatives' :
                p.slug === 'importer-partnerships' ? 'importers-exporters' :
                p.slug === 'joint-venture-partnerships' ? 'joint-ventures' :
                p.slug === 'government-institutional' ? 'government-institutions' :
                p.slug;
              return (
                <div id={sectionId} key={p.slug} className="scroll-mt-32">
                  <div className="group relative p-5 sm:p-8 surface-card card-hover h-full">
                    <div className="w-14 h-14 rounded-xl bg-accent-soft text-accent flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-sora font-bold text-ink text-lg sm:text-xl mb-3 group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-inter text-steel-grey text-sm leading-relaxed mb-6">
                      {p.description}
                    </p>
                    <Link href={p.slug === 'distributors-wanted-worldwide' ? safeSolutionRoutes.distributor : '/contact?inquiry=partnership#inquiry-form'} className="inline-flex items-center gap-2 text-sm font-inter text-accent font-semibold">
                      {p.slug === 'distributors-wanted-worldwide' ? 'Apply Now' : 'Submit Inquiry'}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface-soft">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="How Partnership <span class='gradient-text'>Review Works</span>"
            subtitle="Each opportunity is reviewed against territory, capability, due diligence, commercial terms, and market-fit requirements."
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {['Submit your profile', 'Capability and territory review', 'Commercial discussion', 'Launch planning or next steps'].map((step, i) => (
              <div key={step} className="surface-card p-6">
                <p className="font-sora font-bold text-4xl text-accent/20 mb-4">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-sora font-semibold text-ink">{step}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-ink">
        <Container size="md">
          <div className="text-center">
            <h2 className="font-sora font-bold text-3xl md:text-5xl text-white mb-4">
              Interested in <span className="text-accent-bright">Working Together?</span>
            </h2>
            <p className="font-inter text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Choose the distributor application for Safe Solution® or submit a general partnership inquiry for other product, manufacturing, investment, or institutional opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href={safeSolutionRoutes.distributor} className="btn-primary">
                Distributor Application <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact?inquiry=partnership#inquiry-form" className="btn-secondary !text-white !border-white/25 !bg-transparent hover:!bg-white/10">
                General Partnership Inquiry <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
