module.exports = {
  stories: [
    // '../packages/**/*.stories.mdx',
    '../packages/**/stories/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    "@storybook/addon-a11y"
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
