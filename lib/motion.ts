import type { Transition, Variants } from "framer-motion";

export const EASE_OUT_QUART: [number, number, number, number] = [
  0.165, 0.84, 0.44, 1,
];

export const softSpring: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 24,
  mass: 0.9,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: EASE_OUT_QUART },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: EASE_OUT_QUART },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_OUT_QUART },
  },
};

export const viewportOnce = { once: true, amount: 0.3 } as const;
