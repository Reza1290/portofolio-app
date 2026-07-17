"use client";

import { motion, useReducedMotion } from "framer-motion";

type Streak = {
  top: string;
  left: string;
  dx: number;
  dy: number;
  angle: number;
  length: number;
  duration: number;
  delay: number;
  repeatDelay: number;
};

const streaks: Streak[] = [
  { top: "10%", left: "4%", dx: 460, dy: 190, angle: 22.4, length: 120, duration: 1.1, delay: 2, repeatDelay: 9 },
  { top: "6%", left: "58%", dx: 380, dy: 210, angle: 28.9, length: 100, duration: 1, delay: 6.5, repeatDelay: 12 },
  { top: "22%", left: "34%", dx: 520, dy: 160, angle: 17.1, length: 150, duration: 1.3, delay: 11, repeatDelay: 14 },
];

export function ShootingStars() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {streaks.map((streak, index) => {
        return (
          <span
            key={index}
            className="absolute"
            style={{ top: streak.top, left: streak.left }}
          >
            <motion.span
              className="absolute block"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: [0, streak.dx],
                y: [0, streak.dy],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: streak.duration,
                delay: streak.delay,
                repeat: Infinity,
                repeatDelay: streak.repeatDelay,
                ease: "easeIn",
              }}
            >
              <span
                className="relative block"
                style={{ transform: `rotate(${streak.angle}deg)`, transformOrigin: "right center" }}
              >
                <span
                  className="block h-px rounded-full"
                  style={{
                    width: streak.length,
                    background:
                      "linear-gradient(270deg, #fff4c9 0%, rgba(255,244,201,0.5) 40%, transparent 100%)",
                  }}
                />
                <span className="absolute right-0 top-1/2 size-1 -translate-y-1/2 rounded-full bg-dawn shadow-[0_0_8px_2px_rgba(255,244,201,0.85)]" />
              </span>
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}
