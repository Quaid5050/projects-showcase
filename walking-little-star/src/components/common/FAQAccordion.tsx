import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { FAQ } from "../../data/faqs";

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  className = "",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-3 ${className}`}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-navy/10 rounded-2xl overflow-hidden bg-white shadow-soft"
          >
            <button
              className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-cream-warm transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-brand"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span className="font-body font-700 text-navy text-base sm:text-lg leading-snug">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-8 h-8 bg-peach rounded-full flex items-center justify-center text-navy"
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                    <p className="font-body text-text-muted leading-relaxed border-t border-navy/8 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
