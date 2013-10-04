'use strict';

angular.module('ehrApp')
  .controller('ChartsCtrl', function ($scope, $state) {

  	// this allows the secondary navigation to show selected state
  	$scope.$on('$stateChangeSuccess', function(){
  		$scope.nav2 = $state.current.name.split('.')[2];
  	})

  	// this allows the terciary navigation to show selected state
  	$scope.$on('$stateChangeSuccess', function(){
  		$scope.nav3 = $state.current.name.split('.')[3];
  	})

  	// when the search term changes, show/hide the search screen
  	// return the user to the screen they were on when they cancel the search
  	$scope.searchUpdate = function(search) {
  		$scope.search = search;

  		if(search) {
  			if($scope.nav2 != 'search')
  			{
	  			$scope.preSearchState = $state.current.name;
		  		$state.go('ehr.charts.search');
		  	}
  		} else {
  			$state.go($scope.preSearchState);
  		}
  	}

  });
