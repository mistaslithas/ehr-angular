'use strict';

describe('Controller: ChartsScheduledCtrl', function () {

  // load the controller's module
  beforeEach(module('ehrApp'));

  var ChartsScheduledCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartsScheduledCtrl = $controller('ChartsScheduledCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
