'use client';

import { useRef } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article';
}

export default function SpotlightCard({ children, className = '', as = 'div' }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    el.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  const Tag = as;

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement & HTMLElement>}
      onMouseMove={handleMove}
      className={`spotlight ${className}`}
    >
      {children}
    </Tag>
  );
}
