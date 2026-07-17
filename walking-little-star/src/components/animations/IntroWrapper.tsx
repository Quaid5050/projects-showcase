import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const INTRO_KEY = "wls-intro-seen";

interface IntroWrapperProps {
  children: React.ReactNode;
}

export const IntroWrapper: React.FC<IntroWrapperProps> = ({ children }) => {
  const prefersReduced = useReducedMotion();
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem(INTRO_KEY);
  });
  const [done, setDone] = useState(!showIntro);

  const finish = useCallback(() => {
    sessionStorage.setItem(INTRO_KEY, "1");
    setShowIntro(false);
    setTimeout(() => setDone(true), 700);
  }, []);

  // Auto-complete after max duration
  useEffect(() => {
    if (!showIntro) return;
    const timeout = prefersReduced
      ? setTimeout(finish, 300)
      : setTimeout(finish, 2400);
    return () => clearTimeout(timeout);
  }, [showIntro, prefersReduced, finish]);

  // Keyboard skip
  useEffect(() => {
    if (!showIntro) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
        e.preventDefault();
        finish();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [showIntro, finish]);

  // Lock scroll during intro
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showIntro]);

  return (
    <>
      {/* Page content — visible underneath */}
      <div style={{ visibility: done ? "visible" : "hidden" }}>{children}</div>

      <AnimatePresence onExitComplete={() => setDone(true)}>
        {showIntro && (
          <IntroScreen
            onFinish={finish}
            prefersReduced={prefersReduced}
          />
        )}
      </AnimatePresence>
    </>
  );
};

interface IntroScreenProps {
  onFinish: () => void;
  prefersReduced: boolean;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onFinish, prefersReduced }) => {
  if (prefersReduced) {
    return (
      <motion.div
        className="fixed inset-0 z-[100] bg-navy flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src="/images/logo.png"
          alt="Walking Little Star Daycare"
          className="h-36 w-auto object-contain"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-navy flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Background star field */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${5 + ((i * 137.5) % 90)}%`,
              top: `${10 + ((i * 73.1) % 80)}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.25 + (i % 3) * 0.1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
          >
            <svg
              width={8 + (i % 4) * 6}
              height={8 + (i % 4) * 6}
              viewBox="0 0 24 24"
              fill="#fedebe"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-[15%] left-[-5%]"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 0.15 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        >
          <svg width="180" height="99" viewBox="0 0 120 66" fill="#bdd8f4">
            <path d="M108 46a20 20 0 0 0-5-39 28 28 0 0 0-54 6 22 22 0 1 0-5 43h64z" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] right-[-3%]"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 0.12 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        >
          <svg width="140" height="77" viewBox="0 0 120 66" fill="#9fcaf4">
            <path d="M108 46a20 20 0 0 0-5-39 28 28 0 0 0-54 6 22 22 0 1 0-5 43h64z" />
          </svg>
        </motion.div>
      </div>

      {/* Central content */}
      <div className="relative text-center px-8 max-w-lg mx-auto">

        {/* Curved path decoration */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-48 pointer-events-none"
          animate={{ opacity: 0.3 }}
          style={{ top: "55%" }}
        >
          <svg viewBox="0 0 200 30" fill="none" width="200" height="30" aria-hidden="true">
            <motion.path
              d="M 10 15 Q 50 0 100 15 Q 150 30 190 15"
              stroke="#fedebe"
              strokeWidth="2"
              strokeDasharray="5 4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        {/* Logo image */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 30, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <img
            src="/images/logo.png"
            alt="Walking Little Star Daycare"
            className="h-36 sm:h-44 w-auto object-contain"
          />
        </motion.div>

        <motion.p
          className="font-body text-sky-light text-lg"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        >
          A bright beginning starts here.
        </motion.p>

        {/* Progress bar */}
        <motion.div
          className="mt-8 h-0.5 bg-white/10 rounded-full overflow-hidden mx-auto max-w-[200px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="h-full bg-peach rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.3, duration: 1.0, ease: "linear" }}
          />
        </motion.div>
      </div>

      {/* Skip button */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-body text-sky-light/60 text-sm px-4 py-2 rounded-full border border-white/10 hover:text-white hover:border-white/30 transition-all focus-visible:ring-2 focus-visible:ring-sky-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        onClick={onFinish}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Skip intro animation"
      >
        Skip intro
      </motion.button>
    </motion.div>
  );
};
