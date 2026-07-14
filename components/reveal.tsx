"use client";

import { motion, type Variants } from "framer-motion";
import type { ComponentType, ReactNode } from "react";

import { fadeUp, viewportOnce } from "@/lib/motion";

type RevealTag = "div" | "section" | "li" | "article" | "span";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: RevealTag;
};

export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as] as ComponentType<Record<string, unknown>>;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
