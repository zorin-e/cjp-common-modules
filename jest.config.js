module.exports = {
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  moduleNameMapper: {
    "@tests(.*)$": "<rootDir>/tests/$1",
    "^@/(.*)": "<rootDir>/src/$1"
  },
  verbose: true
};
