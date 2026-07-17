'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ClipboardList, MessageSquare, SearchCheck, Send } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const steps = [
  {
    icon: Send,
    title: 'Submit your inquiry',
    description: 'Tell us about your facility, product need, territory interest, or partnership goal.',
  },
  {
    icon: SearchCheck,
    title: 'Capability review',
    description: 'Our team reviews surface fit, sourcing requirements, documentation needs, and commercial context.',
  },
  {
    icon: ClipboardList,
    title: 'Clear next steps',
    description: 'We confirm whether a quote, floor assessment, distributor discussion, or sourcing pathway applies.',
  },
  {
    icon: MessageSquare,
    title: 'Follow-up conversation',
    description: 'Qualified opportunities move into a practical discussion with the right commercial details.',
  },
];

export default function ProcessSection() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A Transparent Inquiry Process"
          subtitle="Until approved testimonials are available, we show the process clearly so visitors know what happens after they contact us."
          className="mb-10"
        />
        <div className="relative mb-10">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="absolute left-0 right-0 top-[2.15rem] hidden h-0.5 origin-left bg-gradient-to-r from-accent via-accent-bright to-accent/20 lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.title} delay={index * 0.06} className="h-full">
                  <div className="surface-card card-hover group relative h-full p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent ring-4 ring-white transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-sora text-3xl font-bold text-surface-border transition-colors duration-300 group-hover:text-accent/30">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="mb-2 font-sora font-semibold text-ink">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-steel-grey">{step.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
        <div className="relative flex flex-col gap-6 overflow-hidden rounded-3xl bg-ink p-6 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="pointer-events-none absolute inset-0 grid-bg-animated opacity-20" aria-hidden="true" />
          <div className="relative">
            <p className="text-accent-bright text-xs font-semibold tracking-[0.2em] uppercase mb-2">Ready to start?</p>
            <h3 className="font-sora font-bold text-2xl sm:text-3xl mb-2">Request a quote or floor assessment</h3>
            <p className="text-white/70 max-w-xl text-sm sm:text-base leading-relaxed">
              Share your requirement and our team will review the practical next step for your facility, market, or partnership inquiry.
            </p>
          </div>
          <div className="relative flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link href="/contact#inquiry-form" className="btn-primary w-full sm:w-auto lg:whitespace-nowrap">
              Contact Our Team
            </Link>
            <Link href="/partnerships/distributors-wanted" className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-white/10 sm:w-auto sm:whitespace-nowrap sm:px-6">
              Become a Distributor
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
