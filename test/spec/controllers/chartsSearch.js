'use strict';

describe('Controller: ChartsSearchCtrl', function () {

  // load the controller's module
  beforeEach(module('ehrApp'));

  var ChartsSearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartsSearchCtrl = $controller('ChartsSearchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
