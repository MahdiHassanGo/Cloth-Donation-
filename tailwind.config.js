

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
        About:'#E8ECD7',
        howitworks:'#EED3B1',
        howtohelp:'#605EA1'
     
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

