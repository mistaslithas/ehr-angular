'use strict';

angular.module('ehrApp')
  .directive('grid', function () {
    return {
      templateUrl: 'views/grid.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
