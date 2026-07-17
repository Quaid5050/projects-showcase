'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';

interface FAQ { question: string; answer: string; }

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <p className="sec-label">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-4 leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="red-divider mb-6" />
            <p className="text-[#666] leading-relaxed mb-8">
              Have questions about our services? We&apos;ve compiled answers to the most common questions our customers ask. Don&apos;t see yours? Contact us directly.
            </p>
            <Link href="/contact" className="btn-red inline-block">Ask a Question</Link>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border transition-all duration-200 ${
                  openIndex === i ? 'border-[#e01e25]' : 'border-[#ebebeb] hover:border-[#ddd]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className={`font-semibold text-sm leading-snug ${openIndex === i ? 'text-[#e01e25]' : 'text-[#1a1a1a]'}`}>
                    {faq.question}
                  </span>
                  <span className={`shrink-0 w-8 h-8 flex items-center justify-center transition-colors ${
                    openIndex === i ? 'bg-[#e01e25] text-white' : 'bg-[#f5f5f5] text-[#1a1a1a]'
                  }`}>
                    {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5">
                    <p className="text-[#666] text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
