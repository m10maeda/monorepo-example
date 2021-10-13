const { rules: baseRules } = require('../../.eslintrc');

/** @type {import("@typescript-eslint/experimental-utils").TSESLint.Linter.Config} */
const config = {
  overrides: [
    {
      files: '**/*.{ts,tsx}',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
      extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
        'plugin:@next/next/recommended',
        'next/core-web-vitals',
        'prettier',
      ],
      rules: {
        ...baseRules,
      },
    },
  ],
};

module.exports = config;
