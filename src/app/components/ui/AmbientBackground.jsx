"use client";
import React from "react";

const AmbientBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#030407]">
      <div className="absolute -top-40 -left-32 h-[32rem] w-[32rem] animate-blob rounded-full bg-[#1558C9]/25 blur-[120px]" />
      <div className="animation-delay-2000 absolute top-1/3 -right-40 h-[28rem] w-[28rem] animate-blob rounded-full bg-[#D4FF24]/10 blur-[130px]" />
      <div className="animation-delay-4000 absolute bottom-0 left-1/4 h-[26rem] w-[26rem] animate-blob rounded-full bg-[#1558C9]/15 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#030407_75%)]" />
    </div>
  );
};

export default AmbientBackground;
