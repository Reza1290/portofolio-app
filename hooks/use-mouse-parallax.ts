"use client";

import { useEffect } from "react";
import {
  useMotionValue,
  useSpring,
  useReducedMotion,
  type SpringOptions,
} from "framer-motion";

const springConfig: SpringOptions = {
  stiffness: 60,
  damping: 20,
  mass: 0.6,
};

export function useMouseParallax() {
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  useEffect(() => {
    if (reduce) return;

    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return;

    const handleMove = (event: MouseEvent) => {
      const nx = event.clientX / window.innerWidth - 0.5;
      const ny = event.clientY / window.innerHeight - 0.5;
      rawX.set(nx);
      rawY.set(ny);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [rawX, rawY, reduce]);

  return { x, y };
}
