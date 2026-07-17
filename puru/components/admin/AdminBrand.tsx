'use client';

import Image from 'next/image';
import Link from 'next/link';

interface AdminBrandProps {
  compact?: boolean;
  showLink?: boolean;
  className?: string;
}

export default function AdminBrand({ compact = false, showLink = false, className = '' }: AdminBrandProps) {
  const content = (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`relative flex-shrink-0 rounded-xl overflow-hidden bg-white/5 border border-white/10 ${
          compact ? 'w-9 h-9' : 'w-12 h-12'
        }`}
      >
        <Image
          src="/logo-dark.png"
          alt="YUVAAN INTERNATIONAL"
          fill
          className="object-contain p-1"
          sizes={compact ? '36px' : '48px'}
          priority
        />
      </div>
      <div className="min-w-0">
        <p className={`font-bold text-white font-sora truncate ${compact ? 'text-sm' : 'text-base'}`}>
          YUVAAN
        </p>
        <p className="text-teal-400 text-[10px] sm:text-xs tracking-[0.2em] uppercase">
          {compact ? 'Admin' : 'Admin Panel'}
        </p>
      </div>
    </div>
  );

  if (showLink) {
    return (
      <Link href="/admin" className="block hover:opacity-90 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}
