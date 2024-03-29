/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"
],
  theme: {
    extend: {
      height: {
        '5.625rem': '5.625rem',
      },
    },
    screens: {
      'xs': '480px',
      // ... other screen sizes
    },
  },
  variants: {},
  plugins: [
  ],
}
