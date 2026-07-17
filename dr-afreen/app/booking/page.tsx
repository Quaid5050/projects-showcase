import { Metadata } from "next";
import { MessageCircle, Clock, Phone, Mail } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageTransition from "@/components/layout/PageTransition";
import BookingForm from "@/components/booking/BookingForm";
import MoonGlow from "@/components/ui/MoonGlow";

export const metadata: Metadata = {
  title: "Book a Consultation | Moon Homeopathy Toronto",
  description: "Book a homeopathic consultation with Dr. Afreen via WhatsApp. Appointments for women, children, and families in Toronto.",
};

const WHATSAPP_URL = "https://wa.me/16477819461?text=Hi%20Dr.%20Afreen%2C%20I%27d%20like%20to%20book%20a%20consultation.";

const steps = [
  { number: "01", title: "Fill the Form", description: "Complete the inquiry form below or message directly on WhatsApp." },
  { number: "02", title: "WhatsApp Response", description: "Dr. Afreen will reach out on WhatsApp to confirm your appointment details." },
  { number: "03", title: "Consultation", description: "Enjoy a warm, personalized homeopathic consultation at your scheduled time." },
];

export default function BookingPage() {
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
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#F6C85F", fontFamily: "Nunito Sans, sans-serif" }}>Booking</span>
                <span className="w-8 h-px" style={{ background: "#F6C85F" }} />
              </div>
              <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}>
                Book a Consultation<br /><span className="italic">with Dr. Afreen</span>
              </h1>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}>
                Appointments and questions are handled directly through WhatsApp for a simple and personal experience.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-white"
                style={{ background: "#25D366", fontFamily: "Nunito Sans, sans-serif", boxShadow: "0 8px 24px rgba(37,211,102,0.3)" }}
              >
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16" style={{ background: "#FFF8EF" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-light" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}>
                  How It Works
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 0.1}>
                  <div className="p-6 rounded-3xl text-center" style={{ background: "linear-gradient(135deg, #FFE8F0, #FFF0F5)", border: "1px solid rgba(247,168,196,0.2)" }}>
                    <div className="text-4xl font-light mb-3" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#F7A8C4" }}>{step.number}</div>
                    <h3 className="text-xl font-medium mb-2" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}>{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Contact */}
        <section className="section-padding" style={{ background: "linear-gradient(180deg, #FFF8EF 0%, #FFE8F0 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <ScrollReveal>
                  <div className="mb-8">
                    <SectionHeading
                      label="Book Now"
                      title="Send an Inquiry"
                      subtitle="Fill out the form and Dr. Afreen will contact you on WhatsApp to confirm your appointment."
                      center={false}
                    />
                  </div>
                  <div className="p-8 rounded-3xl" style={{ background: "#FFFCF8", border: "1px solid rgba(247,168,196,0.2)", boxShadow: "0 8px 32px rgba(122,31,61,0.08)" }}>
                    <BookingForm />
                  </div>
                </ScrollReveal>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2">
                <ScrollReveal delay={0.1}>
                  <div className="space-y-6 sticky top-28">
                    {/* WhatsApp card */}
                    <div className="p-6 rounded-3xl" style={{ background: "linear-gradient(135deg, #7A1F3D, #4B1025)", boxShadow: "0 12px 40px rgba(122,31,61,0.2)" }}>
                      <h3 className="text-xl font-medium mb-3" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#FFFCF8" }}>
                        Prefer WhatsApp?
                      </h3>
                      <p className="text-sm mb-5" style={{ color: "rgba(255,240,245,0.75)", fontFamily: "Nunito Sans, sans-serif" }}>
                        Message directly on WhatsApp for the quickest and most personal response.
                      </p>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-white"
                        style={{ background: "#25D366", fontFamily: "Nunito Sans, sans-serif" }}
                      >
                        <MessageCircle className="w-5 h-5" />
                        Message on WhatsApp
                      </a>
                      <p className="text-xs text-center mt-3" style={{ color: "rgba(247,168,196,0.6)", fontFamily: "Nunito Sans, sans-serif" }}>
                        Message only — no calls please
                      </p>
                    </div>

                    {/* Contact info */}
                    <div className="p-6 rounded-3xl" style={{ background: "#FFFCF8", border: "1px solid rgba(247,168,196,0.2)" }}>
                      <h3 className="text-xl font-medium mb-4" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}>
                        Contact Details
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(247,168,196,0.15)" }}>
                            <Phone className="w-4 h-4" style={{ color: "#7A1F3D" }} />
                          </div>
                          <div>
                            <p className="text-xs" style={{ color: "#9B6878", fontFamily: "Nunito Sans, sans-serif" }}>Phone (WhatsApp only)</p>
                            <p className="text-sm font-medium" style={{ color: "#2B1821", fontFamily: "Nunito Sans, sans-serif" }}>(647) 781-9461</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(247,168,196,0.15)" }}>
                            <Mail className="w-4 h-4" style={{ color: "#7A1F3D" }} />
                          </div>
                          <div>
                            <p className="text-xs" style={{ color: "#9B6878", fontFamily: "Nunito Sans, sans-serif" }}>Email</p>
                            <p className="text-sm font-medium break-all" style={{ color: "#2B1821", fontFamily: "Nunito Sans, sans-serif" }}>Afreensd123@gmail.com</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(247,168,196,0.15)" }}>
                            <Clock className="w-4 h-4" style={{ color: "#7A1F3D" }} />
                          </div>
                          <div>
                            <p className="text-xs" style={{ color: "#9B6878", fontFamily: "Nunito Sans, sans-serif" }}>Response Time</p>
                            <p className="text-sm font-medium" style={{ color: "#2B1821", fontFamily: "Nunito Sans, sans-serif" }}>Within 24 hours</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="p-4 rounded-2xl" style={{ background: "rgba(247,168,196,0.08)", border: "1px solid rgba(247,168,196,0.2)" }}>
                      <p className="text-xs leading-relaxed" style={{ color: "#8A6070", fontFamily: "Nunito Sans, sans-serif" }}>
                        Homeopathic consultations are not a substitute for emergency medical care. For urgent health concerns, please contact a licensed medical provider or emergency services.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
