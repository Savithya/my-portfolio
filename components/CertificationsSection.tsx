"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CERTIFICATIONS_DATA,
  LANGUAGES_DATA,
} from "@/data/portfolioData";
import { Award, Languages, CheckCircle2, Globe } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#060914] dark:bg-[#060914] light:bg-[#F8FAFC] border-t border-[#1E293B]/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Credentials & Communication
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Certifications &{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Languages
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
              Verified technical credentials and language proficiencies.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-blue-400" />
              <span>Academic Certifications</span>
            </h3>

            {CERTIFICATIONS_DATA.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 rounded-2xl bg-[#151D2E] dark:bg-[#151D2E] light:bg-white border border-[#293449] dark:border-[#293449] light:border-slate-200 shadow-sm flex items-start gap-4 hover:border-blue-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                      {cert.title}
                    </h4>
                    <span className="text-xs font-mono text-blue-400 font-semibold">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-cyan-400 mt-0.5">
                    {cert.institution}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
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
              <Languages className="w-4 h-4 text-purple-400" />
              <span>Language Proficiency</span>
            </h3>

            {LANGUAGES_DATA.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 rounded-2xl bg-[#151D2E] dark:bg-[#151D2E] light:bg-white border border-[#293449] dark:border-[#293449] light:border-slate-200 shadow-sm flex items-center justify-between hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                      {lang.name}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                      {lang.level}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
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
