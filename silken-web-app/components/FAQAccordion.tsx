"use client";

import { useEffect, useRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const els = listRef.current?.querySelectorAll("[data-faq-item]");
      if (!els) return;
      gsap.fromTo(
        els,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 85%",
          },
        }
      );
    }, listRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={listRef}>
      <Accordion.Root
        type="single"
        collapsible
        className={cn("space-y-3", className)}
      >
        {items.map((item) => (
          <div key={item.id} data-faq-item style={{ opacity: 0 }}>
            <Accordion.Item
              value={item.id}
              className="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-gold-primary/30 hover:shadow-[0_0_25px_rgba(249,200,51,0.08)]"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium text-yellow-pastel transition-colors hover:text-gold-primary sm:px-6 sm:text-base [&[data-state=open]]:text-gold-primary [&[data-state=open]>svg]:rotate-180">
                  {item.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-gold-primary transition-transform duration-300 ease-out" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                <div className="border-t border-white/10 px-4 py-4 text-sm leading-relaxed text-yellow-pastel/80 sm:px-6">
                  {item.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </div>
        ))}
      </Accordion.Root>
    </div>
  );
}
