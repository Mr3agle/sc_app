module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/sass/app.scss";`,
      },
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
  },
}
