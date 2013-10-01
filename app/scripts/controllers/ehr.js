'use strict';

angular.module('ehrApp')
  .controller('EhrCtrl', function ($scope, $state) {

  	// this allows the main navigation to show selected state
  	$scope.$on('$stateChangeSuccess', function(){
  		$scope.stateName = $state.current.name;
  	})
  });
