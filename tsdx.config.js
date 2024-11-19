const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const replace = require('@rollup/plugin-replace');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      replace({
        preventAssignment: true, // Bu satırı ekleyin
      }),
      postcss({
        plugins: [autoprefixer()],
        inject: true, // Stil dosyasını JS içine gömer
        minimize: true,
        sourceMap: true,
      })
    );

    return config;
  },
};
