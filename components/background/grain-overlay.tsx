export function GrainOverlay() {
  return (
    <>
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-soft-light" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 30%, transparent 55%, rgba(5,12,25,0.55) 100%)",
        }}
      />
    </>
  );
}
