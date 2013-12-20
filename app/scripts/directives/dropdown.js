'use strict';

angular.module('ehrApp')
  .directive('dropdown', function () {
    return {
      templateUrl: 'views/dropdown.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
