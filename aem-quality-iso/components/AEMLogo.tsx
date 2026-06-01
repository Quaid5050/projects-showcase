"use client";
interface AEMLogoProps {
  size?: number;
  variant?: "full" | "icon";
}

export default function AEMLogo({ size = 48, variant = "full" }: AEMLogoProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      {/* SVG Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle arc top */}
        <path
          d="M 20 50 A 32 32 0 0 1 80 50"
          stroke="#1a56db"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Outer circle arc bottom */}
        <path
          d="M 80 50 A 32 32 0 0 1 20 50"
          stroke="#8492a6"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Letter A */}
        <text
          x="14"
          y="62"
          fontFamily="Montserrat, sans-serif"
          fontWeight="900"
          fontSize="36"
          fill="#0a1f44"
        >
          A
        </text>
        {/* Three horizontal bars (E) */}
        <rect x="38" y="36" width="18" height="4" rx="2" fill="#0a1f44" />
        <rect x="38" y="46" width="18" height="4" rx="2" fill="#1a56db" />
        <rect x="38" y="56" width="18" height="4" rx="2" fill="#0a1f44" />
        {/* Letter M */}
        <text
          x="58"
          y="62"
          fontFamily="Montserrat, sans-serif"
          fontWeight="900"
          fontSize="36"
          fill="#0a1f44"
        >
          M
        </text>
        {/* Check mark on A */}
        <path
          d="M 20 70 L 27 63 L 33 69"
          stroke="#1a56db"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Text */}
      {variant === "full" && (
        <div style={{ lineHeight: 1.1 }}>
          <div
            style={{
              fontFamily: "var(--font-montserrat, Montserrat)",
              fontSize: "20px",
              fontWeight: 900,
              color: "white",
              letterSpacing: "1px",
            }}
          >
            AEM
          </div>
          <div
            style={{
              fontFamily: "var(--font-montserrat, Montserrat)",
              fontSize: "8px",
              fontWeight: 700,
              color: "#3b82f6",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Quality ISO Consulting
          </div>
        </div>
      )}
    </div>
  );
}
