"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  PERSONAL_INFO,
  ABOUT_HIGHLIGHTS,
  INTEREST_TAGS,
} from "@/data/portfolioData";
import {
  GraduationCap,
  Code2,
  Compass,
  FolderGit2,
  Sparkles,
  MapPin,
  CheckCircle2,
  Cpu,
  Layers,
  Network,
  Cloud,
  Database,
  Palette,
  Brain,
  Bot,
} from "lucide-react";

export default function AboutSection() {
  const getCardIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap className="w-5 h-5 text-violet-400" />;
      case 1:
        return <Compass className="w-5 h-5 text-blue-400" />;
      case 2:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 3:
        return <FolderGit2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-violet-400" />;
    }
  };

  const getDomainIcon = (tag: string) => {
    const lower = tag.toLowerCase();
    if (lower.includes("software")) return <Code2 className="w-4 h-4 text-violet-400" />;
    if (lower.includes("web")) return <Layers className="w-4 h-4 text-blue-400" />;
    if (lower.includes("intelligence") || lower.includes("ai")) return <Brain className="w-4 h-4 text-pink-400" />;
    if (lower.includes("network")) return <Network className="w-4 h-4 text-emerald-400" />;
    if (lower.includes("cloud")) return <Cloud className="w-4 h-4 text-sky-400" />;
    if (lower.includes("database")) return <Database className="w-4 h-4 text-amber-400" />;
    if (lower.includes("design") || lower.includes("ui")) return <Palette className="w-4 h-4 text-rose-400" />;
    if (lower.includes("automation")) return <Bot className="w-4 h-4 text-cyan-400" />;
    return <Cpu className="w-4 h-4 text-slate-400" />;
  };

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#090E23] dark:bg-[#090E23] light:bg-white overflow-hidden border-t border-[#1C274C]/60"
    >
      {/* Background subtle glow */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
              Personal Profile
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              About{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
              Academic background, engineering interests, and career objectives.
            </p>
          </motion.div>
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Story & Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Story Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1530]/90 dark:bg-[#0E1530]/90 light:bg-slate-50 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center text-violet-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
                    Aspiring Software Developer &amp; Problem Solver
                  </h3>
                  <span className="text-xs text-violet-400 font-mono">
                    Undergraduate &bull; Computer Science &amp; AI
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Quick Info Badges */}
              <div className="mt-6 pt-6 border-t border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Location</span>
                    <span className="text-sm font-semibold text-white dark:text-white light:text-slate-800">
                      {PERSONAL_INFO.social.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Status</span>
                    <span className="text-sm font-semibold text-white dark:text-white light:text-slate-800">
                      BSc (Hons) Computer Science with AI
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Domains of Interest */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0E1530]/70 dark:bg-[#0E1530]/70 light:bg-slate-50 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span>Core Domains of Technical Interest</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {INTEREST_TAGS.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#141D3F]/70 dark:bg-[#141D3F]/70 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-700 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 hover:border-violet-500/50 hover:text-violet-400 transition-colors shadow-sm"
                  >
                    <div className="flex-shrink-0">
                      {getDomainIcon(tag)}
                    </div>
                    <span className="text-xs sm:text-sm font-medium truncate">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Attractive Information Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {ABOUT_HIGHLIGHTS.map((card, idx) => (
              <div
                key={card.number}
                className="group relative p-5 sm:p-6 rounded-2xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-50 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 shadow-md hover:-translate-y-1 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#141D3F] dark:bg-[#141D3F] light:bg-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {getCardIcon(idx)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-violet-400 transition-colors">
                        {card.title}
                      </h4>
                      <span className="text-xs font-mono font-bold text-violet-400">
                        {card.number}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
