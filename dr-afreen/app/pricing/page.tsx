import { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageTransition from "@/components/layout/PageTransition";
import PricingCard from "@/components/pricing/PricingCard";
import MoonGlow from "@/components/ui/MoonGlow";

export const metadata: Metadata = {
  title: "Consultation Pricing | Moon Homeopathy Toronto",
  description: "Moon Homeopathy consultation pricing. Message Dr. Afreen on WhatsApp for current pricing and availability.",
};

const pricingItems = [
  {
    iconName: "Stethoscope",
    title: "Initial Consultation",
    description: "A detailed first conversation to understand your concern and wellness goals. Includes a thorough review of your health history and individualized guidance.",
    price: "Contact on WhatsApp",
    duration: "60–90 minutes",
    featured: true,
  },
  {
    iconName: "Heart",
    title: "Follow-Up Consultation",
    description: "Continued support and guidance after your first consultation. We review your progress and refine your wellness approach together.",
    price: "Contact on WhatsApp",
    duration: "30–45 minutes",
  },
  {
    iconName: "Baby",
    title: "Children's Consultation",
    description: "Gentle consultation support for children's health and wellness concerns. Age-appropriate and parent-inclusive approach.",
    price: "Contact on WhatsApp",
    duration: "45–60 minutes",
  },
  {
    iconName: "Heart",
    title: "Women's Wellness Consultation",
    description: "Personalized support for women's wellness concerns across all stages of life. Focused, compassionate, and confidential.",
    price: "Contact on WhatsApp",
    duration: "60 minutes",
  },
  {
    iconName: "Users",
    title: "Family Wellness Consultation",
    description: "Comprehensive wellness guidance for families. Discuss multiple family members' concerns in one comprehensive session.",
    price: "Contact on WhatsApp",
    duration: "60–75 minutes",
  },
  {
    iconName: "Package",
    title: "Product / Remedy Guidance",
    description: "Ask about available homeopathic products and suitable options for your specific wellness needs and concerns.",
    price: "Contact on WhatsApp",
    duration: "15–30 minutes",
  },
];

export default function PricingPage() {
  return (
    <PageTransition>
      <main>
        {/* Hero */}
        <section
          className="relative min-h-[55vh] flex items-center pt-28 pb-20 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #FFFCF8 0%, #FFE8F0 50%, #FFF8EF 100%)" }}
        >
          <MoonGlow size={500} color="rgba(246,200,95,0.15)" className="top-1/2 left-1/2" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px" style={{ background: "#F6C85F" }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#F6C85F", fontFamily: "Nunito Sans, sans-serif" }}>Pricing</span>
                <span className="w-8 h-px" style={{ background: "#F6C85F" }} />
              </div>
              <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}>
                Consultation Pricing
              </h1>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}>
                Please message on WhatsApp for current consultation availability, pricing, and product guidance.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="section-padding" style={{ background: "#FFF8EF" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {pricingItems.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <PricingCard
                    iconName={item.iconName}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    duration={item.duration}
                    featured={item.featured}
                  />
                </ScrollReveal>
              ))}
            </div>

            {/* Note */}
            <ScrollReveal delay={0.2}>
              <div
                className="max-w-2xl mx-auto p-6 rounded-3xl text-center"
                style={{ background: "rgba(247,168,196,0.1)", border: "1px solid rgba(247,168,196,0.3)" }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}>
                  <strong style={{ color: "#7A1F3D" }}>Note:</strong> Pricing may vary depending on consultation type and individual needs. Please message on WhatsApp for accurate and current details.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16" style={{ background: "linear-gradient(135deg, #FFE8F0, #FFF8EF)" }}>
          <div className="max-w-xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-light mb-4" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}>
                Ready to get started?
              </h2>
              <p className="text-sm mb-8" style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}>
                Message Dr. Afreen directly on WhatsApp to ask about pricing and book your consultation.
              </p>
              <a
                href="https://wa.me/16477819461?text=Hi%20Dr.%20Afreen%2C%20I%27d%20like%20to%20inquire%20about%20pricing%20and%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-white"
                style={{ background: "#25D366", fontFamily: "Nunito Sans, sans-serif", boxShadow: "0 4px 16px rgba(37,211,102,0.3)" }}
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
