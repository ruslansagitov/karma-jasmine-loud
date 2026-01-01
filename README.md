# karma-jasmine-loud [![Build Status](https://github.com/ruslansagitov/karma-jasmine-loud/actions/workflows/test.yaml/badge.svg)](https://github.com/ruslansagitov/karma-jasmine-loud/actions/workflows/test.yaml) [![Coverage Status](https://coveralls.io/repos/ruslansagitov/karma-jasmine-loud/badge.svg)](https://coveralls.io/r/ruslansagitov/karma-jasmine-loud)

[Karma][] plugin for [Jasmine][] matchers for [Loud][], web accessibility testing helper

## Getting Started

```
npm install karma karma-jasmine jasmine-core jasmine-loud loud karma-jasmine-loud --save-dev
```

```javascript
/* karma.conf.js */
module.exports = function(config) {
    config.set({
        frameworks: ['jasmine-loud']
    });
};
```

 [Karma]: <http://karma-runner.github.io> "Karma — Testing environment"
 [Jasmine]: <http://jasmine.github.io/> "Jasmine — Behavior-Driven JavaScript"
 [Loud]: <https://github.com/ruslansagitov/loud> "Loud — Web accessibility testing helper"
