module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:nuxt/recommended', 'airbnb-base'],
  // add your custom rules here
  rules: {
    'linebreak-style': 0,
    globals: {},
    settings: {
    },
  },
};
