"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export type ThemeMode = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("sm-theme") as string | null;
    if (stored === "light") {
      setTheme("light");
      applyTheme("light");
    } else {
      setTheme("dark");
      applyTheme("dark");
    }
  }, []);

  const applyTheme = (mode: ThemeMode) => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  };

  const handleSelect = (mode: ThemeMode) => {
    setTheme(mode);
    localStorage.setItem("sm-theme", mode);
    applyTheme(mode);
  };

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 p-1 rounded-full bg-slate-900/60 border border-slate-700/60 w-[72px] h-[34px]" />
    );
  }

  return (
    <div
      role="radiogroup"
      aria-label="Color theme switcher (Dark / Light)"
      className="flex items-center gap-1 p-1 rounded-full bg-slate-900/80 dark:bg-[#151D2E]/90 light:bg-slate-200/90 border border-slate-700/70 dark:border-[#293449] light:border-slate-300 backdrop-blur-md shadow-inner transition-colors"
    >
      <button
        type="button"
        role="radio"
        aria-checked={theme === "dark"}
        aria-label="Dark mode"
        onClick={() => handleSelect("dark")}
        className={`p-1.5 rounded-full transition-all duration-200 ${
          theme === "dark"
            ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30 scale-105"
            : "text-slate-400 hover:text-slate-200 light:text-slate-600 light:hover:text-slate-900"
        }`}
        title="Dark Mode"
      >
        <Moon className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        role="radio"
        aria-checked={theme === "light"}
        aria-label="Light mode"
        onClick={() => handleSelect("light")}
        className={`p-1.5 rounded-full transition-all duration-200 ${
          theme === "light"
            ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30 scale-105"
            : "text-slate-400 hover:text-slate-200 light:text-slate-600 light:hover:text-slate-900"
        }`}
        title="Light Mode"
      >
        <Sun className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
