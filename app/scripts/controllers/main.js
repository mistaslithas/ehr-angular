'use strict';

angular.module('ehrApp')
  .controller('MainCtrl', function ($scope, model) {
  	// expose the model globally
  	$scope.model = model;

  });