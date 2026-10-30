"use client";

import React, { useEffect } from "react";
import { ProjectItem } from "@/data/portfolioData";
import { X, ExternalLink, Github, CheckCircle2, Shield, Code2, Calendar } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md transition-all animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0F172A] dark:bg-[#0F172A] light:bg-white border border-[#293449] dark:border-[#293449] light:border-slate-200 shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1C263B] dark:bg-[#1C263B] light:bg-slate-100 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-[#2B3954] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Year */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">
            {project.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Calendar className="w-3.5 h-3.5" />
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

        {/* Overview */}
        <div className="mt-6">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-blue-400 mb-2">
            Project Overview
          </h4>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Purpose */}
        <div className="mt-6">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-purple-400 mb-2">
            Purpose & Objective
          </h4>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            {project.purpose}
          </p>
        </div>

        {/* Technologies Used */}
        <div className="mt-6">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-3">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-[#1C263B] dark:bg-[#1C263B] light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-[#2B3954] dark:border-[#2B3954] light:border-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-6">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-3">
            Key Highlights & Implementation
          </h4>
          <ul className="space-y-2.5">
            {project.detailedHighlights.map((hl, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons in Modal */}
        <div className="mt-8 pt-6 border-t border-[#293449] dark:border-[#293449] light:border-slate-200 flex flex-wrap items-center justify-between gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#1C263B] dark:bg-[#1C263B] light:bg-slate-100 text-white dark:text-white light:text-slate-800 border border-[#2B3954] hover:border-blue-500 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
            </a>
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors ml-auto"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
