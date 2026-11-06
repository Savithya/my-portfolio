"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CERTIFICATIONS_DATA,
  LANGUAGES_DATA,
} from "@/data/portfolioData";
import { Award, Languages, CheckCircle2, Globe, Building2, Calendar } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#090E23] dark:bg-[#090E23] light:bg-[#FAFAFC] border-t border-[#1C274C]/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
              Verified Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Certifications &amp;{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                Languages
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
              Academic diplomas, specialized training, and linguistic proficiencies.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-violet-400" />
              <span>Academic Certifications</span>
            </h3>

            {CERTIFICATIONS_DATA.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-5 sm:p-6 rounded-2xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 shadow-md flex items-start gap-4 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/25 text-violet-400 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-violet-400 transition-colors">
                      {cert.title}
                    </h4>
                    <span className="text-xs font-mono text-violet-400 font-semibold flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-400 mt-1 flex items-center gap-1.5 font-medium">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{cert.institution}</span>
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{cert.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-4">
              <Languages className="w-4 h-4 text-blue-400" />
              <span>Language Proficiency</span>
            </h3>

            {LANGUAGES_DATA.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-5 sm:p-6 rounded-2xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 shadow-md flex items-center justify-between hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                      {lang.name}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
                      {lang.level}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  {lang.proficiency}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
