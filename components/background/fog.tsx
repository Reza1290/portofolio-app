import { cn } from "@/lib/utils";

export function Fog({
  className,
  opacity = 0.5,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      className={cn("absolute inset-x-0", className)}
      style={{
        opacity,
        background:
          "linear-gradient(180deg, transparent 0%, rgba(203,222,245,0.16) 45%, rgba(203,222,245,0.28) 100%)",
        filter: "blur(26px)",
      }}
    />
  );
}
