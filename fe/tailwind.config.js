/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
                customOklch: 'oklch(92.8% 0.006 264.531)',

        gray:{
100:"#eeeeef",
200:"e639ed",
600:"#95989c"
        },
      purple: {
          200: "#d5daeb",
          500: "#9492db",
          600: "#7164c0",
        }
      }
    },
  },
  plugins: [],
}