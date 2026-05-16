import type { Metadata } from "next";
import {
  Camera,
  Clock,
  FileCheck,
  LineChart,
  Shield,
  Upload,
  Zap,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { FadeIn } from "@/components/FadeIn";
import { UploadProjectForm } from "@/components/UploadProjectForm";
import { CTALink } from "@/components/CTAButton";
import { PageCtaBanner } from "@/components/page/PageCtaBanner";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Upload Your Project",
  description:
    "Request a free handyman estimate in Toronto — upload photos, describe your project, and pick a preferred time. Perfect for drywall repair, painting, and installs.",
  openGraph: {
    title: "Upload Project | Aerofix",
    description: "Photo-based quotes for faster, more accurate estimates.",
  },
};

const benefits = [
  {
    icon: Camera,
    title: "Fewer surprises on site",
    body: "Photos reveal texture, access limits, and adjacent finishes—so we quote labor and materials realistically.",
  },
  {
    icon: Clock,
    title: "Faster turnaround",
    body: "Skip the “we need to see it first” loop for many standard jobs—our team reviews uploads same business day when possible.",
  },
  {
    icon: LineChart,
    title: "Better bundle recommendations",
    body: "If drywall repair and painting belong together, we’ll say so—often saving you a second trip.",
  },
  {
    icon: Shield,
    title: "Privacy-friendly",
    body: "Only use this form for project-related images. When you connect a backend, add your retention policy here.",
  },
];

export default function UploadProjectPage() {
  return (
    <PageShell
      wide
      eyebrow="Photo quotes"
      title="Upload your project for a precise estimate"
      description="The fastest way to get an accurate quote—share photos, scope, and timing preferences in one flow. Ideal for painting services, drywall repair, TV mounting, and bundled handyman work across Toronto."
    >
      <div className="space-y-14 sm:space-y-16">
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-bold text-charcoal">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="rounded-2xl border border-border bg-zinc-50 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-accent">
                <Zap className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  What happens next
                </span>
              </div>
              <ol className="mt-5 space-y-4 text-sm text-muted">
                <li>
                  <span className="font-semibold text-charcoal">1.</span> You submit
                  details + photos through the secure form.
                </li>
                <li>
                  <span className="font-semibold text-charcoal">2.</span> We review
                  scope and reply with questions (if needed) or a ballpark range.
                </li>
                <li>
                  <span className="font-semibold text-charcoal">3.</span> You book a
                  visit—or upgrade to an on-site assessment for complex work.
                </li>
              </ol>
              <div className="mt-6 flex flex-wrap gap-2">
                <CTALink href={`tel:${SITE.phoneTel}`} variant="outline" className="!rounded-full text-sm">
                  Call {SITE.phoneDisplay}
                </CTALink>
                <CTALink href="/pricing" variant="ghost" className="!rounded-full text-sm">
                  See pricing guide
                </CTALink>
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-white to-orange-50/50 p-6 sm:p-8">
              <FileCheck className="h-8 w-8 text-accent" />
              <h3 className="mt-3 text-lg font-bold text-charcoal">
                Pro tip for best results
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Capture wide shots and close-ups, include ceiling height context for
                tall installs, and mention any parking or elevator constraints—
                those details change time estimates more than you’d think.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border-2 border-accent/40 bg-gradient-to-br from-white via-white to-orange-50 p-6 shadow-[var(--shadow-soft)] sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                  <Upload className="h-4 w-4" />
                  Free estimate request
                </span>
                <h2 className="mt-4 text-2xl font-bold text-charcoal sm:text-3xl">
                  Request My Free Estimate
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  Add project photos so we can assess materials, safety, and time on
                  site. When your backend is connected, this form becomes your
                  highest-intent lead source.
                </p>
              </div>
            </div>
            <div className="relative mt-8 rounded-2xl border border-border bg-white/95 p-4 shadow-inner sm:p-6">
              <UploadProjectForm />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <PageCtaBanner
            title="Ready to skip the guesswork?"
            description="Upload once—get clarity on scope, timing, and budget before we ever step on site."
            primaryHref="/booking"
            primaryLabel="Book after your quote"
            secondaryHref="/contact"
            secondaryLabel="Speak to our team"
          />
        </FadeIn>
      </div>
    </PageShell>
  );
}
