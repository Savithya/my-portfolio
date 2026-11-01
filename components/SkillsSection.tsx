"use client";

import React, { useState, useMemo } from "react";
import { SKILLS_DATA, ADDITIONAL_SKILLS_DATA, Skill } from "@/data/portfolioData";
import SkillCard from "@/components/SkillCard";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Code2, Globe, Database, Brain, Wrench, Palette, Cpu } from "lucide-react";

const CATEGORY_CONFIG: Record<string, { label: string; icon: React.ReactNode; color: string }> = {
  All: { label: "All Skills", icon: <Layers className="w-3.5 h-3.5" />, color: "blue" },
  Languages: { label: "Languages", icon: <Code2 className="w-3.5 h-3.5" />, color: "purple" },
  "Web Development": { label: "Web Dev", icon: <Globe className="w-3.5 h-3.5" />, color: "cyan" },
  Databases: { label: "Databases", icon: <Database className="w-3.5 h-3.5" />, color: "orange" },
  "AI & Data": { label: "AI & Data", icon: <Brain className="w-3.5 h-3.5" />, color: "pink" },
  "Tools & DevOps": { label: "DevOps", icon: <Wrench className="w-3.5 h-3.5" />, color: "green" },
  "UI/UX & Design": { label: "Design", icon: <Palette className="w-3.5 h-3.5" />, color: "red" },
  Tools: { label: "Tools", icon: <Wrench className="w-3.5 h-3.5" />, color: "teal" },
  "Core Concepts": { label: "Core", icon: <Cpu className="w-3.5 h-3.5" />, color: "emerald" },
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Merge all skills and deduplicate by id
  const allSkills = useMemo(() => {
    const merged = [...SKILLS_DATA, ...ADDITIONAL_SKILLS_DATA];
    const seen = new Set<string>();
    return merged.filter((skill) => {
      if (seen.has(skill.id)) return false;
      seen.add(skill.id);
      return true;
    });
  }, []);

  // Extract available categories from skills
  const categories = useMemo(() => {
    const cats = new Set<string>();
    allSkills.forEach((skill) => cats.add(skill.category));
    return ["All", ...Array.from(cats)];
  }, [allSkills]);

  // Filter skills by category
  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return allSkills;
    return allSkills.filter((skill) => skill.category === activeCategory);
  }, [allSkills, activeCategory]);

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
        <div className="text-center max-w-3xl mx-auto mb-6">
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
              Technologies, tools, and core competencies I work with
            </p>
          </motion.div>
        </div>

        {/* Skill Count Badge */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151D2E]/80 dark:bg-[#151D2E]/80 light:bg-white border border-[#293449] dark:border-[#293449] light:border-slate-200 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-600">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            {filteredSkills.length} {activeCategory === "All" ? "Total" : activeCategory} {filteredSkills.length === 1 ? "Skill" : "Skills"}
          </span>
        </div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => {
            const config = CATEGORY_CONFIG[cat] || { label: cat, icon: <Layers className="w-3.5 h-3.5" />, color: "blue" };
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                    : "bg-[#151D2E] dark:bg-[#151D2E] light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 border border-[#293449] dark:border-[#293449] light:border-slate-200 hover:border-blue-500/50 hover:text-white dark:hover:text-white light:hover:text-blue-600"
                }`}
              >
                {config.icon}
                <span>{config.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-500 light:text-slate-400">
          Core technical competencies and creative toolsets applied in software engineering, modern web applications, and digital workflows.
        </div>
      </div>
    </section>
  );
}
