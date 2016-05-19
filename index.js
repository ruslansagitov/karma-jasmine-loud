'use strict';

var createPattern = function(path) {
    return {
        pattern: path,
        included: true,
        served: true,
        watched: false
    };
};

var initJasmineLoud = function(files) {
    files.unshift(createPattern(require.resolve('jasmine-loud')));
};

initJasmineLoud.$inject = ['config.files'];

module.exports = {
    'framework:jasmine-loud': ['factory', initJasmineLoud]
};
