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
      'ibm': ['IBM', 'sans-serif'],
      'opensans': ['Opensans', 'sans-serif']
    },  
    // colors: {
    //   'blue-50': '#e3f2fd',
    //   'blue-300': '#64b5f6',
    //   'blue-500': '#2196f3',
    //   'blue-700': '#1976d2',
    //   'blue-900': '#0d47a1'
    // },
    extend: {
      backgroundImage: {
        'home_bg': "url('src/assets/home_bg.jpg')",
        
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

