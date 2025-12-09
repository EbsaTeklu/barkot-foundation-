export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bbfBlue: { DEFAULT: '#00205B', light: '#1A3A75' },
        bbfGold: { DEFAULT: '#FDCB58', dark: '#E5B84D' },
        bbfPurple: { DEFAULT: '#6A359C', light: '#8B5FBF' }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
