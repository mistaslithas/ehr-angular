'use strict';

describe('Directive: viewCharts', function () {
  beforeEach(module('ehrApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<view-charts></view-charts>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the viewCharts directive');
  }));
});
