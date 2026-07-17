import { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Heart, Users, Leaf, Star, Baby, User } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageTransition from "@/components/layout/PageTransition";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About Dr. Afreen | Moon Homeopathy Toronto",
  description: "Meet Dr. Afreen of Moon Homeopathy — providing gentle, personalized homeopathic support for women, children, and families in Toronto.",
};

const WHATSAPP_URL = "https://wa.me/16477819461?text=Hi%20Dr.%20Afreen%2C%20I%27d%20like%20to%20start%20a%20wellness%20conversation.";

const philosophyCards = [
  { icon: Heart, title: "Listen First", description: "Every consultation begins with attentive listening to understand your unique concerns, history, and wellness goals." },
  { icon: Star, title: "Personalized Support", description: "No two people are the same. Guidance and support are tailored to your individual needs and circumstances." },
  { icon: Leaf, title: "Gentle Wellness", description: "A gentle, natural approach that works with your body's own processes rather than against them." },
  { icon: Users, title: "Family-Focused Care", description: "Support that considers the whole family unit and the unique dynamics of your home life and wellness needs." },
];

const whoWeSupport = [
  { icon: User, label: "Women", description: "Personalized support for women's wellness at every stage of life — from young adults to mothers to mature women." },
  { icon: Baby, label: "Children", description: "Gentle, safe wellness guidance for children with age-appropriate homeopathic approaches." },
  { icon: Heart, label: "Mothers", description: "Specialized support for mothers navigating the physical and emotional aspects of motherhood." },
  { icon: Users, label: "Families in Toronto", description: "Serving Toronto families with accessible, personalized homeopathic wellness guidance." },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          label="Our Story"
          badge="MOON HOMEOPATHY | GENTLE WELLNESS FOR WOMEN & FAMILIES"
          title={<>About Moon<br className="hidden sm:block" /> Homeopathy</>}
          subtitle="Gentle care, thoughtful guidance, and personalized support for women, children, and families."
          description="Dr. Afreen offers warm, individualized homeopathic consultations rooted in compassion and natural wellness."
          backgroundImage="/moon-glow.png"
          primaryCta={{
            label: "Message on WhatsApp",
            href: WHATSAPP_URL,
            external: true,
          }}
          secondaryCta={{ label: "Explore Services", href: "/services" }}
        />
        {/* About Dr. Afreen */}
        <section className="section-padding" style={{ background: "#FFF8EF" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div
                  className="aspect-square max-w-sm mx-auto rounded-4xl overflow-hidden relative"
                  style={{
                    border: "2px solid rgba(247,168,196,0.25)",
                    boxShadow: "0 20px 60px rgba(122,31,61,0.12)",
                  }}
                >
                  <Image
                    src="/about-sec.png"
                    alt="Dr. Afreen — Homeopathic Practitioner"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 384px"
                  />
                  <div className="absolute top-6 right-6 text-2xl opacity-20 pointer-events-none" style={{ color: "#7A1F3D" }}>✿</div>
                  <div className="absolute bottom-6 left-6 text-xl opacity-15 pointer-events-none" style={{ color: "#F6C85F" }}>❋</div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.1}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-px" style={{ background: "#F6C85F" }} />
                    <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#F6C85F", fontFamily: "Nunito Sans, sans-serif" }}>Dr. Afreen</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}>
                    Gentle Care,<br /><span className="italic">Personal Attention</span>
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}>
                    Dr. Afreen is dedicated to providing approachable homeopathic support with a focus on women&apos;s and children&apos;s wellness. Her practice is built on the belief that every person deserves individualized, compassionate care.
                  </p>
                  <p className="text-base leading-relaxed mb-4" style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}>
                    Through personalized consultations and thoughtful guidance, Dr. Afreen works alongside her clients to explore gentle, natural wellness approaches that honor the body&apos;s innate healing processes.
                  </p>
                  <p className="text-base leading-relaxed mb-8" style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}>
                    Based in Toronto, Dr. Afreen is especially passionate about supporting mothers, children, and women through the various stages and challenges of everyday wellness.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
                    style={{ background: "#25D366", color: "white", fontFamily: "Nunito Sans, sans-serif", boxShadow: "0 4px 16px rgba(37,211,102,0.3)" }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Start a Conversation
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Care Philosophy */}
        <section className="section-padding" style={{ background: "linear-gradient(180deg, #FFE8F0 0%, #FFF8EF 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <SectionHeading label="Our Philosophy" title="The Care Philosophy" subtitle="Four principles that guide every consultation and interaction at Moon Homeopathy." />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {philosophyCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <ScrollReveal key={card.title} delay={i * 0.1}>
                    <div className="p-6 rounded-3xl text-center h-full" style={{ background: "#FFFCF8", border: "1px solid rgba(247,168,196,0.2)", boxShadow: "0 4px 20px rgba(122,31,61,0.06)" }}>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(247,168,196,0.15)" }}>
                        <Icon className="w-6 h-6" style={{ color: "#7A1F3D" }} />
                      </div>
                      <h3 className="text-xl font-medium mb-3" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}>{card.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}>{card.description}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who We Support */}
        <section className="section-padding" style={{ background: "#FFF8EF" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <SectionHeading label="Who We Help" title="Who We Support" subtitle="Moon Homeopathy is here for a diverse range of individuals seeking gentle wellness guidance." />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoWeSupport.map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.label} delay={i * 0.1}>
                    <div className="p-6 rounded-3xl h-full" style={{ background: "linear-gradient(135deg, #FFE8F0, #FFF0F5)", border: "1px solid rgba(247,168,196,0.2)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(122,31,61,0.1)" }}>
                        <Icon className="w-5 h-5" style={{ color: "#7A1F3D" }} />
                      </div>
                      <h3 className="text-xl font-medium mb-2" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}>{item.label}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}>{item.description}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding" style={{ background: "linear-gradient(135deg, #4B1025, #7A1F3D)" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-light mb-4" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#FFFCF8" }}>
                Start your wellness conversation
              </h2>
              <p className="text-base mb-8" style={{ color: "rgba(255,240,245,0.8)", fontFamily: "Nunito Sans, sans-serif" }}>
                Message Dr. Afreen directly on WhatsApp to begin your personalized wellness journey.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-white"
                style={{ background: "#25D366", fontFamily: "Nunito Sans, sans-serif", boxShadow: "0 8px 24px rgba(37,211,102,0.3)" }}
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
