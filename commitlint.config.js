/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: [
    '@commitlint/config-conventional',
    '@commitlint/config-lerna-scopes',
  ],
};

module.exports = config;
