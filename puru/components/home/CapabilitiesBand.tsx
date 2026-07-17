'use client';

import Marquee from '@/components/ui/Marquee';

const capabilities = [
  'Commercial Floor Safety',
  'Anti-Slip Treatment',
  'Product Sourcing',
  'Industrial Solutions',
  'Distributor Programs',
  'Cross-Border Trade',
  'Facility Maintenance',
  'Partnership Development',
  'Safe Solution®',
  'CRS™ Rejuvenation',
  'Clean Step™ Maintenance',
];

export default function CapabilitiesBand() {
  return (
    <section className="relative overflow-hidden bg-ink py-8">
      <div className="pointer-events-none absolute inset-0 grid-bg-animated opacity-20" aria-hidden="true" />
      <div className="relative">
        <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
          Capabilities across commercial environments
        </p>
        <Marquee items={capabilities} />
      </div>
    </section>
  );
}
