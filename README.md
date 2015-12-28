# karma-jasmine-loud

[Karma][] plugin for [Jasmine][] matchers for [Loud][], web accessibility testing helper

## Getting Started

```
npm install karma-jasmine-loud --save-dev
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
