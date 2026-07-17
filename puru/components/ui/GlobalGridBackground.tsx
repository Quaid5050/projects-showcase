'use client';

export default function GlobalGridBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(42,140,140,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(42,140,140,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow center */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(42,140,140,0.06) 0%, transparent 70%)',
        }}
      />
      {/* Top corner glows */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(77,184,213,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(217,104,58,0.06) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
