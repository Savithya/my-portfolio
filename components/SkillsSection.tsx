"use client";

import React, { useState, useMemo } from "react";
import { SKILLS_DATA, Skill } from "@/data/portfolioData";
import SkillCard from "@/components/SkillCard";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Code2,
  Globe,
  Database,
  Brain,
  Wrench,
  Palette,
  Cpu,
  Search,
  X,
  Server,
  BarChart3,
} from "lucide-react";

interface CategoryMeta {
  label: string;
  matchKeys: string[];
  icon: React.ReactNode;
}

const CATEGORIES: CategoryMeta[] = [
  {
    label: "All Skills",
    matchKeys: ["ALL"],
    icon: <Layers className="w-3.5 h-3.5" />,
  },
  {
    label: "Programming Languages",
    matchKeys: ["Languages"],
    icon: <Code2 className="w-3.5 h-3.5 text-violet-400" />,
  },
  {
    label: "Frontend & Web Development",
    matchKeys: ["Web Development"],
    icon: <Globe className="w-3.5 h-3.5 text-blue-400" />,
  },
  {
    label: "Backend Development",
    matchKeys: ["Backend Development"],
    icon: <Server className="w-3.5 h-3.5 text-emerald-400" />,
  },
  {
    label: "Databases",
    matchKeys: ["Databases"],
    icon: <Database className="w-3.5 h-3.5 text-amber-400" />,
  },
  {
    label: "AI & Machine Learning",
    matchKeys: ["AI & Data"],
    icon: <Brain className="w-3.5 h-3.5 text-pink-400" />,
  },
  {
    label: "DevOps & Development Tools",
    matchKeys: ["Tools & DevOps", "Tools"],
    icon: <Wrench className="w-3.5 h-3.5 text-cyan-400" />,
  },
  {
    label: "UI/UX & Design",
    matchKeys: ["UI/UX & Design"],
    icon: <Palette className="w-3.5 h-3.5 text-rose-400" />,
  },
  {
    label: "Core Concepts",
    matchKeys: ["Core Concepts"],
    icon: <Cpu className="w-3.5 h-3.5 text-emerald-400" />,
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All Skills");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      // Category match
      let matchesCategory = true;
      if (activeCategory !== "All Skills") {
        const catConfig = CATEGORIES.find((c) => c.label === activeCategory);
        if (catConfig) {
          matchesCategory = catConfig.matchKeys.some(
            (k) =>
              skill.category === k ||
              (skill.categories && skill.categories.includes(k))
          );
        }
      }

      // Search match
      const query = searchQuery.trim().toLowerCase();
      let matchesSearch = true;
      if (query) {
        matchesSearch =
          skill.name.toLowerCase().includes(query) ||
          skill.categoryLabel.toLowerCase().includes(query) ||
          skill.category.toLowerCase().includes(query);
      }

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050814] dark:bg-[#050814] light:bg-[#F8FAFC] overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/10 dark:bg-violet-600/10 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
              Interactive Skills Explorer
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Technical{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
              Languages, engineering frameworks, database systems, and development tools I actively work with.
            </p>
          </motion.div>
        </div>

        {/* Search Bar & Skill Count Bar */}
        <div className="max-w-xl mx-auto mb-8 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-violet-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills by name (e.g. Python, Docker, SQL)..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex-shrink-0 inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-600">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span>
              {filteredSkills.length} of {SKILLS_DATA.length} Skills
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => setActiveCategory(cat.label)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-md shadow-violet-500/25 scale-105"
                    : "bg-[#0E1530] dark:bg-[#0E1530] light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 hover:border-violet-500/50 hover:text-white dark:hover:text-white light:hover:text-violet-600"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          {filteredSkills.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center text-slate-400"
            >
              <Cpu className="w-10 h-10 mx-auto mb-3 text-slate-600" />
              <p className="text-base font-semibold">No skills matched your search.</p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for another keyword or switch categories.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4"
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.02 }}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom descriptive note */}
        <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-500 light:text-slate-400">
          Proficiency acquired through coursework, independent engineering projects, and ongoing technical development.
        </div>
      </div>
    </section>
  );
}
