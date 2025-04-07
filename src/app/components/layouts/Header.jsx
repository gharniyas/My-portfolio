"use client";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className=" text-white px-4 py-3 w-full z-50 relative">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">It's Me, Gharniyas Ramesh</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-400">
            Home
          </a>
          <a href="/about" className="hover:text-blue-400">
            About
          </a>
          <a href="/achievements" className="hover:text-blue-400">
            Achievements
          </a>
          <a href="/projects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="/work_exp" className="hover:text-blue-400">
            Work Experience
          </a>
          <a href="/timeline" className="hover:text-blue-400">
            Time Line
          </a>
          <a href="/contact" className="hover:text-blue-400">
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={toggleMenu}
        ></div>
      )}

      {menuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-[#0a192f] border-t border-gray-600 z-40">
          <ul className="flex flex-col space-y-4 p-4 text-center">
            <li>
              <a href="/" onClick={toggleMenu} className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                onClick={toggleMenu}
                className="hover:text-blue-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/achievements"
                onClick={toggleMenu}
                className="hover:text-blue-400"
              >
                Achievements
              </a>
            </li>
            <li>
              <a
                href="/projects"
                onClick={toggleMenu}
                className="hover:text-blue-400"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/work_exp"
                onClick={toggleMenu}
                className="hover:text-blue-400"
              >
                Work Experience
              </a>
            </li>
            <li>
              <a
                href="/contact"
                onClick={toggleMenu}
                className="hover:text-blue-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
