"use client";
import React from "react";

/**
 * GlowBorder — a rotating conic-gradient ring clipped to a thin border,
 * inspired by ReactBits' "Electric Border" but built in pure CSS (no
 * extra deps) so it fits the project's existing Tailwind + Framer Motion
 * stack. Wrap any card/section in it for a premium animated edge.
 */
const GlowBorder = ({ children, className = "", contentClassName = "" }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-[1.5px] ${className}`}>
      <div className="animate-border-spin absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0%,#1558C9_20%,#D4FF24_40%,#3d7dff_60%,transparent_80%)]" />
      <div className={`relative rounded-2xl ${contentClassName}`}>{children}</div>
    </div>
  );
};

export default GlowBorder;
