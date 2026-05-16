/** Consistent top offset below fixed header for all marketing pages. */
export function PageMain({ children }: { children: React.ReactNode }) {
  return <div className="min-h-[50vh] pt-28 sm:pt-32">{children}</div>;
}
