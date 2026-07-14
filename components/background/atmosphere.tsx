"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import type { ReactNode } from "react";

import { useMouseParallax } from "@/hooks/use-mouse-parallax";
import { Sky } from "./sky";
import { Sun } from "./sun";
import { Clouds } from "./clouds";
import { Fog } from "./fog";
import { Ridge, ridgePaths } from "./ridge";
import { Trees } from "./trees";
import { Particles } from "./particles";
import { GrainOverlay } from "./grain-overlay";

type LayerProps = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  className?: string;
  children: ReactNode;
};

function Layer({ x, y, className, children }: LayerProps) {
  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}

export function Atmosphere() {
  const { x, y } = useMouseParallax();
  const { scrollYProgress } = useScroll();

  const useDepth = (mouseDepth: number, scrollDepth: number) => {
    const mx = useTransform(x, [-0.5, 0.5], [-mouseDepth, mouseDepth]);
    const my = useTransform(y, [-0.5, 0.5], [-mouseDepth * 0.6, mouseDepth * 0.6]);
    const sy = useTransform(scrollYProgress, [0, 1], [0, -scrollDepth]);
    const combinedY = useTransform([my, sy], ([a, b]) => (a as number) + (b as number));
    return { x: mx, y: combinedY };
  };

  const sky = useDepth(8, 0);
  const sun = useDepth(16, 30);
  const cloudsFar = useDepth(20, 50);
  const cloudsNear = useDepth(38, 90);
  const ridgeFar = useDepth(14, 60);
  const fogHigh = useDepth(22, 40);
  const ridgeMid = useDepth(24, 90);
  const ridgeNear = useDepth(36, 130);
  const fogLow = useDepth(30, 70);
  const foreground = useDepth(56, 180);
  const dust = useDepth(44, 60);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-night">
      <Layer x={sky.x} y={sky.y} className="absolute inset-[-6%]">
        <Sky />
      </Layer>

      <Layer x={sun.x} y={sun.y} className="absolute inset-0">
        <Sun />
      </Layer>

      <Layer x={cloudsFar.x} y={cloudsFar.y} className="absolute inset-x-0 top-[6%] h-[38%]">
        <Clouds
          className="inset-0 h-full"
          tint="rgba(210,228,252,0.4)"
          animation="animate-drift-slow"
        />
      </Layer>

      <Layer x={cloudsNear.x} y={cloudsNear.y} className="absolute inset-x-0 top-[20%] h-[34%]">
        <Clouds
          className="inset-0 h-full"
          tint="rgba(255,244,201,0.28)"
          animation="animate-drift"
        />
      </Layer>

      <Layer x={ridgeFar.x} y={ridgeFar.y} className="absolute inset-0">
        <Ridge d={ridgePaths.far} fill="#1f406b" opacity={0.7} className="h-[70vh]" />
      </Layer>

      <Layer x={fogHigh.x} y={fogHigh.y} className="absolute inset-x-0 top-[46%] h-[22%]">
        <Fog className="inset-0 h-full" opacity={0.45} />
      </Layer>

      <Layer x={ridgeMid.x} y={ridgeMid.y} className="absolute inset-0">
        <Ridge d={ridgePaths.mid} fill="#15304f" opacity={0.85} className="h-[62vh]" />
      </Layer>

      <Layer x={ridgeNear.x} y={ridgeNear.y} className="absolute inset-0">
        <Ridge d={ridgePaths.near} fill="#0c1f38" className="h-[54vh]" />
      </Layer>

      <Layer x={fogLow.x} y={fogLow.y} className="absolute inset-x-0 bottom-[16%] h-[24%]">
        <Fog className="inset-0 h-full" opacity={0.6} delay="-12s" />
      </Layer>

      <Layer x={foreground.x} y={foreground.y} className="absolute inset-0">
        <Ridge d={ridgePaths.foreground} fill="#050e1b" className="h-[42vh]" />
        <Trees />
      </Layer>

      <Layer x={dust.x} y={dust.y} className="absolute inset-0">
        <Particles />
      </Layer>

      <GrainOverlay />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
    </div>
  );
}
