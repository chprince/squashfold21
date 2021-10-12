// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

 module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/squashfold/' // note the trailing slash
      : '/',
  };

// module.exports = {
//     css: {
//       loaderOptions: {
//         sass: {
//           data: `
//             @import "@/scss/styles.scss";
//           `
//         }
//       }
//     }
//   };