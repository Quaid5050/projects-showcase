"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageCircle,
  CheckCircle,
  Heart,
  Baby,
  Sparkles,
  Apple,
  Moon,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Baby,
  Sparkles,
  Apple,
  Moon,
  Stethoscope,
  Users,
};

interface ServiceSectionProps {
  iconName: string;
  imageSrc?: string;
  title: string;
  description: string;
  concerns: string[];
  reverse?: boolean;
  gradient?: string;
}

const WHATSAPP_URL = "https://wa.me/16477819461?text=Hi%20Dr.%20Afreen%2C%20I%27d%20like%20to%20inquire%20about%20a%20consultation.";

export default function ServiceSection({
  iconName,
  imageSrc,
  title,
  description,
  concerns,
  reverse = false,
  gradient,
}: ServiceSectionProps) {
  const Icon = iconMap[iconName] ?? Heart;
  const bg = gradient || "linear-gradient(135deg, #FFE8F0 0%, #FFF0F5 100%)";

  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
      {/* Visual */}
      <ScrollReveal direction={reverse ? "right" : "left"}>
        <motion.div
          animate={imageSrc ? { y: [0, -8, 0] } : undefined}
          transition={imageSrc ? { duration: 5, repeat: Infinity, ease: "easeInOut" } : undefined}
          className={`aspect-square max-w-sm mx-auto rounded-4xl overflow-hidden relative ${reverse ? "lg:order-2" : ""}`}
          style={{
            background: imageSrc ? undefined : bg,
            border: "1px solid rgba(247,168,196,0.2)",
            boxShadow: "0 16px 48px rgba(122,31,61,0.1)",
          }}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 384px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-center p-10">
              <div>
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)" }}
                >
                  <Icon className="w-12 h-12" style={{ color: "#7A1F3D" }} />
                </div>
                <p
                  className="text-xl font-light italic"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}
                >
                  {title}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </ScrollReveal>

      {/* Content */}
      <ScrollReveal direction={reverse ? "left" : "right"} delay={0.1}>
        <div className={reverse ? "lg:order-1" : ""}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(247,168,196,0.2)" }}>
              <Icon className="w-5 h-5" style={{ color: "#7A1F3D" }} />
            </div>
          </div>
          <h3 className="text-3xl font-light mb-4 leading-tight" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}>
            {title}
          </h3>
          <p className="text-base leading-relaxed mb-6" style={{ color: "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}>
            {description}
          </p>

          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#F6C85F", fontFamily: "Nunito Sans, sans-serif" }}>
              Common concerns discussed
            </p>
            <div className="space-y-2">
              {concerns.map((concern) => (
                <div key={concern} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#F7A8C4" }} />
                  <span className="text-sm" style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}>{concern}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #7A1F3D, #4B1025)", color: "white", fontFamily: "Nunito Sans, sans-serif", boxShadow: "0 4px 16px rgba(122,31,61,0.25)" }}
          >
            <MessageCircle className="w-4 h-4" />
            Inquire on WhatsApp
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
}
