'use client';

interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: 'normal' | 'slow';
}

export default function Marquee({ items, className = '', speed = 'normal' }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={`group/marquee marquee-mask relative w-full overflow-hidden ${className}`}>
      <div
        className="marquee-track gap-3"
        style={{ animationDuration: speed === 'slow' ? '55s' : '32s' }}
      >
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/75 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
