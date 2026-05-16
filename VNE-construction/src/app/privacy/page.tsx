import type { Metadata } from "next";
import { Lock, Mail, Server, Shield } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { FadeIn } from "@/components/FadeIn";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: false },
};

const sections = [
  {
    icon: Shield,
    title: "Introduction",
    body: `This Privacy Policy explains how ${SITE.name} (“we”, “us”) collects, uses, and protects information when you use our website, forms, and related communications. This is a structured placeholder—replace with counsel-approved text before launch.`,
  },
  {
    icon: Server,
    title: "Information we may collect",
    body: "Examples include contact details you submit in booking or estimate forms, project descriptions, uploaded photos, device/browser metadata, and communications you send by email or phone.",
  },
  {
    icon: Lock,
    title: "How we use information",
    body: "Typical uses include responding to inquiries, scheduling services, improving website reliability, fraud prevention, and—if you opt in—marketing messages about Aerofix services.",
  },
  {
    icon: Mail,
    title: "Contact & requests",
    body: `For privacy questions or data requests, contact us at ${SITE.email} or ${SITE.phoneDisplay}. Describe your request clearly so we can verify and respond within a reasonable timeframe once legal text is finalized.`,
  },
];

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy (draft layout)"
      description="Professional layout for your future privacy policy—swap in final legal language, jurisdiction clauses, and retention tables when your counsel approves."
    >
      <div className="space-y-8">
        {sections.map(({ icon: Icon, title, body }, i) => (
          <FadeIn key={title} delay={i * 0.04}>
            <article className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-charcoal text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="text-lg font-bold text-charcoal sm:text-xl">{title}</h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{body}</p>
            </article>
          </FadeIn>
        ))}
        <FadeIn>
          <p className="rounded-xl border border-dashed border-border bg-zinc-50 p-4 text-center text-xs text-muted">
            Last updated placeholder — set a real date at publish time.
          </p>
        </FadeIn>
      </div>
    </PageShell>
  );
}
