"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#timeline", label: "Timeline" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between py-3">
      <a
        href="#home"
        className="text-lg font-extrabold tracking-tight text-slate-100"
      >
        Gharniyas<span className="text-[#D4FF24]">.</span>
      </a>

      <nav className="hidden md:flex md:items-center md:gap-1">
        {navLinks.map((link) => {
          const isActive = active === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "text-[#D4FF24]"
                  : "text-slate-400 hover:text-slate-100"
              }`}
            >
              {link.label}
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-[#1558C9]/15"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          );
        })}
      </nav>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-slate-200 hover:bg-white/5"
        >
          {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full z-40 mt-2 rounded-xl border border-[#1b2333] bg-[#0a0e16] shadow-xl md:hidden"
            >
              <ul className="flex flex-col divide-y divide-[#1b2333] p-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className={`block rounded-lg px-4 py-3 text-center font-semibold transition-colors duration-200 ${
                        active === link.href
                          ? "text-[#D4FF24]"
                          : "text-slate-400 hover:text-slate-100"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
