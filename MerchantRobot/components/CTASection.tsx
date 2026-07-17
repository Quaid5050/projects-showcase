"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CTASectionProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({ badge = "Get Started", title, highlight, subtitle, primaryLabel = "Book a Demo", primaryHref = "/contact#demo", secondaryLabel = "Learn More", secondaryHref = "/solutions" }: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="cta-ring" style={{ width: 600, height: 600, marginLeft: -300, marginTop: -300 }} />
      <div className="cta-ring" style={{ width: 400, height: 400, marginLeft: -200, marginTop: -200, animationDelay: "1s" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,200,200,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="r-inner" style={{ maxWidth: 800, position: "relative", textAlign: "center" }}>
        {badge && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 20 }}>
            <span className="badge">{badge}</span>
          </motion.div>
        )}
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(26px, 5vw, 48px)", fontWeight: 700, color: "#fafafa", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 20 }}>
          {title} {highlight && <span className="gradient-text">{highlight}</span>}
        </motion.h2>
        {subtitle && (
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 2.5vw, 17px)", color: "rgba(250,250,250,0.6)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 40px" }}>
            {subtitle}
          </motion.p>
        )}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="r-cta-btns">
          <Link href={primaryHref} className="btn-primary">{primaryLabel}</Link>
          <Link href={secondaryHref} className="btn-outline">{secondaryLabel}</Link>
        </motion.div>
      </div>
    </section>
  );
}
