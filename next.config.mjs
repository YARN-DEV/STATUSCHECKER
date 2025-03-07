// filepath: c:\Users\Hp\Desktop\YG FOLDER\code\status checker\my-nextjs-app\next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

export default {
  reactStrictMode: true,
  basePath: isProd ? '/your-repo-name' : '',
  assetPrefix: isProd ? '/your-repo-name/' : '',
  devIndicators: {
    buildActivity: false,
  },
};
