'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface PartnershipCardProps {
  title: string;
  description?: string;
  desc?: string;
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
}

export default function PartnershipCard({ title, description, desc, icon: Icon, delay = 0 }: PartnershipCardProps) {
  const text = description || desc || '';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className="group relative p-5 sm:p-8 rounded-2xl glass border border-teal/10 hover:border-teal/30 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity shimmer rounded-2xl" />

      <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-teal/20 to-aqua/10 border border-teal/20 flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-teal group-hover:text-aqua transition-colors" />
      </div>

      <h3 className="relative z-10 font-sora font-bold text-soft-white text-lg sm:text-xl mb-3 group-hover:text-aqua transition-colors">
        {title}
      </h3>
      <p className="relative z-10 font-inter text-soft-white/50 text-sm leading-relaxed mb-6">
        {text}
      </p>

      <Link
        href="/contact#inquiry-form"
        className="relative z-10 inline-flex items-center gap-2 text-sm font-inter text-soft-white/40 group-hover:text-aqua transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        Submit Inquiry
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
