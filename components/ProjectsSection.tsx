"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA, ProjectItem } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import {
  FolderGit2,
  ExternalLink,
  Github,
  ShieldCheck,
  Terminal,
  CheckCircle2,
  Eye,
  ArrowUpRight,
  Sparkles,
  Lock,
  Layers,
  Calendar,
  BookOpen,
  Code2,
  BarChart3,
  Search,
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
    { id: "All", label: "All Projects", icon: Layers },
    {
      id: "Web Development & Cybersecurity",
      label: "Web & Cybersecurity",
      icon: ShieldCheck,
    },
    {
      id: "Cybersecurity Research & Data Analysis",
      label: "Research & Analytics",
      icon: BarChart3,
    },
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
        return <Code2 size={size} className="text-violet-400" />;
    }
  };

  return (
    <section
      id="projects"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#050814] dark:bg-[#050814] light:bg-[#FAFAFC] overflow-hidden"
    >
      {/* Ambient Background Effects */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-violet-600/10 via-blue-500/5 to-transparent rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-600/10 via-violet-500/5 to-transparent rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-violet-500/10 dark:bg-violet-500/10 light:bg-violet-50 text-violet-400 dark:text-violet-400 light:text-violet-600 border border-violet-500/20 dark:border-violet-500/20 light:border-violet-200 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>Engineering &amp; Innovation</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.1]">
              Featured{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Practical software systems, cybersecurity education platforms, and empirical research studies developed with modern engineering stacks.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 inline-flex items-center p-1.5 rounded-2xl bg-[#090E23]/80 dark:bg-[#090E23]/80 light:bg-white border border-[#1C274C]/80 dark:border-[#1C274C]/80 light:border-slate-200 backdrop-blur-md shadow-lg"
          >
            {filterCategories.map((tab) => {
              const isActive = activeFilter === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/25 font-semibold"
                      : "text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-[#141D3F]/40"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Project Cards */}
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
                  <div className="relative rounded-3xl overflow-hidden border border-[#1C274C] hover:border-violet-500/50 dark:border-[#1C274C] dark:hover:border-violet-500/50 light:border-slate-200 light:hover:border-violet-400 bg-[#090E23]/90 dark:bg-[#090E23]/90 light:bg-white shadow-2xl transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                      {/* Left: Visual Showcase Panel */}
                      <div
                        className={`relative lg:col-span-5 min-h-[340px] sm:min-h-[400px] lg:min-h-[480px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden ${
                          isCyberCampus
                            ? "bg-gradient-to-br from-[#090E23] via-[#0E1530] to-[#121A3B]"
                            : "bg-gradient-to-br from-[#0D0923] via-[#120E30] to-[#18113B]"
                        }`}
                      >
                        {/* Background pattern */}
                        <div
                          className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:20px_20px]"
                          aria-hidden="true"
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
                              <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                              </span>
                              <span className="text-[11px] font-medium text-slate-400">
                                {isCyberCampus ? "Interactive Web App" : "Research & Analysis"}
                              </span>
                            </div>
                          </div>

                          {/* URL / Path Bar */}
                          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#050814]/80 border border-[#1C274C] mb-5">
                            <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                            <span className="text-[11px] font-mono text-cyan-300 truncate">
                              {isCyberCampus
                                ? "cybercampus://security-awareness-platform"
                                : "analysis://social_engineering_privacy_study.ipynb"}
                            </span>
                          </div>
                        </div>

                        {/* Center: Realistic Technical Preview (NO fake metrics!) */}
                        <div className="relative z-10 flex-1 flex items-center">
                          {isCyberCampus ? (
                            <div className="w-full space-y-3">
                              {/* Security Education Console Preview */}
                              <div className="rounded-2xl bg-[#050814]/90 border border-violet-500/25 p-4 backdrop-blur-md">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-2">
                                    <div className="p-1.5 rounded-lg bg-violet-500/15">
                                      <ShieldCheck className="w-4 h-4 text-violet-400" />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-200">
                                      Security Awareness Simulation
                                    </span>
                                  </div>
                                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/25">
                                    Full-Stack
                                  </span>
                                </div>

                                {/* Simulated technical modules */}
                                <div className="space-y-2 font-mono text-[11px]">
                                  <div className="flex items-start gap-2">
                                    <span className="text-violet-400 mt-0.5">❯</span>
                                    <span className="text-slate-300">
                                      module: Phishing Vector Identification
                                    </span>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-0.5">❯</span>
                                    <span className="text-slate-300">
                                      module: Social Engineering Deception Analysis
                                    </span>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">✓</span>
                                    <span className="text-emerald-400">
                                      database schema: PL/pgSQL progress persistence
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Feature tags */}
                              <div className="flex flex-wrap gap-1.5">
                                {["Interactive Scenarios", "Threat Recognition", "Responsive UI"].map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2.5 py-1 rounded-lg bg-[#0E1530]/80 border border-[#1C274C] text-[10px] font-medium text-slate-300"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="w-full space-y-3">
                              {/* Research Workbench Preview */}
                              <div className="rounded-2xl bg-[#050814]/90 border border-violet-500/25 p-4 backdrop-blur-md">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-2">
                                    <div className="p-1.5 rounded-lg bg-pink-500/15">
                                      <BarChart3 className="w-4 h-4 text-pink-400" />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-200">
                                      Empirical Research Framework
                                    </span>
                                  </div>
                                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/25">
                                    Python 3.11
                                  </span>
                                </div>

                                {/* Research Independent Variables */}
                                <div className="space-y-1.5 font-mono text-[11px]">
                                  <div className="flex items-center justify-between p-1.5 rounded bg-[#0E1530]/60">
                                    <span className="text-slate-300">IV1 &bull; Phishing Threats</span>
                                    <span className="text-violet-400 text-[10px]">Empirical</span>
                                  </div>
                                  <div className="flex items-center justify-between p-1.5 rounded bg-[#0E1530]/60">
                                    <span className="text-slate-300">IV2 &bull; Pretexting Scenarios</span>
                                    <span className="text-violet-400 text-[10px]">Empirical</span>
                                  </div>
                                  <div className="flex items-center justify-between p-1.5 rounded bg-[#0E1530]/60">
                                    <span className="text-slate-300">IV3 &bull; Impersonation Attacks</span>
                                    <span className="text-violet-400 text-[10px]">Empirical</span>
                                  </div>
                                  <div className="flex items-center justify-between p-1.5 rounded bg-[#0E1530]/60">
                                    <span className="text-slate-300">IV4 &bull; Malicious Links</span>
                                    <span className="text-violet-400 text-[10px]">Empirical</span>
                                  </div>
                                </div>
                              </div>

                              {/* Target Outcome */}
                              <div className="p-2.5 rounded-xl bg-[#0E1530]/70 border border-[#1C274C] flex items-center justify-between text-[11px]">
                                <span className="text-slate-400 font-medium">Dependent Variable:</span>
                                <span className="font-semibold text-cyan-300 font-mono">User Privacy</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Bottom: Tech stack footer */}
                        <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[#1C274C]">
                          <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                            <Terminal className="w-3 h-3 text-violet-400" />
                            {isCyberCampus ? "TypeScript & PL/pgSQL" : "Python & Jupyter Notebook"}
                          </span>
                          <span className="text-[11px] font-semibold text-violet-400">
                            {isCyberCampus ? "Web Application" : "Academic Study"}
                          </span>
                        </div>
                      </div>

                      {/* Right: Content Panel */}
                      <div className="lg:col-span-7 p-7 sm:p-9 lg:p-10 flex flex-col justify-between">
                        {/* Top Meta */}
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide bg-violet-500/10 text-violet-400 border border-violet-500/25">
                              {isCyberCampus ? (
                                <ShieldCheck className="w-3.5 h-3.5" />
                              ) : (
                                <BookOpen className="w-3.5 h-3.5" />
                              )}
                              <span>{project.category}</span>
                            </span>

                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono text-slate-400 bg-[#0E1530] border border-[#1C274C]">
                              <Calendar className="w-3 h-3 text-blue-400" />
                              {project.year}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 leading-tight">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="mt-4 text-sm sm:text-[15px] text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Key Features */}
                          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {project.features.map((feat, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2.5 text-[13px] text-slate-300 dark:text-slate-300 light:text-slate-600"
                              >
                                <div className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center bg-violet-500/10 text-violet-400">
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                </div>
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech Stack */}
                          <div className="mt-7">
                            <div className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 mb-3">
                              Technologies &amp; Tools
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-50 text-slate-200 dark:text-slate-200 light:text-slate-700 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 hover:border-violet-500/50 transition-colors"
                                >
                                  {renderTechIcon(tech)}
                                  <span>{tech}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom Actions */}
                        <div className="mt-8 pt-6 border-t border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 flex flex-wrap items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            className="group/btn inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 hover:scale-[1.03] active:scale-95"
                          >
                            <Eye className="w-4 h-4" />
                            <span>View Case Study</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </button>

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/gh inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-50 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 hover:border-violet-500 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-all duration-200"
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
