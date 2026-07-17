"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Lightbulb, Award, Users, Zap, Shield, ArrowRight, CheckCircle2, TrendingUp, Globe } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import { HeroRobotVisual } from "@/components/RobotVisuals";

const values = [
  { icon: <Lightbulb size={18} />, title: "Innovation First", description: "We stay at the forefront of robotics technology to bring the most advanced solutions to our clients." },
  { icon: <Target size={18} />, title: "Results Driven", description: "Every solution we provide is measured by the real-world impact it delivers for your business." },
  { icon: <Users size={18} />, title: "Client Partnership", description: "We don't just sell robots — we partner with you to ensure long-term success and growth." },
  { icon: <Shield size={18} />, title: "Reliability & Trust", description: "Our robots are built to commercial standards with ongoing support to keep you operational." },
  { icon: <Zap size={18} />, title: "Efficiency Focus", description: "We optimize for measurable improvements in speed, consistency, and operational performance." },
  { icon: <Globe size={18} />, title: "Future-Ready", description: "Our technology roadmap ensures our clients are always ahead of the automation curve." },
];

const milestones = [
  { year: "2019", title: "Founded", desc: "Canadian Robots was established with a vision to make advanced robotics accessible to restaurants and businesses." },
  { year: "2020", title: "First Deployment", desc: "Deployed our first cooking robot solution in a high-volume restaurant, demonstrating measurable improvements." },
  { year: "2022", title: "Humanoid Launch", desc: "Introduced our humanoid robot lineup for front-of-house customer service and guest engagement." },
  { year: "2023", title: "Robot Dog Range", desc: "Launched the robot dog series, expanding our product range for brand engagement and demonstrations." },
  { year: "2024", title: "500+ Businesses", desc: "Reached over 500 business deployments across restaurants, hotels, retail, and corporate environments." },
  { year: "2025+", title: "Expanding Forward", desc: "Continuing to innovate and expand our robot solutions for the next generation of smart businesses." },
];

const whyChoose = [
  "Deep expertise in restaurant and business automation",
  "Comprehensive consultation and planning process",
  "Professional installation and staff training",
  "Ongoing technical support and maintenance",
  "Proven track record with real business results",
  "Scalable solutions that grow with your business",
  "Dedicated account management after deployment",
  "Continuous product improvements and updates",
];

