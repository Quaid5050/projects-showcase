import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageTransition from "@/components/layout/PageTransition";
import ServiceSection from "@/components/services/ServiceSection";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Homeopathic Services | Moon Homeopathy Toronto",
  description: "Explore Moon Homeopathy's services including women's health, children's wellness, skin & hair, digestive support, stress & sleep, and family wellness consultations.",
};

const services = [
  {
    iconName: "Heart",
    imageSrc: "/women-wellness.png",
    title: "Women's Health Support",
    description: "Personalized homeopathic support addressing women's wellness concerns at every stage of life — from hormonal balance to emotional wellbeing. Consultations are warm, attentive, and tailored to your individual story.",
    concerns: [
      "Hormonal wellness and balance",
      "Menstrual wellness support",
      "Prenatal and postnatal wellness",
      "Emotional balance and wellbeing",
      "Energy and vitality support",
      "Menopausal transition wellness",
    ],
    gradient: "linear-gradient(135deg, #FFE8F0 0%, #FFF0F5 100%)",
  },
  {
    iconName: "Baby",
    imageSrc: "/children-wellness.png",
    title: "Children's Health Support",
    description: "Safe, gentle wellness guidance for children using age-appropriate homeopathic approaches. Each consultation considers your child's unique developmental stage and individual health concerns.",
    concerns: [
      "Seasonal wellness support",
      "Sleep and settling concerns",
      "Digestive comfort for children",
      "Skin wellness and comfort",
      "Emotional and behavioral wellness",
      "Immune system wellness",
    ],
    reverse: true,
    gradient: "linear-gradient(135deg, #FFF8EF 0%, #FBE4A0 100%)",
  },
  {
    iconName: "Sparkles",
    imageSrc: "/skin-hair.png",
    title: "Skin & Hair Concerns",
    description: "Holistic homeopathic support for skin and hair wellness. Rather than treating symptoms in isolation, consultations look at the whole person and individual triggers for a truly personalized approach.",
    concerns: [
      "Skin wellness and comfort",
      "Acne and blemish wellness",
      "Eczema and dryness support",
      "Scalp and hair wellness",
      "Allergic skin reactions",
      "Redness and sensitivity",
    ],
    gradient: "linear-gradient(135deg, #FFE8F0 0%, #FFFCF8 100%)",
  },
  {
    iconName: "Apple",
    imageSrc: "/digestive.png",
    title: "Digestive Wellness",
    description: "Supportive homeopathic guidance for common digestive concerns and everyday comfort. Consultations explore your lifestyle, diet, and stress levels for a comprehensive wellness approach.",
    concerns: [
      "Bloating and discomfort",
      "Acid and reflux wellness",
      "Constipation and regularity",
      "Irritable bowel wellness",
      "Nausea and sensitivity",
      "Appetite and digestion support",
    ],
    reverse: true,
    gradient: "linear-gradient(135deg, #FFF0F5 0%, #FFE8F0 100%)",
  },
  {
    iconName: "Moon",
    imageSrc: "/stress-sleep.png",
    title: "Stress, Sleep & Emotional Wellness",
    description: "Calming, natural homeopathic support for stress management, emotional balance, and sleep wellness. A compassionate approach to mental and emotional health using gentle homeopathic principles.",
    concerns: [
      "Anxiety and worry",
      "Sleep quality and insomnia",
      "Emotional stress management",
      "Mood balance and energy",
      "Burnout and fatigue",
      "Grief and life transitions",
    ],
    gradient: "linear-gradient(135deg, #FFE8F0 0%, #FFF8EF 100%)",
  },
  {
    iconName: "Stethoscope",
    imageSrc: "/homeopathy-bottles.png",
    title: "General Homeopathic Consultation",
    description: "Comprehensive wellness consultations addressing a wide range of everyday health concerns. Ideal for new clients exploring homeopathic wellness or those with concerns not listed in specific categories.",
    concerns: [
      "Acute wellness concerns",
      "Chronic wellness support",
      "Preventive wellness guidance",
      "First-time homeopathic consultation",
      "General health and vitality",
      "Lifestyle wellness support",
    ],
    reverse: true,
    gradient: "linear-gradient(135deg, #FFF8EF 0%, #FFE8F0 100%)",
  },
  {
    iconName: "Users",
    imageSrc: "/family-wellness.png",
    title: "Family Wellness Guidance",
    description: "Holistic wellness support for the entire family. Consultations consider family health patterns and individual needs within the context of your family's unique lifestyle and wellness goals.",
    concerns: [
      "Family health consultations",
      "Preventive family wellness",
      "Seasonal health guidance",
      "Wellness for all ages",
      "Allergy and sensitivity support",
      "Family stress and transition support",
    ],
    gradient: "linear-gradient(135deg, #FFE8F0 0%, #FFF0F5 100%)",
  },
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          label="Services"
          badge="MOON HOMEOPATHY | PERSONALIZED HOMEOPATHIC CARE"
          title={
            <>
              Homeopathic Services
              <span className="block italic mt-1">for Women & Children</span>
            </>
          }
          subtitle="Supportive consultations designed around your individual concerns, lifestyle, and wellness goals."
          description="From women's wellness and children's care to stress, sleep, and family guidance — every session is tailored to you."
          backgroundImage="/moon-glow.png"
          primaryCta={{
            label: "Book a Consultation",
            href: "https://wa.me/16477819461?text=Hi%20Dr.%20Afreen%2C%20I%27d%20like%20to%20book%20a%20consultation.",
            external: true,
          }}
          secondaryCta={{ label: "View Pricing", href: "/pricing" }}
        />
        {/* Services */}
        <section className="section-padding" style={{ background: "#FFF8EF" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service) => (
                <ServiceSection
                  key={service.title}
                  iconName={service.iconName}
                  imageSrc={service.imageSrc}
                  title={service.title}
                  description={service.description}
                  concerns={service.concerns}
                  reverse={service.reverse}
                  gradient={service.gradient}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer + CTA */}
        <section className="py-16" style={{ background: "#FFE8F0" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <ScrollReveal>
              <div className="p-6 rounded-3xl mb-8" style={{ background: "rgba(255,255,255,0.7)" }}>
                <p className="text-sm leading-relaxed" style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}>
                  All services use careful wellness language: &quot;support&quot;, &quot;guidance&quot;, and &quot;consultation&quot;. Homeopathic consultations are not a substitute for emergency or urgent medical care.
                </p>
              </div>
              <a
                href="https://wa.me/16477819461?text=Hi%20Dr.%20Afreen%2C%20I%27d%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #7A1F3D, #4B1025)", fontFamily: "Nunito Sans, sans-serif", boxShadow: "0 4px 20px rgba(122,31,61,0.25)" }}
              >
                Book a Consultation
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
