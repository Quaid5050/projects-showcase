import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GradientBlobs } from "@/components/GradientBlobs";
import { Testimonials } from "@/components/sections/Testimonials";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Laser Hair Removal",
    items: [
      {
        q: "Does laser hair removal hurt?",
        a: "Most clients describe it as a slight warming or tingling sensation. Our trained team uses gentle techniques to make each session as comfortable as possible.",
      },
      {
        q: "How many laser sessions will I need?",
        a: "Everyone's hair growth is different, but most clients see significant results within 6–8 sessions. Our unlimited yearly plan ensures you get the full benefit without worrying about extra costs.",
      },
      {
        q: "Can laser be done on darker skin tones?",
        a: "Yes! We use advanced technology that is safe and effective for all skin tones, including darker skin.",
      },
    ],
  },
  {
    title: "Body Contouring",
    items: [
      {
        q: "Is body contouring safe?",
        a: "Absolutely. Our treatments are non-invasive and gentle, using proven techniques to reduce fat without surgery.",
      },
      {
        q: "Will I need downtime after treatment?",
        a: "No downtime is required. You can resume your daily routine immediately.",
      },
      {
        q: "When will I see results?",
        a: "Most clients notice subtle changes after the first few sessions, with more visible results over multiple treatments.",
      },
    ],
  },
  {
    title: "Organic Teeth Whitening",
    items: [
      {
        q: "Is teeth whitening safe?",
        a: "Yes, we use organic, gentle ingredients that minimize sensitivity while effectively reducing stains.",
      },
      {
        q: "How long does a session take?",
        a: "A standard session lasts 30–45 minutes, and results are often visible immediately.",
      },
      {
        q: "Can it damage my enamel?",
        a: "Not at all. Our method is designed to protect enamel while brightening your smile.",
      },
    ],
  },
  {
    title: "Brazilian Laser (M/F)",
    items: [
      {
        q: "Is Brazilian laser safe for sensitive skin?",
        a: "Yes. Our trained professionals prioritize comfort and hygiene, making every session private and gentle.",
      },
      {
        q: "How often should I schedule sessions?",
        a: "Typically every 4–6 weeks until desired results are achieved. After that, touch-ups are usually needed every few months.",
      },
      {
        q: "Will it cause irritation?",
        a: "Minimal redness may occur, which usually disappears within a few hours. We also provide tips to care for your skin post-treatment.",
      },
    ],
  },
  {
    title: "Localized Cryotherapy",
    items: [
      {
        q: "Does localized cryotherapy hurt?",
        a: "Most clients feel a cold, tingling, or mild numbness sensation during treatment. The Sub Zero system is designed to be comfortable, targeting only the treatment area while keeping surrounding tissue safe.",
      },
      {
        q: "How many sessions will I need?",
        a: "Results vary depending on your body type and target areas, but most clients see noticeable improvement after 4–6 sessions. Your plan can be tailored to achieve gradual, natural-looking results.",
      },
      {
        q: "Is it safe for all areas of the body?",
        a: "Yes! Localized cryotherapy with Sub Zero is safe for areas like the abdomen, thighs, arms, and love handles, and it is non-invasive with no downtime.",
      },
    ],
  },
  {
    title: "General Questions",
    items: [
      {
        q: "Are your treatments suitable for everyone?",
        a: "Most healthy adults are eligible. During your consultation, we will review your skin type and medical history to ensure safety.",
      },
      {
        q: "How do I book an appointment?",
        a: "You can book directly through our website, call, or visit the spa. Our friendly team will guide you to the treatment that fits your needs.",
      },
      {
        q: "Do you offer packages or memberships?",
        a: "Yes! We have special offers, including our $499 1-year unlimited sessions plan for laser hair removal.",
      },
      {
        q: "What makes Hands That Heal different?",
        a: "We combine experience, gentle care, and advanced technology to make sure every client leaves feeling comfortable, confident, and cared for.",
      },
    ],
  },
];

const AccordionItem = ({ item }: { item: FAQItem }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-medium text-foreground group-hover:text-primary transition-colors">{item.q}</span>
        <ChevronDown
          className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => (
  <>
    <title>FAQs — Hands That Heal</title>
    <meta name="description" content="Frequently asked questions about laser hair removal, body contouring, teeth whitening, Brazilian laser, and cryotherapy at Hands That Heal." />

    <section className="relative pt-28 sm:pt-36 pb-8 sm:pb-12 overflow-hidden">
      <GradientBlobs />
      <div className="container-luxe relative max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Frequently Asked Questions</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.02]">FAQs</h1>
        <p className="font-display text-xl sm:text-2xl md:text-3xl italic text-muted-foreground mt-6 leading-snug">
          The most common questions we've had so far.
        </p>
      </div>
    </section>

    <section className="pt-6 pb-16">
      <div className="container-luxe max-w-4xl space-y-8">
        {faqData.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-6 pb-4 border-b-2 border-primary/20">
              {cat.title}
            </h2>
            <div className="bg-card rounded-2xl px-6 shadow-soft">
              {cat.items.map((item) => (
                <AccordionItem key={item.q} item={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Google Reviews widget */}
    <Testimonials />
  </>
);

export default FAQs;
