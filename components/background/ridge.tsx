import { cn } from "@/lib/utils";

type RidgeProps = {
  d: string;
  fill: string;
  className?: string;
  opacity?: number;
};

export function Ridge({ d, fill, className, opacity = 1 }: RidgeProps) {
  return (
    <svg
      viewBox="0 0 1440 420"
      preserveAspectRatio="none"
      className={cn("absolute inset-x-0 bottom-0 w-full", className)}
      style={{ opacity }}
      aria-hidden
    >
      <path d={d} fill={fill} />
    </svg>
  );
}

export const ridgePaths = {
  far: "M0 300 L120 262 L260 288 L420 210 L560 256 L720 190 L880 244 L1040 200 L1200 250 L1320 214 L1440 252 L1440 420 L0 420 Z",
  mid: "M0 330 L160 250 L300 300 L460 224 L620 296 L780 232 L960 300 L1120 246 L1280 300 L1440 256 L1440 420 L0 420 Z",
  near: "M0 360 L140 300 L280 348 L440 288 L600 352 L760 300 L940 360 L1120 306 L1300 356 L1440 320 L1440 420 L0 420 Z",
  foreground:
    "M0 400 L120 372 L240 396 L380 360 L520 398 L680 366 L860 400 L1040 372 L1240 400 L1440 376 L1440 420 L0 420 Z",
} as const;
