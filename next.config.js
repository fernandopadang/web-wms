const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withImages = require('next-images');
require('dotenv').config();

const defaultConfiguration = {
  // assetPrefix: process.env.STATIC_URL,
  publicRuntimeConfig: {
    staticUrl: process.env.STATIC_URL,
    apiUrl: process.env.API_URL,
  }
};

const config = withPlugins([
  [withSass], withImages, withCss
], defaultConfiguration);

module.exports = config;