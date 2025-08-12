import  { useEffect, useState } from "react";
import bombSvg from "../../assets/bomb.svg";
import glassImg from "../../assets/glass.jpg"; 

function BoomAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const shards = Array.from({ length: 8 });

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
      <img
        src={bombSvg}
        alt="Boom"
        className="w-40 h-40 animate-explode"
        style={{ perspective: "1000px" }}
      />

      {shards.map((_, i) => {
        const x = `${Math.random() * 300 - 150}px`;
        const y = `${Math.random() * 300 - 150}px`;
        const z = `${Math.random() * 500 - 250}px`;
        const rot = `${Math.random() * 720 - 360}deg`;

        return (
          <img
            key={i}
            src={glassImg}
            alt="Shard"
            className="absolute w-8 h-8 animate-shardFly"
            style={{
              "--x": x,
              "--y": y,
              "--z": z,
              "--rot": rot,
            }}
          />
        );
      })}
    </div>
  );
}

export default BoomAnimation;
