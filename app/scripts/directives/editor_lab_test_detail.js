'use strict';

angular.module('ehrApp')
  .directive('editorLabTestDetail', function () {
    return {
      templateUrl: 'views/editor_lab_test_detail.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
