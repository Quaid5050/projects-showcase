'use client';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-black hover:opacity-90',
        destructive: 'text-white hover:opacity-90',
        outline: 'text-gray-300 hover:text-white',
        secondary: 'text-white hover:opacity-90',
        ghost: 'text-gray-400 hover:text-white',
        success: 'text-white hover:opacity-90',
        warning: 'text-black hover:opacity-90',
        accent: 'text-black hover:opacity-90',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-7 px-3 text-xs',
        lg: 'h-11 px-8 text-base',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);

const variantStyles: Record<string, React.CSSProperties> = {
  default: { background: 'linear-gradient(135deg, #c8f000, #a0d000)' },
  destructive: { background: 'rgba(239,68,68,0.8)' },
  outline: { background: 'transparent', border: '1px solid #2d2d4e' },
  secondary: { background: '#1a1a2e', border: '1px solid #2d2d4e' },
  ghost: { background: 'transparent' },
  success: { background: 'rgba(34,197,94,0.7)' },
  warning: { background: 'linear-gradient(135deg, #facc15, #d97706)' },
  accent: { background: 'linear-gradient(135deg, #7c3aed, #5b21b6)', color: 'white' },
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean; }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={{ ...variantStyles[variant ?? 'default'], ...style }}
        ref={ref} {...props}
      />
    );
  }
);
Button.displayName = 'Button';
export { Button, buttonVariants };
