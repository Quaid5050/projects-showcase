import React from "react";
import { HeroSection } from "../components/sections/HeroSection";
import { TrustStrip } from "../components/sections/TrustStrip";
import { WelcomeSection } from "../components/sections/WelcomeSection";
import { FeaturesSection } from "../components/sections/FeaturesSection";
import { AgeGroupsSection } from "../components/sections/AgeGroupsSection";
import { DailyRhythmSection } from "../components/sections/DailyRhythmSection";
import { SpanishSection } from "../components/sections/SpanishSection";
import { MealsSection } from "../components/sections/MealsSection";
import { MissionSection } from "../components/sections/MissionSection";
import { ParentCtaSection } from "../components/sections/ParentCtaSection";

export const HomePage: React.FC = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <TrustStrip />
      <WelcomeSection />
      <FeaturesSection />
      <AgeGroupsSection />
      <DailyRhythmSection />
      <SpanishSection />
      <MealsSection />
      <MissionSection />
      <ParentCtaSection />
    </main>
  );
};
