import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
  external?: boolean
}

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all inline-flex items-center justify-center gap-2'

  const variantClasses = {
    primary: 'bg-gold hover:bg-opacity-90 text-dark-blue',
    secondary: 'bg-dark-blue hover:bg-opacity-90 text-white',
    outline: 'border-2 border-dark-blue text-dark-blue hover:bg-light-gray',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const finalClass = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={finalClass}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={finalClass}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={finalClass}>
      {children}
    </button>
  )
}
