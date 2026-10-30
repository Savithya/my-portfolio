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
} from "react-icons/si";
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

export default function SkillCard({ skill }: SkillCardProps) {
  const renderIcon = () => {
    const iconSize = 24;
    switch (skill.iconName) {
      case "python":
        return <SiPython size={iconSize} className="text-[#3776AB]" />;
      case "javascript":
        return <SiJavascript size={iconSize} className="text-[#F7DF1E]" />;
      case "typescript":
        return <SiTypescript size={iconSize} className="text-[#3178C6]" />;
      case "cpp":
        return <SiCplusplus size={iconSize} className="text-[#00599C]" />;
      case "css":
        return <SiCss size={iconSize} className="text-[#1572B6]" />;
      case "web":
        return <Globe size={iconSize} className="text-[#38BDF8]" />;
      case "sql":
        return <Database size={iconSize} className="text-[#E34C26]" />;
      case "mysql":
        return <SiMysql size={26} className="text-[#4479A1]" />;
      case "postgres":
        return <SiPostgresql size={iconSize} className="text-[#336791]" />;
      case "brain":
        return <Brain size={iconSize} className="text-[#A855F7]" />;
      case "chart":
        return <BarChart3 size={iconSize} className="text-[#EC4899]" />;
      case "book-open":
        return <BookOpen size={iconSize} className="text-[#8B5CF6]" />;
      case "layers":
        return <Layers size={iconSize} className="text-[#06B6D4]" />;
      case "cpu":
        return <Cpu size={iconSize} className="text-[#10B981]" />;
      case "vscode":
        return <VscVscode size={iconSize} className="text-[#007ACC]" />;
      case "anaconda":
        return <SiAnaconda size={iconSize} className="text-[#44A833]" />;
      case "jupyter":
        return <SiJupyter size={iconSize} className="text-[#F37626]" />;
      case "github":
        return (
          <SiGithub
            size={iconSize}
            className="text-slate-900 dark:text-slate-100"
          />
        );
      default:
        return <Cpu size={iconSize} className="text-blue-400" />;
    }
  };

  return (
    <div
      tabIndex={0}
      aria-label={`${skill.name}, ${skill.categoryLabel}`}
      className="group relative flex items-center gap-4 p-4 rounded-[16px] bg-[#151D2E] dark:bg-[#151D2E] light:bg-white border border-[#293449] dark:border-[#293449] light:border-slate-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-[0_10px_25px_-5px_rgba(59,130,246,0.25)] light:hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)] cursor-default select-none focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {/* Subtle hover gradient illumination */}
      <div
        className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5"
        aria-hidden="true"
      />

      {/* Icon Area: rounded container approximately 48x48 */}
      <div
        className="relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-[#1C263B] dark:bg-[#1C263B] light:bg-slate-100 border border-[#2B3954] dark:border-[#2B3954] light:border-slate-200 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        {renderIcon()}
      </div>

      {/* Text Info */}
      <div className="flex flex-col min-w-0">
        <span className="font-semibold text-[15px] sm:text-[16px] text-[#F8FAFC] dark:text-[#F8FAFC] light:text-slate-900 tracking-tight truncate group-hover:text-blue-400 dark:group-hover:text-blue-400 light:group-hover:text-blue-600 transition-colors duration-200">
          {skill.name}
        </span>
        <span className="text-[12px] sm:text-[13px] text-[#94A3B8] dark:text-[#94A3B8] light:text-slate-500 truncate font-normal">
          {skill.categoryLabel}
        </span>
      </div>
    </div>
  );
}
