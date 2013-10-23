'use strict';

angular.module('ehrApp')
  .controller('ChartsFacesheetCtrl', function ($scope) {

  	// show/hide cds
  	$scope.showCDS = $scope.patient.cds;

  	// show/hide the editor
  	$scope.editing = false;

  	$scope.showEditor = function(ev, title) {
      $scope.edit_element = angular.element(ev.srcElement);
      console.log($scope.edit_element);

  		$scope.editing = true;
  		$scope.editorTitle = title;
  	}

  	$scope.closeEditor = function() {
  		$scope.editing = false;
  	}

  });
