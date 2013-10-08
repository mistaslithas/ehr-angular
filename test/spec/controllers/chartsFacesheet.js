'use strict';

describe('Controller: ChartsFacesheetCtrl', function () {

  // load the controller's module
  beforeEach(module('ehrApp'));

  var ChartsFacesheetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartsFacesheetCtrl = $controller('ChartsFacesheetCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
