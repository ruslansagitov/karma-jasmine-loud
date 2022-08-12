'use strict';

function createPattern(path) {
    return {
        pattern: path,
        included: true,
        served: true,
        watched: false
    };
}

function initJasmineLoud(files) {
    files.unshift(createPattern(require.resolve('jasmine-loud')));
}

initJasmineLoud.$inject = ['config.files'];

module.exports = {
    'framework:jasmine-loud': ['factory', initJasmineLoud]
};
