"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MessageCircle, MapPin } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ContactHero() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1.03, opacity: 1, duration: 2, ease: "power2.out" }
      );
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1.4 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(badgeRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, 0.5)
        .fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, 0.7)
        .fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 1.1);

      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 14;
        const y = (e.clientY / window.innerHeight - 0.5) * 7;
        gsap.to(bgRef.current, { x, y, duration: 1.4, ease: "power1.out" });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden border-b border-white/10 min-h-[50vh] flex items-center"
    >
      {/* Background — installed seat, relevant to booking installation */}
      <div ref={bgRef} className="absolute inset-[-5%] will-change-transform">
        <Image
          src="/images/gallery/seat-installed-1.jpeg"
          alt="Professional car interior installation"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div ref={overlayRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-luxury-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/85 via-luxury-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
      </div>

      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-gold-primary/10 blur-[110px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div
          ref={badgeRef}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-primary/30 bg-gold-primary/10 px-4 py-1.5 text-sm font-medium text-gold-primary backdrop-blur-sm"
          style={{ opacity: 0 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-primary animate-pulse" />
          Book an Installation
        </div>
        <h1
          ref={headingRef}
          className="font-display text-3xl tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ opacity: 0 }}
        >
          Get in{" "}
          <span className="bg-gradient-to-r from-gold-primary to-yellow-glow bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <p
          ref={subRef}
          className="mt-5 max-w-2xl text-lg text-yellow-pastel/90"
          style={{ opacity: 0 }}
        >
          Book an installation, ask a question, or request a quote. We&apos;re here to help.
        </p>
      </div>
    </section>
  );
}

const inputClass =
  "mt-1 w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-yellow-pastel placeholder-yellow-pastel/40 outline-none transition focus:border-gold-primary focus:ring-1 focus:ring-gold-primary";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: infoRef.current, start: "top 82%" },
        }
      );
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0, duration: 0.8, delay: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: formRef.current, start: "top 82%" },
        }
      );
      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { opacity: 0, scale: 0.96 },
          {
            opacity: 1, scale: 1, duration: 0.7, delay: 0.2, ease: "power3.out",
            scrollTrigger: { trigger: imgRef.current, start: "top 85%" },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <ContactHero />

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">

            {/* Left — contact info + image */}
            <div ref={infoRef} style={{ opacity: 0 }}>
              <h2 className="font-display text-2xl text-gold-primary">Contact Information</h2>
              <div className="mt-6 space-y-4">
                <a
                  href="tel:+14372659090"
                  className="flex items-center gap-3 text-yellow-pastel/90 hover:text-gold-primary transition-colors"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-primary/15 text-gold-primary">
                    <Phone size={20} />
                  </span>
                  +1 437-265-9090
                </a>
                <a
                  href="https://wa.me/14372659090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-yellow-pastel/90 hover:text-gold-primary transition-colors"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-primary/15 text-gold-primary">
                    <MessageCircle size={20} />
                  </span>
                  WhatsApp
                </a>
                <div className="flex items-start gap-3 text-yellow-pastel/90">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-primary/15 text-gold-primary shrink-0">
                    <MapPin size={20} />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span>96 Planchet Rd, Concord, ON L4K 2C7</span>
                    <span>125 Village Green Square, Scarborough, ON M1S 0G3</span>
                  </span>
                </div>
              </div>

              {/* Relevant image above the map */}
              <div
                ref={imgRef}
                className="mt-8 relative aspect-[16/7] overflow-hidden rounded-xl border border-white/10"
                style={{ opacity: 0 }}
              >
                <Image
                  src="/images/gallery/mats-1.jpeg"
                  alt="Car mats installation"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/50 to-transparent" />
              </div>

              <div className="mt-6 aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <iframe
                  title="Silken Trading - Concord Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.0!2d-79.4900!3d43.8100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2b5b5b5b5b5b%3A0x0!2s96+Planchet+Rd%2C+Concord%2C+ON+L4K+2C7!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="min-h-[250px]"
                />
              </div>
            </div>

            {/* Right — form */}
            <div ref={formRef} style={{ opacity: 0 }}>
              <h2 className="font-display text-2xl text-gold-primary">Send a Message</h2>
              {submitted ? (
                <div className="mt-6 rounded-xl border border-gold-primary/30 bg-gold-primary/10 p-8 text-center">
                  <p className="text-2xl">✅</p>
                  <p className="mt-3 font-semibold text-yellow-pastel">Message sent!</p>
                  <p className="mt-1 text-sm text-yellow-pastel/70">
                    We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-yellow-pastel/90">
                      Name
                    </label>
                    <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-yellow-pastel/90">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="Your phone" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-yellow-pastel/90">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required className={inputClass} placeholder="Your email" />
                  </div>
                  <div>
                    <label htmlFor="car" className="block text-sm font-medium text-yellow-pastel/90">
                      Car Model
                    </label>
                    <input id="car" name="car" type="text" className={inputClass} placeholder="e.g. Toyota Camry 2022" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-yellow-pastel/90">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className={inputClass}
                      placeholder="Your message or installation request"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-gradient-to-r from-gold-primary to-yellow-glow py-3 font-semibold text-luxury-black shadow-[0_0_30px_rgba(249,200,51,0.3)] transition-all hover:shadow-[0_0_45px_rgba(249,200,51,0.45)] hover:scale-[1.01]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
