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
      'background': '#13131D',
      'secondarybackground': '#1A1A26',
      'white': "#ffffff",
      'primary': "#00c2f3",
      'secondary': "#009cc5",
      'third': '#00749f',
      'required': "#ef4444",
      "gray-900": "#17181b",
      "gray-700": "#1b1d1f",
      "gray-500": "#27272a",
      'black': '#000000'
    },
    extend: {
      fontFamily: {
        'rubik': ['poppins'],
        'poppins': ['poppins'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
