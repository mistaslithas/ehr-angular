'use strict';

angular.module('ehrApp')
  .factory('model', function () {
    return {
      activeSection: 'Charts',
      sections: ['Home','Tasks','Charts','Messages']
    };
  });
