"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RESEARCH_THREAT_CARDS,
  RESEARCH_FOCUS_AREAS,
  ThreatCard,
} from "@/data/portfolioData";
import {
  ShieldAlert,
  Fish,
  AlertTriangle,
  UserX,
  Link2Off,
  CheckCircle,
  FileSearch,
  Lock,
} from "lucide-react";

export default function ResearchSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const getThreatIcon = (id: string) => {
    switch (id) {
      case "phishing":
        return <Fish className="w-6 h-6 text-blue-400" />;
      case "pretexting":
        return <AlertTriangle className="w-6 h-6 text-yellow-400" />;
      case "impersonation":
        return <UserX className="w-6 h-6 text-red-400" />;
      case "malicious-links":
        return <Link2Off className="w-6 h-6 text-purple-400" />;
      default:
        return <ShieldAlert className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section
      id="research"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#060914] dark:bg-[#060914] light:bg-[#F8FAFC] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              Academic Investigation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Research &{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
              Exploring cybersecurity threats and their impact on digital privacy.
            </p>
          </motion.div>
        </div>

        {/* Research Overview Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-2xl bg-[#151D2E] dark:bg-[#151D2E] light:bg-white border border-[#293449] dark:border-[#293449] light:border-slate-200 shadow-xl mb-12"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#293449] dark:border-[#293449] light:border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                <FileSearch className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider">
                  Academic Research Paper (2026)
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900">
                  Impact of Social Engineering Threats on User Privacy among University Students in Sri Lanka
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
              <Lock className="w-3.5 h-3.5" />
              <span>Cybersecurity & Privacy Study</span>
            </div>
          </div>

          <p className="mt-6 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            This study focuses on understanding how social engineering threats affect the privacy of university students in Sri Lanka, with attention to threat awareness, online behaviour, and privacy risks.
          </p>

          {/* Research Focus Areas Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {RESEARCH_FOCUS_AREAS.map((fa, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#1C263B]/60 dark:bg-[#1C263B]/60 light:bg-slate-50 border border-[#2B3954] dark:border-[#2B3954] light:border-slate-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-xs font-bold text-white dark:text-white light:text-slate-900">
                    {fa.title}
                  </span>
                </div>
                <p className="text-[12px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {fa.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Threat Categories Subheading */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
            Four Key Threat Vectors Investigated
          </h3>
          <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
            Click any threat card to review specific academic focus and empirical analysis details.
          </p>
        </div>

        {/* 4 Threat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESEARCH_THREAT_CARDS.map((card, index) => {
            const isSelected = activeCard === card.id;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCard(isSelected ? null : card.id)}
                className={`group cursor-pointer p-6 rounded-2xl bg-[#151D2E] dark:bg-[#151D2E] light:bg-white border transition-all duration-300 shadow-md ${
                  isSelected
                    ? "border-purple-500 shadow-purple-500/20 -translate-y-1.5 ring-2 ring-purple-500/30"
                    : "border-[#293449] dark:border-[#293449] light:border-slate-200 hover:border-blue-500/50 hover:-translate-y-1"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1C263B] dark:bg-[#1C263B] light:bg-slate-100 border border-[#2B3954] dark:border-[#2B3954] light:border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getThreatIcon(card.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-400">
                    {card.number}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                  {card.name}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {card.description}
                </p>

                {/* Additional detailed analysis reveal */}
                <div
                  className={`mt-4 pt-4 border-t border-[#293449] dark:border-[#293449] light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 transition-all ${
                    isSelected ? "block" : "hidden sm:block opacity-75"
                  }`}
                >
                  <span className="font-semibold text-cyan-400 block mb-1">
                    Research Focus:
                  </span>
                  {card.details}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
