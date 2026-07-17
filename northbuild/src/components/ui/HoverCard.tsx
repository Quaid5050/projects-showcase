"use client";

import { useState } from "react";
import React from "react";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hoverBorderColor?: string;
  hoverTranslate?: boolean;
}

export function HoverCard({
  children,
  style = {},
  hoverBorderColor = "#F26522",
  hoverTranslate = true,
}: HoverCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...style,
        borderColor: hovered ? hoverBorderColor : (style.borderColor ?? "#2C2C2C"),
        transform: hovered && hoverTranslate ? "translateY(-3px)" : "translateY(0)",
        transition: "border-color 0.2s, transform 0.2s",
      }}
    >
      {children}
    </div>
  );
}

interface HoverLinkProps {
  children: React.ReactNode;
  href: string;
  style?: React.CSSProperties;
  hoverColor?: string;
}

export function HoverLink({ children, href, style = {}, hoverColor = "#F26522" }: HoverLinkProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...style,
        color: hovered ? hoverColor : (style.color ?? "#A3A3A3"),
        transition: "color 0.2s",
      }}
    >
      {children}
    </a>
  );
}

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  style?: React.CSSProperties;
  hoverBg?: string;
  normalBg?: string;
}

export function HoverButton({ children, style = {}, hoverBg = "#FF7A1A", normalBg = "#F26522", ...rest }: HoverButtonProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      {...rest}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...style,
        backgroundColor: hovered ? hoverBg : normalBg,
        transition: "background-color 0.2s",
      }}
    >
      {children}
    </button>
  );
}
