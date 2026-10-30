import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#060914",
          secondary: "#0F172A",
          card: "#151D2E",
          cardHover: "#1B253A",
          border: "#293449",
          text: "#F8FAFC",
          muted: "#94A3B8",
        },
        accent: {
          blue: "#3B82F6",
          purple: "#A855F7",
          cyan: "#22D3EE",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        "glow-sm": "0 0 15px -3px rgba(59, 130, 246, 0.3)",
        "glow-md": "0 0 25px -4px rgba(168, 85, 247, 0.35)",
        "glow-cyan": "0 0 25px -4px rgba(34, 211, 238, 0.35)",
        "card-dark": "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
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
