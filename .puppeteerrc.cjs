const {join} = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer to a local folder
  // This prevents permission errors like "/root/.cache/puppeteer" on live servers
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
