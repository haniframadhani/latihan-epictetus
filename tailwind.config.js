/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ph': ['Patrick Hand', 'cursive'],
        'ssp': ['Source Sans Pro', 'sans-serif']
      },
      colors: {
        'charcoal': '#374151',
        'eerie-black': '#111827',
        'independence': '#4B5563',
        'yankees-blue': '#1F2937'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
