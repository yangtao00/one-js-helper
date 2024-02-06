module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'prettier',
    '@vue/typescript/recommended',
    '@vue/prettier'
  ],
  plugins: ['vue', '@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    // 自定义规则
  }
};
