"use client";

import React from "react";
import { motion } from "framer-motion";
import { EDUCATION_DATA } from "@/data/portfolioData";
import {
  GraduationCap,
  Calendar,
  Building2,
  CheckCircle,
  Clock,
  Sparkles,
  BookOpen,
} from "lucide-react";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#090E23] dark:bg-[#090E23] light:bg-[#FAFAFC] overflow-hidden border-t border-[#1C274C]/60"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
              Academic Qualifications
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Education &amp;{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                Timeline
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
              Formal academic credentials and specialized technical diplomas.
            </p>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#1C274C] dark:border-[#1C274C] light:border-slate-300 ml-4 sm:ml-8 md:ml-32 space-y-10 sm:space-y-12">
          {EDUCATION_DATA.map((item, index) => {
            const isCurrent = item.status.includes("Pursuing");
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-7 sm:pl-10"
              >
                {/* Year tag for larger screens placed on the left */}
                <div className="hidden md:block absolute -left-36 top-1.5 text-right w-24">
                  <span className="text-xs font-semibold font-mono text-violet-400">
                    {item.period}
                  </span>
                </div>

                {/* Timeline Dot Indicator */}
                <div
                  className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-4 border-[#090E23] dark:border-[#090E23] light:border-[#FAFAFC] flex items-center justify-center transition-all ${
                    isCurrent
                      ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/40 ring-2 ring-violet-500/30"
                      : "bg-[#141D3F] text-slate-300 border-[#1C274C]"
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>

                {/* Content Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 shadow-xl hover:border-violet-500/50 hover:shadow-violet-500/5 transition-all duration-300 group">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        isCurrent
                          ? "bg-violet-500/15 text-violet-300 border border-violet-500/30 shadow-sm"
                          : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      }`}
                    >
                      {isCurrent ? (
                        <Clock className="w-3 h-3 text-violet-400 animate-pulse" />
                      ) : (
                        <CheckCircle className="w-3 h-3" />
                      )}
                      <span>{item.status}</span>
                    </span>

                    {/* Mobile year badge */}
                    <div className="md:hidden flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-violet-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-violet-400 transition-colors">
                    {item.degree}
                  </h3>

                  {item.institution && (
                    <div className="mt-1.5 flex items-center gap-2 text-sm text-blue-400 font-medium">
                      <Building2 className="w-4 h-4 flex-shrink-0" />
                      <span>{item.institution}</span>
                    </div>
                  )}

                  <p className="mt-3.5 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
