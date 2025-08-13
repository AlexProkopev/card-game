import { useEffect, useState } from "react";

function CoinLayerAnimation({
  imgSrc,
  count = 8,
  height = 200,
  duration = 3000,
}) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!show) return null;

  const coins = Array.from({ length: count });

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
      {coins.map((_, i) => {
        const dx = `${Math.random() * 200 - 100}px`;
        const dy = `${-height}px`;
        const rot = `${Math.random() * 720 - 360}deg`;

        return (
          <img
            key={i}
            src={imgSrc}
            alt="Coin"
            className="absolute w-10 h-10 animate-coinFlyUp"
            style={{
              "--dx": dx,
              "--dy": dy,
              "--rot": rot,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export default CoinLayerAnimation;
