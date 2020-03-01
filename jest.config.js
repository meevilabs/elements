module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  verbose: true,
  automock: false,
  collectCoverage: true,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
      babelConfig: true,
    },
  },
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/assets/**',
    '!src/theme/**',
    '!src/utils/types/**',
    '!src/**/styles.ts',
  ],
  moduleDirectories: ['node_modules', '<rootDir>'],
};
