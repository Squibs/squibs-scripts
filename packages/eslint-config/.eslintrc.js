var config = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended"
  ],
  rules: {
    "func-names": ["error", "never"],
  },
};

module.exports = config;
