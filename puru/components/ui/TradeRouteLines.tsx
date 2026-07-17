'use client';

export default function TradeRouteLines({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated trade route lines */}
        <path
          d="M 0 300 Q 200 100 400 250 Q 600 400 800 200 Q 1000 50 1200 300"
          fill="none"
          stroke="url(#tealGrad)"
          strokeWidth="1"
          strokeDasharray="8 4"
          opacity="0.3"
        >
          <animateTransform attributeName="transform" type="translate" from="-1200 0" to="0 0" dur="12s" repeatCount="indefinite" />
        </path>

        <path
          d="M 0 200 Q 300 350 500 150 Q 700 -50 900 250 Q 1100 450 1200 200"
          fill="none"
          stroke="url(#copperGrad)"
          strokeWidth="1"
          strokeDasharray="6 6"
          opacity="0.25"
        >
          <animateTransform attributeName="transform" type="translate" from="-800 0" to="400 0" dur="16s" repeatCount="indefinite" />
        </path>

        <path
          d="M 0 400 Q 150 200 350 350 Q 550 500 750 300 Q 950 100 1200 400"
          fill="none"
          stroke="url(#tealGrad)"
          strokeWidth="0.8"
          strokeDasharray="4 8"
          opacity="0.2"
        >
          <animateTransform attributeName="transform" type="translate" from="0 0" to="-600 0" dur="20s" repeatCount="indefinite" />
        </path>

        {/* Dots moving along routes */}
        <circle r="3" fill="#4DB8D5" opacity="0.7">
          <animateMotion dur="8s" repeatCount="indefinite">
            <mpath href="#route1" />
          </animateMotion>
        </circle>
        <circle r="2" fill="#D9683A" opacity="0.6">
          <animateMotion dur="12s" repeatCount="indefinite" begin="3s">
            <mpath href="#route2" />
          </animateMotion>
        </circle>

        <path id="route1" d="M 0 300 Q 200 100 400 250 Q 600 400 800 200 Q 1000 50 1200 300" fill="none" opacity="0" />
        <path id="route2" d="M 0 200 Q 300 350 500 150 Q 700 -50 900 250 Q 1100 450 1200 200" fill="none" opacity="0" />

        <defs>
          <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#4DB8D5" />
            <stop offset="70%" stopColor="#2A8C8C" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="copperGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="#D9683A" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
