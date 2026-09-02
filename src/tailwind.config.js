/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF8F3",
        ink: "#22241F",
        "ink-soft": "#5B5D55",
        line: "#DEDACC",
        teal: "#2F6F6B",
        "teal-dim": "#E4EEEC",
        amber: "#B9812E",
        "amber-dim": "#F3E7D3",
        card: "#FFFFFF",
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
