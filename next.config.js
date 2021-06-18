const widthPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = widthPlugins([withImages], {
  webpack5: false,

  webpack(config) {
    return config;
  }
});
