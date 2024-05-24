/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

          "darkgray" : "#0E0D11",
          "100": '#44475a',
          '200': '#6272a4',
          '300': '#bd93f9',
          '400': '#ff79c6',
          '500': '#8be9fd',
          '600': '#50fa7b',
          '700': '#f1fa8c',
          '800': '#ffb86c',
          '900': '#ff5555',
  
      },
      
    },
  },
  plugins: [],
}

