module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    quotes: ['warn', 'single'],
    camelcase: 'off',
    'no-extra-semi': 'warn',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'space-before-blocks': ['warn', { functions: 'always' }],
    'spaced-comment': ['error', 'always', { exceptions: ['*'] }],
    'class-methods-use-this': 'error',
    'no-useless-constructor': 'error',
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'lines-between-class-members': 'off',
    'import/first': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNullish: true, allowNumber: true },
    ],
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: false }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        format: ['strictCamelCase', 'snake_case'],
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[a-zA-Z]',
          match: true,
        },
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        custom: {
          regex: '^T[a-zA-Z]',
          match: true,
        },
      },
    ],
  },
}
