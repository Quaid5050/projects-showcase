import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  DistributorApplicationForm,
  DistributorProcessTimeline,
} from '@/components/safe-solution/SafetyComponents';
import {
  distributorApplicantTypes,
  distributorBenefits,
  safeSolutionRoutes,
} from '@/lib/data/safe-solution';

export const metadata: Metadata = {
  title: 'Distributors Wanted Worldwide | Yuvaan International',
  description:
    'Apply to represent the Safe Solution® Floor Safety System in an available territory through Yuvaan International.',
  alternates: { canonical: '/partnerships/distributors-wanted' },
  openGraph: {
    title: 'Distributors Wanted Worldwide | Yuvaan International',
    description:
      'Qualified distributors, commercial cleaning companies, safety-product suppliers, and facilities-service providers can apply for Safe Solution® territory opportunities.',
  },
};

export default function DistributorsWantedPage() {
  return (
    <div className="min-h-screen bg-surface-soft">
      <section className="relative pt-28 sm:pt-32 pb-12 overflow-hidden bg-ink">
        <Container className="relative z-10">
          <ScrollReveal>
            <span className="mb-4 inline-block max-w-full text-xs font-semibold uppercase tracking-[0.14em] text-accent-bright sm:tracking-[0.28em]">Safe Solution® Territory Opportunity</span>
            <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4 max-w-3xl">
              Distributors Wanted <span className="text-accent-bright">Worldwide</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
              Yuvaan International is seeking qualified distributors, commercial cleaning companies, safety-product suppliers, flooring specialists, facilities-service providers, and established B2B partners to introduce the Safe Solution® Floor Safety System in new markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#distributor-application" className="btn-primary">
                Apply for Your Territory <ArrowRight className="w-4 h-4" />
              </a>
              <Link href={safeSolutionRoutes.detail} className="btn-secondary !text-white !border-white/25 !bg-transparent hover:!bg-white/10">
                Explore Safe Solution® <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Why Become a Distributor?"
            title="Represent a Complete <span class='gradient-text'>Floor-Safety System</span>"
            subtitle="The opportunity is subject to capability, territory, training, and commercial review. Exclusivity is not promised unless approved in a formal agreement."
            className="mb-10"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {distributorBenefits.map((benefit) => (
              <div key={benefit} className="surface-card p-5 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="font-inter text-steel-grey text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow="Who Should Apply?"
            title="Qualified Commercial and B2B <span class='gradient-text'>Operators</span>"
            subtitle="Applications are best suited to companies with existing customer access, service capability, technical aptitude, or regional distribution infrastructure."
            className="mb-10"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {distributorApplicantTypes.map((type) => (
              <div key={type} className="surface-card p-5">
                <p className="font-sora font-semibold text-ink">{type}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface-soft">
        <Container>
          <SectionHeading
            eyebrow="Distributor Process"
            title="From Application to <span class='gradient-text'>Market Launch Review</span>"
            subtitle="The distributor process is designed to confirm company fit, territory requirements, technical capability, and commercial readiness."
            className="mb-10"
          />
          <DistributorProcessTimeline />
        </Container>
      </section>

      <section id="distributor-application" className="scroll-mt-28 py-12 sm:py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <div>
              <span className="inline-block text-xs tracking-[0.28em] uppercase text-accent font-semibold mb-4">Distributor Application Form</span>
              <h2 className="font-sora font-bold text-3xl md:text-4xl text-ink mb-5">Apply for Your Territory</h2>
              <p className="font-inter text-steel-grey leading-relaxed mb-5">
                This form automatically identifies your submission as a Distributor Application for the Safe Solution® Floor Safety System.
              </p>
              <p className="font-inter text-steel-grey text-sm leading-relaxed">
                Provide a link to your company profile, or our team will request supporting documents after the initial review.
              </p>
            </div>
            <DistributorApplicationForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
