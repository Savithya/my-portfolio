"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA, ProjectItem } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import {
  FolderGit2,
  ExternalLink,
  Github,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  CheckCircle2,
  Eye,
  ArrowUpRight,
  Sparkles,
  Lock,
  BarChart3,
  Layers,
  Calendar,
  Cpu,
  BookOpen,
  Globe,
  Zap,
  Users,
  FileText,
  TrendingUp,
  Activity,
  Database,
  Code2,
  ChevronRight,
} from "lucide-react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiJupyter,
  SiAnaconda,
  SiCss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

/* ────────────────────────────────────────────
   Animated Counter Hook
   ──────────────────────────────────────────── */
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      {value}
      {suffix}
    </motion.span>
  );
}

/* ────────────────────────────────────────────
   Main Section
   ──────────────────────────────────────────── */
export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterCategories = [
    { id: "All", label: "All Projects", icon: Layers },
    { id: "Web Development & Cybersecurity", label: "Cybersecurity Platform", icon: ShieldCheck },
    { id: "Cybersecurity Research & Data Analysis", label: "Research & Analytics", icon: BarChart3 },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const renderTechIcon = (tech: string) => {
    const size = 14;
    switch (tech.toLowerCase()) {
      case "python":
        return <SiPython size={size} className="text-[#3776AB]" />;
      case "javascript":
        return <SiJavascript size={size} className="text-[#F7DF1E]" />;
      case "typescript":
        return <SiTypescript size={size} className="text-[#3178C6]" />;
      case "pl/pgsql":
      case "postgresql":
        return <SiPostgresql size={size} className="text-[#336791]" />;
      case "css":
        return <SiCss size={size} className="text-[#1572B6]" />;
      case "jupyter notebook":
      case "jupyter":
        return <SiJupyter size={size} className="text-[#F37626]" />;
      case "anaconda":
        return <SiAnaconda size={size} className="text-[#44A833]" />;
      case "visual studio code":
      case "vscode":
        return <VscVscode size={size} className="text-[#007ACC]" />;
      default:
        return <Cpu size={size} className="text-blue-400" />;
    }
  };

  return (
    <section
      id="projects"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#060914] dark:bg-[#060914] light:bg-[#F8FAFC] overflow-hidden"
    >
      {/* ── Ambient Background Effects ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-600/8 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-600/8 via-indigo-500/4 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/6 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/10 dark:to-purple-500/10 light:from-blue-50 light:to-purple-50 text-blue-400 dark:text-blue-400 light:text-blue-600 border border-blue-500/20 dark:border-blue-500/20 light:border-blue-200 backdrop-blur-sm">
              <div className="relative">
                <Sparkles className="w-3.5 h-3.5" />
                <div className="absolute inset-0 animate-ping">
                  <Sparkles className="w-3.5 h-3.5 opacity-40" />
                </div>
              </div>
              <span>Engineering & Innovation</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.1]">
              Featured{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  Projects
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                />
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Full-stack web architectures, interactive cybersecurity platforms, and
              empirical research projects — engineered with modern frameworks and
              deployed for real-world impact.
            </p>
          </motion.div>

          {/* ── Filter Pills ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 inline-flex items-center p-1.5 rounded-2xl bg-[#0C1322]/80 dark:bg-[#0C1322]/80 light:bg-white/80 border border-[#1E293B]/60 dark:border-[#1E293B]/60 light:border-slate-200 backdrop-blur-md shadow-lg"
          >
            {filterCategories.map((tab) => {
              const isActive = activeFilter === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-[#151F32] dark:hover:bg-[#151F32] light:hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* ── Project Cards ── */}
        <div className="space-y-10 lg:space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isCyberCampus = project.id === "cyber-campus";

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div
                    className={`relative rounded-3xl overflow-hidden border transition-all duration-500 ${
                      isCyberCampus
                        ? "border-[#1a2744] hover:border-blue-500/50 dark:border-[#1a2744] dark:hover:border-blue-500/50 light:border-slate-200 light:hover:border-blue-400"
                        : "border-[#1a2744] hover:border-purple-500/50 dark:border-[#1a2744] dark:hover:border-purple-500/50 light:border-slate-200 light:hover:border-purple-400"
                    } bg-[#0A1128]/80 dark:bg-[#0A1128]/80 light:bg-white shadow-2xl hover:shadow-blue-500/5`}
                  >
                    {/* Hover glow overlay */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                        isCyberCampus
                          ? "bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"
                          : "bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5"
                      }`}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                      {/* ── Left: Visual Showcase Panel ── */}
                      <div
                        className={`relative lg:col-span-5 min-h-[320px] sm:min-h-[380px] lg:min-h-[460px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden ${
                          isCyberCampus
                            ? "bg-gradient-to-br from-[#0A1628] via-[#0C1A35] to-[#0E1D3A]"
                            : "bg-gradient-to-br from-[#0F0A28] via-[#120D30] to-[#150F38]"
                        }`}
                      >
                        {/* Panel background pattern */}
                        <div
                          className={`absolute inset-0 opacity-[0.07] pointer-events-none ${
                            isCyberCampus
                              ? "bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:20px_20px]"
                              : "bg-[radial-gradient(#A855F7_1px,transparent_1px)] [background-size:20px_20px]"
                          }`}
                          aria-hidden="true"
                        />

                        {/* Corner accent line */}
                        <div
                          className={`absolute top-0 left-0 w-24 h-[2px] ${
                            isCyberCampus
                              ? "bg-gradient-to-r from-blue-500 to-transparent"
                              : "bg-gradient-to-r from-purple-500 to-transparent"
                          }`}
                        />
                        <div
                          className={`absolute top-0 left-0 h-24 w-[2px] ${
                            isCyberCampus
                              ? "bg-gradient-to-b from-blue-500 to-transparent"
                              : "bg-gradient-to-b from-purple-500 to-transparent"
                          }`}
                        />

                        {/* Top: Window Chrome Bar */}
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-1.5">
                              <span className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm shadow-red-500/30" />
                              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm shadow-yellow-500/30" />
                              <span className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm shadow-green-500/30" />
                            </div>

                            {/* Status indicator */}
                            <div className="flex items-center gap-2">
                              <span
                                className={`relative flex h-2.5 w-2.5 ${
                                  isCyberCampus ? "text-emerald-400" : "text-purple-400"
                                }`}
                              >
                                <span
                                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 ${
                                    isCyberCampus ? "bg-emerald-400" : "bg-purple-400"
                                  }`}
                                />
                                <span
                                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                                    isCyberCampus ? "bg-emerald-400" : "bg-purple-400"
                                  }`}
                                />
                              </span>
                              <span className="text-[11px] font-medium text-slate-400">
                                {isCyberCampus ? "Production" : "Analysis Ready"}
                              </span>
                            </div>
                          </div>

                          {/* URL Bar */}
                          <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0A101F]/80 border border-slate-700/40 mb-5">
                            <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                            <span className="text-[11px] font-mono text-cyan-300 truncate">
                              {isCyberCampus
                                ? "https://cyber-campus.dev/dashboard"
                                : "jupyter://social_engineering_analysis.ipynb"}
                            </span>
                          </div>
                        </div>

                        {/* Center: Interactive Preview */}
                        <div className="relative z-10 flex-1 flex items-center">
                          {isCyberCampus ? (
                            <div className="w-full space-y-3">
                              {/* Security Dashboard Preview */}
                              <div className="rounded-xl bg-[#0C1628]/90 border border-blue-500/20 p-4 backdrop-blur-md">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-2">
                                    <div className="p-1.5 rounded-lg bg-blue-500/15">
                                      <ShieldCheck className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-200">
                                      Threat Detection Engine
                                    </span>
                                  </div>
                                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                                    98% Secured
                                  </span>
                                </div>

                                {/* Simulated terminal output */}
                                <div className="space-y-2 font-mono text-[11px]">
                                  <div className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-0.5">❯</span>
                                    <span className="text-cyan-300">
                                      scan --vector=phishing --mode=interactive
                                    </span>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <span className="text-emerald-500 mt-0.5">✓</span>
                                    <span className="text-emerald-400">
                                      Deceptive URL flagged → remediation delivered
                                    </span>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <span className="text-emerald-500 mt-0.5">✓</span>
                                    <span className="text-slate-400">
                                      Auth matrix verified • Session tokens rotated
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Metric pills row */}
                              <div className="grid grid-cols-3 gap-2">
                                {[
                                  { label: "Modules", value: "6+", color: "blue" },
                                  { label: "Scenarios", value: "15+", color: "cyan" },
                                  { label: "Uptime", value: "99.9%", color: "emerald" },
                                ].map((m) => (
                                  <div
                                    key={m.label}
                                    className="rounded-lg bg-[#0C1628]/70 border border-slate-700/30 p-2.5 text-center"
                                  >
                                    <div
                                      className={`text-sm font-bold ${
                                        m.color === "blue"
                                          ? "text-blue-400"
                                          : m.color === "cyan"
                                          ? "text-cyan-400"
                                          : "text-emerald-400"
                                      }`}
                                    >
                                      {m.value}
                                    </div>
                                    <div className="text-[9px] text-slate-500 mt-0.5 uppercase tracking-wider font-medium">
                                      {m.label}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="w-full space-y-3">
                              {/* Research Analytics Preview */}
                              <div className="rounded-xl bg-[#0C0A28]/90 border border-purple-500/20 p-4 backdrop-blur-md">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-2">
                                    <div className="p-1.5 rounded-lg bg-purple-500/15">
                                      <BarChart3 className="w-4 h-4 text-purple-400" />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-200">
                                      Threat Exposure Analysis
                                    </span>
                                  </div>
                                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/25">
                                    N = 450+
                                  </span>
                                </div>

                                {/* Data bars */}
                                <div className="space-y-3">
                                  {[
                                    { label: "Phishing Exposure", value: 84, color: "from-blue-500 to-cyan-400" },
                                    { label: "Pretexting Risk", value: 68, color: "from-indigo-500 to-purple-400" },
                                    { label: "Privacy Gap", value: 72, color: "from-purple-500 to-pink-400" },
                                  ].map((bar) => (
                                    <div key={bar.label}>
                                      <div className="flex justify-between text-[11px] mb-1">
                                        <span className="text-slate-300">{bar.label}</span>
                                        <span className="font-mono text-slate-400">{bar.value}%</span>
                                      </div>
                                      <div className="w-full h-1.5 bg-slate-800/60 rounded-full overflow-hidden">
                                        <motion.div
                                          className={`h-full bg-gradient-to-r ${bar.color} rounded-full`}
                                          initial={{ width: "0%" }}
                                          whileInView={{ width: `${bar.value}%` }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Research metric pills */}
                              <div className="grid grid-cols-3 gap-2">
                                {[
                                  { label: "Vectors", value: "4", color: "purple" },
                                  { label: "Insights", value: "20+", color: "indigo" },
                                  { label: "Confidence", value: "95%", color: "pink" },
                                ].map((m) => (
                                  <div
                                    key={m.label}
                                    className="rounded-lg bg-[#0C0A28]/70 border border-slate-700/30 p-2.5 text-center"
                                  >
                                    <div
                                      className={`text-sm font-bold ${
                                        m.color === "purple"
                                          ? "text-purple-400"
                                          : m.color === "indigo"
                                          ? "text-indigo-400"
                                          : "text-pink-400"
                                      }`}
                                    >
                                      {m.value}
                                    </div>
                                    <div className="text-[9px] text-slate-500 mt-0.5 uppercase tracking-wider font-medium">
                                      {m.label}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Bottom: Tech stack footer */}
                        <div className="relative z-10 flex items-center justify-between pt-4 border-t border-slate-800/40">
                          <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                            <Terminal className="w-3 h-3 text-slate-500" />
                            {isCyberCampus ? "React / Next.js" : "Python 3.11 / Jupyter"}
                          </span>
                          <span
                            className={`text-[11px] font-semibold ${
                              isCyberCampus ? "text-blue-400/70" : "text-purple-400/70"
                            }`}
                          >
                            {isCyberCampus ? "v2.4 Production" : "Peer Review Stage"}
                          </span>
                        </div>
                      </div>

                      {/* ── Right: Content Panel ── */}
                      <div className="lg:col-span-7 p-7 sm:p-9 lg:p-10 flex flex-col justify-between">
                        {/* Top Meta */}
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide ${
                                isCyberCampus
                                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/25"
                                  : "bg-purple-500/10 text-purple-400 border border-purple-500/25"
                              }`}
                            >
                              {isCyberCampus ? (
                                <ShieldAlert className="w-3.5 h-3.5" />
                              ) : (
                                <BookOpen className="w-3.5 h-3.5" />
                              )}
                              <span>{project.category}</span>
                            </span>

                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono text-slate-500 dark:text-slate-500 light:text-slate-500 bg-slate-800/30 dark:bg-slate-800/30 light:bg-slate-100 border border-slate-700/30 dark:border-slate-700/30 light:border-slate-200">
                              <Calendar className="w-3 h-3" />
                              {project.year}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 leading-tight">
                            {isCyberCampus ? (
                              <>
                                Cyber Campus
                                <span className="block text-lg sm:text-xl font-semibold mt-1 text-slate-400 dark:text-slate-400 light:text-slate-500">
                                  Cybersecurity Awareness Platform
                                </span>
                              </>
                            ) : (
                              <>
                                Social Engineering Threats
                                <span className="block text-lg sm:text-xl font-semibold mt-1 text-slate-400 dark:text-slate-400 light:text-slate-500">
                                  Impact on User Privacy — Sri Lankan University Study
                                </span>
                              </>
                            )}
                          </h3>

                          {/* Description */}
                          <p className="mt-4 text-sm sm:text-[15px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Key Features */}
                          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {project.features.slice(0, 4).map((feat, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                                className="flex items-center gap-2.5 text-[13px] text-slate-300 dark:text-slate-300 light:text-slate-600"
                              >
                                <div
                                  className={`flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center ${
                                    isCyberCampus
                                      ? "bg-blue-500/10 text-blue-400"
                                      : "bg-purple-500/10 text-purple-400"
                                  }`}
                                >
                                  <CheckCircle2 className="w-3 h-3" />
                                </div>
                                <span>{feat}</span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Tech Stack */}
                          <div className="mt-7">
                            <div className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 mb-3">
                              Tech Stack
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#111827]/80 dark:bg-[#111827]/80 light:bg-slate-50 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/30 dark:border-slate-700/30 light:border-slate-200 hover:border-slate-600 transition-colors"
                                >
                                  {renderTechIcon(tech)}
                                  <span>{tech}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom Actions */}
                        <div className="mt-8 pt-6 border-t border-slate-800/40 dark:border-slate-800/40 light:border-slate-200 flex flex-wrap items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            className={`group/btn inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 ${
                              isCyberCampus
                                ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-500/20 hover:shadow-blue-500/40"
                                : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-purple-500/20 hover:shadow-purple-500/40"
                            }`}
                          >
                            <Eye className="w-4 h-4" />
                            <span>Explore Details</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </button>

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/gh inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#111827]/60 dark:bg-[#111827]/60 light:bg-slate-50 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/40 dark:border-slate-700/40 light:border-slate-200 hover:border-slate-500 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-all duration-200"
                            >
                              <Github className="w-4 h-4" />
                              <span>Source Code</span>
                              <ExternalLink className="w-3 h-3 opacity-0 -ml-1 group-hover/gh:opacity-100 group-hover/gh:ml-0 transition-all" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
