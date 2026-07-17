"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Leaf, Star } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutPreview() {
  return (
    <section className="section-padding" style={{ background: "#FFF8EF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main visual card */}
              <div
                className="aspect-square max-w-sm mx-auto rounded-4xl overflow-hidden relative"
                style={{
                  border: "2px solid rgba(247,168,196,0.25)",
                  boxShadow: "0 20px 60px rgba(122,31,61,0.12)",
                }}
              >
                <Image
                  src="/about-sec.png"
                  alt="Natural homeopathic wellness"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 384px"
                />
                <div className="absolute top-6 right-6 text-2xl opacity-20 pointer-events-none" style={{ color: "#7A1F3D" }}>✿</div>
                <div className="absolute bottom-6 left-6 text-xl opacity-15 pointer-events-none" style={{ color: "#F6C85F" }}>❋</div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/4 p-3 rounded-2xl shadow-warm hidden lg:block"
                style={{ background: "#FFFCF8", border: "1px solid rgba(247,168,196,0.3)" }}
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" style={{ color: "#F7A8C4" }} />
                  <span className="text-xs font-semibold" style={{ color: "#7A1F3D", fontFamily: "Nunito Sans, sans-serif" }}>
                    Compassionate
                  </span>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-4 bottom-1/4 p-3 rounded-2xl shadow-warm hidden lg:block"
                style={{ background: "#FFFCF8", border: "1px solid rgba(247,168,196,0.3)" }}
              >
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4" style={{ color: "#7A1F3D" }} />
                  <span className="text-xs font-semibold" style={{ color: "#7A1F3D", fontFamily: "Nunito Sans, sans-serif" }}>
                    Natural Care
                  </span>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right" delay={0.1}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px" style={{ background: "#F6C85F" }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#F6C85F", fontFamily: "Nunito Sans, sans-serif" }}>
                  About Dr. Afreen
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-light leading-tight mb-6"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}
              >
                Meet Your
                <span className="block italic">Wellness Guide</span>
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}
              >
                Dr. Afreen provides caring and personalized homeopathic consultations with a focus on women, children, and family wellness.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}
              >
                With a warm and approachable style, Dr. Afreen takes the time to listen, understand, and offer individualized homeopathic guidance for your unique wellness journey.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Heart, label: "Women's Health" },
                  { icon: Star, label: "Children's Wellness" },
                  { icon: Leaf, label: "Natural Approach" },
                  { icon: Star, label: "Family Care" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 shrink-0" style={{ color: "#F7A8C4" }} />
                      <span className="text-sm" style={{ color: "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}>
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #7A1F3D, #4B1025)",
                  color: "white",
                  fontFamily: "Nunito Sans, sans-serif",
                  boxShadow: "0 4px 16px rgba(122,31,61,0.25)",
                }}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
