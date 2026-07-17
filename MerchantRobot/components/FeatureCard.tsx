"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  light?: boolean;
}

export default function FeatureCard({ icon, title, description, delay = 0, light = false }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      whileHover={{ y: -5 }}
      className="feature-card"
      style={light ? { background: "#fff", border: "1px solid #e5e5e5" } : {}}
    >
      <div className="icon-box">{icon}</div>
      <h4 style={light ? { color: "#0d0d0d" } : {}}>{title}</h4>
      <p style={light ? { color: "rgba(42,42,42,0.65)" } : {}}>{description}</p>
    </motion.div>
  );
}
