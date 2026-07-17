import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 48, className = "" }: LogoProps) {
  return (
    <div
      className={`relative rounded-full overflow-hidden flex items-center justify-center ${className}`}
      style={{ width: size, height: size, flexShrink: 0 }}
    >
      <Image
        src="/logo.png"
        alt="Moon Homeopathy Logo"
        width={size}
        height={size}
        className="object-contain"
        priority
      />
    </div>
  );
}
