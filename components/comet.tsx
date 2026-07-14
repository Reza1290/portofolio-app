"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Comet() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span
        aria-hidden
        className="size-1.5 rounded-full bg-dawn shadow-[0_0_10px_2px_rgba(255,226,122,0.6)]"
      />
    );
  }

  return (
    <span
      aria-hidden
      className="relative flex size-4 items-center justify-center overflow-visible"
    >
      <motion.span
        className="absolute left-1/2 top-1/2"
        initial={{ x: -6, y: -12, opacity: 0 }}
        animate={{
          x: [-6, -3, 4, 8],
          y: [-12, -6, 8, 14],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 1.2,
          ease: "easeIn",
          repeat: Infinity,
          repeatDelay: 2.8,
          times: [0, 0.2, 0.75, 1],
        }}
      >
        <span className="relative block h-4 w-1 -translate-x-1/2 -translate-y-1/2">
          <span className="absolute bottom-1 left-1/2 h-4 w-px -translate-x-1/2 bg-gradient-to-t from-dawn/90 to-transparent" />
          <span className="absolute bottom-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-dawn shadow-[0_0_10px_3px_rgba(255,226,122,0.75)]" />
        </span>
      </motion.span>
    </span>
  );
}
