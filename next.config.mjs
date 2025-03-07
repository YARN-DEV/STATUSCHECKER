// filepath: c:\Users\Hp\Desktop\YG FOLDER\code\status checker\next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? '/yarn-dev' : '',
  assetPrefix: isProd ? '/STATUSCHECKER/' : '',
  devIndicators: {
    buildActivity: false,
  },
};
