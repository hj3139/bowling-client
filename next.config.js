const widthPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = widthPlugins([withImages], {
  webpack(config) {
    return config;
  }
});
