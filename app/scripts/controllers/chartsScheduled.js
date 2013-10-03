'use strict';

angular.module('ehrApp')
  .controller('ChartsScheduledCtrl', function ($scope, charts) {

  	// API: get scheduled patients
  	$scope.patients = charts.getScheduledPatients();

  	// get today's date
  	$scope.today = moment().format('MMM d, YYYY');

  });
