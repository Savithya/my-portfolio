"use client";

import React, { useState } from "react";
import { SKILLS_DATA, Skill } from "@/data/portfolioData";
import SkillCard from "@/components/SkillCard";
import { motion, AnimatePresence } from "framer-motion";

type CategoryTab =
  | "All Skills"
  | "Languages"
  | "Web Development"
  | "Tools & DevOps"
  | "UI/UX & Design";

const CATEGORIES: CategoryTab[] = [
  "All Skills",
  "Languages",
  "Web Development",
  "Tools & DevOps",
  "UI/UX & Design",
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<CategoryTab>("All Skills");

  const getCategoryCount = (cat: CategoryTab) => {
    if (cat === "All Skills") return SKILLS_DATA.length;
    return SKILLS_DATA.filter(
      (s) => s.category === cat || (s.categories && s.categories.includes(cat))
    ).length;
  };

  const filteredSkills =
    activeTab === "All Skills"
      ? SKILLS_DATA
      : SKILLS_DATA.filter(
          (s) =>
            s.category === activeTab ||
            (s.categories && s.categories.includes(activeTab))
        );

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#060914] dark:bg-[#060914] light:bg-[#F8FAFC] overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Technical Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              My{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
              Technologies and tools I work with
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center flex-wrap gap-2 mt-8"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat;
              const count = getCategoryCount(cat);
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20 scale-105"
                      : "bg-[#151D2E]/70 dark:bg-[#151D2E]/70 light:bg-white text-slate-400 dark:text-slate-400 light:text-slate-600 border-[#293449] dark:border-[#293449] light:border-slate-300 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-slate-600"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[11px] font-semibold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#1E293B] text-slate-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* 4-column responsive grid matching the visual reference */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Subtle bottom note confirming technologies */}
        <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-500 light:text-slate-400">
          Core technical competencies and creative toolsets applied in software engineering, modern web applications, and digital workflows.
        </div>
      </div>
    </section>
  );
}
