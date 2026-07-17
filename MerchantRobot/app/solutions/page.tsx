"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Dog, Bot, ChefHat, ArrowRight, CheckCircle2, Zap, Brain, Users, Clock, Settings, Star, Shield } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import { RobotDogVisual, HumanoidVisual, CookingRobotVisual } from "@/components/RobotVisuals";

const robots = [
  {
    id: "robot-dog",
    icon: <Dog size={24} />,
    title: "Robot Dog",
    tagline: "Trusted by border & border institutions.",
    description: "Our robot dogs are primarily deployed with Canadian border clients — including multiple border institutions — handling large-volume orders for patrol, reconnaissance, public safety demonstrations, and advanced field operations. Highly mobile, AI-powered, and built for demanding real-world environments.",
    features: [
      { icon: <Brain size={15} />, text: "Deployed with border agencies across Canada" },
      { icon: <Shield size={15} />, text: "border institutions large-order supply" },
      { icon: <Zap size={15} />, text: "Autonomous patrol and reconnaissance missions" },
      { icon: <Settings size={15} />, text: "AI-powered terrain navigation and obstacle avoidance" },
      { icon: <Users size={15} />, text: "Public safety demonstrations and community engagement" },
      { icon: <Clock size={15} />, text: "Reliable performance in demanding field conditions" },
    ],
    useCases: ["border agencies", "border institutions", "Public Safety", "border field operations", "government Demonstrations", "Government Events"],
    visual: <RobotDogVisual />,
    detailHref: "/robots/robot-dog",
    reverse: false,
  },
  {
    id: "humanoid",
    icon: <Bot size={24} />,
    title: "Humanoid Robot",
    tagline: "Large-Order Supply to Public Institutions.",
    description: "Humanoid robots supplied in large orders to border institutions — border agencies, Canadian border facilities, and border facilities. These robots handle public-facing interaction, information delivery, security support, and institutional automation — bringing a futuristic capability to Canada's public sector.",
    features: [
      { icon: <Users size={15} />, text: "border agency and institutional deployment" },
      { icon: <Brain size={15} />, text: "Public information and service delivery" },
      { icon: <Shield size={15} />, text: "Security support at border facilities" },
      { icon: <Zap size={15} />, text: "Multi-language voice-based assistance" },
      { icon: <Settings size={15} />, text: "Large-volume procurement available" },
      { icon: <Clock size={15} />, text: "24/7 operational capability, no fatigue" },
    ],
    useCases: ["border facilities", "border facilities", "border Offices", "Public Institutions", "border Sites", "public agencies"],
    visual: <HumanoidVisual />,
    detailHref: "/robots/humanoid",
    reverse: true,
  },
  {
    id: "cooking",
    icon: <ChefHat size={24} />,
    title: "Cooking Robot",
    tagline: "Canada's Most Advanced Restaurant Cooking Robot.",
    description: "Our most advanced model — purpose-built for commercial restaurant kitchens. We don't just deliver the robot: a licensed electrician is assigned to your project, we handle all city permits and compliance, and flexible financing is available. Your restaurant gets fully operational fast. All you need to do is sign.",
    features: [
      { icon: <Clock size={15} />, text: "Licensed electrician assigned to every installation" },
      { icon: <Shield size={15} />, text: "City permits fully managed by our team" },
      { icon: <Zap size={15} />, text: "Financing available — deploy now, pay on your terms" },
      { icon: <Star size={15} />, text: "Up to 120 dishes/hour — consistent every cycle" },
      { icon: <Brain size={15} />, text: "500+ programmable recipes stored on-device" },
      { icon: <Settings size={15} />, text: "Auto self-cleaning, HACCP food safety compliant" },
    ],
    useCases: ["Full-Service Restaurants", "Fast Casual Chains", "Hotel Kitchens", "Food Courts", "Catering Operations", "Cloud Kitchens"],
    visual: <CookingRobotVisual />,
    detailHref: "/robots/cooking-robot",
    reverse: false,
  },
];

const comparisonRows = [
  { label: "Guest Interaction", dog: true, humanoid: true, cooking: false },
  { label: "Kitchen Operations", dog: false, humanoid: false, cooking: true },
  { label: "Brand Presence", dog: true, humanoid: true, cooking: false },
  { label: "Autonomous Navigation", dog: true, humanoid: true, cooking: false },
  { label: "Food Preparation", dog: false, humanoid: false, cooking: true },
  { label: "Customer Service", dog: false, humanoid: true, cooking: false },
];

