/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "clr": {
          "red": "hsl(4, 100%, 67%)",
          "black": "hsl(234, 29%, 20%)",
          "darkGray": "hsl(235, 18%, 26%)",
          "gray": "hsl(231, 7%, 60%)",
          "white": "hsl(0, 0%, 100%)",
        }
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif']
      },
      listStyleImage: {
        checkmark: 'url("/images/icon-list.svg")',
      },
      boxShadow: {
        'custom': '0rem .6rem 1.5rem -.2rem hsl(4, 100%, 67%)',
      }
    },
  },
  plugins: [],
}

