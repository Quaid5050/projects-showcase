import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  FileText,
  Globe2,
  Handshake,
  Landmark,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { company } from '@/lib/data/company';
import { safeSolutionRoutes } from '@/lib/data/safe-solution';

export const metadata: Metadata = {
  title: 'Resources | YUVAAN INTERNATIONAL',
  description: 'Access global markets, partnerships, investments, Safe Solution® documentation requests, privacy, and terms resources.',
};

const resources = [
  {
    title: 'Global Markets',
    description: 'Review configured existing and target markets for product, sourcing, and distribution discussions.',
    href: company.routes.globalMarkets,
    icon: Globe2,
  },
  {
    title: 'Partnerships',
    description: 'Explore manufacturer, distributor, and commercial partnership pathways.',
    href: company.routes.partnerships,
    icon: Handshake,
  },
  {
    title: 'Distributors Wanted',
    description: 'Apply to discuss Safe Solution® and related commercial distribution opportunities.',
    href: company.routes.distributorsWanted,
    icon: Handshake,
  },
  {
    title: 'Investments',
    description: 'Learn how investment and project collaboration inquiries are reviewed.',
    href: company.routes.investments,
    icon: Landmark,
  },
  {
    title: 'Safe Solution® Documentation',
    description: 'Request technical information, safety documentation, and floor-assessment support. Documents are available upon request.',
    href: safeSolutionRoutes.detail,
    icon: ShieldCheck,
  },
  {
    title: 'Privacy Policy',
    description: 'How we handle inquiry data and website information.',
    href: company.routes.privacy,
    icon: Scale,
  },
  {
    title: 'Terms of Use',
    description: 'Website use terms and important commercial disclaimers.',
    href: company.routes.terms,
    icon: FileText,
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-surface-soft">
      <section className="pt-28 sm:pt-32 pb-12 bg-ink">
        <Container>
          <ScrollReveal>
            <span className="inline-block text-xs tracking-[0.28em] uppercase text-accent-bright font-semibold mb-4">Resources</span>
            <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4 max-w-3xl">
              Markets, Partnerships &amp; Documentation Hub
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
              A concise hub for commercial resources. All existing routes remain available; this page simply makes them easier to find.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.href} delay={index * 0.04} className="h-full">
                  <Link href={item.href} className="group surface-card h-full p-6 card-hover flex flex-col">
                    <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="font-sora font-semibold text-ink text-lg mb-2 group-hover:text-accent transition-colors">{item.title}</h2>
                    <p className="text-sm text-steel-grey leading-relaxed flex-1 mb-4">{item.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Open <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-surface-border bg-white p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-sora font-bold text-xl text-ink mb-2">Need a document or quote?</h2>
              <p className="text-sm text-steel-grey max-w-xl leading-relaxed">
                Contact our team for Safe Solution® documentation requests, commercial quotes, or partnership follow-up.
              </p>
            </div>
            <Link href={company.routes.contact + '#inquiry-form'} className="btn-primary w-full md:w-auto lg:whitespace-nowrap">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
