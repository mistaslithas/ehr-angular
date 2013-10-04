'use strict';

describe('Controller: ChartsPatientCtrl', function () {

  // load the controller's module
  beforeEach(module('ehrApp'));

  var ChartsPatientCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartsPatientCtrl = $controller('ChartsPatientCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
