"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Shield, Users, ChefHat, Dog, Bot, ArrowRight, CheckCircle2, Clock, TrendingUp, Cpu } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import { RobotDogVisual, HumanoidVisual, CookingRobotVisual, HeroRobotVisual } from "@/components/RobotVisuals";

const robotCategories = [
  { icon: <Dog size={20} />, title: "Robot Dog", desc: "Trusted by border institutions for patrol, reconnaissance, and border operations at scale.", href: "/robots/robot-dog", visual: <RobotDogVisual /> },
  { icon: <Bot size={20} />, title: "Humanoid Robot", desc: "Deployed across border agencies and public institutions for large-order service, security support, and engagement.", href: "/robots/humanoid", visual: <HumanoidVisual /> },
  { icon: <ChefHat size={20} />, title: "Cooking Robot", desc: "Our most advanced model — purpose-built for restaurants. Licensed electrician assigned, city permit handled, financing available.", href: "/robots/cooking-robot", visual: <CookingRobotVisual /> },
];

const whyChoose = [
  { icon: <Shield size={18} />, title: "Trusted by Public Sector", description: "Robot dogs and humanoids are actively deployed with border institutions." },
  { icon: <ChefHat size={18} />, title: "Restaurant-Grade Cooking Robot", description: "Our most advanced cooking robot model — built specifically for the demands of commercial restaurant kitchens." },
  { icon: <Cpu size={18} />, title: "Licensed Electrician Assigned", description: "We assign a licensed electrician to every installation — safety guaranteed, permits handled, no stress for you." },
  { icon: <TrendingUp size={18} />, title: "City Permits Handled", description: "We take care of all city permit applications and compliance requirements from start to finish." },
  { icon: <Zap size={18} />, title: "Financing Available", description: "Flexible financing options so you can get your robots deployed now and pay on your terms." },
  { icon: <Users size={18} />, title: "Just Sign & We Handle the Rest", description: "The easiest deployment process in the industry — sign the agreement and our team takes care of everything." },
];

const restaurantBenefits = ["Licensed electrician assigned by us", "City permit fully managed", "Financing options available", "Consistent food quality", "Faster kitchen throughput", "Reduced staff dependency"];

const howItWorks = [
  { step: "01", title: "Consultation", desc: "We assess your space, needs, and goals. Whether you're a restaurant or public-sector client, we find the perfect fit." },
  { step: "02", title: "Robot & Financing Plan", desc: "We match you with the right robot and present flexible financing options — no large upfront commitment needed." },
  { step: "03", title: "Permits & Licensed Install", desc: "Our licensed electrician handles installation. We pull the city permits and ensure full safety compliance." },
  { step: "04", title: "Just Sign & Go Live", desc: "Once you sign, we take care of everything. Your robot is running and your business is transformed." },
];

const industries = [
  { name: "Public Safety", icon: "🚔" }, { name: "border institutions", icon: "🇨🇦" },
  { name: "Fine Dining", icon: "🍽️" }, { name: "Fast Casual", icon: "🍔" },
  { name: "Hotels & Resorts", icon: "🏨" }, { name: "border agencies", icon: "🏛️" },
  { name: "Shopping Centers", icon: "🏬" }, { name: "Corporate Offices", icon: "🏢" },
];

