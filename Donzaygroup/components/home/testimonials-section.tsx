'use client';

import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    company: 'TechVista Solutions',
    rating: 5,
    text: 'Donzay Group has been our cleaning partner for over 5 years. Their attention to detail and reliability is unmatched. Our office has never looked better, and their team is always professional and courteous.',
  },
  {
    name: 'David Chen',
    company: 'Greenfield Manufacturing',
    rating: 5,
    text: 'We switched to Donzay Group for our industrial facility cleaning and the difference was immediate. Their eco-friendly approach aligns perfectly with our sustainability goals. Highly recommended!',
  },
  {
    name: 'Maria Rodriguez',
    company: 'Bay Street Financial Group',
    rating: 5,
    text: 'The quality of service from Donzay Group is exceptional. They customized a cleaning plan that fits our schedule and budget perfectly. Our clients always comment on how clean our offices look.',
  },
  {
    name: 'James Thompson',
    company: 'North York Medical Centre',
    rating: 5,
    text: 'As a medical facility, cleanliness is non-negotiable. Donzay Group meets and exceeds all health standards. Their fogging disinfection service gives us complete peace of mind.',
  },
];

const delayClasses = ['card-delay-1', 'card-delay-2', 'card-delay-3', 'card-delay-4'];

export function TestimonialsSection() {
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
    <section className="py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with Donzay Group.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={`bg-white rounded-xl p-6 border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 opacity-0 ${
                visible ? `animate-fade-up ${delayClasses[i]}` : ''
              }`}
            >
              <Quote className="h-7 w-7 text-primary/20 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold text-foreground text-sm">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground text-xs">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
