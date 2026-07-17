import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface SmartImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  animate?: boolean;
  rounded?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  animate = false,
  rounded = "rounded-3xl",
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const aspectRatio = (height / width) * 100;

  return (
    <div
      className={`relative overflow-hidden bg-sky-pale ${rounded} ${className}`}
      style={{ paddingBottom: `${aspectRatio}%` }}
    >
      {!error ? (
        <motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          initial={animate ? { scale: 1.08 } : undefined}
          whileInView={animate ? { scale: 1 } : undefined}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-peach-light">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="#fedebe"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      )}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-br from-sky-pale to-peach-light animate-pulse" />
      )}
    </div>
  );
};
