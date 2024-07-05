/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },

      borderRadius: {
        'elliptical': '83px / 84px', // This creates an elliptical border radius
      },
      // screens: {
      //   xl: '1440px',
      //   '2xl': '1536px',
      //   '3xl': '1600px',
      // },
    },
  },
  plugins: [],
}

