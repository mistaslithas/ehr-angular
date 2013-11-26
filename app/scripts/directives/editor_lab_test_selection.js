'use strict';

angular.module('ehrApp')
  .directive('editorLabTestSelection', function () {
    return {
      templateUrl: 'views/editor_lab_test_selection.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
