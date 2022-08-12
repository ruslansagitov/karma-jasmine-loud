/* globals document */
'use strict';

describe('karma-jasmine-loud', () => {
    beforeEach(function() {
        this.button = document.createElement('button');
        this.button.innerHTML = 'Join';
        document.body.appendChild(this.button);
    });

    afterEach(function() {
        document.body.removeChild(this.button);
    });

    it('works', function() {
        expect(this.button).toBeSaid(['Join', 'button']);
    });
});
