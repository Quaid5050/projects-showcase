import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[box-shadow,transform,filter] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-primary-bright to-primary px-8 py-3.5 text-base-950 shadow-glow hover:brightness-110 hover:shadow-[0_0_40px_-8px_rgba(0,200,83,0.55)] active:scale-[0.98]',
  secondary:
    'border border-white/15 bg-white/5 px-8 py-3.5 text-cream backdrop-blur-md hover:border-primary/40 hover:bg-white/10 active:scale-[0.98]',
  ghost: 'px-4 py-2 text-cream/90 hover:bg-white/10 hover:text-cream',
  outline:
    'border border-primary/40 bg-transparent px-8 py-3.5 text-primary hover:bg-primary/10 hover:shadow-glow active:scale-[0.98]',
}

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
  type?: 'button' | 'submit'
  to?: string
  href?: string
  external?: boolean
  onClick?: () => void
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  to,
  href,
  external,
  onClick,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: { y: -1 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring' as const, stiffness: 420, damping: 28 },
  }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link to={to} className={cls}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={cls}
        {...motionProps}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} className={cls} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  )
}
