"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ArrowUp, Phone, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#050814] dark:bg-[#050814] light:bg-[#FAFAFC] border-t border-[#1C274C] text-slate-400 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 group mb-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 p-[1.5px] shadow-lg shadow-violet-500/25">
              <div className="w-full h-full rounded-[10px] bg-[#090E23] flex items-center justify-center">
                <span className="font-extrabold text-xs bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  SM
                </span>
              </div>
            </div>
            <span className="font-bold text-lg text-white dark:text-white light:text-slate-900 tracking-tight">
              Savithya Muthunima
            </span>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-sm leading-relaxed">
            IT Undergraduate &bull; Computer Science &amp; AI &bull; Aspiring Software Developer
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-violet-400 dark:hover:text-white light:hover:text-violet-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-white text-slate-400 hover:text-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 hover:border-violet-500 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-white text-slate-400 hover:text-blue-400 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 hover:border-blue-500 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.social.email}`}
            aria-label="Email Address"
            className="p-2.5 rounded-xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-white text-slate-400 hover:text-violet-400 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 hover:border-violet-500 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href={`tel:${PERSONAL_INFO.social.phone.replace(/\s+/g, "")}`}
            aria-label="Phone Number"
            className="p-2.5 rounded-xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-white text-slate-400 hover:text-emerald-400 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 hover:border-emerald-500 transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500 shadow-md shadow-violet-500/20 transition-all duration-200 ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-[#1C274C]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 light:text-slate-400 gap-4 text-center sm:text-left">
        <p>&copy; {currentYear} Savithya Muthunima. All rights reserved.</p>
        <p className="flex items-center justify-center gap-1">
          Built with Next.js, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
