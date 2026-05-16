import { cn } from "@/lib/cn";

type Props = {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
};

export function FormField({
  label,
  htmlFor,
  error,
  hint,
  children,
  required,
  className,
}: Props) {
  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-semibold text-charcoal"
      >
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      {children}
      {hint && !error ? (
        <p className="text-xs text-muted" id={`${htmlFor}-hint`}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className="text-xs font-medium text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const inputClass = (invalid?: boolean) =>
  cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal shadow-sm outline-none transition placeholder:text-zinc-400 focus:ring-2 focus:ring-ring",
    invalid ? "border-red-400" : "border-border focus:border-accent/50"
  );
