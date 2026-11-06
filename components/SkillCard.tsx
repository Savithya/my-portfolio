"use client";

import React from "react";
import { Skill } from "@/data/portfolioData";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiCss,
  SiMysql,
  SiPostgresql,
  SiAnaconda,
  SiJupyter,
  SiGithub,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiFigma,
  SiPhp,
  SiHtml5,
  SiC,
  SiGooglecolab,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiPhotoshop } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import {
  Globe,
  Database,
  Brain,
  BarChart3,
  BookOpen,
  Layers,
  Cpu,
} from "lucide-react";

interface SkillCardProps {
  skill: Skill;
}

function PowerBiIcon({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 12a1 1 0 0 1 1 1v11H4a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1zm-2-.5V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v17h-4.5V13a1.5 1.5 0 0 0-1.5-1.5zm5-6V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-3.5V7A1.5 1.5 0 0 0 13 5.5z" />
    </svg>
  );
}

export default function SkillCard({ skill }: SkillCardProps) {
  const renderIcon = () => {
    const iconSize = 22;
    switch (skill.iconName) {
      // Languages
      case "python":
        return <SiPython size={iconSize} className="text-[#3776AB]" />;
      case "javascript":
        return <SiJavascript size={iconSize} className="text-[#F7DF1E]" />;
      case "typescript":
        return <SiTypescript size={iconSize} className="text-[#3178C6]" />;
      case "cpp":
        return <SiCplusplus size={iconSize} className="text-[#00599C]" />;
      case "c":
        return <SiC size={iconSize} className="text-[#659AD2]" />;
      case "csharp":
        return <TbBrandCSharp size={iconSize} className="text-[#A855F7]" />;
      case "php":
        return <SiPhp size={24} className="text-[#777BB4]" />;
      // Web
      case "html":
        return <SiHtml5 size={iconSize} className="text-[#E34F26]" />;
      case "css":
        return <SiCss size={iconSize} className="text-[#1572B6]" />;
      case "tailwind":
        return <SiTailwindcss size={iconSize} className="text-[#06B6D4]" />;
      case "nodejs":
        return <SiNodedotjs size={iconSize} className="text-[#5FA04E]" />;
      // Databases
      case "sql":
        return <Database size={iconSize} className="text-[#E34C26]" />;
      case "mysql":
        return <SiMysql size={24} className="text-[#4479A1]" />;
      case "postgres":
        return <SiPostgresql size={iconSize} className="text-[#336791]" />;
      // AI & Data
      case "brain":
        return <Brain size={iconSize} className="text-[#A855F7]" />;
      case "chart":
        return <BarChart3 size={iconSize} className="text-[#EC4899]" />;
      case "book-open":
        return <BookOpen size={iconSize} className="text-[#8B5CF6]" />;
      case "powerbi":
      case "power-bi":
        return <PowerBiIcon size={iconSize} className="text-[#F2C811]" />;
      case "google-colab":
        return <SiGooglecolab size={iconSize} className="text-[#F9AB00]" />;
      // Tools & DevOps
      case "git":
        return <SiGit size={iconSize} className="text-[#F05032]" />;
      case "github":
        return <SiGithub size={iconSize} className="text-slate-200 dark:text-slate-200 light:text-slate-800" />;
      case "docker":
        return <SiDocker size={iconSize} className="text-[#2496ED]" />;
      case "vscode":
        return <VscVscode size={iconSize} className="text-[#007ACC]" />;
      case "jupyter":
        return <SiJupyter size={iconSize} className="text-[#F37626]" />;
      case "anaconda":
        return <SiAnaconda size={iconSize} className="text-[#44A833]" />;
      // Design
      case "figma":
        return <SiFigma size={iconSize} className="text-[#F24E1E]" />;
      case "photoshop":
        return <DiPhotoshop size={26} className="text-[#31A8FF]" />;
      // Core Concepts
      case "layers":
        return <Layers size={iconSize} className="text-[#06B6D4]" />;
      case "cpu":
        return <Cpu size={iconSize} className="text-[#10B981]" />;
      default:
        return <Cpu size={iconSize} className="text-violet-400" />;
    }
  };

  return (
    <div
      tabIndex={0}
      aria-label={`${skill.name}, ${skill.categoryLabel}`}
      className="group relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-violet-500/60 dark:hover:border-violet-500/60 hover:shadow-lg dark:hover:shadow-[0_10px_25px_-5px_rgba(139,92,246,0.25)] light:hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)] cursor-default select-none focus:outline-none focus:ring-2 focus:ring-violet-500 overflow-hidden"
    >
      {/* Subtle hover gradient illumination customized by skill glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 25% 50%, ${skill.glowColor || "rgba(139, 92, 246, 0.2)"} 0%, transparent 75%)`,
        }}
        aria-hidden="true"
      />

      {/* Icon Area */}
      <div
        className="relative flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-[#141D3F] dark:bg-[#141D3F] light:bg-slate-100 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >
        {renderIcon()}
      </div>

      {/* Text Info */}
      <div className="flex flex-col min-w-0 z-10 flex-1">
        <span className="font-semibold text-sm sm:text-[15px] text-[#F8FAFC] dark:text-[#F8FAFC] light:text-slate-900 tracking-tight truncate group-hover:text-violet-400 dark:group-hover:text-violet-400 light:group-hover:text-violet-600 transition-colors duration-200">
          {skill.name}
        </span>
        <span className="text-[11px] sm:text-xs text-[#94A3B8] dark:text-[#94A3B8] light:text-slate-500 truncate font-normal">
          {skill.categoryLabel}
        </span>
      </div>
    </div>
  );
}
