import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage: string;
  showCTA?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  showCTA = true,
}: HeroProps) {
  return (
    <div className="relative h-[600px] md:h-[700px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <p className="text-red-500 font-semibold text-lg mb-4 uppercase tracking-wider">
            {subtitle}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {description}
            </p>
          )}
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-all duration-200 font-semibold group"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+16479810084"
                className="inline-flex items-center justify-center space-x-2 bg-white text-black px-8 py-4 rounded-md hover:bg-gray-100 transition-all duration-200 font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
