'use strict';

let createPattern = function(path) {
    return {
        pattern: path,
        included: true,
        served: true,
        watched: false
    };
};

let initJasmineLoud = function(files) {
    files.unshift(createPattern(require.resolve('jasmine-loud')));
};

initJasmineLoud.$inject = ['config.files'];

module.exports = {
    'framework:jasmine-loud': ['factory', initJasmineLoud]
};
