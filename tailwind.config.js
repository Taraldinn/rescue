module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
