'use strict';

angular.module('ehrApp')
  .controller('ChartsFacesheetCtrl', function ($scope) {

  	// show/hide the editor
  	$scope.editing = false;

  	$scope.showEditor = function(title) {
  		$scope.editing = true;
  		$scope.editorTitle = title;
  	}

  	$scope.closeEditor = function() {
  		$scope.editing = false;
  	}

  });
