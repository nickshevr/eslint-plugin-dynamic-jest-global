const assert = require('assert');
const dynamicJestGlobal = require('src');
const jestConfig = require('src/__tests__/mocks/jest.config.js');

const jestGlobals = dynamicJestGlobal(jestConfig);

assert.deepEqual(jestGlobals, {
    FIRST_GLOBAL: true,
    SECOND_GLOBAL: true,
});