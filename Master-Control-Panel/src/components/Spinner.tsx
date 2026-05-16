import { cn } from '@/lib/utils';

export default function Spinner({
  size = 'md',
  className,
}: {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const sizeClass =
    size === 'sm' ? 'h-4 w-4 border-2' : size === 'lg' ? 'h-8 w-8 border-[3px]' : 'h-5 w-5 border-2';
  return (
    <span
      aria-label="Loading"
      className={cn(
        'inline-block animate-spin rounded-full border-slate-300 border-t-brand-600',
        sizeClass,
        className
      )}
    />
  );
}
