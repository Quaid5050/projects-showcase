import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ClipboardList } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Investments and Project Collaboration | Yuvaan International',
  description:
    'Explore project collaboration, strategic opportunities, sectors of interest, due diligence, and information required from applicants.',
  alternates: { canonical: '/investments' },
};

const sectors = ['Renewable energy', 'Battery energy storage', 'EV charging infrastructure', 'Industrial machinery', 'Commercial products', 'Infrastructure projects', 'Real estate-linked opportunities', 'Technology transfer'];
const opportunityTypes = ['Strategic distribution', 'Project collaboration', 'Joint venture review', 'Supplier or manufacturer partnership', 'Institutional procurement support', 'Technology commercialization'];
const requiredInfo = ['Company profile', 'Project summary', 'Country and location', 'Commercial model', 'Required support', 'Available documentation', 'Regulatory status', 'Timeline and decision makers'];

export default function InvestmentsPage() {
  return (
    <div className="min-h-screen bg-surface-soft">
      <section className="relative pt-28 sm:pt-32 pb-12 overflow-hidden bg-ink">
        <Container className="relative z-10">
          <ScrollReveal>
            <span className="mb-4 inline-block max-w-full text-xs font-semibold uppercase tracking-[0.14em] text-accent-bright sm:tracking-[0.28em]">Investments and Project Collaboration</span>
            <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4 max-w-3xl">
              Strategic Opportunities <span className="text-accent-bright">Under Review</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl">
              Yuvaan International reviews investment, distribution, project, and strategic collaboration opportunities where there is a clear commercial fit, verifiable documentation, and appropriate due diligence.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-5">
            <InfoPanel title="Sectors of Interest" items={sectors} />
            <InfoPanel title="Types of Opportunities Considered" items={opportunityTypes} />
            <InfoPanel title="Information Required From Applicants" items={requiredInfo} />
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow="Due Diligence"
            title="No Promises Without <span class='gradient-text'>Review and Documentation</span>"
            subtitle="Yuvaan International does not promise returns, approvals, financing, funding, exclusivity, or project acceptance. Each opportunity is evaluated case by case."
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {['Initial inquiry', 'Documentation review', 'Commercial and territory fit', 'Partner discussion'].map((step, index) => (
              <div key={step} className="surface-card p-6">
                <p className="font-sora font-bold text-4xl text-accent/20 mb-4">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="font-sora font-semibold text-ink">{step}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact?inquiry=investment#inquiry-form" className="btn-primary">
              Submit Investment or Project Inquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="surface-card p-6 h-full">
      <ClipboardList className="w-8 h-8 text-accent mb-5" />
      <h2 className="font-sora font-bold text-ink text-xl mb-5">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
            <span className="font-inter text-steel-grey text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
