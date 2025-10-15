/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ashish: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          500: "#6366f1",
          700: "#4338ca",
        },
        night: {
          900: "#020617",
          800: "#0f172a",
          700: "#172554",
          600: "#1e293b",
        },
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow": "0 20px 60px -25px rgba(79, 70, 229, 0.45)",
        "glow-strong": "0 40px 120px -40px rgba(79, 70, 229, 0.55)",
      },
      backgroundImage: {
        "grid-glow":
          "linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
