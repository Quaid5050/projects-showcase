'use client';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface InquiryButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'teal' | 'copper' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: boolean;
}

export default function InquiryButton({
  label = 'Submit Inquiry',
  onClick,
  href,
  variant = 'teal',
  size = 'md',
  className = '',
  icon = true,
}: InquiryButtonProps) {
  const sizeClass = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }[size];

  const variantClass = {
    teal: 'bg-gradient-to-r from-teal to-aqua text-navy hover:shadow-glow-teal',
    copper: 'bg-copper text-white hover:bg-copper/90 hover:shadow-glow-copper',
    outline: 'border border-teal/50 text-aqua hover:border-teal hover:bg-teal/10',
  }[variant];

  const classes = `inline-flex items-center gap-2 rounded-full font-inter font-semibold transition-all duration-300 ${sizeClass} ${variantClass} ${className}`;

  const inner = (
    <>
      {label}
      {icon && (
        <motion.span
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      )}
    </>
  );

  if (href) {
    return <a href={href} className={classes}>{inner}</a>;
  }

  return (
    <button onClick={onClick} type="button" className={classes}>
      {inner}
    </button>
  );
}
