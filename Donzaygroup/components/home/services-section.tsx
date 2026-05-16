'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  Building2,
  Briefcase,
  Factory,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const commercialServices = [
  {
    icon: Briefcase,
    title: 'Office Cleaning',
    description:
      'Routine office cleaning designed to keep the workplace clean, efficient, and inviting for staff and visitors.',
    image: '/Office Cleaning.png',
    href: '/services',
  },
  {
    icon: Factory,
    title: 'Industrial Cleaning',
    description:
      'Reliable cleaning solutions for warehouses and factories, ensuring a clean and safe working environment.',
    image: '/Industrial Cleaning.png',
    href: '/services',
  },
  {
    icon: Building2,
    title: 'School & Daycare Cleaning',
    description:
      'Safe and detailed cleaning for classrooms, restrooms, and halls to support a healthy learning environment.',
    image: '/School & Daycare Cleaning.png',
    href: '/services',
  },
  {
    icon: Sparkles,
    title: 'Retail Cleaning',
    description:
      'Professional cleaning services designed to showcase your retail items in the best light for customer happiness.',
    image: '/Retail Cleaning.png',
    href: '/services',
  },
  {
    icon: Building2,
    title: 'Restaurant Cleaning',
    description:
      'Thorough cleaning of kitchens and dining spaces to meet hygiene standards and impress guests.',
    image: '/Restaurant Cleaning.png',
    href: '/services',
  },
  {
    icon: Briefcase,
    title: 'Medical Office Cleaning',
    description:
      'Professional-grade cleaning services that meet and exceed industry health standards.',
    image: '/Medical Office Cleaning.png',
    href: '/services',
  },
];

const specialtyServices = [
  {
    icon: Sparkles,
    title: 'Steam Carpet Cleaning',
    description:
      'Professional deep cleaning that removes stains, dirt, and allergens to restore your carpets look and feel.',
    image: '/Steam Carpet Cleaning.png',
    href: '/services',
  },
  {
    icon: Building2,
    title: 'Window Cleaning',
    description:
      'Thoroughly clean windows, removing dirt, streaks, and smudges for a spotless, crystal-clear finish.',
    image: '/Window Cleaning.png',
    href: '/services',
  },
  {
    icon: Factory,
    title: 'Power Washing',
    description:
      'High-pressure washing removes dirt, grime, and stains from surfaces, restoring their original look.',
    image: '/Power Washing.png',
    href: '/services',
  },
  {
    icon: Sparkles,
    title: 'Floor Work',
    description:
      'Expert floor care including stripping, waxing, and polishing to maintain shine and durability.',
    image: '/Floor Work.png',
    href: '/services',
  },
  {
    icon: Briefcase,
    title: 'Deep Cleaning',
    description:
      'Deep Cleaning offers a thorough, detailed cleaning that leaves your space spotless and refreshed.',
    image: '/Deep Cleaning.png',
    href: '/services',
  },
  {
    icon: Building2,
    title: 'Fogging Disinfection',
    description:
      'Fogging Disinfection uses a fine mist to sanitize large areas, effectively killing germs and viruses on contact.',
    image: '/Fogging Disinfection.png',
    href: '/services',
  },
];

const delayClasses = [
  'card-delay-1',
  'card-delay-2',
  'card-delay-3',
  'card-delay-4',
  'card-delay-5',
  'card-delay-6',
];

function AnimatedGrid({ services }: { services: typeof commercialServices }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {services.map((service, i) => (
        <div
          key={service.title}
          className={`group bg-white rounded-xl border border-border/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/20 hover:-translate-y-1 opacity-0 ${
            visible ? `animate-fade-up ${delayClasses[i]}` : ''
          }`}
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <service.icon className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {service.description}
            </p>
            <Link
              href={service.href}
              className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Donzay Group offers a full suite of commercial cleaning services
            designed to keep businesses and entities looking their best.
          </p>
        </div>

        {/* Commercial */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <div className="w-1.5 h-8 bg-primary rounded-full" />
            Commercial Cleaning Services
          </h3>
          <p className="text-muted-foreground mb-8 max-w-3xl text-sm sm:text-base">
            Malls, supermarkets, and grocery stores see heavy daily traffic,
            making regular cleaning essential. A clean, organized space can make
            a big difference in your business&apos;s success. Donzay Group
            provides cost-effective commercial cleaning services across Toronto,
            the GTA, and Ontario.
          </p>
          <AnimatedGrid services={commercialServices} />
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/services">View More</Link>
            </Button>
          </div>
        </div>

        {/* Specialty */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <div className="w-1.5 h-8 bg-primary rounded-full" />
            Specialty Cleaning Services
          </h3>
          <p className="text-muted-foreground mb-8 max-w-3xl text-sm sm:text-base">
            Office cleanliness is essential for a healthy, productive, and
            welcoming environment. It boosts workflow and leaves a positive
            impression on clients. That&apos;s why many Ontario businesses hire
            commercial cleaning companies to maintain their workspace.
          </p>
          <AnimatedGrid services={specialtyServices} />
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/services">View More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
