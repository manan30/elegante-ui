module.exports = {
  stories: ['../packages/**/stories/*.stories.tsx'],
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
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  },
  reactDocgenTypescriptOptions: {
    shouldExtractLiteralValuesFromEnum: true,
    shouldExtractValuesFromUnion: true,
    skipChildrenPropWithoutDoc: false,
    shouldRemoveUndefinedFromOptional: true
  }

  // reactDocgenTypescriptOptions: {
  //   // Slow down Storybook initial rendering by 3x but his essential to render a union values instead of a named export (e.g. will render "top" | "bottom" instead of PositionProp).
  //   shouldExtractValuesFromUnion: true,
  //   shouldExtractLiteralValuesFromEnum: true,
  //   shouldRemoveUndefinedFromOptional: true
  //   // exclude: ['node_modules']
  //   // propFilter: (prop, component) => {
  //   //   if (prop.parent && /node_modules/.test(prop.parent.fileName)) {
  //   //     return false;
  //   //   }

  //   //   if (component && component.name && !component.name.startsWith('Inner')) {
  //   //     return false;
  //   //   }

  //   //   return true;
  //   // }
  // }
};
