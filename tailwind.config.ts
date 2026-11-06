import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#050814",
          surface: "#090E23",
          card: "#0E1530",
          cardHover: "#141D3F",
          border: "#1C274C",
          borderHover: "#2E3F78",
          text: "#F8FAFC",
          muted: "#94A3B8",
          subtle: "#64748B",
        },
        violet: {
          electric: "#8B5CF6",
          deep: "#7C3AED",
          glow: "#A78BFA",
        },
        accent: {
          blue: "#3B82F6",
          sky: "#38BDF8",
          cyan: "#06B6D4",
          purple: "#8B5CF6",
          violet: "#A855F7",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "'JetBrains Mono'",
          "Fira Code",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        "glow-sm": "0 0 15px -3px rgba(139, 92, 246, 0.3)",
        "glow-violet": "0 0 30px -4px rgba(139, 92, 246, 0.35)",
        "glow-blue": "0 0 30px -4px rgba(59, 130, 246, 0.35)",
        "glow-cyan": "0 0 25px -4px rgba(6, 182, 212, 0.35)",
        "card-glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "card-hover": "0 20px 40px -15px rgba(139, 92, 246, 0.2)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("light", ".light &");
    }),
  ],
};

export default config;
