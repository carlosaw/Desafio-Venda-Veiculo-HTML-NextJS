/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "orange-B7": "#f1742e",
        "gray-md": "#5f5f5f",
        "gray-light": "#d9d9d9",
        "gray-F7": "#f7f7f7",
        "gray-24": "#242424",
        "gray-A7": "#a7a7a7",
        "gray-5F": "#5f5f5f",
        "gray-C2": "#c2c2c2",
      },
    },
  },
  plugins: [],
};
