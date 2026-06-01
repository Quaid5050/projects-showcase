import type { Metadata } from "next";
import OnboardingForm from "@/components/OnboardingForm";

export const metadata: Metadata = {
  title: "Client Onboarding",
  description:
    "Complete your website onboarding so the BizzOne Digital team can get started on your project.",
  // onboarding is a private client tool — keep it out of search results
  robots: { index: false, follow: false },
};

export default function OnboardingPage() {
  return <OnboardingForm />;
}
