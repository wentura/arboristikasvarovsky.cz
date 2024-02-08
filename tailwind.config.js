/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        zelena: "#a9d08e",
        tmavazelena: "#A9D08E",
        tmavazelena1: "#7fba57",
        cervena: "#B58ED0",
        tmavacervena: "#95635f",
        tmavacervena1: "#ba577f",
      },
    },
  },
  plugins: [],
};
