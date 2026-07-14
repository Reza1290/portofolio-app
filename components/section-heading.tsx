"use client";

import { motion } from "framer-motion";

import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "flex max-w-2xl flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <motion.div
        variants={fadeUp}
        className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-sunrise/80"
      >
        <span className="h-px w-8 bg-sunrise/50" />
        {eyebrow}
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl md:text-6xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          className="text-lg leading-relaxed text-white/60 text-balance"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
