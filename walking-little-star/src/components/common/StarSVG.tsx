import React from "react";

interface StarSVGProps {
  size?: number;
  color?: string;
  className?: string;
  filled?: boolean;
  style?: React.CSSProperties;
}

export const StarSVG: React.FC<StarSVGProps> = ({
  size = 24,
  color = "#fedebe",
  className = "",
  filled = true,
  style,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? color : "none"}
    stroke={color}
    strokeWidth={filled ? 0 : 1.5}
    className={className}
    style={style}
    aria-hidden="true"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const StarField: React.FC<{ count?: number; className?: string }> = ({
  count = 6,
  className = "",
}) => {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 5 + ((i * 137.5) % 90),
    y: 10 + ((i * 73.1) % 80),
    size: 8 + (i % 3) * 8,
    opacity: 0.3 + (i % 4) * 0.15,
    delay: i * 0.4,
  }));

  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <StarSVG size={star.size} color="#fedebe" />
        </div>
      ))}
    </div>
  );
};

export const CloudSVG: React.FC<{
  width?: number;
  color?: string;
  className?: string;
}> = ({ width = 120, color = "#bdd8f4", className = "" }) => (
  <svg
    width={width}
    height={width * 0.55}
    viewBox="0 0 120 66"
    fill={color}
    className={className}
    aria-hidden="true"
  >
    <path d="M108 46a20 20 0 0 0-5-39 28 28 0 0 0-54 6 22 22 0 1 0-5 43h64z" />
  </svg>
);

export const SparklesSVG: React.FC<{
  size?: number;
  color?: string;
  className?: string;
}> = ({ size = 32, color = "#9fcaf4", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={color}
    className={className}
    aria-hidden="true"
  >
    <path d="M16 0 L17.5 13.5 L31 16 L17.5 18.5 L16 32 L14.5 18.5 L1 16 L14.5 13.5 Z" />
  </svg>
);

export const CurvedPathSVG: React.FC<{
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}> = ({ className = "", color = "#fedebe", width = 400, height = 100 }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d={`M 0 ${height / 2} Q ${width / 4} 0 ${width / 2} ${height / 2} Q ${(3 * width) / 4} ${height} ${width} ${height / 2}`}
      stroke={color}
      strokeWidth="3"
      strokeDasharray="8 6"
      strokeLinecap="round"
    />
  </svg>
);

export const WaveSVG: React.FC<{
  className?: string;
  color?: string;
  flip?: boolean;
}> = ({ className = "", color = "#fffdf9", flip = false }) => (
  <svg
    viewBox="0 0 1440 80"
    fill={color}
    preserveAspectRatio="none"
    className={`w-full block ${className}`}
    style={{ transform: flip ? "scaleY(-1)" : "none" }}
    aria-hidden="true"
  >
    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
  </svg>
);

export const RainbowArcSVG: React.FC<{
  className?: string;
  width?: number;
}> = ({ className = "", width = 300 }) => (
  <svg
    width={width}
    height={width * 0.55}
    viewBox="0 0 300 165"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path d="M 10 150 Q 150 10 290 150" stroke="#fedebe" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.6" />
    <path d="M 25 150 Q 150 30 275 150" stroke="#9fcaf4" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.5" />
    <path d="M 40 150 Q 150 50 260 150" stroke="#bdd8f4" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.4" />
  </svg>
);
