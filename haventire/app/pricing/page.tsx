import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import PricingSection from '@/components/home/PricingSection';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'View Haven Tint & Tire pricing plans — affordable monthly and yearly packages for ceramic coating, window tinting, tire services and more.',
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Pricing Plans"
        subtitle="Transparent, competitive pricing for every service. Choose monthly or yearly — and save 30% when you go annual."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]}
      />

      <PricingSection />

      {/* What's included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="sec-label">All Plans Include</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-3">
              Every Plan, Every Time
            </h2>
            <div className="red-divider mx-auto mb-4" />
            <p className="text-[#666] max-w-xl mx-auto">
              No matter which plan you choose, you always get our full commitment to quality.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              'Certified & trained technicians',
              'Premium-grade materials only',
              'Satisfaction guarantee',
              'Free initial consultation',
              'Detailed service report',
              'Both GTA locations available',
            ].map((item) => (
              <div key={item} className="flex items-center gap-4 border border-[#ebebeb] p-5 hover:border-[#e01e25] transition-colors">
                <CheckCircle2 size={20} className="text-[#e01e25] shrink-0" />
                <span className="text-[#555] text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom quote */}
      <section className="bg-[#1a1a1a] py-16 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e01e25]" />
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center relative z-10">
          <p className="sec-label">Custom Quote</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Need a Custom Package?
          </h2>
          <div className="red-divider mx-auto mb-6" />
          <p className="text-gray-400 mb-8">
            Have specific requirements? Contact us for a personalized quote tailored to your vehicle and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-red text-center inline-block">Get a Custom Quote</Link>
            <Link href="/booking" className="btn-outline-red text-center inline-block">Book an Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
