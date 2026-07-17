import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, CalendarDays, Star } from "lucide-react";
import { siteConfig } from "../../data/siteContent";
import { navItems } from "../../data/navigation";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/footer.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      {/* Main content - increased top padding to push content down */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-48 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Column 1: Brand ── */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="inline-flex mb-4 focus-visible:ring-2 focus-visible:ring-sky-brand rounded-lg"
              aria-label="Walking Little Star Daycare — Home"
            >
              <img
                src="/images/logo.png"
                alt="Walking Little Star Daycare"
                className="h-20 w-auto object-contain"
                loading="lazy"
              />
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex-1 h-px bg-white/15" />
              <Star size={12} fill="#fedebe" className="text-peach" />
              <div className="flex-1 h-px bg-white/15" />
            </div>

            <p className="font-body text-sky-light/80 text-sm leading-relaxed mb-5 max-w-[200px]">
              A safe, loving, and educational place where little ones can learn, grow, and shine.
            </p>

            <div className="flex gap-3">
              <a
                href={siteConfig.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/8 flex items-center justify-center text-sky-light hover:bg-white/20 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-sky-brand"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href={siteConfig.social.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/8 flex items-center justify-center text-sky-light hover:bg-white/20 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-sky-brand"
                aria-label="Facebook"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div>
            <h3 className="font-display font-semibold text-white text-base mb-5 flex items-center gap-2">
              Quick Links <Star size={12} fill="#fedebe" className="text-peach" />
            </h3>
            <ul className="space-y-3" role="list">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2.5 font-body text-sky-light/80 text-sm hover:text-peach transition-colors group focus-visible:ring-1 focus-visible:ring-sky-brand rounded"
                  >
                    <Star
                      size={10}
                      fill="#fedebe"
                      className="flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity text-peach"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact Info ── */}
          <div>
            <h3 className="font-display font-semibold text-white text-base mb-5 flex items-center gap-2">
              Contact Info <Star size={12} fill="#fedebe" className="text-peach" />
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href={siteConfig.contact.phoneLink}
                  className="flex items-center gap-3 group focus-visible:ring-1 focus-visible:ring-sky-brand rounded"
                  aria-label={`Call ${siteConfig.contact.phone}`}
                >
                  <div className="w-9 h-9 rounded-full border border-white/20 bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-peach group-hover:border-peach transition-all">
                    <Phone size={15} className="text-sky-light group-hover:text-navy transition-colors" aria-hidden="true" />
                  </div>
                  <span className="font-body text-sky-light/80 text-sm group-hover:text-peach transition-colors">
                    {siteConfig.contact.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.emailLink}
                  className="flex items-center gap-3 group focus-visible:ring-1 focus-visible:ring-sky-brand rounded"
                  aria-label={`Email ${siteConfig.contact.email}`}
                >
                  <div className="w-9 h-9 rounded-full border border-white/20 bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-peach group-hover:border-peach transition-all">
                    <Mail size={15} className="text-sky-light group-hover:text-navy transition-colors" aria-hidden="true" />
                  </div>
                  <span className="font-body text-sky-light/80 text-sm group-hover:text-peach transition-colors break-all">
                    {siteConfig.contact.email}
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-white/20 bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={15} className="text-sky-light" aria-hidden="true" />
                  </div>
                  <span className="font-body text-sky-light/80 text-sm">
                    Westfield, MA
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* ── Column 4: Programs + Book a Visit card ── */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-semibold text-white text-base mb-5 flex items-center gap-2">
                Programs <Star size={12} fill="#fedebe" className="text-peach" />
              </h3>
              <ul className="space-y-3" role="list">
                {["Infant Care", "Toddler Care", "Preschool Prep", "Spanish Learning"].map((p) => (
                  <li key={p}>
                    <Link
                      to="/services"
                      className="flex items-center gap-2.5 font-body text-sky-light/80 text-sm hover:text-peach transition-colors group focus-visible:ring-1 focus-visible:ring-sky-brand rounded"
                    >
                      <Star
                        size={10}
                        fill="#fedebe"
                        className="flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity text-peach"
                      />
                      {p}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Book a Visit card */}
            <div
              className="relative rounded-2xl p-5 text-center"
              style={{
                background: "linear-gradient(135deg, #fffdf9 0%, #fff4e6 100%)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 bg-peach rounded-full flex items-center justify-center shadow-md border-2 border-white">
                <Star size={16} fill="#183b65" className="text-navy" />
              </div>

              <h4
                className="font-display font-semibold mt-3 mb-0.5"
                style={{ color: "#183b65", fontSize: "1.3rem" }}
              >
                Book a Visit
              </h4>

              <div className="flex items-center justify-center gap-1 my-2" aria-hidden="true">
                <div className="h-px w-8 border-t border-dashed border-navy/25" />
                <Star size={9} fill="#fedebe" className="text-peach" />
                <div className="h-px w-8 border-t border-dashed border-navy/25" />
              </div>

              <p className="font-body text-text-muted text-sm leading-relaxed mb-4">
                Let your little star begin a bright future.
              </p>

              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 w-full font-body font-700 text-sm px-4 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-navy"
                style={{ background: "linear-gradient(135deg, #fedebe 0%, #f9a86c 100%)", color: "#183b65" }}
              >
                <CalendarDays size={15} aria-hidden="true" />
                Schedule a Visit
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative z-10 border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(10,24,45,0.5)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-sky-light/50 text-xs text-center">
            &copy; {year} Walking Little Star Daycare. All rights reserved.
          </p>
          <Link
            to="/privacy"
            className="font-body text-sky-light/50 text-xs hover:text-sky-light transition-colors focus-visible:ring-1 focus-visible:ring-sky-brand rounded"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
