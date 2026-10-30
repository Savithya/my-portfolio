"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Download,
  FolderGit2,
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Brain,
  Code2,
} from "lucide-react";

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.rotatingTitles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#060914] dark:bg-[#060914] light:bg-[#FAFAFC] overflow-hidden"
    >
      {/* Background Decorative Ambient Illumination */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-purple-600/15 to-cyan-500/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Introduction & Actions (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151D2E]/90 dark:bg-[#151D2E]/90 light:bg-blue-50 border border-[#293449] dark:border-[#293449] light:border-blue-200 text-xs sm:text-sm font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">
              Open to IT Internships & Developer Opportunities
            </span>
          </div>

          {/* Small Intro */}
          <span className="text-base sm:text-lg font-medium text-blue-400 dark:text-blue-400 light:text-blue-600 tracking-wide mb-2">
            {PERSONAL_INFO.heroIntro}
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.15]">
            Savithya{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Muthunima
            </span>
          </h1>

          {/* Professional Identity Subtitle */}
          <p className="mt-3 text-base sm:text-lg font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
            {PERSONAL_INFO.title}
          </p>

          {/* Animated Rotating Titles */}
          <div className="h-9 sm:h-10 mt-2 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={titleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-2 text-base sm:text-xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{PERSONAL_INFO.rotatingTitles[titleIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description */}
          <p className="mt-5 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl leading-relaxed">
            {PERSONAL_INFO.heroDescription}
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View My Projects</span>
            </button>

            <a
              href={`/${PERSONAL_INFO.cvFileName}`}
              download={PERSONAL_INFO.cvFileName}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#151D2E] dark:bg-[#151D2E] light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 border border-[#293449] dark:border-[#293449] light:border-slate-300 hover:border-blue-500 hover:text-white dark:hover:text-white hover:scale-105 active:scale-95 shadow-sm transition-all duration-200"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download My CV</span>
            </a>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-blue-400 dark:hover:text-blue-400 hover:bg-slate-800/40 light:hover:bg-slate-100 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
              Connect:
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-[#151D2E] dark:bg-[#151D2E] light:bg-slate-100 border border-[#293449] dark:border-[#293449] light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 hover:scale-110 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full bg-[#151D2E] dark:bg-[#151D2E] light:bg-slate-100 border border-[#293449] dark:border-[#293449] light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.social.email}`}
                aria-label="Direct Email"
                className="p-2.5 rounded-full bg-[#151D2E] dark:bg-[#151D2E] light:bg-slate-100 border border-[#293449] dark:border-[#293449] light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 hover:scale-110 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-purple-400" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Presentation Visual (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Profile Container with Subtle Animated Gradient Border & Glow */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Outer Glow ring */}
            <div
              className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 opacity-60 blur-xl animate-pulse"
              aria-hidden="true"
            />

            {/* Rotating gradient ring */}
            <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 shadow-2xl">
              <div className="w-full h-full rounded-full bg-[#0E1526] dark:bg-[#0E1526] light:bg-slate-100 overflow-hidden flex flex-col items-center justify-center relative border-4 border-[#060914] dark:border-[#060914] light:border-white">
                {/* Tech Avatar / Profile Representation */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-purple-950/40" />

                <div className="z-10 flex flex-col items-center text-center p-6 select-none">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-xl mb-4 border-2 border-blue-400/40">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                      SM
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900">
                    Savithya Muthunima
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-400 font-medium mt-1">
                    CS & AI Undergraduate
                  </p>
                  <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1">
                    Software Development & Security
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Decorative Badges */}
            <motion.div
              animate={{ y: [-4, 6, -4] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-3 -right-2 px-3 py-1.5 rounded-xl bg-[#151D2E]/95 dark:bg-[#151D2E]/95 light:bg-white border border-[#293449] dark:border-[#293449] light:border-slate-200 shadow-lg flex items-center gap-2 z-20 backdrop-blur-md"
            >
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                AI & Machine Learning
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [6, -4, 6] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-[#151D2E]/95 dark:bg-[#151D2E]/95 light:bg-white border border-[#293449] dark:border-[#293449] light:border-slate-200 shadow-lg flex items-center gap-2 z-20 backdrop-blur-md"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                Cybersecurity
              </span>
            </motion.div>

            <motion.div
              animate={{ x: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="hidden sm:flex absolute top-1/2 -left-8 px-3 py-1.5 rounded-xl bg-[#151D2E]/95 dark:bg-[#151D2E]/95 light:bg-white border border-[#293449] dark:border-[#293449] light:border-slate-200 shadow-lg items-center gap-2 z-20 backdrop-blur-md"
            >
              <Code2 className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                Full-Stack
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 dark:text-slate-400 light:text-slate-500 cursor-pointer hover:text-blue-400 transition-colors">
        <button
          type="button"
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to About Section"
          className="flex flex-col items-center animate-bounce focus:outline-none"
        >
          <span className="text-[11px] font-medium tracking-wider uppercase">
            Explore
          </span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
