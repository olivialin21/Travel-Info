/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light_gray: '#F1F1F1', // 自訂主題顏色
        gray: '#959595',
        red: '#B72323'
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"], // 設定預設主題為 light
  },
}

