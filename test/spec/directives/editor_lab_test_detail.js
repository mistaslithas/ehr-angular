'use strict';

describe('Directive: editorLabTestDetail', function () {
  beforeEach(module('ehrApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<editor-lab-test-detail></editor-lab-test-detail>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the editorLabTestDetail directive');
  }));
});
