module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#F6F8FF",
        "dark-bg": "#141D2F",
        "dark-blue": "#1E2A47",
        "light-blue": "#0079FF",
        "text-primary": "#2B3442",
        "text-light": "#FFFFFF",
        "gray-blue": "#F2F2F2",
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
      boxShadow: {
        custom: "0 16px 30px -10px rgba(70, 96, 187, 0.2)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
