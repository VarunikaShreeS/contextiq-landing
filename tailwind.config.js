/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkChocolate: '#3B2A20',
        walnutBrown: '#7B5E4A',
        caramel: '#A67C52',
        warmBeige: '#D1B89A',
        vanillaCream: '#F2E7D5',
        softIvory: '#FAF7F0',
      }
    },
  },
  plugins: [],
}