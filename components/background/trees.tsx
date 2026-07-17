import { cn } from "@/lib/utils";

const trees = [
  { x: 60, scale: 1 },
  { x: 190, scale: 0.72 },
  { x: 300, scale: 1.15 },
  { x: 1140, scale: 0.9 },
  { x: 1270, scale: 1.2 },
  { x: 1380, scale: 0.8 },
];

function Pine() {
  return (
    <g>
      <rect x="-4" y="120" width="8" height="40" fill="#040c17" />
      <path d="M0 0 L34 74 L-34 74 Z" fill="#040c17" />
      <path d="M0 34 L40 118 L-40 118 Z" fill="#050e1b" />
      <path d="M0 70 L46 150 L-46 150 Z" fill="#040c17" />
    </g>
  );
}

export function Trees({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="xMidYMax slice"
      className={cn("absolute inset-x-0 bottom-0 h-[26vh] w-full", className)}
      aria-hidden
    >
      {trees.map((tree, index) => (
        <g
          key={index}
          transform={`translate(${tree.x} ${200 - 160 * tree.scale}) scale(${tree.scale})`}
        >
          <Pine />
        </g>
      ))}
    </svg>
  );
}
