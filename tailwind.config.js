/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Archivo': ['Archivo', 'sans-serif'],
      'Antonio': ["Antonio", 'sans-serif'] 
      },
    extend: {
      backgroundImage: {
        'image': "url('/images/alphabg.png')",
      }
    },
  },
  plugins: [],
}
 
 
