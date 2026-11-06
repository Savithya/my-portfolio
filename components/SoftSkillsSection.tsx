"use client";

import React from "react";
import { motion } from "framer-motion";
import { SOFT_SKILLS_DATA } from "@/data/portfolioData";
import {
  Users,
  Clock,
  Compass,
  MessageSquare,
  Sparkles,
  Lightbulb,
} from "lucide-react";

export default function SoftSkillsSection() {
  const getSoftSkillIcon = (icon: string) => {
    switch (icon) {
      case "users":
        return <Users className="w-5 h-5 text-violet-400" />;
      case "clock":
        return <Clock className="w-5 h-5 text-blue-400" />;
      case "compass":
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case "message-square":
        return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-pink-400" />;
      case "lightbulb":
        return <Lightbulb className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050814] dark:bg-[#050814] light:bg-[#FAFAFC] border-t border-[#1C274C]/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
              Interpersonal &amp; Professional Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Professional{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
              Core communication, analytical, and leadership attributes supporting technical execution.
            </p>
          </motion.div>
        </div>

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOFT_SKILLS_DATA.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="group p-6 rounded-2xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 shadow-md hover:border-violet-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-11 h-11 rounded-xl bg-[#141D3F] dark:bg-[#141D3F] light:bg-slate-100 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {getSoftSkillIcon(skill.icon)}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 mb-2 group-hover:text-violet-400 transition-colors">
                {skill.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
