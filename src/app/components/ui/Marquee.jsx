"use client";
import React from "react";

const Marquee = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#030407] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#030407] to-transparent" />
      <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        {children}
        {children}
      </div>
    </div>
  );
};

export default Marquee;
