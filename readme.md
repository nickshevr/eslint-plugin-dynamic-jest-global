## Installation

npm i --save-dev eslint-plugin-dynamic-jest-global

## Usage

In your eslint config:
```
import dynamicJestGlobals from 'eslint-plugin-dynamic-jest-global';
import jestConfig from 'jest-config-path';

module.exports = {
    globals: {
        yourGlobal: 1,
        ...dynamicJestGlobals(jestConfig),
    },
};
```