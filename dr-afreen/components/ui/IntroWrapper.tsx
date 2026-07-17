"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function IntroWrapper({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
            style={{ background: "linear-gradient(135deg, #FFFCF8 0%, #FFE8F0 50%, #FFF8EF 100%)" }}
          >
            {/* Background particles */}
            <FloatingParticles />

            {/* Moon glow */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div
                className="w-80 h-80 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(246,200,95,0.35) 0%, rgba(247,168,196,0.2) 40%, transparent 70%)",
                }}
              />
            </motion.div>

            {/* Logo and text */}
            <div className="relative flex flex-col items-center gap-6">
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative"
              >
                {/* Logo glow ring */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 -m-6 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(246,200,95,0.4) 0%, transparent 70%)" }}
                />
                <div className="w-24 h-24 relative rounded-full overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Moon Homeopathy"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="text-center"
              >
                <h1
                  className="text-4xl font-light tracking-widest"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}
                >
                  Moon Homeopathy
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="text-sm tracking-[0.2em] mt-2"
                  style={{ color: "#F7A8C4" }}
                >
                  by Dr. Afreen
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}

function FloatingParticles() {
  const particles = [
    { size: 6, x: "15%", y: "20%", delay: 0, duration: 4 },
    { size: 4, x: "80%", y: "15%", delay: 0.5, duration: 5 },
    { size: 8, x: "25%", y: "75%", delay: 0.2, duration: 6 },
    { size: 5, x: "70%", y: "70%", delay: 0.8, duration: 4.5 },
    { size: 3, x: "50%", y: "10%", delay: 0.3, duration: 5.5 },
    { size: 7, x: "90%", y: "50%", delay: 0.6, duration: 4 },
    { size: 4, x: "10%", y: "55%", delay: 0.9, duration: 6 },
    { size: 6, x: "60%", y: "85%", delay: 0.1, duration: 5 },
  ];

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.7, 0.4, 0.7],
            y: [0, -20, 0, -15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            background: i % 2 === 0 ? "#F6C85F" : "#F7A8C4",
          }}
        />
      ))}
    </>
  );
}
