'use strict';

describe('Controller: EhrCtrl', function () {

  // load the controller's module
  beforeEach(module('ehrApp'));

  var EhrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EhrCtrl = $controller('EhrCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