export default function HomePage() {
  return (
    <>
      {/* ══ HERO — Full background image ══ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* Full-bleed background image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="/hero-robots.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "70% center", display: "block" }} />
        </div>
        {/* Dark gradient overlay — left side darker for text readability, right side reveals image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(105deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 32%, rgba(10,10,10,0.30) 55%, rgba(10,10,10,0.05) 100%)" }} />
        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, zIndex: 1, background: "linear-gradient(to top, #0d0d0d, transparent)" }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", width: "100%", paddingTop: 72 }}>
          <div style={{ padding: "80px 48px", maxWidth: 700 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 20 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 18px", borderRadius: 100, background: "rgba(204,0,0,0.18)", border: "1px solid rgba(204,0,0,0.4)", color: "#FF4444", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, fontFamily: "'Inter', sans-serif" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#CC0000", display: "inline-block", animation: "pulse 2s infinite" }} />
                🍁 100% Canadian Owned · AI Makes Canada Stronger
              </span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(12px, 1.3vw, 14px)", fontWeight: 700, color: "#CC0000", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: 14 }}>
              No.1 Canadian Robot Provider — Proudly Canadian
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}
              style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(36px, 6vw, 76px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.04, letterSpacing: "-0.03em", marginBottom: 20, textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
              Advanced Robotics for{" "}
              <span className="gradient-text">Public Sector</span>{" "}
              &amp; Restaurants
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.8vw, 18px)", color: "rgba(250,250,250,0.80)", lineHeight: 1.75, maxWidth: 560, marginBottom: 12 }}>
              Canadian Robots supplies robot dogs and humanoids to border clients — and deploys Canada's most advanced cooking robot for restaurants.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.5vw, 15px)", fontWeight: 700, color: "#CC0000", letterSpacing: "0.04em", marginBottom: 36 }}>
              🍁 AI Makes Canada Stronger — Licensed Electrician Assigned · Permits Handled · Financing Available
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="r-btn-row">
              <Link href="/solutions" className="btn-primary">Explore Robots</Link>
              <Link href="/contact" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8, borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>
                Book a Consultation <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="r-trust-badges">
              {["border & public institutions", "Restaurant Grade", "Just Sign & We Handle the Rest"].map(b => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "rgba(250,250,250,0.65)", fontFamily: "'Inter', sans-serif" }}>
                  <CheckCircle2 size={14} style={{ color: "#CC0000", flexShrink: 0 }} />{b}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 2 }}>
          <span style={{ fontSize: 11, color: "rgba(250,250,250,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" as const, fontFamily: "'Inter', sans-serif" }}>Scroll</span>
          <div style={{ width: 1, height: 28, background: "linear-gradient(to bottom, rgba(204,0,0,0.6), transparent)" }} />
        </motion.div>
      </section>

      {/* ══ STATS ══ */}
      <StatsSection />

      {/* ══ TRUSTED ══ */}
      <section style={{ padding: "80px 0" }}>
        <div className="r-inner">
          <SectionHeading badge="Trusted Robotics" title="Robotics Solutions You Can" highlight="Rely On"
            subtitle="Canadian Robots delivers tested, reliable robotic systems built for real restaurants and businesses." />
          <div className="r-grid-3">
            {[
              { icon: <Shield size={20} />, title: "Trusted by Public Sector", description: "Robot dogs and humanoids deployed with border institutions in large-volume orders." },
              { icon: <ChefHat size={20} />, title: "Restaurant-Grade Cooking Robot", description: "Canada's most advanced cooking robot, purpose-built for commercial kitchens. Licensed install, permits, financing — all included." },
              { icon: <Clock size={20} />, title: "Just Sign — We Handle the Rest", description: "Licensed electrician assigned, city permits managed, financing available. The fastest, easiest way to get operational." },
            ].map((item, i) => <FeatureCard key={item.title} {...item} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      {/* ══ ROBOT CATEGORIES ══ */}
      <section style={{ padding: "80px 0", background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(200,200,200,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div className="r-inner" style={{ position: "relative" }}>
          <SectionHeading badge="Robot Categories" title="Explore Our" highlight="Robot Solutions"
            subtitle="Three powerful categories of robots designed to transform how your business operates and engages customers." />
          <div className="r-grid-3">
            {robotCategories.map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.12 }} whileHover={{ y: -8 }} className="robot-card">
                <div className="visual-area">
                  <img
                    src={cat.title === "Robot Dog" ? "/robot-dog.jpg" : cat.title === "Humanoid Robot" ? "/humanoid-robot.jpg" : "/cooking-robot-2wok.jpg"}
                    alt={cat.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: cat.title === "Humanoid Robot" ? "center top" : "center center", transition: "transform 0.6s ease" }}
                  />
                </div>
                <div className="card-body">
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(200,200,200,0.05)", border: "1px solid rgba(180,180,180,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#CC0000", flexShrink: 0 }}>{cat.icon}</div>
                    <h3>{cat.title}</h3>
                  </div>
                  <p>{cat.desc}</p>
                  <Link href={cat.href} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#CC0000", fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "'Inter', sans-serif" }}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE ══ */}
      <section style={{ padding: "80px 0" }}>
        <div className="r-inner">
          <SectionHeading badge="Why Canadian Robots" title="Why Businesses Choose" highlight="Canadian Robots"
            subtitle="Advanced robotic technology combined with deep industry knowledge to deliver solutions that genuinely transform operations." />
          <div className="r-grid-3">
            {whyChoose.map((item, i) => <FeatureCard key={item.title} {...item} delay={i * 0.07} />)}
          </div>
        </div>
      </section>

      {/* ══ RESTAURANT BENEFITS ══ */}
      <section style={{ padding: "80px 0", background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "50%", background: "radial-gradient(ellipse at right, rgba(200,200,200,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div className="r-inner" style={{ position: "relative" }}>
          <div className="r-split">
            <div>
              <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="badge" style={{ marginBottom: 16 }}>Restaurant Automation</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 700, color: "#fafafa", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 16, marginTop: 12 }}>
                The Easiest Way to Get a{" "}<span className="gradient-text">Cooking Robot in Your Restaurant</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "rgba(250,250,250,0.62)", lineHeight: 1.75, marginBottom: 24 }}>
                We handle everything — from permits to installation. Our licensed electrician is assigned to your project, we pull all city permits, and flexible financing means you don't have to wait. All you need to do is sign.
              </motion.p>
              <ul className="r-benefit-list">
                {restaurantBenefits.map((b, i) => (
                  <motion.li key={b} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.06 }}
                    style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(250,250,250,0.75)", fontFamily: "'Inter', sans-serif" }}>
                    <CheckCircle2 size={15} style={{ color: "#CC0000", flexShrink: 0 }} />{b}
                  </motion.li>
                ))}
              </ul>
              <Link href="/restaurant" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                Explore Restaurant Solutions <ArrowRight size={16} />
              </Link>
            </div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="visual-panel" style={{ flexDirection: "column", padding: 0, overflow: "hidden", gap: 0 }}>
                <div style={{ flex: 1, overflow: "hidden", borderRadius: "28px 28px 0 0" }}>
                  <img src="/cooking-robot-2wok.jpg" alt="Cooking Robot" style={{ width: "100%", height: 280, objectFit: "cover", objectPosition: "center", display: "block" }} />
                </div>
                <div className="r-ministats" style={{ padding: "20px 28px 28px", borderRadius: "0 0 28px 28px", background: "rgba(255,255,255,0.03)" }}>
                  {[{ val: "40%", label: "Faster Service" }, { val: "98%", label: "Consistency" }, { val: "60%", label: "Less Repetition" }].map(s => (
                    <div key={s.label} style={{ textAlign: "center" }}>
                      <div className="mini-stat-val">{s.val}</div>
                      <div className="mini-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section style={{ padding: "80px 0" }}>
        <div className="r-inner">
          <SectionHeading badge="The Process" title="How It" highlight="Works" subtitle="A simple, guided process to get the right robot solution working for your business." />
          <div className="r-hiw">
            <div className="hiw-connector" />
            {howItWorks.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} style={{ textAlign: "center", position: "relative" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(200,200,200,0.05)", border: "2px solid rgba(180,180,180,0.18)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", position: "relative", zIndex: 1 }}>
                  <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 800, background: "linear-gradient(135deg, #FF6666, #CC0000)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{step.step}</span>
                </div>
                <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 600, color: "#fafafa", marginBottom: 8 }}>{step.title}</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(250,250,250,0.55)", lineHeight: 1.65 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══ */}
      <section style={{ padding: "80px 0", background: "#0a0a0a" }}>
        <div className="r-inner">
          <SectionHeading badge="Industries We Serve" title="Built for" highlight="Every Business"
            subtitle="Canadian Robots solutions are deployed across a wide range of industries and business types." />
          <div className="r-industries">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ scale: 1.04, y: -4 }} className="industry-card">
                <div className="icon">{ind.icon}</div>
                <div className="name">{ind.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection badge="Start Today" title="Ready to Work With" highlight="Canadian Robots?"
        subtitle="border procurement for robot dogs and humanoids. Restaurant cooking robot with licensed electrician, permits, and financing included. Just sign and we handle everything."
        primaryLabel="Contact Us Now" secondaryLabel="View Robot Solutions" />
    </>
  );
}

