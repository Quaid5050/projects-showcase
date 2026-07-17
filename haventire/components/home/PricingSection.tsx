'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { pricingPlans } from '@/lib/data';

export default function PricingSection() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const plans = pricingPlans[billing];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="sec-label">Pricing Plans</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-3 uppercase">Monthly Packages</h2>
          <div className="red-divider mx-auto mb-6" />

          {/* Toggle */}
          <div className="inline-flex items-center border border-[#ddd] bg-white">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-7 py-2.5 text-sm font-bold uppercase tracking-wide transition-all ${
                billing === 'monthly' ? 'bg-[#e01e25] text-white' : 'text-[#666] hover:text-[#1a1a1a]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-7 py-2.5 text-sm font-bold uppercase tracking-wide flex items-center gap-2 transition-all ${
                billing === 'yearly' ? 'bg-[#e01e25] text-white' : 'text-[#666] hover:text-[#1a1a1a]'
              }`}
            >
              Yearly
              <span className="bg-[#1a1a1a] text-white text-[9px] font-black px-1.5 py-0.5 uppercase tracking-wide">
                Save 30%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative border-2 p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'border-[#e01e25] bg-[#1a1a1a] shadow-2xl'
                  : 'border-[#e0e0e0] bg-white hover:border-[#e01e25]/40'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e01e25] text-white text-xs font-black uppercase tracking-wider px-5 py-1.5">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <p className="text-[#e01e25] text-xs font-bold uppercase tracking-widest mb-2">
                  {billing === 'yearly' ? 'Yearly' : 'Monthly'} Package
                </p>
                <h3 className={`text-xl font-black uppercase mb-4 ${plan.highlighted ? 'text-white' : 'text-[#1a1a1a]'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1">
                  <span className={`text-5xl font-black ${plan.highlighted ? 'text-white' : 'text-[#1a1a1a]'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-2 ${plan.highlighted ? 'text-gray-400' : 'text-[#666]'}`}>
                    {plan.unit}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 size={15} className="text-[#e01e25] shrink-0" />
                    <span className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-[#555]'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/booking"
                className={`block text-center font-bold text-xs uppercase tracking-widest py-4 px-6 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#e01e25] text-white hover:bg-[#b8191f]'
                    : 'bg-[#1a1a1a] text-white hover:bg-[#e01e25]'
                }`}
              >
                Get Membership
              </Link>
            </div>
          ))}
        </div>

        {billing === 'yearly' && (
          <p className="text-center mt-6 text-sm text-[#666]">
            <span className="text-[#e01e25] font-bold">Save 30%</span> on a yearly plan — best value for regular car care!
          </p>
        )}
      </div>
    </section>
  );
}
