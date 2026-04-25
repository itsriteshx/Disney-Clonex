/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark':         '#0d0117',
        'brand-navy':         '#0d0117',
        'brand-purple':       '#8B2FC9',
        'brand-purple-dark':  '#6a1fa0',
        'brand-gold':         '#f5a623',
        'brand-blue':         '#0072d2',
        'brand-red':          '#e63946',
        'text-gray':          '#aaaaaa',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
