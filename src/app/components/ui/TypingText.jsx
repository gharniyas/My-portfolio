"use client";
import React, { useEffect, useState } from "react";

const TypingText = ({ words = [], className = "" }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const speed = deleting ? 35 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = currentWord.slice(0, text.length + 1);
        setText(next);
        if (next === currentWord) {
          setTimeout(() => setDeleting(true), 1300);
        }
      } else {
        const next = currentWord.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 animate-pulse text-[#D4FF24]">|</span>
    </span>
  );
};

export default TypingText;
