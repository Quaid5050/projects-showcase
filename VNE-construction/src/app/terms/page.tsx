import type { Metadata } from "next";
import { FileWarning, Gavel, Scale, Wallet } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { FadeIn } from "@/components/FadeIn";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false, follow: false },
};

const sections = [
  {
    icon: Gavel,
    title: "Agreement to terms",
    body: `By using this website or booking ${SITE.name}, you agree to these Terms of Service (placeholder). Replace with enforceable terms for your province, business entity, and service categories.`,
  },
  {
    icon: Scale,
    title: "Estimates, scope changes & cancellations",
    body: "Placeholder: describe how quotes work, when scope changes require a new approval, cancellation windows, rescheduling fees, and weather or access delays.",
  },
  {
    icon: Wallet,
    title: "Payment, invoices & disputes",
    body: "Placeholder: accepted payment methods, deposit rules, final invoicing timing, chargeback policy, and dispute resolution steps.",
  },
  {
    icon: FileWarning,
    title: "Liability limitations",
    body: "Placeholder: workmanship warranty language, limitation of liability, indemnity (if applicable), and insurance disclosures—must be drafted by qualified counsel.",
  },
];

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Service (draft layout)"
      description="Structured sections you can hand to your lawyer—this is not legal advice and should not be published until reviewed for Ontario/Canada compliance."
    >
      <div className="space-y-8">
        {sections.map(({ icon: Icon, title, body }, i) => (
          <FadeIn key={title} delay={i * 0.04}>
            <article className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="text-lg font-bold text-charcoal sm:text-xl">{title}</h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{body}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </PageShell>
  );
}
