'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { productCategories } from '@/lib/data/products';
import { safeSolutionRoutes } from '@/lib/data/safe-solution';

const featured = [
  {
    title: 'Safe Solution® Floor Safety System',
    description: 'Commercial anti-slip treatment, rejuvenation, and maintenance program for hard surfaces.',
    href: safeSolutionRoutes.detail,
    image: '/images/products/safe-solution.jpg',
    tag: 'New Product',
  },
  ...productCategories.slice(0, 5).map((product) => ({
    title: product.title,
    description: product.shortDescription,
    href: `/products/${product.slug}`,
    image: product.image,
    tag: product.category,
  })),
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function FeaturedProducts() {
  return (
    <section className="section-pad bg-surface-soft">
      <Container>
        <SectionHeading
          eyebrow="Featured Products"
          title="Solutions Built for <span class='gradient-text'>Commercial Performance</span>"
          subtitle="Explore our flagship floor-safety system and selected trade categories. Every card leads to a focused product page."
          className="mb-10"
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((entry) => (
            <motion.div key={entry.href} variants={item} className="h-full">
              <SpotlightCard as="article" className="surface-card card-hover group flex h-full flex-col overflow-hidden">
                <Link href={entry.href} className="flex h-full flex-col">
                  <div className="image-zoom relative aspect-[16/10] overflow-hidden bg-surface-muted">
                    <Image src={entry.image} alt={entry.title} fill className="object-cover" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent shadow-soft">
                      {entry.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 font-sora text-lg font-semibold text-ink transition-colors group-hover:text-accent">{entry.title}</h3>
                    <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-steel-grey">{entry.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 text-center">
          <Link href="/products" className="btn-secondary">
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
