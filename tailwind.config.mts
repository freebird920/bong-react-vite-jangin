import { generateColorScheme } from "./src/utils/theme_color.mts";

/** @type {import('tailwindcss').Config} */
const generatedColors = generateColorScheme({
  colorSeed: "#6200EE",
  isDark: true,
});

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ...generatedColors },
    },
  },
  plugins: [],
};
