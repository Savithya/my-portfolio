"use client";

import React from "react";
import { motion } from "framer-motion";
import { SOFT_SKILLS_DATA, SoftSkill } from "@/data/portfolioData";
import { Users, Clock, Compass, MessageSquare, Sparkles } from "lucide-react";

export default function SoftSkillsSection() {
  const getSoftSkillIcon = (icon: string) => {
    switch (icon) {
      case "users":
        return <Users className="w-5 h-5 text-blue-400" />;
      case "clock":
        return <Clock className="w-5 h-5 text-purple-400" />;
      case "compass":
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case "message-square":
        return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-pink-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0B1120] dark:bg-[#0B1120] light:bg-slate-50 border-t border-[#1E293B]/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Interpersonal & Collaborative
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
              The personal skills that support my technical development.
            </p>
          </motion.div>
        </div>

        {/* 5-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SOFT_SKILLS_DATA.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-5 rounded-2xl bg-[#151D2E] dark:bg-[#151D2E] light:bg-white border border-[#293449] dark:border-[#293449] light:border-slate-200 shadow-sm hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1C263B] dark:bg-[#1C263B] light:bg-slate-100 border border-[#2B3954] dark:border-[#2B3954] light:border-slate-200 flex items-center justify-center mb-4">
                {getSoftSkillIcon(skill.icon)}
              </div>
              <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 mb-2">
                {skill.title}
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
