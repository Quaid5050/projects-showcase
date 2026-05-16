"use client";

import { LightSweepHeading } from "@/components/ui/LightSweepHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CUSTOMIZATION_SERVICES, MECHANICAL_SERVICES } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

export type ServicesOverviewVariant = "all" | "mechanical" | "customizations";

type Props = {
  variant?: ServicesOverviewVariant;
};

export function ServicesOverview({ variant = "all" }: Props) {
  const reduce = useReducedMotion();
  const showMechanical = variant === "all" || variant === "mechanical";
  const showCustomizations = variant === "all" || variant === "customizations";

  const sectionId =
    variant === "mechanical"
      ? "mechanical"
      : variant === "customizations"
        ? "customizations"
        : "services";

  const intro =
    variant === "all" ? (
      <>
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45">
          Services
        </p>
        <LightSweepHeading
          as="h2"
          className="mt-3 font-display text-3xl text-white sm:text-4xl"
        >
          Engineered care. Exotic finish.
        </LightSweepHeading>
        <p className="mt-4 text-base text-white/60">
          Two disciplines, one obsession: vehicles that feel factory-fresh, yet
          unmistakably yours.
        </p>
      </>
    ) : variant === "mechanical" ? (
      <>
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45">
          Mechanical
        </p>
        <LightSweepHeading
          as="h2"
          className="mt-3 font-display text-3xl text-white sm:text-4xl"
        >
          Certified mechanical & safety
        </LightSweepHeading>
        <p className="mt-4 text-base text-white/60">
          Diagnostics, maintenance, tires, brakes, fluids, and safety
          certification — executed with OEM discipline and transparent reporting.
        </p>
      </>
    ) : (
      <>
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45">
          Customizations
        </p>
        <LightSweepHeading
          as="h2"
          className="mt-3 font-display text-3xl text-white sm:text-4xl"
        >
          Protection, presence, cockpit tech
        </LightSweepHeading>
        <p className="mt-4 text-base text-white/60">
          Wraps, correction, coatings, lighting, starlight headliners, dashcams,
          CarPlay — installed like they left the factory that way.
        </p>
      </>
    );

  return (
    <section id={sectionId} className="relative scroll-mt-28 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px chrome-line" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {intro}
        </motion.div>

        {showMechanical && (
          <div
            id={variant === "all" ? "mechanical" : undefined}
            className={`mt-16 scroll-mt-28 ${variant === "all" ? "" : ""}`}
          >
            {variant === "all" && (
              <div className="mb-8 flex items-end justify-between gap-4">
                <h3 className="font-display text-2xl text-white">
                  Mechanical services
                </h3>
                <span className="hidden text-xs uppercase tracking-[0.25em] text-white/35 sm:inline">
                  Category A
                </span>
              </div>
            )}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {MECHANICAL_SERVICES.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.06, duration: 0.55 }}
                >
                  <ServiceCard
                    title={s.title}
                    description={s.description}
                    image={s.image}
                    imageAlt={s.imageAlt}
                    ctaLabel="Book now"
                    href="/mobile-detailing"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {showCustomizations && (
          <div
            id={variant === "all" ? "customizations" : undefined}
            className="mt-20 scroll-mt-28"
          >
            {variant === "all" && (
              <div className="mb-8 flex items-end justify-between gap-4">
                <h3 className="font-display text-2xl text-white">
                  Customizations & protection
                </h3>
                <span className="hidden text-xs uppercase tracking-[0.25em] text-white/35 sm:inline">
                  Category B
                </span>
              </div>
            )}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {CUSTOMIZATION_SERVICES.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.04, duration: 0.55 }}
                >
                  <ServiceCard
                    title={s.title}
                    description={s.description}
                    image={s.image}
                    imageAlt={s.imageAlt}
                    ctaLabel="View details"
                    href="/gallery"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
