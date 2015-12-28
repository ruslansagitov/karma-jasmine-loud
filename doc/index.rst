karma-jasmine-loud
==================

.. rubric:: Karma plugin for Jasmine matchers for Loud, web accessibility testing helper

Getting Started
---------------

::

    npm install karma-jasmine-loud --save-dev

.. code-block:: javascript

   /* karma.conf.js */
   module.exports = function(config) {
       config.set({
           frameworks: ['jasmine-loud']
       });
   };
