import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "var(--teal)",
          dim:     "var(--teal-dim)",
          glow:    "var(--teal-glow)",
        },
        surface:  "var(--surface)",
        muted:    "var(--muted)",
        heading:  "var(--heading)",
        "theme-bg":     "var(--bg)",
        "theme-bg2":    "var(--bg2)",
        "theme-border": "var(--border)",
        "theme-text":   "var(--text)",
      },
      fontFamily: {
        sans:   ["var(--font-sans)",   "Inter",          "sans-serif"],
        mono:   ["var(--font-mono)",   "Fira Code",      "monospace"],
        script: ["var(--font-script)", "Dancing Script", "cursive"],
      },
      borderRadius: {
        card:    "12px",
        "card-lg": "16px",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(28px) scale(0.97)", filter: "blur(6px)" },
          to:   { opacity: "1", transform: "translateY(0)    scale(1)",    filter: "blur(0)"   },
        },
        fadeIn: {
          from: { opacity: "0", filter: "blur(4px)" },
          to:   { opacity: "1", filter: "blur(0)"   },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)"   },
          "10%":      { transform: "rotate(-10deg)"  },
          "20%":      { transform: "rotate(12deg)"   },
          "30%":      { transform: "rotate(-10deg)"  },
          "40%":      { transform: "rotate(9deg)"    },
          "50%":      { transform: "rotate(0deg)"    },
        },
      },
      animation: {
        "fade-in-up":    "fadeInUp 0.6s ease both",
        "fade-in-up-d1": "fadeInUp 0.6s 0.15s ease both",
        "fade-in-up-d2": "fadeInUp 0.6s 0.30s ease both",
        "fade-in-up-d3": "fadeInUp 0.6s 0.45s ease both",
        "fade-in-up-d4": "fadeInUp 0.6s 0.60s ease both",
        "fade-in":       "fadeIn 1s 1s ease both",
        "blink":         "blink 1s infinite",
        "wave":          "wave 2.5s ease-in-out 1s infinite",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        teal: "0 8px 25px var(--teal-glow)",
        "teal-lg": "0 20px 48px -12px var(--teal-glow)",
      },
    },
  },
  plugins: [],
};

export default config;
