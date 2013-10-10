'use strict';

angular.module('ehrApp')
  .controller('ChartsCtrl', function ($scope, $state) {

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
