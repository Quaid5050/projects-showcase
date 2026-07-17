'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import IndustryCard from '@/components/industries/IndustryCard';
import ProductInquiryModal from '@/components/products/ProductInquiryModal';
import { industries } from '@/lib/data/industries';
import { getIcon } from '@/lib/data/icons';

export default function IndustriesPage() {
  const [modalIndustry, setModalIndustry] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const industryCards = useMemo(
    () =>
      industries.map((ind) => ({
        slug: ind.slug,
        title: ind.title,
        description: ind.description,
        image: ind.image,
        icon: getIcon(ind.icon),
      })),
    []
  );

  return (
    <div className="min-h-screen bg-surface-soft">
      <section className="relative overflow-hidden bg-ink pb-10 pt-24 sm:pb-12 sm:pt-32">
        <div className="absolute inset-0">
          <Image src="/images/industries/commercial.jpg" alt="" fill className="object-cover opacity-30" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />
        </div>
        <Container className="relative z-10">
          <ScrollReveal>
            <span className="inline-block text-xs tracking-[0.28em] uppercase text-accent-bright font-semibold mb-4">Industries Served</span>
            <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4 max-w-3xl">
              Solutions Across Commercial Environments
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
              Explore industry contexts for floor-safety programs, sourcing discussions, and partnership pathways.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industryCards.map((ind) => (
              <IndustryCard
                key={ind.slug}
                title={ind.title}
                slug={ind.slug}
                description={ind.description}
                image={ind.image}
                icon={ind.icon}
                onInquire={() => { setModalIndustry(ind.title); setModalOpen(true); }}
              />
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-6 rounded-3xl bg-ink p-6 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-sora font-bold text-2xl mb-2">Need help matching an industry to a solution?</h2>
              <p className="text-white/70 max-w-xl text-sm sm:text-base leading-relaxed">
                Tell us about your facility type and commercial need. We will review the most relevant product or partnership pathway.
              </p>
            </div>
            <Link href="/contact#inquiry-form" className="btn-primary w-full lg:w-auto xl:whitespace-nowrap">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      <ProductInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productTitle={modalIndustry || ''}
      />
    </div>
  );
}
