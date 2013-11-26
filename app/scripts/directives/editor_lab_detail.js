'use strict';

angular.module('ehrApp')
  .directive('editorLabDetail', function () {
    return {
      templateUrl: 'views/editor_lab_detail.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
