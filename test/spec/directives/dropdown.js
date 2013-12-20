'use strict';

describe('Directive: dropdown', function () {
  beforeEach(module('ehrApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<dropdown></dropdown>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the dropdown directive');
  }));
});
