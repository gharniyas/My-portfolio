"use client";
import React, { useRef, useState } from "react";

const SpotlightCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-xl border border-[#1b2333] bg-[#0a0e16] ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${pos.x}% ${pos.y}%, rgba(61,125,255,0.16), transparent 70%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

export default SpotlightCard;
