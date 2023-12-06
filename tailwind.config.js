/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "goodtimes-hv": ["GoodTimesHv", "sans-serif"],
        "goodtimes-lt": ["GoodTimesLt", "sans-serif"],
        "goodtimes-rg": ["GoodTimesRg", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        mainBlue: "#03A6FF",
        mainPurple: "#5546FF",
        mainGreen: "#1ABE6C",
        mainBlack: "#1F1F1F",
        sideBlue: "#03BAE4",
        sidePurple: "#A036FC",
      },
      dropShadow: {
        blue: "0px 0px 20px rgba(3, 166, 255, 0.45)",
        green: "0px 0px 20px rgba(26, 190, 108, 0.45)",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};

