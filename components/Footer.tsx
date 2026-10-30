"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

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

  return (
    <footer className="relative bg-[#060914] dark:bg-[#060914] light:bg-[#F8FAFC] border-t border-[#1E293B] text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 group mb-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white shadow-md">
              SM
            </div>
            <span className="font-bold text-lg text-white dark:text-white light:text-slate-900">
              Savithya Muthunima
            </span>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-sm">
            IT Undergraduate | Computer Science & AI Student | Aspiring Software Developer
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-[#151D2E] dark:bg-[#151D2E] light:bg-white text-slate-400 hover:text-white border border-[#293449] dark:border-[#293449] light:border-slate-200 hover:border-blue-500 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-[#151D2E] dark:bg-[#151D2E] light:bg-white text-slate-400 hover:text-blue-400 border border-[#293449] dark:border-[#293449] light:border-slate-200 hover:border-blue-500 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.social.email}`}
            aria-label="Email"
            className="p-2.5 rounded-xl bg-[#151D2E] dark:bg-[#151D2E] light:bg-white text-slate-400 hover:text-purple-400 border border-[#293449] dark:border-[#293449] light:border-slate-200 hover:border-blue-500 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 shadow-sm transition-colors ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-[#1E293B]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 light:text-slate-400 gap-4 text-center sm:text-left">
        <p>© {currentYear} Savithya Muthunima. All rights reserved.</p>
        <p>Built with Next.js, TypeScript & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
