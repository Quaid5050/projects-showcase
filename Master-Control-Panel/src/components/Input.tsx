import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { className, invalid, ...rest },
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(
        'block w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm',
        'placeholder:text-slate-400',
        'focus-ring disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500',
        invalid ? 'border-red-400' : 'border-slate-300',
        className
      )}
      {...rest}
    />
  );
});

export default Input;
