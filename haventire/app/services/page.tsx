import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import { services, HERO_MAIN } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore all 12 premium automotive protection services at Haven Tint & Tire including ceramic coating, window tinting, PPF, vinyl wraps, tire services and more.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Complete automotive protection and detailing services, delivered by certified technicians using only premium materials."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        bgImage={HERO_MAIN}
      />

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="sec-label">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-3 uppercase">
              The Services Your Car Deserves
            </h2>
            <div className="red-divider mx-auto mb-4" />
            <p className="text-[#666] max-w-2xl mx-auto">The Ultimate Car Care Experience</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.slug} className="svc-card group">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-[#1a1a1a] font-black text-lg mb-2">{service.name}</h3>
                  <p className="text-[#666] text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-[#666]">
                        <span className="w-1.5 h-1.5 bg-[#e01e25] rounded-full shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between border-t border-[#ebebeb] pt-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-[#e01e25] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight size={13} />
                    </Link>
                    <Link
                      href="/booking"
                      className="text-xs font-bold text-[#1a1a1a] hover:text-[#e01e25] uppercase tracking-wide transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a1a] py-16 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e01e25]" />
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center relative z-10">
          <p className="sec-label">Ready to Start?</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Book Your Service Today
          </h2>
          <div className="red-divider mx-auto mb-6" />
          <p className="text-gray-400 mb-8">
            Contact us to discuss the best service package for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-red text-center inline-block">Book An Appointment</Link>
            <Link href="/contact" className="btn-outline-red text-center inline-block">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
