'use client';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 639px)');
    const update = () => setIsPhone(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  const showImmediately = isPhone || prefersReducedMotion;
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'down' ? -24 : direction === 'none' ? 0 : 24,
      x: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      initial={showImmediately ? false : 'hidden'}
      animate={showImmediately ? 'visible' : undefined}
      whileInView={showImmediately ? undefined : 'visible'}
      viewport={{ once, margin: '-50px' }}
      variants={variants}
      className={`min-w-0 max-w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}
