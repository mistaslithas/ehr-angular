'use strict';

angular.module('ehrApp')
  .directive('focus', ['$parse', function($parse) {
  return function(scope, element, attr) {
    var fn = $parse(attr['focus']);
    element.bind('focus', function(event) {
      scope.$apply(function() {
        fn(scope, {$event:event});
      });
    });
  }
}]);