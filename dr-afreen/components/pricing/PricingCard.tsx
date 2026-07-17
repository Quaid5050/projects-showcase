"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Heart,
  Baby,
  Users,
  Stethoscope,
  Package,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Baby,
  Users,
  Stethoscope,
  Package,
};

interface PricingCardProps {
  iconName: string;
  title: string;
  description: string;
  price: string;
  duration?: string;
  featured?: boolean;
}

export default function PricingCard({ iconName, title, description, price, duration, featured = false }: PricingCardProps) {
  const Icon = iconMap[iconName] ?? Heart;
  const WHATSAPP_URL = `https://wa.me/16477819461?text=Hi%20Dr.%20Afreen%2C%20I%27d%20like%20to%20inquire%20about%20the%20${encodeURIComponent(title)}.`;

  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: featured ? "0 20px 60px rgba(122,31,61,0.25)" : "0 16px 40px rgba(122,31,61,0.12)" }}
      transition={{ duration: 0.3 }}
      className="p-8 rounded-3xl h-full flex flex-col relative overflow-hidden"
      style={{
        background: featured ? "linear-gradient(135deg, #7A1F3D, #4B1025)" : "#FFFCF8",
        border: featured ? "none" : "1px solid rgba(247,168,196,0.2)",
        boxShadow: featured ? "0 12px 40px rgba(122,31,61,0.2)" : "0 4px 20px rgba(122,31,61,0.06)",
      }}
    >
      {featured && (
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
          style={{ background: "#F6C85F", color: "#4B1025", fontFamily: "Nunito Sans, sans-serif" }}
        >
          Popular
        </div>
      )}

      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
        style={{
          background: featured ? "rgba(255,240,245,0.15)" : "rgba(247,168,196,0.15)",
          border: featured ? "1px solid rgba(255,240,245,0.2)" : "1px solid rgba(247,168,196,0.3)",
        }}
      >
        <Icon className="w-6 h-6" style={{ color: featured ? "#F6C85F" : "#7A1F3D" }} />
      </div>

      <h3
        className="text-xl font-medium mb-3"
        style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: featured ? "#FFFCF8" : "#7A1F3D" }}
      >
        {title}
      </h3>

      <p
        className="text-sm leading-relaxed mb-6 flex-1"
        style={{ color: featured ? "rgba(255,240,245,0.75)" : "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}
      >
        {description}
      </p>

      <div className="mb-6">
        <div
          className="text-2xl font-light mb-1"
          style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: featured ? "#F6C85F" : "#7A1F3D" }}
        >
          {price}
        </div>
        {duration && (
          <p className="text-xs" style={{ color: featured ? "rgba(255,240,245,0.5)" : "#9B6878", fontFamily: "Nunito Sans, sans-serif" }}>
            {duration}
          </p>
        )}
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold transition-all hover:-translate-y-0.5"
        style={{
          background: featured ? "#25D366" : "rgba(122,31,61,0.08)",
          color: featured ? "white" : "#7A1F3D",
          fontFamily: "Nunito Sans, sans-serif",
        }}
      >
        <MessageCircle className="w-4 h-4" />
        Inquire on WhatsApp
      </a>
    </motion.div>
  );
}
