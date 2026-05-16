"use client";

import { DETAILING_PACKAGES, SITE } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

export type BookingFormPayload = {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  vehicleSize: string;
  packageId: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
};

const initial: BookingFormPayload = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  vehicleMake: "",
  vehicleModel: "",
  vehicleYear: "",
  vehicleSize: "",
  packageId: "",
  preferredDate: "",
  preferredTime: "",
  notes: "",
};

function validate(values: BookingFormPayload): Partial<Record<keyof BookingFormPayload, string>> {
  const e: Partial<Record<keyof BookingFormPayload, string>> = {};
  if (!values.fullName.trim()) e.fullName = "Name is required";
  if (!values.phone.trim()) e.phone = "Phone is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    e.email = "Valid email is required";
  if (!values.address.trim()) e.address = "Address is required";
  if (!values.vehicleMake.trim()) e.vehicleMake = "Make is required";
  if (!values.vehicleModel.trim()) e.vehicleModel = "Model is required";
  if (!values.vehicleYear.trim()) e.vehicleYear = "Year is required";
  if (!/^\d{4}$/.test(values.vehicleYear.trim()))
    e.vehicleYear = "Use a 4-digit year";
  if (!values.vehicleSize.trim()) e.vehicleSize = "Select vehicle size";
  if (!values.packageId.trim()) e.packageId = "Select a package";
  if (!values.preferredDate.trim()) e.preferredDate = "Date is required";
  if (!values.preferredTime.trim()) e.preferredTime = "Time slot is required";
  return e;
}

type Props = {
  embedded?: boolean;
};

