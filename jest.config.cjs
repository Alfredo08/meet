module.exports = {
    testEnvironment: 'jest-environment-jsdom', 
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript files using Babel
    },
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Path to the setup file
   };
   