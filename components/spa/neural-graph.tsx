"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { GRAPH_CENTER, graphEdges, graphNodes, type GraphNode } from "@/lib/constellation";
import { EASE_OUT_QUART } from "@/lib/motion";
import { cn } from "@/lib/utils";

const nodeById = Object.fromEntries(graphNodes.map((node) => [node.id, node]));

type NeuralGraphProps = {
  onSelect: (id: GraphNode["id"]) => void;
};

export function NeuralGraph({ onSelect }: NeuralGraphProps) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<GraphNode["id"] | null>(null);

  const isLit = (id: GraphNode["id"]) => hover === null || hover === id;

  return (
    <div className="absolute inset-0">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {graphNodes.map((node, index) => {
          const lit = hover === node.id;
          return (
            <g key={`spoke-${node.id}`}>
              <line
                x1={GRAPH_CENTER.x}
                y1={GRAPH_CENTER.y}
                x2={node.x}
                y2={node.y}
                vectorEffect="non-scaling-stroke"
                className={cn(
                  "transition-[stroke] duration-500",
                  lit ? "stroke-sunrise/50" : "stroke-white/12",
                )}
                strokeWidth={1}
              />
              {reduce ? null : (
                <line
                  x1={GRAPH_CENTER.x}
                  y1={GRAPH_CENTER.y}
                  x2={node.x}
                  y2={node.y}
                  vectorEffect="non-scaling-stroke"
                  stroke="#ffe27a"
                  strokeWidth={1.4}
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: "0.6 7",
                    animation: "signal 2.6s linear infinite",
                    animationDelay: `${index * -0.4}s`,
                    opacity: lit ? 0.9 : 0.4,
                  }}
                />
              )}
            </g>
          );
        })}

        {graphEdges.map(([a, b]) => {
          const from = nodeById[a];
          const to = nodeById[b];
          const lit = hover === a || hover === b;
          return (
            <line
              key={`edge-${a}-${b}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              vectorEffect="non-scaling-stroke"
              className={cn(
                "transition-[stroke] duration-500",
                lit ? "stroke-sky/40" : "stroke-white/6",
              )}
              strokeWidth={1}
            />
          );
        })}
      </svg>

      {graphNodes.map((node, index) => (
        <motion.button
          key={node.id}
          type="button"
          onMouseEnter={() => setHover(node.id)}
          onMouseLeave={() => setHover(null)}
          onFocus={() => setHover(node.id)}
          onBlur={() => setHover(null)}
          onClick={() => onSelect(node.id)}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={
            reduce
              ? { opacity: 1, scale: 1 }
              : {
                  opacity: 1,
                  scale: 1,
                  y: [0, -6, 0],
                }
          }
          transition={{
            opacity: { duration: 0.8, ease: EASE_OUT_QUART, delay: 0.1 * index },
            scale: { duration: 0.8, ease: EASE_OUT_QUART, delay: 0.1 * index },
            y: {
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className={cn(
            "group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 outline-none",
            isLit(node.id) ? "opacity-100" : "opacity-40",
          )}
        >
          <span className="relative flex size-4 items-center justify-center">
            <span
              className={cn(
                "absolute inline-flex size-full rounded-full bg-sunrise/25 blur-[3px] transition-all duration-500",
                hover === node.id ? "scale-150 bg-sunrise/50" : "scale-100",
              )}
            />
            <span className="relative size-2.5 rounded-full bg-dawn shadow-[0_0_12px_3px_rgba(255,226,122,0.6)] transition-transform duration-500 group-hover:scale-125 group-focus-visible:scale-125" />
          </span>
          <span className="flex flex-col items-center gap-0.5">
            <span className="font-display text-sm font-medium text-white transition-colors duration-500 group-hover:text-sunrise">
              {node.label}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              {node.hint}
            </span>
          </span>
        </motion.button>
      ))}
    </div>
  );
}
