"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const WHATSAPP_URL = "https://wa.me/16477819461?text=Hi%20Dr.%20Afreen%2C%20I%27d%20like%20to%20discuss%20a%20concern%20with%20you.";

export default function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden min-h-[420px] flex items-center">
      {/* Full-section background image */}
      <Image
        src="/moon-glow.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
        aria-hidden
      />
      {/* Soft overlay for readable text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,252,248,0.82) 0%, rgba(255,232,240,0.78) 45%, rgba(255,248,239,0.85) 100%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        <ScrollReveal>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 mx-auto mb-8 relative"
          >
            <div
              className="absolute inset-0 rounded-full -m-3"
              style={{ background: "radial-gradient(circle, rgba(246,200,95,0.35) 0%, transparent 70%)" }}
            />
            <div className="w-20 h-20 relative rounded-full overflow-hidden ring-2 ring-white/80">
              <Image src="/logo.png" alt="Moon Homeopathy" fill className="object-contain" />
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-px" style={{ background: "#F6C85F" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#F6C85F", fontFamily: "Nunito Sans, sans-serif" }}>
              Start Your Journey
            </span>
            <span className="w-12 h-px" style={{ background: "#F6C85F" }} />
          </div>

          <h2
            className="text-4xl md:text-5xl font-light leading-tight mb-6"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}
          >
            Have a concern?
            <span className="block italic">Message Dr. Afreen directly.</span>
          </h2>

          <p
            className="text-base leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: "#6B5560", fontFamily: "Nunito Sans, sans-serif" }}
          >
            Reach out on WhatsApp for a warm, personalized conversation about your wellness concerns. Dr. Afreen is here to listen and guide you.
          </p>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-semibold text-white"
            style={{
              background: "#25D366",
              boxShadow: "0 8px 24px rgba(37,211,102,0.35)",
              fontFamily: "Nunito Sans, sans-serif",
            }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-5 h-5" />
            Message on WhatsApp
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}
