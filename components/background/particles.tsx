const COUNT = 40;

type Star = {
  left: number;
  top: number;
  size: number;
  opacity: number;
};

function buildStars(): Star[] {
  return Array.from({ length: COUNT }, (_, index) => {
    const rand = ((index * 9301 + 49297) % 233280) / 233280;
    const rand2 = ((index * 4099 + 7919) % 233280) / 233280;
    return {
      left: rand * 100,
      top: rand2 * 62,
      size: 1 + rand2 * 2,
      opacity: 0.2 + rand * 0.5,
    };
  });
}

const stars = buildStars();

export function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-dawn"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            boxShadow: "0 0 6px rgba(255,244,201,0.6)",
          }}
        />
      ))}
    </div>
  );
}
