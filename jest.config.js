module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts?$": "ts-jest",
  },
  moduleNameMapper: {
    "@tests(.*)$": "<rootDir>/tests/$1",
    "^@/(.*)": "<rootDir>/src/$1"
  },
  verbose: true,
  transformIgnorePatterns: [
    "/node_modules"
  ]
};
