

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
        About:'#E5E1DA',
        howitworks:'#EED3B1',
        howtohelp:'#608BC1',
        Profile:'#CBDCEB',
     
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

