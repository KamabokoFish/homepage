module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'next/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@next/next/no-img-element': 'off',
  },
};
