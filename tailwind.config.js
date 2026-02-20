/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./cenik.html",
    "./kontakt.html",
    "./src/**/*.{js,ts,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        sage: {
          50: '#e6f5f2',
          100: '#b3e6df',
          200: '#80d4c9',
          300: '#4dbeb0',
          400: '#26a896',
          500: '#00755e',
          600: '#006350',
          700: '#005244',
          800: '#004138',
          900: '#00302a',
        },
        cream: '#faf8f5',
        warm: '#edebe6',
      },
    },
  },
  plugins: [],
}
