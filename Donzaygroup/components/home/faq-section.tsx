'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services do you provide?',
    answer:
      'Donzay Group offers a wide range of commercial cleaning services and specialty cleaning services to cover all of your cleaning needs, regardless of your profession, industry, or property type. We specialize in multiple types of cleaning that cover everything from retail and office space, to healthcare facilities, restaurants and factories.',
  },
  {
    question: 'How much does a commercial cleaning service cost?',
    answer:
      'The cost of a cleaning service can vary depending on factors like the size of the space, the type of service required, and the frequency of cleaning. At Donzay Group, we offer competitive rates tailored to your specific needs. Contact us for a free estimate.',
  },
  {
    question: 'What size facilities do you clean?',
    answer:
      'Our team handles facilities up to 1 million square feet. We have vast experience working inside very large properties such as factories, which means our team is well-equipped to determine the most efficient way to clean your establishment.',
  },
  {
    question: 'What is the frequency of cleaning you provide?',
    answer:
      'Every business is different, so we will come to your property to assess your needs based on location, local weather, foot traffic and other criteria, which will help us determine the best cleaning schedule to suit your needs.',
  },
  {
    question: 'Can you provide day porter services?',
    answer:
      'We can absolutely provide day porter services, based on your needs. Our day porters help maintain the cleanliness of your facility throughout business hours.',
  },
  {
    question: 'Do you perform special disinfection and sanitization services?',
    answer:
      'Absolutely, yes. We understand the continuing challenges posed by viruses and pathogens, and we take all necessary steps to make sure that surfaces are disinfected properly so they do not have a chance to spread.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Have questions? Check out our FAQs below.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-border/50 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
