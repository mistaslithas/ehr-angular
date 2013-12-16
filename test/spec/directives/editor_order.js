'use strict';

describe('Directive: editorOrder', function () {
  beforeEach(module('ehrApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<editor-order></editor-order>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the editorOrder directive');
  }));
});
