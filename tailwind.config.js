/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light_gray: '#F1F1F1',
        medium_gray: '#C8C8C8',
        gray: '#959595',
        dark_gray: '#707070',
        black: '#2C2C2C',
        red: '#B72323',
        light_blue: '#E4E7FF',
        blue: '#2A48FF'
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"], // 設定預設主題為 light
  },
}

