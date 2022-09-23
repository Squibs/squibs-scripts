var fs = require('fs');
var path = require('path');
var myOverrides = [];

// if you are using redux toolkit, change the no-param-reassign eslint rule to allow state mutation
if (fs.existsSync(path.join(__dirname, '..', '..', '@reduxjs', 'toolkit'))) {
  console.log('@squibs/eslint-config-typescript-react -> node_modules/@reduxjs/toolkit exists -> ignoring modification to state');
  myOverrides = [
    {
      files: ['src/**/store/*/*.ts', 'src/**/store/*/*.js'],
      rules: {
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }]
      }
    }
  ];
}

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
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      }
    ],
  },
  overrides: myOverrides,
};

module.exports = config;
