/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", 'sans-serif'],
        "rubik-bold": ["Rubik-Bold", 'sans-serif'],
        "rubik-extrabold": ["Rubik-ExtraBold", 'sans-serif'],
        "rubik-medium": ["Rubik-Medium", 'sans-serif'],
        "rubik-semibold": ["Rubik-SemiBold", 'sans-serif'],
        "rubik-light": ["Rubik-Light", 'sans-serif'],
      },
      colors: {
        "primary": {
          100: "#d1005d",
          200: "#ff9ab9",
          300: "#ffe2eb",
        },
        accent: {
          100: "#2803bd",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8c8e98",
          200: "#666876",
          300: '#191d31'
        },
        danger: {
          100: "#f75555"
        }
      }
    },
  },
  plugins: [],
}