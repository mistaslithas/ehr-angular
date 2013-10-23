'use strict';

angular.module('ehrApp')
  .controller('EhrCtrl', function ($scope, $state, model) {

  	// create a global reference to the model
  	$scope.model = model;

  	// create a global reference to the state
  	$scope.state = $state;
  });