const progressBars = [
  { label: "AI Integration", value: 92 },
  { label: "Human-Robot Interaction", value: 85 },
  { label: "Kitchen Automation", value: 88 },
  { label: "Autonomy & Navigation", value: 80 },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="r-page-hero" style={{ textAlign: "left" }}>
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div className="r-inner" style={{ position: "relative", zIndex: 1, textAlign: "left" }}>
          <div className="r-about-hero">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 20 }}>
                <span className="badge">About Us</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, color: "#fafafa", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
                About{" "}<span className="gradient-text">Canadian Robots</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(250,250,250,0.62)", lineHeight: 1.75, maxWidth: 560, marginBottom: 16 }}>
                Canadian Robots is focused on bringing smart robotic solutions to modern businesses and restaurants. Our goal is to help companies improve efficiency, customer experience, and innovation through advanced robotic technology.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "rgba(250,250,250,0.5)", lineHeight: 1.75, maxWidth: 500, marginBottom: 36 }}>
                We believe every business deserves access to intelligent automation — and we make it possible through expert guidance, reliable technology, and dedicated partnership.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="r-btn-row">
                <Link href="/contact" className="btn-primary">Work With Us</Link>
                <Link href="/solutions" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Our Solutions <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}
              className="float hero-visual-hide" style={{ flexShrink: 0, width: "min(280px, 35vw)" }}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "rgba(200,200,200,0.05)", borderRadius: "50%", filter: "blur(50px)", transform: "scale(1.2)" }} />
                <HeroRobotVisual />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Who We Are + Mission ── */}
      <section style={{ padding: "80px 0", background: "#0a0a0a" }}>
        <div className="r-inner">
          <div className="r-about-2">
            <div>
              <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="badge" style={{ marginBottom: 16 }}>Who We Are</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: "#fafafa", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 20, marginTop: 12 }}>
                A Team Passionate About{" "}<span className="gradient-text">Smart Automation</span>
              </motion.h2>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(250,250,250,0.62)", lineHeight: 1.75, marginBottom: 16 }}>At Canadian Robots, we combine robotics expertise with deep industry knowledge to deliver solutions that genuinely make a difference. We understand the real challenges restaurants and businesses face — and we've built our product range specifically to address them.</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(250,250,250,0.62)", lineHeight: 1.75, marginBottom: 16 }}>Our team works closely with each client to understand their unique environment, goals, and constraints. We don't believe in one-size-fits-all solutions. Every deployment is thoughtfully planned and professionally executed.</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(250,250,250,0.62)", lineHeight: 1.75 }}>From a small public institutionsé wanting to streamline kitchen operations to a hotel chain wanting to wow guests with humanoid greeters — we have the expertise to make it happen.</p>
              </motion.div>
            </div>
            <div>
              <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="badge" style={{ marginBottom: 16 }}>Our Mission</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: "#fafafa", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 24, marginTop: 12 }}>
                Empowering Businesses Through{" "}<span className="gradient-text">Intelligent Robotics</span>
              </motion.h2>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="quote-card" style={{ marginBottom: 28 }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "rgba(250,250,250,0.7)", lineHeight: 1.75, fontStyle: "italic" }}>"Our mission is to make advanced robotic technology accessible, practical, and transformative for every business that seeks to improve efficiency, delight customers, and build a future-ready operation."</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div className="r-checklist">
                  {[{ icon: <Award size={15} />, text: "Industry Recognition" }, { icon: <TrendingUp size={15} />, text: "Proven Results" }, { icon: <Users size={15} />, text: "500+ Clients" }, { icon: <Globe size={15} />, text: "Growing Network" }].map(item => (
                    <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 14, color: "rgba(250,250,250,0.62)", fontFamily: "'Inter', sans-serif" }}>
                      <span style={{ color: "#CC0000" }}>{item.icon}</span>{item.text}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="r-inner">
          <SectionHeading badge="Our Values" title="What Drives" highlight="Everything We Do" subtitle="Our core values shape every robot solution we build and every client relationship we foster." />
          <div className="r-grid-3">
            {values.map((v, i) => <FeatureCard key={v.title} {...v} delay={i * 0.08} />)}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section style={{ padding: "80px 0", background: "#0a0a0a" }}>
        <div className="r-inner" style={{ maxWidth: 900 }}>
          <SectionHeading badge="Our Journey" title="Building the" highlight="Future of Automation" subtitle="From our founding to today, every milestone reflects our commitment to transforming how businesses operate." />
          <div style={{ position: "relative", paddingLeft: 48 }}>
            <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, rgba(204,0,0,0.6), rgba(204,0,0,0.1))", borderRadius: 2 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {milestones.map((m, i) => (
                <motion.div key={m.year} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: -36, top: 8, width: 14, height: 14, borderRadius: "50%", background: "#CC0000", border: "2px solid #0a0a0a", zIndex: 1 }} />
                  <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "20px 24px" }}>
                    <span style={{ display: "inline-block", padding: "3px 12px", borderRadius: 100, background: "rgba(200,200,200,0.05)", color: "#CC0000", fontSize: 12, fontWeight: 700, fontFamily: "'Inter', sans-serif", marginBottom: 8 }}>{m.year}</span>
                    <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 600, color: "#fafafa", marginBottom: 6 }}>{m.title}</h4>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(250,250,250,0.55)", lineHeight: 1.6 }}>{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose + Future ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="r-inner">
          <div className="r-why-future">
            <div>
              <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="badge" style={{ marginBottom: 16 }}>Why Choose Us</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 700, color: "#fafafa", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 28, marginTop: 12 }}>
                Why Businesses{" "}<span className="gradient-text">Trust Canadian Robots</span>
              </motion.h2>
              <div className="r-checklist">
                {whyChoose.map((item, i) => (
                  <motion.div key={item} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.05 }}
                    style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13, color: "rgba(250,250,250,0.72)", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                    <CheckCircle2 size={14} style={{ color: "#CC0000", flexShrink: 0, marginTop: 2 }} />{item}
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: "clamp(24px, 4vw, 36px)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #CC0000, #FF6666)" }} />
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 700, color: "#fafafa", marginBottom: 16 }}>The Future of Robotics</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(250,250,250,0.6)", lineHeight: 1.7, marginBottom: 28 }}>AI improvements, sensor advances, and falling hardware costs are making robots more capable, reliable, and accessible than ever. Canadian Robots ensures you stay ahead of this curve.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {progressBars.map(bar => (
                    <div key={bar.label}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(250,250,250,0.6)" }}>{bar.label}</span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#CC0000", fontWeight: 600 }}>{bar.value}%</span>
                      </div>
                      <div className="progress-track">
                        <motion.div className="progress-fill" initial={{ width: 0 }} whileInView={{ width: `${bar.value}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection badge="Join Our Clients" title="Ready to Join Our" highlight="Growing Network?"
        subtitle="Become part of the businesses transforming their operations with smart robotics. Let's build something remarkable together."
        primaryLabel="Contact Our Team" primaryHref="/contact" secondaryLabel="View Our Solutions" secondaryHref="/solutions" />
    </>
  );
}