export function MobileDetailingBookingForm({ embedded }: Props) {
  const reduce = useReducedMotion();
  const [values, setValues] = useState<BookingFormPayload>(initial);
  const [errors, setErrors] = useState<
    Partial<Record<keyof BookingFormPayload, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const fieldClass =
    "mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/35 focus:ring-2 focus:ring-white/15";

  const labelClass = "text-xs font-semibold uppercase tracking-[0.2em] text-white/55";

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const v = validate(values);
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    /**
     * TODO: POST to your booking API / CRM / Stripe checkout session.
     * Payload is ready: `values` + metadata (source: "mobile_detailing").
     */
    console.info("[PAC Phantom] booking payload (frontend only)", values);
    setSubmitted(true);
  };

  const packageOptions = useMemo(() => DETAILING_PACKAGES, []);

  if (submitted) {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-2xl p-8 text-center"
      >
        <p className="font-display text-2xl text-white">Request received</p>
        <p className="mt-3 text-sm text-white/65">
          Thank you, {values.fullName.split(" ")[0]}. Our team will confirm your
          mobile detailing window and follow up at{" "}
          <span className="text-white">{values.email}</span> or{" "}
          <a className="text-white underline" href={SITE.phoneHref}>
            {SITE.phone}
          </a>
          .
        </p>
        <p className="mt-4 text-xs text-white/45">
          This confirmation is simulated on the frontend only — wire your backend
          when ready.
        </p>
        {!embedded && (
          <button
            type="button"
            className="mt-6 rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 hover:border-white/40"
            onClick={() => {
              setSubmitted(false);
              setValues(initial);
              setErrors({});
            }}
          >
            Submit another
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 sm:grid-cols-2"
      noValidate
    >
      <div className="sm:col-span-2">
        <p className="text-sm text-white/60">
          Select a package, preferred date and time, and your vehicle details. We
          will confirm availability — this form is structured for a future API.
        </p>
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="fullName">
          Full name
        </label>
        <input
          id="fullName"
          autoComplete="name"
          className={fieldClass}
          value={values.fullName}
          onChange={(e) => setValues({ ...values, fullName: e.target.value })}
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-300">{errors.fullName}</p>
        )}
      </div>
      <div>
        <label className={labelClass} htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          className={fieldClass}
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-300">{errors.phone}</p>
        )}
      </div>
      <div>
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-300">{errors.email}</p>
        )}
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="address">
          Service address
        </label>
        <input
          id="address"
          autoComplete="street-address"
          className={fieldClass}
          value={values.address}
          onChange={(e) => setValues({ ...values, address: e.target.value })}
        />
        {errors.address && (
          <p className="mt-1 text-xs text-red-300">{errors.address}</p>
        )}
      </div>
      <div>
        <label className={labelClass} htmlFor="make">
          Vehicle make
        </label>
        <input
          id="make"
          className={fieldClass}
          value={values.vehicleMake}
          onChange={(e) =>
            setValues({ ...values, vehicleMake: e.target.value })
          }
        />
        {errors.vehicleMake && (
          <p className="mt-1 text-xs text-red-300">{errors.vehicleMake}</p>
        )}
      </div>
      <div>
        <label className={labelClass} htmlFor="model">
          Vehicle model
        </label>
        <input
          id="model"
          className={fieldClass}
          value={values.vehicleModel}
          onChange={(e) =>
            setValues({ ...values, vehicleModel: e.target.value })
          }
        />
        {errors.vehicleModel && (
          <p className="mt-1 text-xs text-red-300">{errors.vehicleModel}</p>
        )}
      </div>
      <div>
        <label className={labelClass} htmlFor="year">
          Vehicle year
        </label>
        <input
          id="year"
          inputMode="numeric"
          className={fieldClass}
          placeholder="2022"
          value={values.vehicleYear}
          onChange={(e) =>
            setValues({ ...values, vehicleYear: e.target.value })
          }
        />
        {errors.vehicleYear && (
          <p className="mt-1 text-xs text-red-300">{errors.vehicleYear}</p>
        )}
      </div>
      <div>
        <label className={labelClass} htmlFor="size">
          Vehicle size / type
        </label>
        <select
          id="size"
          className={`${fieldClass} bg-black/60`}
          value={values.vehicleSize}
          onChange={(e) =>
            setValues({ ...values, vehicleSize: e.target.value })
          }
        >
          <option value="">Select…</option>
          <option value="compact">Compact</option>
          <option value="sedan">Sedan / coupe</option>
          <option value="suv">SUV / crossover</option>
          <option value="truck">Truck</option>
          <option value="exotic">Exotic / wide-body</option>
        </select>
        {errors.vehicleSize && (
          <p className="mt-1 text-xs text-red-300">{errors.vehicleSize}</p>
        )}
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="pkg">
          Detailing package
        </label>
        <select
          id="pkg"
          className={`${fieldClass} bg-black/60`}
          value={values.packageId}
          onChange={(e) =>
            setValues({ ...values, packageId: e.target.value })
          }
        >
          <option value="">Select a package…</option>
          {packageOptions.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        {errors.packageId && (
          <p className="mt-1 text-xs text-red-300">{errors.packageId}</p>
        )}
        {values.packageId && (
          <p className="mt-2 text-xs text-white/45">
            {
              packageOptions.find((p) => p.id === values.packageId)?.blurb
            }
          </p>
        )}
      </div>
      <div>
        <label className={labelClass} htmlFor="date">
          Preferred date
        </label>
        <input
          id="date"
          type="date"
          className={fieldClass}
          value={values.preferredDate}
          onChange={(e) =>
            setValues({ ...values, preferredDate: e.target.value })
          }
        />
        {errors.preferredDate && (
          <p className="mt-1 text-xs text-red-300">{errors.preferredDate}</p>
        )}
      </div>
      <div>
        <label className={labelClass} htmlFor="time">
          Preferred time slot
        </label>
        <select
          id="time"
          className={`${fieldClass} bg-black/60`}
          value={values.preferredTime}
          onChange={(e) =>
            setValues({ ...values, preferredTime: e.target.value })
          }
        >
          <option value="">Select…</option>
          <option value="morning">Morning (8–11)</option>
          <option value="midday">Midday (11–2)</option>
          <option value="afternoon">Afternoon (2–5)</option>
          <option value="evening">Evening (5–7)</option>
        </select>
        {errors.preferredTime && (
          <p className="mt-1 text-xs text-red-300">{errors.preferredTime}</p>
        )}
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="notes">
          Notes / special requests
        </label>
        <textarea
          id="notes"
          rows={4}
          className={fieldClass}
          placeholder="Gate codes, water access, pet considerations…"
          value={values.notes}
          onChange={(e) => setValues({ ...values, notes: e.target.value })}
        />
      </div>
      <div className="sm:col-span-2 flex flex-wrap gap-3">
        <button
          type="submit"
          className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Request booking
        </button>
        <a
          href={SITE.phoneHref}
          className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/80 hover:border-white/40"
        >
          Call {SITE.phone}
        </a>
      </div>
    </form>
  );
}
