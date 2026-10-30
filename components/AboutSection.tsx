"use client";

import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO, ABOUT_HIGHLIGHTS, INTEREST_TAGS } from "@/data/portfolioData";
import { GraduationCap, Code2, Briefcase, Sparkles, MapPin, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const getCardIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap className="w-6 h-6 text-blue-400" />;
      case 1:
        return <Code2 className="w-6 h-6 text-purple-400" />;
      case 2:
        return <Briefcase className="w-6 h-6 text-cyan-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B1120] dark:bg-[#0B1120] light:bg-white overflow-hidden border-t border-[#1E293B]/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              Personal Profile
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
              Discover my background, academic journey, and passion for technology.
            </p>
          </motion.div>
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Story & Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#151D2E]/90 dark:bg-[#151D2E]/90 light:bg-slate-50 border border-[#293449] dark:border-[#293449] light:border-slate-200 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-4 flex items-center gap-2">
                <span>Passionate IT Undergraduate & Problem Solver</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Quick Info Badges */}
              <div className="mt-6 pt-6 border-t border-[#293449] dark:border-[#293449] light:border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Status</span>
                    <span className="text-sm font-semibold text-white dark:text-white light:text-slate-800">
                      Undergraduate (BSc CS & AI)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interest Tags */}
            <div className="p-6 rounded-2xl bg-[#151D2E]/70 dark:bg-[#151D2E]/70 light:bg-slate-50 border border-[#293449] dark:border-[#293449] light:border-slate-200">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Core Domains of Interest
              </h4>
              <div className="flex flex-wrap gap-2">
                {INTEREST_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#1C263B] dark:bg-[#1C263B] light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-700 border border-[#2A3750] dark:border-[#2A3750] light:border-slate-200 shadow-sm hover:border-blue-500 hover:text-blue-400 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Highlight Cards (5 cols) */}
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
                className="group relative p-6 rounded-2xl bg-[#151D2E] dark:bg-[#151D2E] light:bg-slate-50 border border-[#293449] dark:border-[#293449] light:border-slate-200 shadow-md hover:-translate-y-1 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1C263B] dark:bg-[#1C263B] light:bg-white border border-[#2A3750] dark:border-[#2A3750] light:border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {getCardIcon(idx)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                        {card.title}
                      </h4>
                      <span className="text-xs font-mono font-bold text-slate-500">
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
