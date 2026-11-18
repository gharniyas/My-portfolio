"use client";
import React from "react";

const GradientText = ({ children, className = "", as: Tag = "span" }) => {
  return (
    <Tag
      className={`bg-gradient-to-r from-[#3d7dff] via-[#1558C9] to-[#D4FF24] bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent ${className}`}
    >
      {children}
    </Tag>
  );
};

export default GradientText;
