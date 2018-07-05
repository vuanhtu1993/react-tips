module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  rules: {
    semi: 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-filename-extension': 0,
    'no-use-before-define': 0,
    'react/prop-types': 0,
    'no-useless-concat': 'off',
    'no-unused-vars': 'off',
    'class-methods-use-this': 'off',
    'react/no-multi-comp': 'off',
    'react/prefer-stateless-function': 'off',
    'react/no-unused-state': 0,
    'react/require-default-props': 0
  }
};
