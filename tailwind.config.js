module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#f59e0b',
        secondary: '#f97316',
        info: '#10b981',
        infoLight: '#06b6d4',
        dark: '#334155'
      },
      screens:{
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
