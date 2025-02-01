/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: ["class", '[class~="dark"]'],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        bodyPrimary: "#faf8f5",
        bodySecondary: "#faf8f5",
        darkBodyPrimary: "#44485c",
        darkBodySecondary: "#696c7c",
      },
    },
  },
  plugins: [],
};
