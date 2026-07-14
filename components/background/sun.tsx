export function Sun() {
  return (
    <div className="absolute right-[16%] top-[14%] flex items-center justify-center">
      <div
        className="size-[clamp(140px,22vw,320px)] rounded-full animate-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(255,244,201,0.95) 0%, rgba(255,226,122,0.6) 32%, rgba(255,226,122,0.12) 60%, transparent 72%)",
          filter: "blur(2px)",
        }}
      />
      <div
        className="absolute size-[clamp(280px,44vw,640px)] rounded-full opacity-60 animate-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(255,226,122,0.22) 0%, transparent 66%)",
          animationDelay: "-3s",
        }}
      />
    </div>
  );
}
