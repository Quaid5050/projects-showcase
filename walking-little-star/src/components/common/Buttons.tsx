import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  showStar?: boolean;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  to,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  showStar = false,
  external = false,
}) => {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-navy text-white hover:bg-navy-light shadow-soft hover:shadow-hover",
    secondary:
      "bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white",
    white:
      "bg-white text-navy hover:bg-peach",
    ghost:
      "bg-transparent text-navy hover:text-navy-light underline underline-offset-4",
  };

  const baseClasses = `inline-flex items-center gap-2 font-body font-700 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 select-none ${
    disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
  } ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <motion.span
      className="inline-flex items-center gap-2"
      whileHover={!disabled ? { y: -2 } : undefined}
      whileTap={!disabled ? { y: 0, scale: 0.98 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {showStar && (
        <motion.span
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          <Star size={14} fill="currentColor" />
        </motion.span>
      )}
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} aria-disabled={disabled}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </button>
  );
};
