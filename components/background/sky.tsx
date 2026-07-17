export function Sky() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050f1f_0%,#071426_26%,#102544_58%,#1b4472_86%,#2b5a8f_100%)]" />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(120% 80% at 78% 8%, rgba(79,137,212,0.28) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[45%]"
        style={{
          background:
            "radial-gradient(120% 100% at 72% 100%, rgba(255,244,201,0.16) 0%, rgba(255,226,122,0.05) 34%, transparent 62%)",
        }}
      />
    </div>
  );
}
