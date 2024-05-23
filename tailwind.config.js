/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/App.tsx", "./src/components/Logo.tsx", "./src/components/Book.tsx", "./src/components/Header.tsx", "./src/components/Footer.tsx", "./src/components/Menu.tsx"],
  theme: {
    extend: {
      colors: {
        'mi azul': '#0000ff'
      }
    },
  },
  plugins: [],
}

