/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bus-background': "url('https://source.unsplash.com/1600x900/?bus')",
      },
    },
  },
  plugins: [],
}