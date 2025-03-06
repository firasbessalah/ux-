/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0047AB',
        secondary: '#E6F0FF',
        'primary-dark': '#003380',
        'primary-light': '#E6F0FF',
        'accent': '#FF6B6B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 71, 171, 0.1), 0 2px 4px -1px rgba(0, 71, 171, 0.06)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}