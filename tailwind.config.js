/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], ///here we have to mention where we will use our tailwind classes that is where we will write frontend code
  theme: {
    extend: {
      colors:{
        green:{
          300:"yellow"
        }
      }
    },
  },
  plugins: [],
}

