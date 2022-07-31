module.exports = {
  stories: ["../src/components/**/*.stories.js"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y", // complemento de acessibilidade
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
};

// Storybook publicado: https://62e7127c6be980cbac868b4b-uxicrjfxei.chromatic.com/
