var config = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/state-in-constructor': 'off',
    'react/jsx-one-expression-per-line': 2,
    '@typescript-eslint/member-delimiter-style': 2,
    'import/prefer-default-export': 'off',
  },
};

module.exports = config;
