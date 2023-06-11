/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const FlipClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".leftToRight": {
      transform: "rotateY(180deg)",
    },
    ".rightToLeft": {
      transform: "rotateY(-180deg)",
    },
    ".topToBottom": {
      transform: "rotateX(-180deg)",
    },
    ".bottomToTop": {
      transform: "rotateX(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        heading: "var(--color-heading)",
        text: "var(--color-text)",
        background: "var(--color-background)",
      },
      fontFamily: {
        body: "var(--font-inter), sans-serif",
        heading: "var(--font-cousine), serif",
        flesh: ["Fleshandblood", "sans-serif"],
      },
      spacing: {
        0: "0",
        1: "0.4rem",
        2: "0.8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
        10: "4rem",
        11: "4.4rem",
        12: "4.8rem",
        13: "5.2rem",
        14: "5.6rem",
        15: "6rem",
        16: "6.4rem",
      },
      fontSize: {
        xs: "1.05rem",
        sm: "1.4rem",
        md: "1.575rem",
        lg: "1.7rem",
        xl: "2.1rem",
        "2xl": "4.2rem",
        "3xl": "6.3rem",
      },
    },
  },
  plugins: [require("daisyui"), FlipClass],
};
