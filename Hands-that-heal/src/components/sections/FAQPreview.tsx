import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const faqs = [
  { q: "Does laser hair removal hurt?", a: "Most clients describe it as a slight warming or tingling sensation. Our trained team uses gentle techniques to make each session as comfortable as possible." },
  { q: "How many laser sessions will I need?", a: "Everyone's hair growth is different, but most clients see significant results within 6–8 sessions. Our unlimited yearly plan ensures you get the full benefit without worrying about extra costs." },
  { q: "Is body contouring safe?", a: "Absolutely. Our treatments are non-invasive and gentle, using proven techniques to reduce fat without surgery." },
  { q: "Will I need downtime after body contouring treatment?", a: "No downtime is required. You can resume your daily routine immediately." },
  { q: "How long does a teeth whitening session take?", a: "A standard session lasts 30–45 minutes, and results are often visible immediately." },
  { q: "Is Brazilian laser safe for sensitive skin?", a: "Yes. Our trained professionals prioritize comfort and hygiene, making every session private and gentle." },
  { q: "Does localized cryotherapy hurt?", a: "Most clients feel a cold, tingling, or mild numbness sensation during treatment. The Sub Zero system is designed to be comfortable, targeting only the treatment area." },
  { q: "How do I book an appointment?", a: "You can book directly through our website, call, or visit the spa. Our friendly team will guide you to the treatment that fits your needs." },
];

const FAQItem = ({ item }: { item: { q: string; a: string } }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-medium text-foreground group-hover:text-primary transition-colors">{item.q}</span>
        <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
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

export const FAQPreview = () => (
  <section className="py-8 sm:py-12">
    <div className="container-luxe">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Frequently Asked Questions</p>
          <h2 className="font-display text-3xl md:text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            The most common questions{" "}
            <span className="italic text-gradient">we've had so far.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Have more questions? Visit our full FAQ page or reach out directly — our team is always happy to help.
          </p>
          <Button asChild variant="hero" size="lg" className="mt-8">
            <Link to="/faqs">View All FAQs <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="bg-card rounded-3xl shadow-soft px-6">
          {faqs.map((item) => (
            <FAQItem key={item.q} item={item} />
          ))}
        </div>
      </div>
    </div>
  </section>
);
