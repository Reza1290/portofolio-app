import { cn } from "@/lib/utils";

type Blob = {
  left: string;
  top: string;
  width: string;
  height: string;
  opacity: number;
};

const groupA: Blob[] = [
  { left: "4%", top: "22%", width: "26%", height: "42%", opacity: 0.5 },
  { left: "30%", top: "48%", width: "20%", height: "34%", opacity: 0.35 },
  { left: "62%", top: "16%", width: "30%", height: "48%", opacity: 0.55 },
  { left: "82%", top: "54%", width: "18%", height: "30%", opacity: 0.3 },
];

const groupB: Blob[] = [
  { left: "10%", top: "40%", width: "22%", height: "36%", opacity: 0.4 },
  { left: "40%", top: "20%", width: "28%", height: "44%", opacity: 0.5 },
  { left: "72%", top: "46%", width: "24%", height: "38%", opacity: 0.32 },
];

function CloudGroup({ blobs, tint }: { blobs: Blob[]; tint: string }) {
  return (
    <div className="relative h-full w-1/2 shrink-0">
      {blobs.map((blob, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            left: blob.left,
            top: blob.top,
            width: blob.width,
            height: blob.height,
            opacity: blob.opacity,
            background: `radial-gradient(closest-side, ${tint} 0%, transparent 72%)`,
            filter: "blur(22px)",
          }}
        />
      ))}
    </div>
  );
}

export function Clouds({
  className,
  tint = "rgba(226,238,255,0.55)",
  animation = "animate-drift",
}: {
  className?: string;
  tint?: string;
  animation?: string;
}) {
  return (
    <div className={cn("absolute inset-x-0", className)}>
      <div className={cn("flex h-full w-[200%]", animation)}>
        <CloudGroup blobs={groupA} tint={tint} />
        <CloudGroup blobs={groupB} tint={tint} />
      </div>
    </div>
  );
}
