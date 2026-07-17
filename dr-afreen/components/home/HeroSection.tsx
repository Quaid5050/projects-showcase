"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  ArrowRight,
  Heart,
  Leaf,
  Shield,
  User,
  Baby,
} from "lucide-react";
import Image from "next/image";
import FloatingParticles from "@/components/ui/FloatingParticles";

const WHATSAPP_URL = "https://wa.me/16477819461?text=Hi%20Dr.%20Afreen%2C%20I%27d%20like%20to%20book%20a%20consultation.";

const featureCards = [
  {
    title: "Women's Wellness",
    description: "Hormonal balance, emotional well-being, and gentle support through every life stage.",
    icon: User,
    href: "/services",
  },
  {
    title: "Children's Care",
    description: "Natural immunity support, growth wellness, and compassionate care for little ones.",
    icon: Baby,
    href: "/services",
  },
];

const trustItems = [
  { icon: Shield, label: "Safe & Natural" },
  { icon: Heart, label: "Compassionate Care" },
  { icon: Leaf, label: "Root-Cause Healing" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-0 lg:min-h-screen overflow-hidden pt-[4.5rem] sm:pt-24 pb-0">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #FFFCF8 0%, #FFE8F0 35%, #FFF0F5 60%, #FFF8EF 100%)",
        }}
      />
      <FloatingParticles />

      {/* Soft floral glow blobs */}
      <div
        className="absolute top-20 left-1/4 w-72 h-72 rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #F7A8C4 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #F6C85F 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #FFE8F0 0%, transparent 70%)" }}
      />

      {/* Decorative floral accents */}
      <div className="absolute top-32 right-[18%] text-4xl opacity-20 pointer-events-none select-none" style={{ color: "#F7A8C4" }}>✿</div>
      <div className="absolute top-48 left-[12%] text-3xl opacity-15 pointer-events-none select-none" style={{ color: "#F6C85F" }}>❋</div>
      <div className="absolute bottom-48 right-[10%] text-2xl opacity-20 pointer-events-none select-none" style={{ color: "#7A1F3D" }}>✦</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 xl:gap-6 items-center min-h-0 xl:min-h-[calc(100vh-6rem)] py-4 md:py-8 lg:pt-4 lg:pb-12">
          {/* Left: Content */}
          <div className="relative z-10 xl:pr-4 order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(255, 252, 248, 0.7)",
                border: "1px solid rgba(247, 168, 196, 0.45)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Heart className="w-3.5 h-3.5 fill-gold/30" style={{ color: "#F6C85F" }} />
              <span
                className="text-xs font-semibold tracking-wide"
                style={{ color: "#7A1F3D", fontFamily: "Nunito Sans, sans-serif" }}
              >
                Trusted Care. Naturally.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.9 }}
              className="text-3xl sm:text-5xl lg:text-[3.25rem] font-light leading-[1.15] mb-4"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#3D2830" }}
            >
              Gentle Homeopathic
              <br />
              Care for{" "}
              <span
                className="italic font-normal"
                style={{
                  fontSize: "1.15em",
                  background: "linear-gradient(135deg, #7A1F3D 0%, #C45B82 50%, #F7A8C4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Women & Children
              </span>
            </motion.h1>

            {/* Gold separator */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 3.0 }}
              className="flex items-center gap-3 mb-5 max-w-xs"
            >
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #F6C85F)" }} />
              <Leaf className="w-3.5 h-3.5" style={{ color: "#F6C85F" }} />
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #F6C85F, transparent)" }} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 3.1 }}
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-md"
              style={{ color: "#6B5560", fontFamily: "Nunito Sans, sans-serif" }}
            >
              Personalized, holistic support for every stage of life. Empowering wellness for women and joyful health for children—naturally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 3.2 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-sm font-semibold whitespace-nowrap w-full sm:w-fit shrink-0 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #7A1F3D, #4B1025)",
                  color: "white",
                  fontFamily: "Nunito Sans, sans-serif",
                  boxShadow: "0 6px 24px rgba(122, 31, 61, 0.3)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Book on WhatsApp
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-sm font-semibold whitespace-nowrap w-full sm:w-fit shrink-0 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255, 252, 248, 0.8)",
                  color: "#7A1F3D",
                  border: "1.5px solid rgba(246, 200, 95, 0.7)",
                  fontFamily: "Nunito Sans, sans-serif",
                }}
              >
                <Leaf className="w-4 h-4" style={{ color: "#F6C85F" }} />
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 3.4 }}
              className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-6"
            >
              {trustItems.map((item, i) => (
                <div key={item.label} className="flex items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" style={{ color: "#C45B82" }} />
                    <span
                      className="text-xs sm:text-sm font-medium"
                      style={{ color: "#6B5560", fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      {item.label}
                    </span>
                  </div>
                  {i < trustItems.length - 1 && (
                    <div className="hidden sm:block w-px h-4" style={{ background: "rgba(247, 168, 196, 0.5)" }} />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Center: Glowing orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 3.0, ease: "easeOut" }}
            className="relative flex items-center justify-center order-2 xl:order-2 -my-2 sm:my-0"
          >
            <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] xl:w-[360px] xl:h-[360px]">
              {/* Outer glow */}
              <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-[-14%] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(246,200,95,0.4) 0%, rgba(247,168,196,0.3) 45%, transparent 72%)",
                }}
              />

              {/* Circular hero image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{
                  border: "3px solid rgba(255, 255, 255, 0.85)",
                  boxShadow:
                    "0 0 60px rgba(247,168,196,0.45), 0 20px 60px rgba(122,31,61,0.15), inset 0 0 30px rgba(255,255,255,0.25)",
                }}
              >
                <Image
                  src="/hero-sec.png"
                  alt="Mother and child — Moon Homeopathy"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 240px, (max-width: 1280px) 300px, 360px"
                  priority
                />
              </motion.div>

              {/* Soft light highlight */}
              <div
                className="absolute top-[6%] left-[12%] w-[38%] h-[28%] rounded-full opacity-35 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse, rgba(255,255,255,0.75) 0%, transparent 70%)",
                }}
              />
            </div>
          </motion.div>

          {/* Right: Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
            className="relative z-10 flex flex-col gap-4 sm:gap-5 xl:pl-4 order-3 w-full max-w-md xl:max-w-none mx-auto xl:mx-0"
          >
            {featureCards.map((card, i) => (
              <motion.div
                key={card.title}
                animate={{ y: [0, i === 0 ? -6 : 6, 0] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              >
                <Link
                  href={card.href}
                  className="block p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                  style={{
                    background: "rgba(255, 252, 248, 0.55)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.75)",
                    boxShadow: "0 8px 32px rgba(122, 31, 61, 0.06)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #7A1F3D, #9B3057)",
                      }}
                    >
                      <card.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-lg font-medium mb-1.5"
                        style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#7A6570", fontFamily: "Nunito Sans, sans-serif" }}
                      >
                        {card.description}
                      </p>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                      style={{
                        background: "rgba(247, 168, 196, 0.2)",
                        border: "1px solid rgba(247, 168, 196, 0.35)",
                      }}
                    >
                      <ArrowRight className="w-3.5 h-3.5" style={{ color: "#7A1F3D" }} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Center leaf decoration above wave */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="flex justify-center pb-10 sm:pb-12 relative z-10"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(255, 252, 248, 0.8)",
              border: "1px solid rgba(246, 200, 95, 0.4)",
            }}
          >
            <Leaf className="w-4 h-4" style={{ color: "#F6C85F" }} />
          </div>
        </motion.div>
      </div>

      {/* Bottom flowing wave layers */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none h-32 sm:h-40 md:h-48">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Soft pink crest */}
          <path
            d="M0 95 C180 55 360 115 540 70 C720 25 900 105 1080 60 C1260 15 1350 85 1440 75 L1440 200 L0 200 Z"
            fill="#FFE8F0"
            opacity="0.9"
          />
          {/* Rose swell */}
          <path
            d="M0 110 C160 75 320 125 480 88 C640 50 800 118 960 82 C1120 45 1280 115 1440 90 L1440 200 L0 200 Z"
            fill="#F7A8C4"
            opacity="0.45"
          />
          {/* Mauve wave */}
          <path
            d="M0 125 C200 90 400 135 600 100 C800 65 1000 130 1200 95 C1320 75 1380 110 1440 105 L1440 200 L0 200 Z"
            fill="#C45B82"
            opacity="0.4"
          />
          {/* Burgundy roll */}
          <path
            d="M0 140 C240 105 480 150 720 115 C960 80 1200 145 1440 120 L1440 200 L0 200 Z"
            fill="#9B3057"
            opacity="0.65"
          />
          {/* Deep maroon base */}
          <path
            d="M0 155 C280 125 560 165 840 135 C1120 105 1280 155 1440 140 L1440 200 L0 200 Z"
            fill="#7A1F3D"
          />
          {/* Solid foundation */}
          <path
            d="M0 172 C360 148 720 178 1080 158 C1260 148 1380 168 1440 162 L1440 200 L0 200 Z"
            fill="#4B1025"
          />
        </svg>
      </div>
    </section>
  );
}
