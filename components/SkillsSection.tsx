"use client";

import React from "react";
import { SKILLS_DATA } from "@/data/portfolioData";
import SkillCard from "@/components/SkillCard";
import { motion } from "framer-motion";

export default function SkillsSection() {
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
        </div>

        {/* 4-column responsive grid showing all skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SKILLS_DATA.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>

        {/* Subtle bottom note confirming technologies */}
        <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-500 light:text-slate-400">
          Core technical competencies and creative toolsets applied in software engineering, modern web applications, and digital workflows.
        </div>
      </div>
    </section>
  );
}
