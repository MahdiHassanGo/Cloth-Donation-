/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Footer: '#FFFBE6',
        Buttons: '#133E87',
     
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

