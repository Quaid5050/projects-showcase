import { ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
  background?: 'white' | 'gray' | 'darkBlue' | 'image'
  padding?: 'small' | 'medium' | 'large'
  maxWidth?: 'default' | 'full' | 'narrow'
  className?: string
  backgroundImage?: string
}

const SectionContainer = ({
  children,
  background = 'white',
  padding = 'medium',
  maxWidth = 'default',
  className = '',
  backgroundImage,
}: SectionContainerProps) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-light-gray',
    darkBlue: 'bg-dark-blue',
    image: '',
  }

  const paddingClasses = {
    small: 'py-8 md:py-12',
    medium: 'py-16 md:py-24',
    large: 'py-24 md:py-32',
  }

  const maxWidthClasses = {
    default: 'max-w-7xl',
    full: 'max-w-none',
    narrow: 'max-w-4xl',
  }

  const style = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {}

  return (
    <section
      className={`${bgClasses[background]} ${paddingClasses[padding]} ${className} relative w-full overflow-hidden`}
      style={style}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/60 z-0"></div>
      )}
      <div
        className={`${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 ${
          backgroundImage ? 'relative z-10' : ''
        }`}
      >
        {children}
      </div>
    </section>
  )
}

export default SectionContainer
