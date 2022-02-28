module.exports = {
  stories: [
    '../packages/**/stories/*.stories.mdx'
    // '../packages/**/*.stories.mdx',
    // '../packages/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  typescript: {
    reactDocgen: false
  }
  // core: {
  //   builder: 'storybook-builder-vite'
  // }
};
