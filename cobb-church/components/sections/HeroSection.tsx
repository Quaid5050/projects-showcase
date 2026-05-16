import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  buttons?: Array<{
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  }>;
  overlayOpacity?: number;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  buttons = [],
  overlayOpacity = 0.5
}: HeroSectionProps) {
  return (
    <div className="relative w-full h-96 md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover object-center"
        quality={85}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl">
        {subtitle && (
          <p className="text-sm md:text-base font-semibold text-gold mb-2 uppercase tracking-wide">
            {subtitle}
          </p>
        )}

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          {title}
        </h1>

        {description && (
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
            {description}
          </p>
        )}

        {buttons.length > 0 && (
          <div className="flex flex-wrap gap-4 justify-center">
            {buttons.map((button, idx) => (
              <Button
                key={idx}
                asChild
                variant={
                  button.variant === 'outline'
                    ? 'outline'
                    : button.variant === 'secondary'
                      ? 'secondary'
                      : 'default'
                }
              >
                <Link href={button.href}>{button.label}</Link>
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
