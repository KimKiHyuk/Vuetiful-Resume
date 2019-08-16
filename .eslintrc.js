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
    "object-shorthand": 0,
    'linebreak-style': 0,
    globals: {},
    settings: {
    },
   'max-len': ["error", { "code": 1000 }]
  },
};
