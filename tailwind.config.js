/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        widescreen: { raw: "(min-aspect-ratio: 13/20)" },
      },
      keyframes: {
        "open-says-me": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
        animation: {
          "open-says-me": "open-says-me ease-in-out forwards",
        },
      },
    },
  },
  plugins: [],
};
