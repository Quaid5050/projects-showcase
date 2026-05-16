"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const LOGO = "/branding/pac-phantom-logo.png";

type Props = {
  onComplete: () => void;
};

export function IntroLoader({ onComplete }: Props) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"idle" | "pulse" | "text" | "exit">("idle");

  const finish = useCallback(() => {
    setVisible(false);
    setTimeout(onComplete, 450);
  }, [onComplete]);

  const skip = useCallback(() => {
    setPhase("exit");
    finish();
  }, [finish]);

  useEffect(() => {
    if (reduce) {
      const t = setTimeout(() => {
        setPhase("exit");
        finish();
      }, 600);
      return () => clearTimeout(t);
    }
    const t1 = setTimeout(() => setPhase("pulse"), 200);
    const t2 = setTimeout(() => setPhase("text"), 1600);
    const t3 = setTimeout(() => {
      setPhase("exit");
      finish();
    }, 4200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [reduce, finish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="PAC Phantom Auto Center intro"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 noise-overlay" />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.12),transparent_55%)]"
            animate={
              reduce
                ? undefined
                : { opacity: [0.25, 0.55, 0.3], scale: [1, 1.03, 1] }
            }
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <button
            type="button"
            onClick={skip}
            className="pointer-events-auto absolute right-5 top-5 z-30 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md transition hover:border-white/35 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Skip intro
          </button>

          <div className="relative z-10 flex max-w-lg flex-col items-center px-6 text-center">
            <div className="relative mb-10 w-48 sm:w-56">
              <div
                className="pointer-events-none absolute -inset-6 rounded-full bg-white/5 blur-3xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-sm">
                <motion.div
                  className="absolute inset-0 z-20 mix-blend-screen"
                  initial={{ x: "-100%" }}
                  animate={{ x: reduce ? "-100%" : ["-100%", "120%"] }}
                  transition={{
                    duration: 2.2,
                    repeat: reduce ? 0 : Infinity,
                    repeatDelay: 0.6,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: "40%",
                    background:
                      "linear-gradient(100deg, transparent, rgba(255,255,255,0.55), transparent)",
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
                  animate={{
                    opacity: 1,
                    scale: phase === "pulse" ? [1, 1.04, 1] : 1,
                    filter: "blur(0px)",
                  }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={LOGO}
                    alt="PAC Phantom Auto Center logo"
                    width={512}
                    height={640}
                    priority
                    className="h-auto w-full object-contain invert"
                  />
                </motion.div>
              </div>
              {!reduce && (
                <motion.div
                  className="pointer-events-none absolute inset-x-[-20%] bottom-[-18%] h-24 bg-gradient-to-t from-white/25 to-transparent blur-2xl"
                  animate={{ opacity: [0.15, 0.45, 0.2] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
              )}
            </div>

            <motion.p
              className="font-display text-sm uppercase tracking-[0.55em] text-white/55"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: phase === "text" || phase === "exit" ? 1 : 0.2,
                y: 0,
              }}
              transition={{ duration: 0.8 }}
            >
              PAC Phantom Auto Center
            </motion.p>
            <motion.p
              className="mt-3 max-w-md text-sm text-white/45"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "text" || phase === "exit" ? 1 : 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
            >
              Precision mechanical · Exotic customization · Mobile detailing
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
