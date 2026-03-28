/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["10px", "14px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["26px", "50px"],
      "4xl": ["44px", "58px"],
      "6xl": ["55px", "65px"],
      "7xl": ["74px", "80px"],
      "8xl": ["76px", "86px"],
    },
    extend: {
      colors: {
        orange: "#F89A23",
        lightOrange: "#fbc98b",
        red: "#F75123",
        ash: "#393636",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        questrial: ["Questrial", "sans-serif"],
      },

      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('../assets/images/hero.svg')",
        africa: "url('assets/images/africateam.png')",
        reach: "url('assets/images/reachout.jpg')",
      },
      screens: {
        wide: "1500px",
      },
    },
  },
  plugins: [],
};
