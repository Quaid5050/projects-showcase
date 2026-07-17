"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChefHat, Bot, Dog, Zap, Clock, Users, Star, TrendingUp, CheckCircle2, ArrowRight, Utensils, Heart, Shield, Settings } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import { CookingRobotVisual, HumanoidVisual, RobotDogVisual } from "@/components/RobotVisuals";

const benefits = [
  { icon: <Zap size={18} />, title: "Faster Operations", description: "Robots work at optimized speeds without fatigue, dramatically reducing wait times during peak hours." },
  { icon: <Star size={18} />, title: "Better Consistency", description: "Every dish prepared the same way, every time — perfect portions, correct recipes, reliable quality." },
  { icon: <Clock size={18} />, title: "Reduced Repetitive Tasks", description: "Automate time-consuming prep work so your team can focus on craft, creativity, and hospitality." },
  { icon: <Heart size={18} />, title: "Enhanced Guest Experience", description: "From humanoid greeters to interactive robot dogs — create memorable moments guests will talk about." },
  { icon: <TrendingUp size={18} />, title: "Stronger Brand Image", description: "Position your restaurant as an innovative, forward-thinking destination that attracts new customers." },
  { icon: <Settings size={18} />, title: "Modern Atmosphere", description: "Create a futuristic dining environment that sets you apart from every other restaurant in the market." },
  { icon: <Shield size={18} />, title: "Hygiene & Safety", description: "Robots maintain consistent hygiene standards in food prep, reducing human contact in critical areas." },
  { icon: <Users size={18} />, title: "Scalable Automation", description: "Start with one robot and scale your automation as your business grows and demands increase." },
];

const robotSections = [
  {
    id: "cooking-robot",
    icon: <ChefHat size={22} />,
    title: "Cooking Robot",
    subtitle: "Kitchen Automation for Modern Restaurants",
    description: "Our cooking robots bring precision and speed to the heart of your kitchen. Designed for commercial use, they handle high-volume food preparation with unmatched consistency — freeing your culinary team to focus on creativity and quality.",
    points: [
      "Consistent portioning and cooking times every cycle",
      "High-volume throughput during busy service periods",
      "Reduces reliance on specific kitchen staff availability",
      "Standardized recipes executed perfectly every time",
      "Works alongside your existing kitchen team",
      "Ideal for stir-fry stations, prep tasks, and high-volume cooking",
    ],
    visual: <CookingRobotVisual />,
    reverse: false,
  },
  {
    id: "humanoid-front",
    icon: <Bot size={22} />,
    title: "Humanoid Robot",
    subtitle: "Elevate the Guest Experience",
    description: "Station a humanoid robot at your entrance to welcome guests, answer questions, provide directions, and create an unforgettable first impression. These robots bring a futuristic, premium touch to any restaurant or hospitality environment.",
    points: [
      "Greet guests as they arrive with natural, friendly interaction",
      "Answer menu questions and provide restaurant information",
      "Guide guests to tables, waiting areas, or amenities",
      "Reinforce your brand's modern, innovative identity",
      "Create shareable social media moments for guests",
      "Available around the clock without fatigue",
    ],
    visual: <HumanoidVisual />,
    reverse: true,
  },
  {
    id: "robot-dog-attraction",
    icon: <Dog size={22} />,
    title: "Robot Dog",
    subtitle: "Brand Attraction & Guest Engagement",
    description: "A robot dog in your dining area creates a unique atmosphere that guests instantly notice and remember. Perfect for creating buzz, attracting foot traffic, and giving your restaurant a truly distinctive identity.",
    points: [
      "Draws immediate attention and creates word-of-mouth marketing",
      "Engages guests during waiting periods",
      "Perfect for photo opportunities and social sharing",
      "Ideal for themed restaurant concepts and special events",
      "Creates an unforgettable, unique dining atmosphere",
      "Drives foot traffic and new customer curiosity",
    ],
    visual: <RobotDogVisual />,
    reverse: false,
  },
];

const statsData = [
  { value: "40%", label: "Faster Food Service" },
  { value: "98%", label: "Food Consistency" },
  { value: "35%", label: "Reduced Labor Strain" },
  { value: "4.8★", label: "Average Guest Rating" },
];

