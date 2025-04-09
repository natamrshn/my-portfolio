"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center">
      {/* Логика для мобильного меню */}
      <div className="flex justify-between items-center w-full sm:w-auto">
        {/* Навигация на больших экранах */}
        <div className="hidden sm:flex gap-16">
          <Link href="#projects">Projects</Link>
          <Link href="#resume">Resume</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* Кнопка для мобильного меню */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Переключатель темы */}
      <div className="hidden sm:flex">Switcher</div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col items-center gap-4 mt-4">
          <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </Link>
          <Link href="#resume" onClick={() => setIsMobileMenuOpen(false)}>
            Resume
          </Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
