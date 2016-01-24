# karma-jasmine-loud [![Build Status](https://travis-ci.org/ruslansagitov/karma-jasmine-loud.svg?branch=master)](https://travis-ci.org/ruslansagitov/karma-jasmine-loud) [![Coverage Status](https://coveralls.io/repos/ruslansagitov/karma-jasmine-loud/badge.svg)](https://coveralls.io/r/ruslansagitov/karma-jasmine-loud) [![Code Climate](https://codeclimate.com/github/ruslansagitov/karma-jasmine-loud/badges/gpa.svg)](https://codeclimate.com/github/ruslansagitov/karma-jasmine-loud)

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
