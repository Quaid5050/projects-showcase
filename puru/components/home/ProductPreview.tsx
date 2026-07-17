'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlobalGridBackground from '@/components/ui/GlobalGridBackground';
import ProductInquiryModal from '@/components/products/ProductInquiryModal';
import { productCategories } from '@/lib/data/products';
import { getIcon } from '@/lib/data/icons';

// Show the 6 most relevant categories on home (first 4 energy solutions + 2 trade)
const FEATURED_SLUGS = [
  'battery-energy-storage',
  'ev-charging-infrastructure',
  'hydrogen-energy',
  'smart-grid-power-management',
  'global-trading',
  'custom-product-sourcing',
];

const colorByIndex: Record<number, { card: string; icon: string }> = {
  0: { card: 'from-teal/20 to-teal/5 border-teal/25 group-hover:border-teal/50',   icon: 'text-teal bg-teal/10' },
  1: { card: 'from-aqua/20 to-aqua/5 border-aqua/25 group-hover:border-aqua/50',   icon: 'text-aqua bg-aqua/10' },
  2: { card: 'from-copper/20 to-copper/5 border-copper/25 group-hover:border-copper/50', icon: 'text-copper bg-copper/10' },
  3: { card: 'from-teal/20 to-teal/5 border-teal/25 group-hover:border-teal/50',   icon: 'text-teal bg-teal/10' },
  4: { card: 'from-aqua/20 to-aqua/5 border-aqua/25 group-hover:border-aqua/50',   icon: 'text-aqua bg-aqua/10' },
  5: { card: 'from-copper/20 to-copper/5 border-copper/25 group-hover:border-copper/50', icon: 'text-copper bg-copper/10' },
};

export default function ProductPreview() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const featured = FEATURED_SLUGS.map((slug) =>
    productCategories.find((p) => p.slug === slug)
  ).filter(Boolean) as typeof productCategories;

  const openModal = (title: string) => { setSelectedProduct(title); setModalOpen(true); };

  return (
    <section className="relative py-12 sm:py-20 lg:py-24 bg-navy overflow-hidden">
      <GlobalGridBackground />

      <Container>
        <SectionHeading
          eyebrow="Featured Solutions"
          title="Powering the Future of <span class='gradient-text'>Global Trade</span>"
          subtitle="From battery energy storage to international project development — explore YUVAAN INTERNATIONAL's featured solutions and trade categories."
          className="mb-10 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {featured.map((product, i) => {
            const Icon = getIcon(product.icon);
            const colors = colorByIndex[i] ?? colorByIndex[0];
            return (
              <ScrollReveal key={product.slug} delay={i * 0.08} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`group relative h-full flex flex-col p-5 sm:p-8 rounded-2xl bg-gradient-to-b ${colors.card} border transition-all duration-300 cursor-pointer overflow-hidden`}
                  onClick={() => openModal(product.title)}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer rounded-2xl" />

                  {/* Tag badge */}
                  {product.tag && (
                    <span className="relative z-10 self-start mb-3 px-2.5 py-0.5 rounded-full text-[10px] font-inter font-bold bg-white/8 border border-white/12 text-soft-white/60 uppercase tracking-widest">
                      {product.tag}
                    </span>
                  )}

                  <div className={`relative z-10 w-12 h-12 flex-shrink-0 rounded-xl ${colors.icon} flex items-center justify-center mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="relative z-10 font-sora font-bold text-soft-white text-xl mb-3 flex-shrink-0">{product.title}</h3>
                  <p className="relative z-10 font-inter text-soft-white/50 text-sm leading-relaxed mb-6 flex-grow">{product.shortDescription}</p>

                  <div className="relative z-10 flex items-center justify-between mt-auto">
                    <span className="text-xs font-inter text-soft-white/30 uppercase tracking-widest">{product.category}</span>
                    <button className="flex items-center gap-1.5 text-xs font-inter font-semibold text-soft-white/60 group-hover:text-aqua transition-colors">
                      Inquire <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3} className="text-center mt-12">
          <Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-teal/30 text-soft-white font-inter font-medium hover:border-teal hover:bg-teal/10 transition-all duration-300">
            View All Solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </Container>

      <ProductInquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} productTitle={selectedProduct || ''} />
    </section>
  );
}
