import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Home,
  User,
  HeartHandshake,
  Tag,
  ShoppingBag,
  Calendar,
  Shield,
  Leaf,
} from "lucide-react";
import Logo from "@/components/ui/Logo";

const WHATSAPP_URL = "https://wa.me/16477819461?text=Hi%20Dr.%20Afreen%2C%20I%27d%20like%20to%20book%20a%20consultation.";

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "/about", icon: User },
  { label: "Services", href: "/services", icon: HeartHandshake },
  { label: "Pricing", href: "/pricing", icon: Tag },
  { label: "Products", href: "/shop", icon: ShoppingBag },
  { label: "Booking", href: "/booking", icon: Calendar },
];

function GoldFlourish() {
  return (
    <div className="flex items-center gap-1.5 mt-2 mb-5">
      <span className="w-8 h-px bg-gold/60 rounded-full" />
      <span className="text-gold text-[10px]">✦</span>
      <span className="w-4 h-px bg-gold/40 rounded-full" />
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4
      className="text-lg font-medium tracking-wide"
      style={{ color: "#F6C85F", fontFamily: "Cormorant Garamond, Georgia, serif" }}
    >
      {children}
    </h4>
  );
}

function StarField() {
  const stars = [
    { top: "12%", left: "8%", size: 3 },
    { top: "25%", left: "45%", size: 2 },
    { top: "18%", left: "72%", size: 3 },
    { top: "40%", left: "15%", size: 2 },
    { top: "55%", left: "88%", size: 3 },
    { top: "70%", left: "30%", size: 2 },
    { top: "35%", left: "92%", size: 2 },
    { top: "65%", left: "55%", size: 3 },
  ];

  return (
    <>
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            background: "rgba(246, 200, 95, 0.5)",
            boxShadow: "0 0 6px rgba(246, 200, 95, 0.4)",
          }}
        />
      ))}
    </>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top wavy transition */}
      <div className="relative h-16 sm:h-20 -mb-px pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C180 60 360 20 540 35C720 50 900 15 1080 30C1260 45 1350 25 1440 35V80H0V40Z"
            fill="#FFE8F0"
            opacity="0.6"
          />
          <path
            d="M0 50C200 35 400 55 600 40C800 25 1000 50 1200 38C1320 32 1380 48 1440 42V80H0V50Z"
            fill="#F7A8C4"
            opacity="0.35"
          />
        </svg>
        {/* Moon glow behind wave */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full opacity-30 blur-2xl"
          style={{ background: "radial-gradient(circle, #F6C85F 0%, transparent 70%)" }}
        />
      </div>

      {/* Main footer body */}
      <div
        className="relative"
        style={{ background: "linear-gradient(160deg, #4B1025 0%, #6B1835 40%, #7A1F3D 100%)" }}
      >
        <StarField />

        {/* Decorative flowers */}
        <div className="absolute top-8 right-6 sm:right-12 text-5xl opacity-25 pointer-events-none select-none" style={{ color: "#F7A8C4" }}>✿</div>
        <div className="absolute bottom-32 left-4 sm:left-8 text-4xl opacity-20 pointer-events-none select-none" style={{ color: "#F7A8C4" }}>❋</div>
        <div className="absolute top-1/2 right-[5%] text-2xl opacity-15 pointer-events-none select-none" style={{ color: "#F6C85F" }}>✦</div>
        <div className="absolute bottom-1/2 left-[3%] text-xl opacity-15 pointer-events-none select-none" style={{ color: "#F6C85F" }}>✦</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-4">
              <Link href="/" className="flex items-center gap-4 mb-4 group">
                <div
                  className="relative rounded-full p-1"
                  style={{
                    background: "radial-gradient(circle, rgba(246,200,95,0.25) 0%, transparent 70%)",
                  }}
                >
                  <Logo size={64} className="ring-2 ring-pink-soft/40 group-hover:ring-pink-soft/70 transition-all" />
                </div>
                <div>
                  <div
                    className="text-2xl font-light leading-tight"
                    style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#FFFCF8" }}
                  >
                    Moon Homeopathy
                  </div>
                  <div
                    className="text-sm italic tracking-wide"
                    style={{ color: "#F7A8C4", fontFamily: "Cormorant Garamond, Georgia, serif" }}
                  >
                    by Dr. Afreen
                  </div>
                </div>
              </Link>

              <GoldFlourish />

              <p
                className="text-sm leading-relaxed max-w-sm mb-6"
                style={{ color: "rgba(255,252,248,0.8)", fontFamily: "Nunito Sans, sans-serif" }}
              >
                Gentle, personalized homeopathic support for women, children, and families in Toronto. Consultations available through WhatsApp for a warm, approachable experience.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #4B1025, #6B1835)",
                  color: "#FFFCF8",
                  border: "1.5px solid rgba(246, 200, 95, 0.6)",
                  boxShadow: "0 0 20px rgba(246, 200, 95, 0.15)",
                  fontFamily: "Nunito Sans, sans-serif",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Message on WhatsApp
              </a>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <SectionHeading>Quick Links</SectionHeading>
              <GoldFlourish />
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 text-sm transition-colors hover:text-pink-soft group"
                      style={{ color: "rgba(255,252,248,0.75)", fontFamily: "Nunito Sans, sans-serif" }}
                    >
                      <link.icon className="w-4 h-4 shrink-0 opacity-70 group-hover:opacity-100" style={{ color: "#F7A8C4" }} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <SectionHeading>Contact</SectionHeading>
              <GoldFlourish />
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+16477819461"
                    className="flex items-center gap-3 text-sm group"
                    style={{ color: "rgba(255,252,248,0.8)", fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(75, 16, 37, 0.6)", border: "1px solid rgba(247, 168, 196, 0.25)" }}
                    >
                      <Phone className="w-3.5 h-3.5" style={{ color: "#F7A8C4" }} />
                    </span>
                    <span className="group-hover:text-pink-soft transition-colors">(647) 781-9461</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Afreensd123@gmail.com"
                    className="flex items-center gap-3 text-sm group"
                    style={{ color: "rgba(255,252,248,0.8)", fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(75, 16, 37, 0.6)", border: "1px solid rgba(247, 168, 196, 0.25)" }}
                    >
                      <Mail className="w-3.5 h-3.5" style={{ color: "#F7A8C4" }} />
                    </span>
                    <span className="group-hover:text-pink-soft transition-colors break-all">
                      Afreensd123@gmail.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm group"
                    style={{ color: "rgba(255,252,248,0.8)", fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(75, 16, 37, 0.6)", border: "1px solid rgba(247, 168, 196, 0.25)" }}
                    >
                      <MessageCircle className="w-3.5 h-3.5" style={{ color: "#F7A8C4" }} />
                    </span>
                    <span>
                      <span className="italic text-xs block" style={{ color: "rgba(247,168,196,0.85)" }}>
                        Message only on WhatsApp
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <div
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "rgba(255,252,248,0.8)", fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(75, 16, 37, 0.6)", border: "1px solid rgba(247, 168, 196, 0.25)" }}
                    >
                      <MapPin className="w-3.5 h-3.5" style={{ color: "#F7A8C4" }} />
                    </span>
                    <span>Toronto, Canada</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* CTA Card */}
            <div className="lg:col-span-3">
              <div
                className="p-6 sm:p-7 rounded-2xl h-full flex flex-col"
                style={{
                  background: "linear-gradient(145deg, #FFE8F0 0%, #FFF0F5 50%, #FFE8F0 100%)",
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(247, 168, 196, 0.15)",
                }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #7A1F3D, #9B3057)",
                      boxShadow: "0 4px 16px rgba(122, 31, 61, 0.3)",
                    }}
                  >
                    <Logo size={32} />
                  </div>
                </div>

                <h3
                  className="text-xl font-medium text-center mb-2"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}
                >
                  Begin Your Wellness Journey
                </h3>

                <p
                  className="text-sm text-center leading-relaxed mb-6 flex-1"
                  style={{ color: "#6B5560", fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Message Dr. Afreen directly for warm, personalized guidance.
                </p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #7A1F3D, #4B1025)",
                    color: "white",
                    fontFamily: "Nunito Sans, sans-serif",
                    boxShadow: "0 6px 20px rgba(122, 31, 61, 0.35)",
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar — disclaimer & copyright */}
        <div className="relative mt-4">
          {/* Wavy top edge for bottom bar */}
          <svg
            viewBox="0 0 1440 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-10 block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 20C240 5 480 35 720 18C960 2 1200 30 1440 12V40H0V20Z"
              fill="#FFE8F0"
            />
          </svg>

          <div
            className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
            style={{ background: "linear-gradient(180deg, #FFE8F0 0%, #FFF0F5 100%)" }}
          >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4 flex-1">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: "rgba(122, 31, 61, 0.08)",
                    border: "1px solid rgba(122, 31, 61, 0.15)",
                  }}
                >
                  <Shield className="w-5 h-5" style={{ color: "#7A1F3D" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "#4B1025", fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    Medical Disclaimer
                  </p>
                  <p
                    className="text-xs leading-relaxed max-w-2xl"
                    style={{ color: "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    Information on this website is for educational purposes only and does not replace professional medical advice, diagnosis, or treatment. For urgent medical concerns, please contact a licensed medical provider or emergency services.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2 shrink-0 w-full sm:w-auto">
                <p
                  className="text-xs text-center sm:text-left"
                  style={{ color: "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}
                >
                  © {new Date().getFullYear()} Moon Homeopathy by Dr. Afreen. All rights reserved.
                </p>
                <Leaf className="w-3.5 h-3.5 shrink-0 hidden sm:block" style={{ color: "#F6C85F" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
