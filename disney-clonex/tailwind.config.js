/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0f1014',
        'brand-blue': '#0063e5',
        'brand-blue-hover': '#0483ee',
      },
    },
  },
  plugins: [],
}