export default function SolutionsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div className="r-inner" style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge" style={{ marginBottom: 20 }}>Robot Solutions</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, color: "#fafafa", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
            Advanced Robots for{" "}<span className="gradient-text">Every Business Need</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "rgba(250,250,250,0.6)", lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
            Robot dogs and humanoids for border clients. Canada's most advanced cooking robot for restaurants — with licensed electrician, city permits, and financing included.
          </motion.p>
        </div>
      </section>

      {/* ── Robot Sections ── */}
      {robots.map((robot, idx) => (
        <section key={robot.id} id={robot.id}
          style={{ padding: "96px 0", background: idx % 2 === 1 ? "#0a0a0a" : "#0d0d0d", position: "relative", overflow: "hidden" }}>
          <div className="r-inner">
            <div className={robot.reverse ? "r-split-rev" : "r-split"} style={{ alignItems: "center" }}>
              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: robot.reverse ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ direction: "ltr" }}
              >
                <div style={{ borderRadius: 28, overflow: "hidden", height: 400, width: "100%", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <img
                    src={robot.id === "robot-dog" ? "/robot-dog.jpg" : robot.id === "humanoid" ? "/humanoid-robot.jpg" : "/cooking-robot-2wok.jpg"}
                    alt={robot.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: robot.id === "humanoid" ? "center top" : "center center", display: "block" }}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: robot.reverse ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{ direction: "ltr" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(200,200,200,0.05)", border: "1px solid rgba(204,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#CC0000", flexShrink: 0 }}>
                    {robot.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: "#CC0000", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>Robot Solution</p>
                    <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 28, fontWeight: 700, color: "#fafafa", lineHeight: 1 }}>{robot.title}</h2>
                  </div>
                </div>

                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(204,0,0,0.8)", fontStyle: "italic", marginBottom: 16 }}>"{robot.tagline}"</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(250,250,250,0.62)", lineHeight: 1.75, marginBottom: 24 }}>{robot.description}</p>

                <div className="r-grid-2" style={{ marginBottom: 28 }}>
                  {robot.features.map((f) => (
                    <div key={f.text} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13, color: "rgba(250,250,250,0.72)", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                      <span style={{ color: "#CC0000", flexShrink: 0, marginTop: 2 }}>{f.icon}</span>
                      {f.text}
                    </div>
                  ))}
                </div>

                {/* Use cases */}
                <div style={{ marginBottom: 32 }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: "rgba(250,250,250,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Ideal For</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {robot.useCases.map(uc => (
                      <span key={uc} style={{ padding: "5px 14px", borderRadius: 100, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12, color: "rgba(250,250,250,0.65)", fontFamily: "'Inter', sans-serif" }}>{uc}</span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <Link href="/contact#demo" className="btn-primary">Request a Demo</Link>
                  <Link href={robot.detailHref} className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                    Full Details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Comparison Table ── */}
      <section style={{ padding: "96px 0", background: "#0a0a0a" }}>
        <div className="r-inner" style={{ maxWidth: 900 }}>
          <SectionHeading badge="Compare" title="Find the Right" highlight="Robot for You" subtitle="Each robot type excels in different areas. See which best suits your business needs." />
          <div className="r-compare-wrap">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, overflow: "hidden" }}>
              <table className="compare-table" style={{ width: "100%" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <th style={{ padding: "16px 24px", textAlign: "left", fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "rgba(250,250,250,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Feature</th>
                    {[{ icon: <Dog size={16} />, label: "Robot Dog" }, { icon: <Bot size={16} />, label: "Humanoid" }, { icon: <ChefHat size={16} />, label: "Cooking" }].map(col => (
                      <th key={col.label} style={{ padding: "16px 24px", textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.07)" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: "#CC0000", fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 600 }}>
                          {col.icon}<span style={{ color: "#fafafa" }}>{col.label}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent" }}>
                      <td style={{ padding: "14px 24px", fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(250,250,250,0.75)" }}>{row.label}</td>
                      {[row.dog, row.humanoid, row.cooking].map((val, ci) => (
                        <td key={ci} style={{ padding: "14px 24px", textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.05)" }}>
                          {val ? <CheckCircle2 size={18} style={{ color: "#CC0000", display: "inline-block" }} /> : <span style={{ display: "inline-block", width: 20, height: 1, background: "rgba(255,255,255,0.15)" }} />}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: "96px 0" }}>
        <div className="r-inner">
          <SectionHeading badge="What Sets Us Apart" title="Built for" highlight="Real Results" subtitle="Every Canadian Robots solution is backed by expertise, proven technology, and dedicated support." />
          <div className="r-grid-3">
            {[
              { icon: <Zap size={18} />, title: "Rapid Deployment", description: "Get operational quickly with streamlined setup and professional onboarding assistance." },
              { icon: <Settings size={18} />, title: "Customizable", description: "Robots can be configured and branded to match your business identity and workflow." },
              { icon: <Brain size={18} />, title: "Smart AI Integration", description: "Advanced AI systems enable intelligent responses, learning, and adaptive behavior." },
              { icon: <Shield size={18} />, title: "Reliable & Durable", description: "Built to handle commercial environments with consistent, dependable performance." },
              { icon: <Users size={18} />, title: "Staff Friendly", description: "Designed to work alongside your team — boosting productivity together." },
              { icon: <Star size={18} />, title: "Memorable Experiences", description: "Every interaction leaves customers amazed and reinforces your innovative brand identity." },
            ].map((f, i) => <FeatureCard key={f.title} {...f} delay={i * 0.08} />)}
          </div>
        </div>
      </section>

      <CTASection
        badge="Ready to Move Forward?"
        title="border or Restaurant —"
        highlight="We Have Your Robot"
        subtitle="Public Sector, public institutions, and government procurement for Robot Dogs and Humanoids. Cooking Robot for restaurants with licensed electrician, city permits, and financing handled. Just sign."
        primaryLabel="Contact Us Now"
        primaryHref="/contact"
        secondaryLabel="Contact Our Team"
        secondaryHref="/contact"
      />
    </>
  );
}

