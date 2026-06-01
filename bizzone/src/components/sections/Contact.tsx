"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import OnboardingForm from "@/components/OnboardingForm";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-purple/15 blur-[140px]" />
      <div className="section">
        <SectionHeading
          eyebrow="Get Started"
          title={<>Start Your <span className="text-gradient-brand">Project</span></>}
          subtitle="Tell us about your project below — our team will get back to you within 24–48 hours."
        />
        <div className="mt-12">
          <OnboardingForm />
        </div>
      </div>
    </section>
  );
}