"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS_DATA, ProjectItem } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import {
  FolderGit2,
  ExternalLink,
  Github,
  ShieldAlert,
  Terminal,
  CheckCircle,
  Eye,
} from "lucide-react";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B1120] dark:bg-[#0B1120] light:bg-slate-50 overflow-hidden border-t border-[#1E293B]/60"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/3 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"
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
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Work & Implementations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
              Projects that reflect my passion for technology, innovation, and cybersecurity.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => {
            const isCyberCampus = project.id === "cyber-campus";
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative flex flex-col rounded-2xl bg-[#151D2E] dark:bg-[#151D2E] light:bg-white border border-[#293449] dark:border-[#293449] light:border-slate-200 overflow-hidden shadow-xl hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300"
              >
                {/* Visual Header / Mockup Banner */}
                <div className="relative h-56 sm:h-64 w-full bg-[#0E1526] dark:bg-[#0E1526] light:bg-slate-900 flex items-center justify-center p-6 overflow-hidden border-b border-[#293449] dark:border-[#293449] light:border-slate-200">
                  {/* Subtle Grid pattern in card banner */}
                  <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

                  {isCyberCampus ? (
                    /* Cyber Campus Interactive Mockup Graphic */
                    <div className="relative w-full max-w-sm rounded-xl bg-[#151D2E]/90 border border-blue-500/30 p-4 shadow-xl backdrop-blur-md">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 mb-3">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                          <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
                          cyber-campus.platform
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 font-mono">
                        &gt; Initializing Cybersecurity Education Module...
                      </p>
                      <p className="text-xs text-blue-400 font-mono mt-1">
                        &gt; Interactive Social Engineering Simulator [READY]
                      </p>
                    </div>
                  ) : (
                    /* Academic Research Mockup Graphic */
                    <div className="relative w-full max-w-sm rounded-xl bg-[#151D2E]/90 border border-purple-500/30 p-4 shadow-xl backdrop-blur-md">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 mb-3">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-[11px] font-mono text-purple-400 flex items-center gap-1">
                          <Terminal className="w-3.5 h-3.5 text-purple-400" />
                          privacy-research.py
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 font-mono">
                        &gt; Correlating Phishing & Privacy Risk Factors...
                      </p>
                      <p className="text-xs text-emerald-400 font-mono mt-1">
                        &gt; Empirical Findings: High Social Threat Exposure
                      </p>
                    </div>
                  )}
                </div>

                {/* Card Content Area */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Year */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {project.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-4 space-y-1.5">
                      {project.features.slice(0, 3).map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Badges */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#1C263B] dark:bg-[#1C263B] light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-700 border border-[#2B3954] dark:border-[#2B3954] light:border-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="mt-8 pt-5 border-t border-[#293449] dark:border-[#293449] light:border-slate-200 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#1C263B] dark:bg-[#1C263B] light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white hover:border-blue-500 border border-[#2B3954] transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
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
