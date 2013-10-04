'use strict';

angular.module('ehrApp')
  .controller('ChartsScheduledCtrl', function ($scope, model, charts) {

  	// API: get scheduled patients
  	if(!model.scheduledPatients)
	  	charts.getScheduledPatients();

  	// get today's date
  	$scope.today = moment().format('dddd, MMM Do');

  	// reset search
  	$scope.search = '';

  });
