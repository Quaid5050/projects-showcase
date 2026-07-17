import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, style, ...props }, ref) => (
  <textarea
    className={cn('flex min-h-[80px] w-full rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-600 focus-visible:outline-none disabled:opacity-50 resize-none transition-all', className)}
    style={{ background: '#1a1a2e', border: '1px solid #2d2d4e', ...style }}
    ref={ref} {...props} />
));
Textarea.displayName = 'Textarea';
export { Textarea };
