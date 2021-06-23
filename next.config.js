const widthPlugins = require('next-compose-plugins');
const withImages = require('next-images');

if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: './config/.env.production' });
}
if (
  process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === 'staging'
) {
  require('dotenv').config({ path: './config/.env.development' });
}

console.log(process.env.API_URL);

module.exports = widthPlugins([withImages], {
  webpack5: false,

  webpack(config) {
    return config;
  }
});
