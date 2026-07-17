'use client';

import { motion, type Variants } from 'framer-motion';
import { CheckCircle2, Handshake, ShieldCheck, Truck } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SpotlightCard from '@/components/ui/SpotlightCard';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Commercial Floor Safety Focus',
    description: 'Safe Solution®, CRS™, and Clean Step™ support structured treatment, maintenance, and rejuvenation discussions.',
  },
  {
    icon: Truck,
    title: 'Cross-Border Sourcing',
    description: 'Practical pathways for product sourcing, industrial solutions, and supplier coordination across target markets.',
  },
  {
    icon: Handshake,
    title: 'Partnership-Ready Review',
    description: 'Distributor, manufacturer, and institutional inquiries are reviewed against capability, territory fit, and due diligence.',
  },
  {
    icon: CheckCircle2,
    title: 'Clear Next Steps',
    description: 'Quote requests, floor assessments, and partnership applications move through a structured commercial follow-up process.',
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyChooseUs() {
  return (
    <section className="section-pad relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent-soft/50 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for Trust, Clarity, and <span class='gradient-text'>Conversion</span>"
          subtitle="We keep the homepage focused on outcomes: can we help solve your commercial floor-safety, sourcing, or partnership need?"
          className="mb-10"
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div key={benefit.title} variants={item} className="h-full">
                <SpotlightCard className="surface-card card-hover group h-full p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-sora font-semibold text-ink">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-steel-grey">{benefit.description}</p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
