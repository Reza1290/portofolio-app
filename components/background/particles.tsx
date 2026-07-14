"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const COUNT = 26;

type Particle = {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

function buildParticles(): Particle[] {
  return Array.from({ length: COUNT }, (_, index) => {
    const seed = (index * 9301 + 49297) % 233280;
    const rand = seed / 233280;
    const rand2 = ((index * 4099 + 7919) % 233280) / 233280;
    return {
      left: rand * 100,
      top: rand2 * 100,
      size: 1.5 + rand * 3.5,
      duration: 9 + rand2 * 12,
      delay: -rand * 12,
      drift: (rand - 0.5) * 40,
      opacity: 0.25 + rand2 * 0.5,
    };
  });
}

export function Particles() {
  const reduce = useReducedMotion();
  const particles = useMemo(buildParticles, []);

  if (reduce) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-dawn"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            boxShadow: "0 0 8px rgba(255,244,201,0.7)",
          }}
          animate={{
            y: [0, -32, 0],
            x: [0, particle.drift, 0],
            opacity: [particle.opacity, particle.opacity * 0.4, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
