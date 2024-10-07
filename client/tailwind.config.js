/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Ubuntu: ["Ubuntu", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {
      screens: {
        'mobile-s': '310px',  // Mobile S
        'mobile-l': '440px',  // Mobile L
        'custom-md': '540px', // Custom medium size
      },
    },
  },
  plugins: [],
}