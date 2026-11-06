"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  Phone,
  ArrowRight,
  Terminal,
} from "lucide-react";

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.rotatingTitles.length);
    }, 3000);
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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#050814] dark:bg-[#050814] light:bg-[#FAFAFC] overflow-hidden tech-grid"
    >
      {/* Decorative Ambient Radial Illumination */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-violet-600/15 via-blue-600/10 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Personal Brand Identity & Action Controls (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1530]/90 dark:bg-[#0E1530]/90 light:bg-violet-50/90 border border-[#1C274C] dark:border-[#1C274C] light:border-violet-200 text-xs sm:text-sm font-medium mb-6 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">
              Open to IT Internships &amp; Developer Opportunities
            </span>
          </div>

          {/* Small Greeting */}
          <span className="text-base sm:text-lg font-medium text-violet-400 dark:text-violet-400 light:text-violet-600 tracking-wide mb-2 flex items-center gap-2">
            <span>{PERSONAL_INFO.heroIntro}</span>
            <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
          </span>

          {/* Name Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.12]">
            Savithya{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Muthunima
            </span>
          </h1>

          {/* Animated Professional Title */}
          <div className="h-10 sm:h-12 mt-3 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={titleIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex items-center gap-2.5 text-lg sm:text-2xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent"
              >
                <Sparkles className="w-5 h-5 text-violet-400 flex-shrink-0 animate-pulse" />
                <span>{PERSONAL_INFO.rotatingTitles[titleIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Short Professional Narrative */}
          <p className="mt-5 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl leading-relaxed">
            {PERSONAL_INFO.heroDescription}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4 opacity-75" />
            </button>

            <a
              href={`/${encodeURIComponent(PERSONAL_INFO.cvFileName)}`}
              download={PERSONAL_INFO.cvFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#0E1530] dark:bg-[#0E1530] light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-300 hover:border-violet-500 hover:text-white dark:hover:text-white hover:scale-105 active:scale-95 shadow-sm transition-all duration-200"
            >
              <Download className="w-4 h-4 text-violet-400" />
              <span>Download My CV</span>
            </a>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-violet-400 dark:hover:text-violet-400 hover:bg-[#0E1530]/60 light:hover:bg-slate-100 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Links & Quick Connect */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
              Connect:
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-100 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:border-violet-500 hover:bg-violet-600/20 hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-100 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:border-violet-500 hover:bg-violet-600/20 hover:scale-110 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.social.email}`}
                aria-label="Direct Email"
                className="p-2.5 rounded-full bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-100 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:border-violet-500 hover:bg-violet-600/20 hover:scale-110 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-violet-400" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.social.phone.replace(/\s+/g, "")}`}
                aria-label="Direct Phone"
                className="p-2.5 rounded-full bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-100 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:border-emerald-500 hover:bg-emerald-600/20 hover:scale-110 transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Personal Profile Showcase (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Profile Container with Subtle Animated Gradient Border & Glow */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Outer Glow ring */}
            <div
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-500 opacity-60 blur-2xl animate-pulse"
              aria-hidden="true"
            />

            {/* Rotating gradient border ring */}
            <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-violet-500 via-blue-500 to-cyan-400 shadow-2xl">
              <div className="relative w-full h-full rounded-full bg-[#090E23] overflow-hidden border-4 border-[#050814] dark:border-[#050814] light:border-white">
                <Image
                  src="/profile.png"
                  alt="Savithya Muthunima"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating Technical Badge 1: Software Engineering */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
              className="absolute -top-3 -right-2 px-3.5 py-1.5 rounded-xl bg-[#0E1530]/95 dark:bg-[#0E1530]/95 light:bg-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 shadow-lg flex items-center gap-2 z-20 backdrop-blur-md"
            >
              <Code2 className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                Software Dev
              </span>
            </motion.div>

            {/* Floating Technical Badge 2: AI & Machine Learning */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
              className="absolute -bottom-3 -left-3 px-3.5 py-1.5 rounded-xl bg-[#0E1530]/95 dark:bg-[#0E1530]/95 light:bg-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 shadow-lg flex items-center gap-2 z-20 backdrop-blur-md"
            >
              <Brain className="w-4 h-4 text-violet-400" />
              <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                AI &amp; Machine Learning
              </span>
            </motion.div>

            {/* Floating Technical Badge 3: Cybersecurity */}
            <motion.div
              animate={{ x: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 5.4, ease: "easeInOut" }}
              className="hidden sm:flex absolute top-1/2 -left-8 px-3.5 py-1.5 rounded-xl bg-[#0E1530]/95 dark:bg-[#0E1530]/95 light:bg-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 shadow-lg items-center gap-2 z-20 backdrop-blur-md"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                Cybersecurity
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 dark:text-slate-400 light:text-slate-500 cursor-pointer hover:text-violet-400 transition-colors">
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
