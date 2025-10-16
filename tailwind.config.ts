import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        accent: "var(--accent)",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 45px rgba(197, 146, 62, 0.25)",
      },
    },
  },
  // No 'content' needed when using @source in CSS
  plugins: [], // plugin declared in CSS via @plugin
};

export default config;
