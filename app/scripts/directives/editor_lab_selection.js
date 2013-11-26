'use strict';

angular.module('ehrApp')
  .directive('editorLabSelection', function () {
    return {
      templateUrl: 'views/editor_lab_selection.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
