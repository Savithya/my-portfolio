"use client";

import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Download, Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) =>
        document.querySelector(item.href)
      ).filter(Boolean) as HTMLElement[];

      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#050814]/85 dark:bg-[#050814]/85 light:bg-white/85 backdrop-blur-xl border-b border-[#1C274C]/80 dark:border-[#1C274C]/80 light:border-slate-200/90 shadow-xl shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#0E1530]/80 dark:bg-[#0E1530]/80 light:bg-slate-100/90 border border-[#1C274C]/80 dark:border-[#1C274C]/80 light:border-slate-300/80 backdrop-blur-md shadow-inner"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-md shadow-violet-600/30 font-semibold"
                      : "text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-violet-600 hover:bg-[#141D3F]/50 dark:hover:bg-[#141D3F]/50 light:hover:bg-slate-200/70"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            {/* Download CV Button */}
            <a
              href={`/${encodeURIComponent(PERSONAL_INFO.cvFileName)}`}
              download={PERSONAL_INFO.cvFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white shadow-md shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 ml-auto lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-100 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#090E23]/95 dark:bg-[#090E23]/95 light:bg-white/95 border-b border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 backdrop-blur-2xl shadow-2xl transition-all">
          <nav className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold shadow-sm"
                      : "text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-[#0E1530] light:hover:bg-slate-100"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#1C274C] dark:border-[#1C274C] light:border-slate-200">
              <a
                href={`/${encodeURIComponent(PERSONAL_INFO.cvFileName)}`}
                download={PERSONAL_INFO.cvFileName}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white shadow-md shadow-violet-500/25"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
