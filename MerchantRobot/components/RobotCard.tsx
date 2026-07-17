"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Feature {
  text: string;
}

interface RobotCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: Feature[];
  href: string;
  accentColor?: string;
  delay?: number;
  visual?: React.ReactNode;
}

export default function RobotCard({
  icon,
  title,
  description,
  features,
  href,
  accentColor = "#E8874A",
  delay = 0,
  visual,
}: RobotCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      whileHover={{ y: -8 }}
      className="group relative glass-card rounded-3xl overflow-hidden hover:public sector-[#E8874A]/30 transition-all duration-500"
    >
      {/* Glow overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${accentColor}15 0%, transparent 70%)`,
        }}
      />

      {/* Visual area */}
      {visual && (
        <div className="relative h-52 overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#111111]">
          <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
            {visual}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#141414] to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-7">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${accentColor}18`, border: `1px solid ${accentColor}30` }}
        >
          <div style={{ color: accentColor }}>{icon}</div>
        </div>

        <h3 className="font-heading text-xl font-bold text-[#FAFAFA] mb-3">{title}</h3>
        <p className="text-[#FAFAFA]/60 text-sm leading-relaxed mb-5">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-7">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-[#FAFAFA]/70">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: accentColor }}
              />
              {f.text}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href={href}
            className="btn-shine flex-1 text-center py-2.5 px-4 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${accentColor}, #f07d3a)`,
              color: "#fff",
              boxShadow: `0 4px 20px ${accentColor}30`,
            }}
          >
            Learn More
          </Link>
          <Link
            href="/contact#demo"
            className="flex items-center gap-1.5 py-2.5 px-4 rounded-fullborder text-sm font-medium text-[#FAFAFA]/70 hover:text-[#E8874A] transition-all duration-300"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
          >
            Demo <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
