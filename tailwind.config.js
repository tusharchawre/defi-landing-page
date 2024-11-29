/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow" : "spin 20s linear infinite"
        ,
        "skew": "skew 7s ease-in-out infinite"
      },
      keyframes: {
        skew: {
          '0%': { transform: 'skew(40deg)' },
          '50%': { transform: 'skew(0deg)' },
          '100%': { transform: 'skew(40deg)' },
        }
      }
    },
  },
  plugins: [],
}

