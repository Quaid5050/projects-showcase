"use client";

import { useBookingModal } from "@/contexts/BookingModalContext";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { MobileDetailingBookingForm } from "./MobileDetailingBookingForm";

export function BookingModal() {
  const { open, closeBooking } = useBookingModal();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeBooking]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[160] flex items-end justify-center sm:items-center"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close booking dialog"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={closeBooking}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            className="relative z-10 m-0 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-white/10 bg-[#070709] p-6 shadow-2xl sm:m-4 sm:rounded-3xl sm:p-8"
            initial={reduce ? false : { y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? undefined : { y: 24, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/45">
                  Mobile detailing
                </p>
                <h2
                  id="booking-modal-title"
                  className="font-display text-2xl text-white sm:text-3xl"
                >
                  Book driveway service
                </h2>
              </div>
              <button
                type="button"
                onClick={closeBooking}
                className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/70 hover:border-white/35 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Close
              </button>
            </div>
            <MobileDetailingBookingForm embedded />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
