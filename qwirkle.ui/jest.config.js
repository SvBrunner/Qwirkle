export default {
    transform: {
      '^.+\\.svelte(\\.(js|ts))?$': 'svelte-jester',
      '^.+\\.(ts|js)$': 'ts-jest', // Add this line to transform TypeScript files
    },
    transformIgnorePatterns: [
      '/node_modules/(?!@testing-library/svelte/)',
    ],
    moduleFileExtensions: ['js', 'ts', 'svelte'], // Add 'ts' here
    extensionsToTreatAsEsm: ['.svelte', '.ts'], // Consider adding '.ts' if using ESM syntax in TypeScript
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  }