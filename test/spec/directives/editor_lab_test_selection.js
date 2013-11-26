'use strict';

describe('Directive: editorLabTestSelection', function () {
  beforeEach(module('ehrApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<editor-lab-test-selection></editor-lab-test-selection>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the editorLabTestSelection directive');
  }));
});
