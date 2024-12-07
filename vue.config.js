module.exports = {
  publicPath: '/ChaikinaEntertainment/',
  transpileDependencies: [],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/styles.scss";
        `,
      },
    },
  },
};
