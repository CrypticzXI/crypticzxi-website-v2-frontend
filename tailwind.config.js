/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  mode: "jit",
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'background': '#131c29',
      'secondarybackground': '#1b2737',
      'white': "#ffffff",
      'primary': "#198794",
      'secondary': "#38acad",
      'required': "#ef4444",
      "gray-900": "#13131D",
      "gray-700": "#1A1A26",
      "gray-500": "#242431"
    },
    extend: {
      fontFamily: {
        'rubik': ['"rubik"'],
        'poppins': ['poppins'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
