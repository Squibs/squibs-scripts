var config = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'react/state-in-constructor': 'off',
    'react/jsx-one-expression-per-line': 2,
    '@typescript-eslint/member-delimiter-style': 2,
    'import/prefer-default-export': 'off',
  },
};

module.exports = config;
