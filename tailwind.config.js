/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Asegúrate de incluir JSX
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // ← Aquí agregas daisyUI
};
