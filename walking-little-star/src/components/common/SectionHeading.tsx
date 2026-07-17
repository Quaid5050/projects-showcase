import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  tag?: "h1" | "h2" | "h3";
  accentColor?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  title,
  subtitle,
  centered = false,
  light = false,
  className = "",
  tag: Tag = "h2",
  accentColor = "#fedebe",
}) => {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div
          className={`inline-block w-10 h-1 rounded-full mb-4 ${centered ? "" : ""}`}
          style={{ backgroundColor: accentColor }}
        />
        <Tag
          id={id}
          className={`font-display font-semibold leading-tight text-balance mb-4 ${
            light ? "text-white" : "text-navy"
          } text-3xl sm:text-4xl lg:text-5xl`}
        >
          {title}
        </Tag>
        {subtitle && (
          <p
            className={`font-body text-lg leading-relaxed max-w-2xl ${
              centered ? "mx-auto" : ""
            } ${light ? "text-sky-light" : "text-text-muted"}`}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};
