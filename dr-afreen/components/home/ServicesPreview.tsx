"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Heart, Baby, Sparkles, Apple, Moon, Stethoscope,
  MessageCircle, ArrowRight
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const WHATSAPP_URL = "https://wa.me/16477819461?text=Hi%20Dr.%20Afreen%2C%20I%27d%20like%20to%20inquire%20about%20your%20services.";

const services = [
  {
    icon: Heart,
    image: "/women-wellness.png",
    title: "Women's Health Support",
    description: "Personalized homeopathic support addressing women's wellness concerns at every stage of life.",
    color: "#7A1F3D",
    bg: "linear-gradient(135deg, #FFE8F0, #FFF0F5)",
  },
  {
    icon: Baby,
    image: "/children-wellness.png",
    title: "Children's Health Support",
    description: "Gentle wellness guidance tailored to children's individual health concerns and developmental needs.",
    color: "#9B3057",
    bg: "linear-gradient(135deg, #FFF0F5, #FFE8F0)",
  },
  {
    icon: Sparkles,
    image: "/skin-hair.png",
    title: "Skin & Hair Concerns",
    description: "Holistic homeopathic support for skin and hair wellness using individualized consultation approaches.",
    color: "#F6C85F",
    bg: "linear-gradient(135deg, #FFF8EF, #FBE4A0)",
  },
  {
    icon: Apple,
    image: "/digestive.png",
    title: "Digestive Wellness",
    description: "Supportive homeopathic guidance for common digestive concerns and everyday comfort.",
    color: "#7A1F3D",
    bg: "linear-gradient(135deg, #FFE8F0, #FFFCF8)",
  },
  {
    icon: Moon,
    image: "/stress-sleep.png",
    title: "Stress & Sleep Support",
    description: "Calming, natural homeopathic support for stress management, emotional balance, and sleep wellness.",
    color: "#4B1025",
    bg: "linear-gradient(135deg, #FFF0F5, #FFE8F0)",
  },
  {
    icon: Stethoscope,
    image: "/homeopathy-bottles.png",
    title: "General Homeopathic Consultation",
    description: "Comprehensive wellness consultations addressing a wide range of everyday health concerns.",
    color: "#7A1F3D",
    bg: "linear-gradient(135deg, #FFF8EF, #FFE8F0)",
  },
];

export default function ServicesPreview() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #FFF8EF 0%, #FFE8F0 50%, #FFF8EF 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeading
            label="Our Services"
            title="Homeopathic Support for Every Stage"
            subtitle="Individualized care and gentle guidance for women, children, and families."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={i * 0.08} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl h-full flex flex-col overflow-hidden group cursor-default"
                  style={{
                    background: service.bg,
                    border: "1px solid rgba(247,168,196,0.25)",
                    boxShadow: "0 4px 20px rgba(122,31,61,0.07)",
                  }}
                >
                  <div className="relative h-52 sm:h-56 shrink-0 overflow-hidden flex items-center justify-center" style={{ background: "rgba(255,252,248,0.5)" }}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain object-center p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shrink-0"
                      style={{
                        background: `${service.color}15`,
                        border: `1px solid ${service.color}30`,
                        boxShadow: "0 4px 16px rgba(122,31,61,0.08)",
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <h3
                      className="text-xl font-medium mb-3"
                      style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-5 flex-1"
                      style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      {service.description}
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group-hover:gap-3"
                      style={{ color: "#7A1F3D", fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Inquire on WhatsApp
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #7A1F3D, #4B1025)",
                color: "white",
                fontFamily: "Nunito Sans, sans-serif",
                boxShadow: "0 4px 16px rgba(122,31,61,0.25)",
              }}
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
