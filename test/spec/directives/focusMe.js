'use strict';

describe('Directive: focusMe', function () {
  beforeEach(module('ehrApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<focus-me></focus-me>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the focusMe directive');
  }));
});
