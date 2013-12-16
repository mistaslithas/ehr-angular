'use strict';

angular.module('ehrApp')
  .directive('editorOrder', function () {
    return {
      templateUrl: 'views/editor_order.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
