/** @type {import("@typescript-eslint/experimental-utils").TSESLint.Linter.Config} */
const config = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:promise/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
  ],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [],
      },
    ],
  },
  overrides: [
    {
      files: '*.ts',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base',
        'prettier',
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './packages/*/tsconfig.json',
      },
    },
  ],
};

module.exports = config;
