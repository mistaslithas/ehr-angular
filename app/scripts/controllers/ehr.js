'use strict';

angular.module('ehrApp')
  .controller('EhrCtrl', function ($scope, $state, model) {

  	// create a global reference to the model
  	$scope.model = model;

  	// this allows the main navigation to show selected state
  	$scope.$on('$stateChangeSuccess', function(){
  		$scope.stateName = $state.current.name.split('.')[1];
  	})
  });
