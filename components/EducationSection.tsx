"use client";

import React from "react";
import { motion } from "framer-motion";
import { EDUCATION_DATA } from "@/data/portfolioData";
import { GraduationCap, Calendar, Building2, CheckCircle, Clock } from "lucide-react";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#060914] dark:bg-[#060914] light:bg-[#F8FAFC] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
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
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Academic Qualifications
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Education &{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Academic Journey
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
              My academic background and continuous learning journey.
            </p>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#293449] dark:border-[#293449] light:border-slate-300 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {EDUCATION_DATA.map((item, index) => {
            const isCurrent = item.status.includes("Pursuing");
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 sm:pl-10"
              >
                {/* Year tag for larger screens placed on the left */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-24">
                  <span className="text-xs font-semibold font-mono text-blue-400">
                    {item.period}
                  </span>
                </div>

                {/* Timeline Dot Indicator */}
                <div
                  className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-4 border-[#060914] dark:border-[#060914] light:border-[#F8FAFC] flex items-center justify-center ${
                    isCurrent
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/50"
                      : "bg-[#1E293B] text-slate-300"
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>

                {/* Content Card */}
                <div className="p-6 rounded-2xl bg-[#151D2E] dark:bg-[#151D2E] light:bg-white border border-[#293449] dark:border-[#293449] light:border-slate-200 shadow-md hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        isCurrent
                          ? "bg-blue-500/15 text-blue-400 border border-blue-500/30"
                          : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      }`}
                    >
                      {isCurrent ? (
                        <Clock className="w-3 h-3" />
                      ) : (
                        <CheckCircle className="w-3 h-3" />
                      )}
                      <span>{item.status}</span>
                    </span>

                    {/* Mobile year badge */}
                    <div className="md:hidden flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                    {item.degree}
                  </h3>

                  {item.institution && (
                    <div className="mt-1 flex items-center gap-2 text-sm text-cyan-400 font-medium">
                      <Building2 className="w-4 h-4 flex-shrink-0" />
                      <span>{item.institution}</span>
                    </div>
                  )}

                  <p className="mt-3 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
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
