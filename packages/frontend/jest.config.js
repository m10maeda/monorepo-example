const packageName = require('./package.json').name.split('/').pop();

/** @type {import("@jest/types").Config.InitialOptions} */
const config = {
  displayName: packageName,
  rootDir: './',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/__tests__/setupTests.ts'],
  collectCoverageFrom: ['src/**/*.(ts|tsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](node_modules|.next)[/\\\\]',
    '<rootDir>/__tests__/(setupTests|testUtils).ts',
    '<rootDir>/__tests__/__mocks__',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__tests__/__mocks__/fileMock.js',
  },
};

module.exports = config;
