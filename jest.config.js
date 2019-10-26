module.exports = {
  collectCoverage: false,
  coverageDirectory: '../coverage',
  coverageReporters: ['html', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  forceExit: true,
  globalSetup: '../jest.setup.js',
  moduleFileExtensions: ['ts', 'js', 'json'],
  notify: true,
  rootDir: 'src',
  setupFilesAfterEnv: ['jest'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/.build/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  verbose: true
}
