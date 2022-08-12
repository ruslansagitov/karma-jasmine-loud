/* globals document */
'use strict';

describe('karma-jasmine-loud', () => {
    let button;

    beforeEach(() => {
        button = document.createElement('button');
        button.innerHTML = 'Join';
        document.body.appendChild(button);
    });

    afterEach(() => {
        document.body.removeChild(button);
    });

    it('works', () => {
        expect(button).toBeSaid(['Join', 'button']);
    });
});
