"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";

export type ThemeMode = "dark" | "light" | "system";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("sm-theme") as ThemeMode | null;
    if (stored) {
      setTheme(stored);
      applyTheme(stored);
    } else {
      setTheme("dark");
      applyTheme("dark");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      const current = localStorage.getItem("sm-theme") as ThemeMode | null;
      if (current === "system") {
        applyTheme("system");
      }
    };
    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  const applyTheme = (mode: ThemeMode) => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else if (mode === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        root.classList.add("dark");
        root.classList.remove("light");
      } else {
        root.classList.add("light");
        root.classList.remove("dark");
      }
    }
  };

  const handleSelect = (mode: ThemeMode) => {
    setTheme(mode);
    localStorage.setItem("sm-theme", mode);
    applyTheme(mode);
  };

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 p-1 rounded-full bg-slate-900/60 border border-slate-700/60 w-[100px] h-[34px]" />
    );
  }

  return (
    <div
      role="radiogroup"
      aria-label="Appearance Mode"
      className="flex items-center gap-1 p-1 rounded-full bg-slate-900/80 dark:bg-[#151D2E]/90 light:bg-slate-200/80 border border-slate-700/70 dark:border-[#293449] light:border-slate-300 backdrop-blur-md shadow-inner transition-colors"
    >
      <button
        type="button"
        role="radio"
        aria-checked={theme === "dark"}
        aria-label="Dark mode"
        onClick={() => handleSelect("dark")}
        className={`p-1.5 rounded-full transition-all duration-200 ${
          theme === "dark"
            ? "bg-blue-600 text-white shadow-sm scale-105"
            : "text-slate-400 hover:text-slate-200"
        }`}
        title="Dark Mode (Default)"
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
            ? "bg-blue-600 text-white shadow-sm scale-105"
            : "text-slate-400 hover:text-slate-200 light:text-slate-600 light:hover:text-slate-900"
        }`}
        title="Light Mode"
      >
        <Sun className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        role="radio"
        aria-checked={theme === "system"}
        aria-label="System mode"
        onClick={() => handleSelect("system")}
        className={`p-1.5 rounded-full transition-all duration-200 ${
          theme === "system"
            ? "bg-blue-600 text-white shadow-sm scale-105"
            : "text-slate-400 hover:text-slate-200 light:text-slate-600 light:hover:text-slate-900"
        }`}
        title="System Preference"
      >
        <Monitor className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
