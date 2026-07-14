import { cn } from "@/lib/utils";

export function Fog({
  className,
  delay = "0s",
  opacity = 0.5,
}: {
  className?: string;
  delay?: string;
  opacity?: number;
}) {
  return (
    <div
      className={cn("absolute inset-x-0 animate-fog", className)}
      style={{
        animationDelay: delay,
        opacity,
        background:
          "linear-gradient(180deg, transparent 0%, rgba(203,222,245,0.16) 45%, rgba(203,222,245,0.28) 100%)",
        filter: "blur(26px)",
      }}
    />
  );
}
