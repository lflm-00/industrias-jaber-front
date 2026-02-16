/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: "#136AB5",
      buttons: "#4287C3",
      "background-light": "#F1F5F9",   // gris azulado claro moderno
      "background-dark": "#0F172A",    // azul gris oscuro elegante
      "coffee-green": "#0D9488",       // teal profesional (mejor secundario)
      "coffee-cream": "#E2E8F0",       // gris claro frío coherente
    },
      fontFamily: {
        display: ["var(--font-work-sans)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
