module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
      modules: true,
    },
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  plugins: ['jsort'],
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'jsort/sort-imports': ['error'],
    'jsort/normalize-import-source': ['error'],
  },
  settings: {},
};

