/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#000000', /* Forma de agregar colores en tailwind v3 */
        },
      },
    },
  },
  plugins: [],
}

