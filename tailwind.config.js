/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        'ortech-green': '#0F2A22',
        'ortech-green-light': '#1a4d3a',
        'ortech-gold': '#D4AF37',
        'ortech-gold-light': '#E5C158',
        'ortech-white': '#FFFFFF',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

