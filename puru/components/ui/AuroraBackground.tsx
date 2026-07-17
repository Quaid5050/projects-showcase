export default function AuroraBackground({ withGrid = true }: { withGrid?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="aurora" />
      {withGrid && <div className="absolute inset-0 grid-bg-animated opacity-[0.35]" />}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/40" />
    </div>
  );
}
