"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Home,
  User,
  Cpu,
  GraduationCap,
  FolderGit2,
  FileSearch,
  Mail,
  Download,
  Github,
  Linkedin,
  Moon,
  Sun,
  X,
  CornerDownLeft,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "Social";
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setIsOpen(false);
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    if (isDark) {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("sm-theme", "light");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
      localStorage.setItem("sm-theme", "dark");
    }
  };

  const commands: CommandItem[] = [
    {
      id: "nav-home",
      title: "Go to Home",
      category: "Navigation",
      icon: <Home className="w-4 h-4 text-violet-400" />,
      action: () => scrollTo("home"),
    },
    {
      id: "nav-about",
      title: "Go to About Me",
      category: "Navigation",
      icon: <User className="w-4 h-4 text-violet-400" />,
      action: () => scrollTo("about"),
    },
    {
      id: "nav-skills",
      title: "Explore Technical Skills",
      category: "Navigation",
      icon: <Cpu className="w-4 h-4 text-blue-400" />,
      action: () => scrollTo("skills"),
    },
    {
      id: "nav-education",
      title: "View Education & Qualifications",
      category: "Navigation",
      icon: <GraduationCap className="w-4 h-4 text-emerald-400" />,
      action: () => scrollTo("education"),
    },
    {
      id: "nav-projects",
      title: "View Featured Projects",
      category: "Navigation",
      icon: <FolderGit2 className="w-4 h-4 text-purple-400" />,
      action: () => scrollTo("projects"),
    },
    {
      id: "nav-research",
      title: "View Academic Research & Threat Vectors",
      category: "Navigation",
      icon: <FileSearch className="w-4 h-4 text-pink-400" />,
      action: () => scrollTo("research"),
    },
    {
      id: "nav-contact",
      title: "Contact Savithya Muthunima",
      category: "Navigation",
      icon: <Mail className="w-4 h-4 text-cyan-400" />,
      action: () => scrollTo("contact"),
    },
    {
      id: "action-cv",
      title: "Download CV (PDF)",
      category: "Actions",
      icon: <Download className="w-4 h-4 text-blue-400" />,
      action: () => {
        setIsOpen(false);
        const link = document.createElement("a");
        link.href = `/${encodeURIComponent(PERSONAL_INFO.cvFileName)}`;
        link.download = PERSONAL_INFO.cvFileName;
        link.click();
      },
      shortcut: "PDF",
    },
    {
      id: "action-theme",
      title: "Toggle Dark / Light Theme",
      category: "Actions",
      icon: <Sun className="w-4 h-4 text-yellow-400" />,
      action: toggleTheme,
      shortcut: "Theme",
    },
    {
      id: "social-github",
      title: "Open GitHub Profile",
      category: "Social",
      icon: <Github className="w-4 h-4 text-slate-300" />,
      action: () => {
        setIsOpen(false);
        window.open(PERSONAL_INFO.social.github, "_blank");
      },
    },
    {
      id: "social-linkedin",
      title: "Open LinkedIn Profile",
      category: "Social",
      icon: <Linkedin className="w-4 h-4 text-blue-400" />,
      action: () => {
        setIsOpen(false);
        window.open(PERSONAL_INFO.social.linkedin, "_blank");
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredCommands.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCommands.length - 1
      );
    } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      filteredCommands[selectedIndex].action();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-[#090E23] dark:bg-[#090E23] light:bg-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 shadow-2xl overflow-hidden transition-all"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#1C274C] dark:border-[#1C274C] light:border-slate-200">
          <Search className="w-5 h-5 text-violet-400" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search sections..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder:text-slate-500 focus:outline-none"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-[#141D3F] dark:bg-[#141D3F] light:bg-slate-100 text-slate-400 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-300">
            ESC
          </span>
        </div>

        {/* Command List */}
        <div className="max-h-[360px] overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  type="button"
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm transition-colors ${
                    isSelected
                      ? "bg-gradient-to-r from-violet-600/30 to-blue-600/20 text-white border border-violet-500/40"
                      : "text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-[#0E1530] dark:hover:bg-[#0E1530] light:hover:bg-slate-100 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-100 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200">
                      {cmd.icon}
                    </div>
                    <div>
                      <span className="font-medium text-slate-100 dark:text-slate-100 light:text-slate-900 block">
                        {cmd.title}
                      </span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                        {cmd.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {cmd.shortcut && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#141D3F] dark:bg-[#141D3F] light:bg-slate-100 text-violet-400 dark:text-violet-400 light:text-violet-600 border border-violet-500/30">
                        {cmd.shortcut}
                      </span>
                    )}
                    {isSelected && (
                      <CornerDownLeft className="w-3.5 h-3.5 text-violet-400" />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="font-mono text-violet-400">Ctrl + K</span>
        </div>
      </div>
    </div>
  );
}