export default function RestaurantPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", padding: "0 32px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge" style={{ marginBottom: 20 }}>Restaurant Automation</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 800, color: "#fafafa", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
            Robotics Built for the{" "}<span className="gradient-text">Future of Restaurants</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "rgba(250,250,250,0.6)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 40px" }}>
            From cooking support to guest interaction, Canadian Robots helps restaurants create smarter, faster, and more memorable customer experiences.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="r-hero-btns">
            <Link href="/contact#demo" className="btn-primary">Book a Restaurant Demo</Link>
            <Link href="/solutions" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              View All Solutions <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ padding: "56px 0", background: "#111111", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="r-inner" style={{ maxWidth: 1100 }}>
          <div className="r-stats">
            {statsData.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ textAlign: "center" }}>
                <div className="stat-number">{s.value}</div>
                <p className="stat-label">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Restaurants Need Robotics ── */}
      <section style={{ padding: "96px 0" }}>
        <div className="r-inner">
          <SectionHeading badge="Why Robotics?" title="Why Restaurants" highlight="Need Robotics"
            subtitle="The restaurant industry faces rising costs, staffing challenges, and increasing customer expectations. Robotics is the answer." />
          <div className="r-benefits-4">
            {benefits.map((b, i) => <FeatureCard key={b.title} {...b} delay={i * 0.07} />)}
          </div>
        </div>
      </section>

      {/* ── Robot sections ── */}
      {robotSections.map((robot, idx) => (
        <section key={robot.id} id={robot.id}
          style={{ padding: "96px 0", background: idx % 2 === 1 ? "#0a0a0a" : "#0d0d0d", position: "relative", overflow: "hidden" }}>
          <div className="r-inner">
            <div className={robot.reverse ? "r-split-rev" : "r-split"} style={{ alignItems: "center" }}>
              {/* Visual */}
              <motion.div initial={{ opacity: 0, x: robot.reverse ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ direction: "ltr" }}>
                <div style={{ borderRadius: 28, overflow: "hidden", height: 400, width: "100%", position: "relative", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <img
                    src={
                      robot.id === "cooking-robot" ? "/cooking-robot-2wok.jpg"
                      : robot.id === "humanoid-front" ? "/humanoid-robot.jpg"
                      : "/robot-dog.jpg"
                    }
                    alt={robot.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: robot.id === "humanoid-front" ? "center 20%" : "center center",
                      display: "block",
                    }}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div initial={{ opacity: 0, x: robot.reverse ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} style={{ direction: "ltr" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(200,200,200,0.05)", border: "1px solid rgba(180,180,180,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#CC0000" }}>
                    {robot.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#CC0000", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{robot.subtitle}</p>
                    <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 26, fontWeight: 700, color: "#fafafa", lineHeight: 1.1 }}>{robot.title}</h2>
                  </div>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(250,250,250,0.62)", lineHeight: 1.75, marginBottom: 24 }}>{robot.description}</p>
                <ul style={{ listStyle: "none", marginBottom: 32, display: "flex", flexDirection: "column", gap: 10 }}>
                  {robot.points.map(p => (
                    <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "rgba(250,250,250,0.75)", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                      <CheckCircle2 size={15} style={{ color: "#CC0000", flexShrink: 0, marginTop: 2 }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <Link href="/contact#demo" className="btn-primary">Request a Demo</Link>
                  <Link href="/solutions" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                    Full Details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Staff Support ── */}
      <section style={{ padding: "96px 0" }}>
        <div className="r-inner">
          <div className="r-split" style={{ alignItems: "center" }}>
            <div>
              <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="badge" style={{ marginBottom: 20 }}>Staff Support</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 700, color: "#fafafa", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 20 }}>
                Robots That{" "}<span className="gradient-text">Work With Your Team</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "rgba(250,250,250,0.62)", lineHeight: 1.75, marginBottom: 28 }}>
                Our robots complement your existing staff — handling repetitive, high-volume, and physically demanding tasks so your team can focus on excellent hospitality.
              </motion.p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Reduces physical strain on kitchen staff",
                  "Allows staff to focus on guest-facing service",
                  "Consistent output regardless of rush hours",
                  "Easy to integrate into existing workflows",
                  "Staff training and onboarding included",
                  "Scalable — add more robots as you grow",
                ].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(250,250,250,0.75)", fontFamily: "'Inter', sans-serif" }}>
                    <CheckCircle2 size={14} style={{ color: "#CC0000", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="r-staff-grid">
                {[
                  { icon: <Utensils size={18} />, title: "Kitchen Support", desc: "Cooking robots handle high-volume prep and cooking tasks efficiently." },
                  { icon: <Users size={18} />, title: "Guest Service", desc: "Humanoids handle greetings, info requests, and engagement naturally." },
                  { icon: <Star size={18} />, title: "Brand Experience", desc: "Robot dogs create buzz, attraction, and drive foot traffic." },
                  { icon: <TrendingUp size={18} />, title: "Operational Insights", desc: "Smart systems provide performance data and analytics." },
                ].map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "22px", transition: "all 0.3s ease" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 11, background: "rgba(200,200,200,0.05)", border: "1px solid rgba(204,0,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#CC0000", marginBottom: 14 }}>
                      {item.icon}
                    </div>
                    <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 600, color: "#fafafa", marginBottom: 6 }}>{item.title}</h4>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(250,250,250,0.55)", lineHeight: 1.55 }}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        badge="Restaurant Demo"
        title="Transform Your Restaurant"
        highlight="Today"
        subtitle="See how robot dogs, humanoid robots, and cooking robots can work in your specific restaurant environment. Book a tailored demo."
        primaryLabel="Book a Restaurant Demo"
        secondaryLabel="Explore All Robots"
        secondaryHref="/solutions"
      />
    </>
  );
}

