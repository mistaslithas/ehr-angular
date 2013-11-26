'use strict';

describe('Directive: editorLabDetail', function () {
  beforeEach(module('ehrApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<editor-lab-detail></editor-lab-detail>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the editorLabDetail directive');
  }));
});
