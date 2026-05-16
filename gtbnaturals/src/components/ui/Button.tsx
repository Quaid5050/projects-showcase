import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'outlineFeatured'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[box-shadow,transform,filter,background-color,border-color] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-orange/88 to-orange/68 px-8 py-3.5 text-white shadow-md hover:from-orange/95 hover:to-orange/75 hover:shadow-lg hover:shadow-orange/25 active:scale-[0.98] focus-visible:outline-orange',
  secondary:
    'border border-stone-300 bg-white px-8 py-3.5 text-cream shadow-sm hover:border-primary/35 hover:bg-gradient-to-r hover:from-mint/20 hover:to-peach/45 active:scale-[0.98]',
  ghost: 'px-4 py-2 text-cream/90 hover:bg-stone-100 hover:text-cream',
  outline:
    'border-2 border-primary bg-transparent px-8 py-3.5 text-primary hover:border-primary-dark hover:bg-gradient-to-r hover:from-mint/25 hover:to-peach/40 active:scale-[0.98]',
  /** Orange label + orange frame — featured lists / conditions CTA */
  outlineFeatured:
    'border-2 border-orange/85 bg-white px-8 py-3.5 text-orange shadow-sm hover:border-orange hover:bg-gradient-to-br hover:from-peach/40 hover:to-white hover:text-amber hover:shadow-md active:scale-[0.98] focus-visible:outline-orange',
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
