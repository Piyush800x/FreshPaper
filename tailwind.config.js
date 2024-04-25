/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'jersey': ['Jersey', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'ibm': ['IBM', 'sans-serif']
    },  
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

