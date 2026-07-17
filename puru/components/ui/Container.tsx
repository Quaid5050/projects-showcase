interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const maxWidths = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-screen-2xl',
  full: 'max-w-full',
};

export default function Container({ children, className = '', size = 'lg' }: ContainerProps) {
  return (
    <div className={`${maxWidths[size]} mx-auto w-full min-w-0 px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
