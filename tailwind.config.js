/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        primary:"#092E5F"
      },
      backgroundImage:{
        heroImage:"url('/assets/profile.png')"
      },
      
      
      
    },
  },
  plugins: [],
}
