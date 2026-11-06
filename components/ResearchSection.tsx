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
  ArrowRight,
  Sparkles,
  BookOpen,
  Cpu,
  Layers,
} from "lucide-react";
import { SiPython, SiJupyter, SiAnaconda } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function ResearchSection() {
  const [activeCard, setActiveCard] = useState<string | null>("phishing");

  const getThreatIcon = (id: string) => {
    switch (id) {
      case "phishing":
        return <Fish className="w-5 h-5 text-blue-400" />;
      case "pretexting":
        return <AlertTriangle className="w-5 h-5 text-amber-400" />;
      case "impersonation":
        return <UserX className="w-5 h-5 text-rose-400" />;
      case "malicious-links":
        return <Link2Off className="w-5 h-5 text-purple-400" />;
      default:
        return <ShieldAlert className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section
      id="research"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#090E23] dark:bg-[#090E23] light:bg-[#FAFAFC] overflow-hidden border-t border-[#1C274C]/60"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 -left-20 w-80 h-80 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"
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
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
              Academic Investigation &amp; Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Research &amp;{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
              Investigating human-centric cybersecurity threats and user privacy protection in higher education.
            </p>
          </motion.div>
        </div>

        {/* Research Overview Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 shadow-2xl mb-12"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#1C274C] dark:border-[#1C274C] light:border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center text-violet-400 flex-shrink-0">
                <FileSearch className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-violet-400 uppercase tracking-wider">
                  Academic Research Project &bull; 2026
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 mt-0.5">
                  Impact of Social Engineering Threats on User Privacy among University Students in Sri Lanka
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
              <Lock className="w-3.5 h-3.5" />
              <span>Cybersecurity &amp; Privacy Study</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                This academic research focuses on evaluating the psychological vectors utilized in social engineering attacks and how they interact with the privacy awareness, online behavior, and protection practices of university students in Sri Lanka.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#141D3F]/70 border border-[#1C274C] text-xs">
                  <span className="font-semibold text-violet-400 block mb-1">Research Aim</span>
                  <p className="text-slate-300">Analyze vulnerability patterns to formulate targeted security education frameworks.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#141D3F]/70 border border-[#1C274C] text-xs">
                  <span className="font-semibold text-blue-400 block mb-1">Analytical Stack</span>
                  <p className="text-slate-300">Python 3, VS Code, Anaconda, and Jupyter Notebook for empirical modeling.</p>
                </div>
              </div>
            </div>

            {/* Right Tools Badges */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-[#090E23] border border-[#1C274C] space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                Academic Tools &amp; Environment
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { name: "Python", icon: <SiPython className="text-[#3776AB] w-4 h-4" /> },
                  { name: "VS Code", icon: <VscVscode className="text-[#007ACC] w-4 h-4" /> },
                  { name: "Jupyter", icon: <SiJupyter className="text-[#F37626] w-4 h-4" /> },
                  { name: "Anaconda", icon: <SiAnaconda className="text-[#44A833] w-4 h-4" /> },
                ].map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 p-2 rounded-xl bg-[#0E1530] border border-[#1C274C] text-xs text-slate-200"
                  >
                    {tool.icon}
                    <span className="font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Research Focus Areas Grid */}
          <div className="mt-8 pt-6 border-t border-[#1C274C] dark:border-[#1C274C] light:border-slate-200">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4">
              Investigated Dimensions &amp; Behavior Matrix
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {RESEARCH_FOCUS_AREAS.map((fa, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#141D3F]/60 dark:bg-[#141D3F]/60 light:bg-slate-50 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs font-bold text-white dark:text-white light:text-slate-900">
                      {fa.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                    {fa.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Conceptual Model Visual Diagram */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#0E1530]/80 border border-[#1C274C] shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold block mb-1">
              Conceptual Framework
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Independent Variables &rarr; Dependent Variable
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Methodological mapping of the four threat categories influencing user privacy outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* 4 IVs */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] font-mono text-violet-400 uppercase tracking-wider font-semibold block mb-2">
                Independent Variables (IV)
              </span>
              {RESEARCH_THREAT_CARDS.map((card) => (
                <div
                  key={card.id}
                  onClick={() => setActiveCard(card.id)}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    activeCard === card.id
                      ? "bg-violet-600/20 border-violet-500 shadow-md shadow-violet-500/20"
                      : "bg-[#090E23] border-[#1C274C] hover:border-violet-500/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-violet-400 bg-[#141D3F] px-2 py-0.5 rounded">
                      {card.number}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      {card.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>

            {/* Connector center */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center text-center py-2 lg:py-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 mt-2">
                Empirical Correlation
              </span>
            </div>

            {/* DV */}
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold block mb-2">
                Dependent Variable (DV)
              </span>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121A3B] to-[#0E1530] border border-cyan-500/30 shadow-xl text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-semibold mb-3">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Primary Research Metric</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  User Privacy
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Evaluated through data privacy concerns, credential handling habits, online disclosure tendencies, and proactive adoption of privacy-protecting security controls.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Detailed Threat Cards Grid */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
            Threat Vectors Investigated
          </h3>
          <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
            Click on any card to view detailed research context and deceptive vector analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RESEARCH_THREAT_CARDS.map((card, index) => {
            const isSelected = activeCard === card.id;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCard(card.id)}
                className={`group cursor-pointer p-6 rounded-2xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-white border transition-all duration-300 shadow-md ${
                  isSelected
                    ? "border-violet-500 shadow-violet-500/20 -translate-y-1.5 ring-2 ring-violet-500/30"
                    : "border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 hover:border-violet-500/50 hover:-translate-y-1"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#141D3F] dark:bg-[#141D3F] light:bg-slate-100 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getThreatIcon(card.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-violet-400 bg-[#141D3F] px-2.5 py-1 rounded-full border border-violet-500/20">
                    {card.number}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-violet-400 transition-colors">
                  {card.name}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {card.description}
                </p>

                {/* Additional detailed analysis reveal */}
                <div className="mt-4 pt-4 border-t border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <span className="font-semibold text-cyan-400 block mb-1">
                    Academic Scope:
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
