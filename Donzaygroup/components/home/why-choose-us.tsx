'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Award,
  Users,
  ClipboardList,
  Leaf,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Proven Experience',
    description:
      '30+ years in the commercial cleaning industry and 5000+ satisfied clients across the GTA.',
  },
  {
    icon: Users,
    title: 'Professional & Reliable Team',
    description:
      'Fully trained, insured, and background-checked staff dedicated to quality and consistency.',
  },
  {
    icon: ClipboardList,
    title: 'Customized Cleaning Plans',
    description:
      'Tailored cleaning programs designed for your facility type, schedule, and unique needs.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Approach',
    description:
      'We use advanced, environmentally safe products and modern equipment for a cleaner, healthier workspace.',
  },
  {
    icon: MessageSquare,
    title: 'Exceptional Communication',
    description:
      'We pride ourselves on clear communication — addressing requests and concerns quickly and efficiently.',
  },
  {
    icon: ShieldCheck,
    title: 'Insured, Bonded & Guaranteed Quality',
    description:
      'Regular inspections and a satisfaction guarantee ensure every job meets the highest standards.',
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

export function WhyChooseUs() {
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
    <section className="py-16 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Difference
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Why Choose Donzay Group?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            At Donzay Group, we&apos;re more than just cleaners — we&apos;re
            your facility care partners. We deliver spotless results, reliable
            service, and peace of mind, every time.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`bg-white rounded-xl p-6 sm:p-8 border border-border/50 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group opacity-0 ${
                visible ? `animate-fade-up ${delayClasses[i]}` : ''
              }`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
