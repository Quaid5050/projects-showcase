import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'success' | 'warning' | 'outline' | 'accent';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const v: Record<string, React.CSSProperties> = {
    default: { background: 'rgba(124,58,237,0.15)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.3)' },
    secondary: { background: 'rgba(255,255,255,0.06)', color: '#9ca3af', border: '1px solid #2d2d4e' },
    destructive: { background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.3)' },
    success: { background: 'rgba(34,197,94,0.1)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' },
    warning: { background: 'rgba(234,179,8,0.1)', color: '#facc15', border: '1px solid rgba(234,179,8,0.3)' },
    outline: { background: 'transparent', color: '#6b7280', border: '1px solid #2d2d4e' },
    accent: { background: 'rgba(200,240,0,0.1)', color: '#c8f000', border: '1px solid rgba(200,240,0,0.3)' },
  };
  return (
    <span className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium', className)}
      style={v[variant]} {...props} />
  );
}

export { Badge };
