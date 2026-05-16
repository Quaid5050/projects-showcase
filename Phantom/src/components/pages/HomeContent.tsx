"use client";

import { IntroLoader } from "@/components/intro/IntroLoader";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturedCustomizationSection } from "@/components/sections/FeaturedCustomizationSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MobileDetailingSection } from "@/components/sections/MobileDetailingSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

/** Session flag so intro only runs once per tab (e.g. not again after /services → /). */
const INTRO_SEEN_KEY = "pac-phantom-intro-seen";

function readIntroSeen(): boolean {
  try {
    return sessionStorage.getItem(INTRO_SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function writeIntroSeen() {
  try {
    sessionStorage.setItem(INTRO_SEEN_KEY, "1");
  } catch {
    /* private mode / blocked storage */
  }
}

export function HomeContent() {
  const reduce = useReducedMotion();
  const [showIntro, setShowIntro] = useState(true);
  const introActive = showIntro && !reduce;

  useLayoutEffect(() => {
    if (readIntroSeen()) {
      setShowIntro(false);
    }
  }, []);

  useEffect(() => {
    if (!reduce) return;
    writeIntroSeen();
    setShowIntro(false);
  }, [reduce]);

  const dismissIntro = useCallback(() => {
    writeIntroSeen();
    setShowIntro(false);
  }, []);

  useEffect(() => {
    if (introActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [introActive]);

  return (
    <>
      {introActive && <IntroLoader onComplete={dismissIntro} />}
      <main id="main-content" className="flex-1">
        <HeroSection />
        <ServicesOverview />
        <FeaturedCustomizationSection />
        <MobileDetailingSection />
        <GallerySection />
        <WhyChooseSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
    </>
  );
}
