'use strict';

describe('Controller: ChartsEncounterCtrl', function () {

  // load the controller's module
  beforeEach(module('ehrApp'));

  var ChartsEncounterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartsEncounterCtrl = $controller('ChartsEncounterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
