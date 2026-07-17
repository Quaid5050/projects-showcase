'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface IndustryCardProps {
  title: string;
  slug: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  onInquire?: () => void;
}

export default function IndustryCard({ title, slug, description, image, icon: Icon, onInquire }: IndustryCardProps) {
  return (
    <motion.article
      initial={false}
      className="group surface-card h-full flex flex-col overflow-hidden card-hover"
    >
      <Link href={`/industries/${slug}`} className="relative block aspect-[16/10] image-zoom bg-surface-muted">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
        <div className="absolute left-3 top-3 w-10 h-10 rounded-xl bg-white/95 text-accent flex items-center justify-center shadow-soft">
          <Icon className="w-5 h-5" />
        </div>
      </Link>
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <Link href={`/industries/${slug}`}>
          <h3 className="font-sora font-semibold text-ink text-lg mb-2 group-hover:text-accent transition-colors">{title}</h3>
        </Link>
        <p className="text-sm text-steel-grey leading-relaxed mb-5 flex-1 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          <Link href={`/industries/${slug}`} className="btn-secondary min-h-11 !px-4 !py-2.5 !text-sm">
            Learn More
          </Link>
          <button
            type="button"
            onClick={onInquire}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-bright"
          >
            Inquire <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
