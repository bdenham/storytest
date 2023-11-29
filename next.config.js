const path = require('path');
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['@adobe/elsie/components'] = path.join(__dirname, 'node_modules/@adobe/elsie/src/components');

    // config.module.rules.push({
    //   test: /\.tsx?$/,
    //   use: 'ts-loader',
    //   exclude: /node_modules\/(?!(@adobe\/elsie)\/).*/,
    // });

    // // If there's a webpack configuration in the '@adobe/elsie' package, apply it
    // const elsieWebpackConfig = require('@adobe/elsie/config/webpack');
    // if (typeof elsieWebpackConfig === 'function') {
    //   config = elsieWebpackConfig(config, { buildId, dev, isServer, defaultLoaders, webpack });
    // }

    if (config.mode !== undefined) {
      console.log(`webpack mode ${config.mode}`);
    }

    return config;
  },
});
