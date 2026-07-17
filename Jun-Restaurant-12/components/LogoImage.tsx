"use client";

import Image from "next/image";
import { useState } from "react";

interface LogoImageProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function LogoImage({
  width = 44,
  height = 44,
  className = "",
}: LogoImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    // Fallback: inline SVG
    return (
      <div
        style={{ width, height }}
        className={`bg-[#111111] rounded flex items-center justify-center ${className}`}
      >
        <span style={{ fontSize: width * 0.55 }} className="text-[#d60000]">
          陳
        </span>
      </div>
    );
  }

  return (
    <Image
      src="/images/logo.png"
      alt="Chan's Garden Logo"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      onError={() => setError(true)}
    />
  );
}
