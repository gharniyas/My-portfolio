"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

const AnimatedCounter = ({ value, suffix = "", className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);
  const numericValue = parseInt(String(value).replace(/\D/g, ""), 10) || 0;

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, numericValue, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
