/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = function override(config, env) {
  config.output = {
    ...config.output, // copy all settings
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: 'https://www.cdn.kelaktaa.xyz/',
  };
  config.optimization = {
    ...config.optimization,
    splitChunks: {
      cacheGroups: {
        default: false,
      },
    },
    runtimeChunk: false,
  };
  config.plugins[5].options = {
    ...config.plugins[5].options,
    filename: 'static/css/[name].css',
  };
  config.plugins[0].options.minify = {
    ...config.plugins[0].options,
    minifyJS: false,
    minifyCSS: false,
    minifyURLs: false,
  };
  return config;
};
