const withPlugins = require("next-compose-plugins");

const nextConfig = {
  // distDir: '../../dist/functions/next'
  reactStrictMode: true,
  images: {
    unoptimized: true,
    loader: "akamai", path: ""
  },
};

module.exports = withPlugins([], nextConfig);
