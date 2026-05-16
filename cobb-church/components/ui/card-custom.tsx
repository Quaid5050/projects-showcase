import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
  border?: boolean
  hover?: boolean
  image?: string
  imageAlt?: string
}

export default function Card({
  children,
  className = '',
  padding = 'md',
  border = true,
  hover = false,
  image,
  imageAlt = 'Card image',
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const borderClass = border ? 'border border-border-gray' : ''
  const hoverClass = hover ? 'hover:shadow-lg transition-shadow' : ''

  return (
    <div className={`bg-white rounded-lg ${borderClass} ${hoverClass} ${paddingClasses[padding]} ${className}`}>
      {image && (
        <div className="mb-4 -mx-6 -mt-6 h-48 overflow-hidden rounded-t-lg">
          <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
        </div>
      )}
      {children}
    </div>
  )
}
