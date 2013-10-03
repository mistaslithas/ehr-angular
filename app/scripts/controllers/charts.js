'use strict';

angular.module('ehrApp')
  .controller('ChartsCtrl', function ($scope, $state) {

  	// this allows the secondary navigation to show selected state
  	$scope.$on('$stateChangeSuccess', function(){
  		$scope.nav2 = $state.current.name.split('.')[2];
  	})

  	$scope.searchUpdate = function(search) {
  		$scope.search = search;

  		if(search) {
  			$scope.preSearchState = $state.current.name;
	  		$state.go('ehr.charts.search');
  		} else {
  			$state.go($scope.preSearchState);
  		}
  	}

  });
