'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';

interface ProductCardProps {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  audience: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  onInquire: () => void;
}

export default function ProductCategoryCard({
  title,
  slug,
  category,
  shortDescription,
  audience,
  image,
  onInquire,
}: ProductCardProps) {
  return (
    <motion.article className="group surface-card flex h-full min-w-0 flex-col overflow-hidden card-hover">
      <Link href={`/products/${slug}`} className="relative block aspect-[16/10] image-zoom bg-surface-muted">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
          {category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <Link href={`/products/${slug}`}>
          <h3 className="font-sora font-semibold text-ink text-lg mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-steel-grey leading-relaxed mb-4 flex-1 line-clamp-3">{shortDescription}</p>
        <div className="flex items-start gap-2 mb-5">
          <Users className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
          <span className="text-xs text-ink-muted leading-relaxed line-clamp-2">{audience}</span>
        </div>
        <div className="mt-auto grid grid-cols-2 gap-2">
          <Link href={`/products/${slug}`} className="btn-secondary min-h-11 !px-3 !py-2.5 !text-sm">
            Learn More
          </Link>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onInquire(); }}
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-accent px-3 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-bright"
          >
            Request a Quote <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
