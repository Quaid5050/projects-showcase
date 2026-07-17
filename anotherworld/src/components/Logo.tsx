export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M6 8L18 48L32 20L46 48L58 8" stroke="#E9114F" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="72" y="28" fontFamily="Sora,sans-serif" fontWeight="800" fontSize="20" fill="white" letterSpacing="2">ANOTHER</text>
      <text x="72" y="50" fontFamily="Sora,sans-serif" fontWeight="800" fontSize="20" fill="white" letterSpacing="2">WORLD</text>
    </svg>
  );
}
