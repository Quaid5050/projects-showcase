'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ProductInquiryModal from '@/components/products/ProductInquiryModal';
import ProductCategoryCard from '@/components/products/ProductCategoryCard';
import { productCategories } from '@/lib/data/products';
import { getIcon } from '@/lib/data/icons';
import { safeSolutionRoutes, safeSolutionSummary } from '@/lib/data/safe-solution';

const filters = ['All', 'Energy Solutions', 'Trade & Sourcing', 'Business Development', 'Infrastructure', 'Industrial Machinery', 'Wholesale Products', 'Agriculture', 'Custom Sourcing'];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProduct, setModalProduct] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = useMemo(
    () =>
      productCategories.map((p) => ({
        slug: p.slug,
        title: p.title,
        tag: p.tag,
        category: p.category,
        shortDescription: p.shortDescription,
        audience: p.audience.join(', '),
        image: p.image,
        icon: getIcon(p.icon),
      })),
    []
  );

  const filtered = categories.filter((c) => {
    const matchesFilter = activeFilter === 'All' || c.category === activeFilter;
    const matchesSearch =
      !searchQuery ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-surface-soft">
      <section className="relative overflow-hidden bg-ink pb-10 pt-24 sm:pb-12 sm:pt-32">
        <div className="absolute inset-0">
          <Image src="/images/hero/industrial-facility.jpg" alt="" fill className="object-cover opacity-30" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />
        </div>
        <Container className="relative z-10">
          <ScrollReveal>
            <span className="mb-4 inline-block max-w-full text-xs font-semibold uppercase tracking-[0.14em] text-accent-bright sm:tracking-[0.28em]">Product Catalog</span>
            <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4 max-w-3xl">
              Professional Solutions for Commercial &amp; Trade Partners
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
              Browse our floor-safety system and trade categories. Each card opens a focused product page with applications, technical information pathways, and quote options.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <ScrollReveal>
            <div className="surface-card grid gap-0 overflow-hidden lg:grid-cols-[1.1fr_0.9fr]">
              <div className="image-zoom relative min-h-[210px] sm:min-h-[240px]">
                <Image src="/images/products/safe-solution.jpg" alt="Safe Solution floor safety application context" fill className="object-cover" sizes="(max-width: 1023px) 100vw, 50vw" />
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
                <span className="inline-flex w-fit px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  Featured New Product
                </span>
                <h2 className="font-sora font-bold text-2xl sm:text-3xl text-ink mb-3">{safeSolutionSummary.title}</h2>
                <p className="text-steel-grey leading-relaxed mb-6">{safeSolutionSummary.description}</p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href={safeSolutionRoutes.detail} className="btn-primary w-full sm:w-auto">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => { setModalProduct(safeSolutionSummary.title); setModalOpen(true); }}
                    className="btn-secondary w-full sm:w-auto"
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-8">
            <div className="relative w-full flex-1 lg:max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-steel-grey" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products and categories..."
                className="w-full rounded-full border border-surface-border bg-white py-3 pl-11 pr-4 text-base text-ink placeholder:text-steel-grey/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 sm:text-sm"
                aria-label="Search products"
              />
            </div>
            <div className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0 lg:pb-0">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-11 shrink-0 snap-start whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-all lg:text-xs ${
                    activeFilter === filter
                      ? 'bg-accent text-white shadow-soft'
                      : 'bg-white border border-surface-border text-ink-muted hover:text-ink hover:border-accent/40'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, index) => (
              <ScrollReveal key={item.slug} delay={index * 0.04} className="h-full">
                <ProductCategoryCard
                  title={item.title}
                  slug={item.slug}
                  category={item.category}
                  shortDescription={item.shortDescription}
                  audience={item.audience}
                  image={item.image}
                  icon={item.icon}
                  onInquire={() => { setModalProduct(item.title); setModalOpen(true); }}
                />
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="surface-card p-10 text-center">
              <ShieldCheck className="w-10 h-10 text-accent mx-auto mb-3" />
              <p className="font-sora font-semibold text-ink mb-1">No matching products</p>
              <p className="text-sm text-steel-grey">Try another filter or search term, or request a custom sourcing discussion.</p>
            </div>
          )}
        </Container>
      </section>

      <ProductInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productTitle={modalProduct || ''}
      />
    </div>
  );
}
