/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          screens: {
            // xs: "480px",
            // // Default breakpoints
            // sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
          },
      backgroundImage: {
        'btn-bg': 'linear-gradient(to right, #2594D3, #1E7AAF, #228AC6)',
        'btn-border': 'linear-gradient(to bottom, #279EE2, #FFFFFF80, #279EE2)',
        'custom-gradient': 'linear-gradient(90deg, #3D5A63 0%, #FBB03B 50%, #44B6DB 100%)'
      },
      fontFamily: {
        sans: ['Geologica', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
