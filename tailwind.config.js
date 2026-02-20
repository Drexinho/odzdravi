/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
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
          50: '#f4f7f4',
          100: '#e3ebe2',
          200: '#c9d9c8',
          300: '#a3bfa2',
          400: '#7a9f78',
          500: '#588356',
          600: '#436841',
          700: '#375336',
          800: '#2f452e',
          900: '#283a27',
        },
        cream: '#faf8f5',
        warm: '#edebe6',
      },
    },
  },
  plugins: [],
}
