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

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterCategories = [
    { id: "All", label: "All Projects", count: PROJECTS_DATA.length },
    { id: "Web & Cybersecurity", label: "Cybersecurity Platform", count: 1 },
    { id: "Cybersecurity Research & Data Analysis", label: "Research & Analytics", count: 1 },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const renderTechIcon = (tech: string) => {
    const size = 13;
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
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#080D1A] dark:bg-[#080D1A] light:bg-[#F8FAFC] overflow-hidden border-t border-[#1E293B]/60 dark:border-[#1E293B]/60 light:border-slate-200"
    >
      {/* Background Ambient Glows */}
      <div
        className="absolute top-1/4 -right-20 w-[450px] h-[450px] bg-blue-600/10 dark:bg-blue-600/10 light:bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -left-20 w-[450px] h-[450px] bg-purple-600/10 dark:bg-purple-600/10 light:bg-purple-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-blue-500/10 dark:bg-blue-500/10 light:bg-blue-50 text-blue-400 dark:text-blue-400 light:text-blue-600 border border-blue-500/25 dark:border-blue-500/25 light:border-blue-200 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering & Innovation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Production web architectures, interactive cybersecurity platforms, and empirical research projects engineered with modern frameworks.
            </p>
          </motion.div>

          {/* Filter Categories Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {filterCategories.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                      : "bg-[#131C2E] dark:bg-[#131C2E] light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-600 border border-[#243048] dark:border-[#243048] light:border-slate-200 hover:border-blue-500/40 hover:text-white dark:hover:text-white light:hover:text-slate-900"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-600"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* 2-Column Responsive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isCyberCampus = project.id === "cyber-campus";

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col rounded-3xl bg-[#111A2E] dark:bg-[#111A2E] light:bg-white border border-[#23314A] dark:border-[#23314A] light:border-slate-200 overflow-hidden shadow-xl hover:border-blue-500/60 dark:hover:border-blue-500/60 light:hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  {/* Visual Header / Engineering Mockup Showcase */}
                  <div className="relative h-64 sm:h-72 w-full bg-[#0A101F] dark:bg-[#0A101F] light:bg-slate-900 flex flex-col justify-between p-4 sm:p-5 overflow-hidden border-b border-[#23314A] dark:border-[#23314A] light:border-slate-200">
                    {/* Subtle Blueprint Dot Grid background */}
                    <div
                      className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:18px_18px] opacity-15 pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Window Controls & Live URL Top Bar */}
                    <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80 light:border-slate-800">
                      {/* Window Dots */}
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/90" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/90" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/90" />
                      </div>

                      {/* Mockup URL Badge */}
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#152035]/90 border border-slate-700/60 text-[11px] font-mono text-slate-300">
                        <Lock className="w-3 h-3 text-emerald-400" />
                        <span className="text-cyan-300 truncate max-w-[180px] sm:max-w-none">
                          {isCyberCampus
                            ? "https://cyber-campus.dev/threat-sim"
                            : "jupyter://privacy_threat_analysis.ipynb"}
                        </span>
                      </div>

                      {/* Live System Status Pill */}
                      <div className="flex items-center gap-1.5 text-[11px] font-medium">
                        <span
                          className={`w-2 h-2 rounded-full animate-pulse ${
                            isCyberCampus ? "bg-emerald-400" : "bg-purple-400"
                          }`}
                        />
                        <span className="text-slate-400 hidden sm:inline">
                          {isCyberCampus ? "Online" : "Kernel Ready"}
                        </span>
                      </div>
                    </div>

                    {/* Center Rich Showcase Graphic */}
                    <div className="relative z-10 my-auto py-2">
                      {isCyberCampus ? (
                        /* Cyber Campus Interactive Simulator Preview */
                        <div className="rounded-2xl bg-[#142036]/90 border border-blue-500/30 p-4 shadow-xl backdrop-blur-md">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="w-4 h-4 text-emerald-400" />
                              <span className="text-xs font-semibold text-slate-200">
                                Defense Posture
                              </span>
                            </div>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                              98% Secured
                            </span>
                          </div>

                          <div className="space-y-1.5 font-mono text-[11px] sm:text-xs">
                            <div className="flex items-center gap-2 text-cyan-300">
                              <span className="text-blue-400">&gt;</span>
                              <span>Simulating Phishing & Social Engineering Vector</span>
                            </div>
                            <div className="flex items-center gap-2 text-emerald-400">
                              <span className="text-emerald-500">✓</span>
                              <span>Deceptive URL Flagged • Remediation Delivered</span>
                            </div>
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-slate-700/60 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                            <span>Interactive Security Lab</span>
                            <span className="font-semibold text-blue-400">PL/pgSQL Auth Matrix</span>
                          </div>
                        </div>
                      ) : (
                        /* Academic Research Empirical Analytics Preview */
                        <div className="rounded-2xl bg-[#142036]/90 border border-purple-500/30 p-4 shadow-xl backdrop-blur-md">
                          <div className="flex items-center justify-between mb-2.5">
                            <div className="flex items-center gap-2">
                              <BarChart3 className="w-4 h-4 text-purple-400" />
                              <span className="text-xs font-semibold text-slate-200">
                                Empirical Threat Risk Exposure
                              </span>
                            </div>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">
                              N = 450+
                            </span>
                          </div>

                          {/* Data Distribution Bars */}
                          <div className="space-y-2 text-[10px] sm:text-[11px]">
                            <div>
                              <div className="flex justify-between text-slate-300 mb-1">
                                <span>Phishing Exposure</span>
                                <span className="font-mono text-cyan-400">84%</span>
                              </div>
                              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-[84%]" />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-slate-300 mb-1">
                                <span>Pretexting Vulnerability</span>
                                <span className="font-mono text-purple-400">68%</span>
                              </div>
                              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full w-[68%]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Status Ticker */}
                    <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        {isCyberCampus ? "React / Next.js • Tailwind" : "Python 3.11 • Jupyter Kernel"}
                      </span>
                      <span className="text-blue-400 font-semibold">
                        {isCyberCampus ? "v2.4 Production" : "Peer Review Research"}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta Tags: Category & Year */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                            isCyberCampus
                              ? "bg-blue-500/15 text-blue-400 border border-blue-500/30"
                              : "bg-purple-500/15 text-purple-400 border border-purple-500/30"
                          }`}
                        >
                          {isCyberCampus ? (
                            <ShieldAlert className="w-3.5 h-3.5" />
                          ) : (
                            <BookOpen className="w-3.5 h-3.5" />
                          )}
                          <span>{project.category}</span>
                        </span>

                        <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{project.year}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 dark:group-hover:text-blue-400 light:group-hover:text-blue-600 transition-colors duration-200">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Highlights / Features List */}
                      <div className="mt-5 space-y-2">
                        {project.features.slice(0, 3).map((feat, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600"
                          >
                            <CheckCircle2
                              className={`w-4 h-4 flex-shrink-0 ${
                                isCyberCampus ? "text-cyan-400" : "text-purple-400"
                              }`}
                            />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Chips with Brand Icons */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium bg-[#172238] dark:bg-[#172238] light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-[#2B3B59] dark:border-[#2B3B59] light:border-slate-200 shadow-sm"
                          >
                            {renderTechIcon(tech)}
                            <span>{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions Area */}
                    <div className="mt-8 pt-5 border-t border-[#23314A] dark:border-[#23314A] light:border-slate-200 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Explore Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#172238] dark:bg-[#172238] light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-[#2B3B59] dark:border-[#2B3B59] light:border-slate-300 hover:border-blue-500 transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                          <span>Repository</span>
                        </a>
                      )}
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
