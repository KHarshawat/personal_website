/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    fontFamily: {
      'sans': ['Assistant', `sans-serif` ]
    },
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      colors: {
        'kh-navy': '#002B5B',
        'kh-ocean': '#1A5F7A',
        'kh-teal': '#159895',
        'kh-teal-bright': '#30E3DE',
        'kh-ice': '#DDE6ED',
      },
      screens: {
        '3xl': '1600px',
        '4xl': '2560px',
      }
    },
  },
  plugins: [],
}

