"use client";

import { SITE } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type ContactValues = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const empty: ContactValues = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
};

function validateContact(v: ContactValues) {
  const e: Partial<Record<keyof ContactValues, string>> = {};
  if (!v.name.trim()) e.name = "Name is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    e.email = "Valid email is required";
  if (!v.phone.trim()) e.phone = "Phone is required";
  if (!v.message.trim()) e.message = "Message is required";
  return e;
}

type ContactProps = {
  /** Hide the in-section H2 when the route already provides a page H1. */
  showTitle?: boolean;
};

export function ContactSection({ showTitle = true }: ContactProps) {
  const reduce = useReducedMotion();
  const [values, setValues] = useState<ContactValues>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>(
    {},
  );
  const [sent, setSent] = useState(false);

  const field =
    "mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/35 focus:ring-2 focus:ring-white/15";

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validateContact(values);
    setErrors(e);
    if (Object.keys(e).length) return;
    /** TODO: POST to contact API / email service (Resend, SendGrid, etc.) */
    console.info("[PAC Phantom] contact form (frontend only)", values);
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-28 border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showTitle ? (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
              PAC Phantom Auto Center
            </h2>
            <p className="mt-3 text-sm text-white/55">
              Phone, email, and address — plus a direct line for project inquiries.
            </p>
          </motion.div>
        ) : null}

        <div
          className={`grid gap-10 lg:grid-cols-[1fr_1fr] ${showTitle ? "mt-12" : "mt-0 pt-4"}`}
        >
          <div className="space-y-6">
            <div className="glass-panel rounded-2xl p-6">
              <ul className="space-y-4 text-sm text-white/70">
                <li>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40">
                    Phone
                  </span>
                  <div className="mt-1">
                    <a
                      className="text-lg font-semibold text-white hover:underline"
                      href={SITE.phoneHref}
                    >
                      {SITE.phone}
                    </a>
                  </div>
                  <a
                    href={SITE.phoneHref}
                    className="mt-3 inline-flex rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black"
                  >
                    Click to call
                  </a>
                </li>
                <li>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40">
                    Email
                  </span>
                  <div className="mt-1">
                    <a
                      className="font-semibold text-white hover:underline"
                      href={SITE.emailHref}
                    >
                      {SITE.email}
                    </a>
                  </div>
                  <a
                    href={SITE.emailHref}
                    className="mt-3 inline-flex rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 hover:border-white/40"
                  >
                    Click to email
                  </a>
                </li>
                <li>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40">
                    Address
                  </span>
                  <p className="mt-1 text-white/75">{SITE.address}</p>
                </li>
              </ul>
            </div>
            <div className="glass-panel rounded-2xl p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40">
                Hours (placeholder)
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/65">
                {SITE.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span className="text-white/45">{h.day}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-panel rounded-2xl p-6">
              {sent ? (
                <p className="text-sm text-white/70">
                  Message captured on the frontend. Connect your email/API to
                  deliver this inquiry to the shop inbox.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4" noValidate>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50" htmlFor="c-name">
                      Name
                    </label>
                    <input id="c-name" className={field} value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
                    {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50" htmlFor="c-email">
                      Email
                    </label>
                    <input id="c-email" type="email" className={field} value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
                    {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50" htmlFor="c-phone">
                      Phone
                    </label>
                    <input id="c-phone" type="tel" className={field} value={values.phone} onChange={(e) => setValues({ ...values, phone: e.target.value })} />
                    {errors.phone && <p className="mt-1 text-xs text-red-300">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50" htmlFor="c-topic">
                      Topic
                    </label>
                    <select
                      id="c-topic"
                      className={`${field} bg-black/60`}
                      value={values.topic}
                      onChange={(e) => setValues({ ...values, topic: e.target.value })}
                    >
                      <option value="">Select…</option>
                      <option value="mechanical">Mechanical</option>
                      <option value="custom">Customization</option>
                      <option value="mobile">Mobile detailing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50" htmlFor="c-msg">
                      Message
                    </label>
                    <textarea id="c-msg" rows={4} className={field} value={values.message} onChange={(e) => setValues({ ...values, message: e.target.value })} />
                    {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-white py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>

            <div className="glass-panel overflow-hidden rounded-2xl border border-white/10">
              {/* TODO: Replace with Google Maps embed — paste iframe from Google Maps for 345 Wyecroft Road */}
              <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-white/10 to-transparent text-center text-xs uppercase tracking-[0.25em] text-white/45">
                Map embed placeholder
                <br />
                <span className="mt-2 block max-w-xs text-[10px] normal-case tracking-normal text-white/35">
                  {SITE.mapEmbedPlaceholderNote}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
