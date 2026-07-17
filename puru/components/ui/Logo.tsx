'use client';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const sizes = {
  sm: { img: 38, text: true },
  md: { img: 48, text: true },
  lg: { img: 72, text: false },
};

export default function Logo({
  variant = 'dark',
  size = 'md',
  showText = true,
  className = '',
}: LogoProps) {
  const { img } = sizes[size];
  const src = variant === 'dark' ? '/logo-dark.png' : '/logo-light.png';

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 group flex-shrink-0 ${className}`}
      aria-label="YUVAAN INTERNATIONAL Home"
    >
      <div className="relative flex-shrink-0" style={{ width: img, height: img }}>
        <Image
          src={src}
          alt="YUVAAN INTERNATIONAL logo"
          width={img}
          height={img}
          className="object-contain w-full h-full"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-sora font-bold tracking-widest text-sm md:text-base uppercase ${
              variant === 'dark' ? 'text-soft-white' : 'text-dark-text'
            }`}
          >
            YUVAAN
          </span>
          <span
            className={`font-inter tracking-[0.3em] text-xs uppercase mt-0.5 ${
              variant === 'dark' ? 'text-teal' : 'text-steel-grey'
            }`}
          >
            INTERNATIONAL
          </span>
        </div>
      )}
    </Link>
  );
}
