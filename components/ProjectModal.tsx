"use client";

import React, { useEffect, useState } from "react";
import { ProjectItem } from "@/data/portfolioData";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Calendar,
  Layers,
  Code2,
  BookOpen,
  Sparkles,
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

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "implementation" | "features">("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setActiveTab("overview");
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderTechIcon = (tech: string) => {
    const size = 15;
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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md transition-all animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090E23] dark:bg-[#090E23] light:bg-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-[#141D3F] dark:bg-[#141D3F] light:bg-slate-100 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-[#1C274C] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Year */}
        <div className="flex flex-wrap items-center gap-2.5 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/15 text-violet-400 border border-violet-500/30">
            {project.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            <span>{project.year}</span>
          </span>
        </div>

        {/* Title */}
        <h3
          id="modal-title"
          className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 pr-10"
        >
          {project.title}
        </h3>

        {/* Case Study Tabs */}
        <div className="mt-6 flex items-center gap-2 border-b border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "overview"
                ? "bg-violet-600 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Overview &amp; Purpose
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("implementation")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "implementation"
                ? "bg-violet-600 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Implementation &amp; Highlights
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("features")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "features"
                ? "bg-violet-600 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Key Capabilities
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-5 space-y-6">
          {activeTab === "overview" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-violet-400 mb-2">
                  Project Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-blue-400 mb-2">
                  Purpose &amp; Objective
                </h4>
                <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  {project.purpose}
                </p>
              </div>
            </div>
          )}

          {activeTab === "implementation" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-2">
                Technical Execution Highlights
              </h4>
              <ul className="space-y-3">
                {project.detailedHighlights.map((hl, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "features" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-2">
                Core Functional Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-50 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-800"
                  >
                    <Sparkles className="w-4 h-4 text-violet-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used (Always visible) */}
          <div className="pt-4 border-t border-[#1C274C] dark:border-[#1C274C] light:border-slate-200">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
              Technologies &amp; Tools Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#141D3F] dark:bg-[#141D3F] light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-300"
                >
                  {renderTechIcon(tech)}
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons in Modal */}
        <div className="mt-8 pt-6 border-t border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 flex flex-wrap items-center justify-between gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#141D3F] dark:bg-[#141D3F] light:bg-slate-100 text-white dark:text-white light:text-slate-800 border border-[#1C274C] hover:border-violet-500 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500 transition-colors ml-auto shadow-md shadow-violet-500/20"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
