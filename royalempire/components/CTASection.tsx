import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  showPhone?: boolean;
}

export default function CTASection({
  title,
  description,
  primaryButtonText = 'Get Started',
  primaryButtonLink = '/contact',
  showPhone = true,
}: CTASectionProps) {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-red-100 mb-10 max-w-3xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryButtonLink}
              className="inline-flex items-center justify-center space-x-2 bg-white text-red-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-all duration-200 font-semibold group"
            >
              <span>{primaryButtonText}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {showPhone && (
              <a
                href="tel:+16479810084"
                className="inline-flex items-center justify-center space-x-2 bg-black text-white px-8 py-4 rounded-md hover:bg-gray-900 transition-all duration-200 font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>+1 (647) 981-0084</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
