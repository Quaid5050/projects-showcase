'use client';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className={`flex flex-col ${alignClass} ${className}`}
    >
      {eyebrow && (
        <span className={`inline-block font-inter text-[11px] sm:text-xs tracking-[0.22em] uppercase font-semibold mb-3 ${light ? 'text-accent-bright' : 'text-accent'}`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-sora font-bold text-2xl sm:text-3xl md:text-4xl leading-tight max-w-3xl ${
          align === 'center' ? 'mx-auto' : ''
        } ${light ? 'text-white' : 'text-ink'}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${
            light ? 'text-white/75' : 'text-steel-grey'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
      {align === 'center' && (
        <div className="mt-5 flex gap-2 items-center">
          <div className={`h-px w-10 ${light ? 'bg-white/40' : 'bg-accent/40'}`} />
          <div className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-accent-bright' : 'bg-accent'}`} />
          <div className={`h-px w-10 ${light ? 'bg-white/40' : 'bg-accent/40'}`} />
        </div>
      )}
    </motion.div>
  );
}
