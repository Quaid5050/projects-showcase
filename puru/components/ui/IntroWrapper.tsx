'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import TradeRouteLines from './TradeRouteLines';

export default function IntroWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem('yuvaan-intro-shown');
    if (shown) {
      setIsLoading(false);
      setHasShown(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('yuvaan-intro-shown', '1');
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy"
            aria-hidden="true"
          >
            <TradeRouteLines />

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.12 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute w-96 h-96 rounded-full border border-teal"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.4, opacity: 0.06 }}
              transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
              className="absolute w-96 h-96 rounded-full border border-teal"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute w-64 h-64 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(42,140,140,0.2) 0%, transparent 70%)' }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative z-10 flex flex-col items-center gap-6"
            >
              <Logo variant="dark" size="lg" showText={false} />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <h1 className="font-sora font-bold text-2xl md:text-3xl text-soft-white tracking-widest uppercase">
                  YUVAAN
                </h1>
                <p className="font-inter text-sm tracking-[0.4em] uppercase text-teal mt-1">
                  INTERNATIONAL
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="font-inter text-soft-white/50 text-sm tracking-widest text-center"
              >
                Global Trade. Strategic Partnerships.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute bottom-32 left-0 right-0 h-px"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #D9683A 50%, transparent 100%)',
                transformOrigin: 'left center',
              }}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-16 flex gap-2 items-center"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-teal"
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={!hasShown ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: isLoading ? 0 : 0 }}
      >
        {children}
      </motion.div>
    </>
  );
}
