import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, style, ...props }, ref) => (
  <input type={type}
    className={cn('flex h-9 w-full rounded-lg px-3 py-1 text-sm text-white placeholder:text-gray-600 focus-visible:outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50', className)}
    style={{ background: '#1a1a2e', border: '1px solid #2d2d4e', ...style }}
    ref={ref} {...props} />
));
Input.displayName = 'Input';
export { Input };
