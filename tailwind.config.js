/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: { max: "640px" },
        desktop: { min: "1280px" },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "loop-scroll-right": "loop-scroll-right 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "loop-scroll-right": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
