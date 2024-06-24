/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      black: '#000',
      grey: '#DBDBDB',
      blue: {
        700: "#188CC1",
        800: "#0071A5"
      },
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    }
  },
  plugins: []
};