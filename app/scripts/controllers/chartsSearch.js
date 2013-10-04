'use strict';

angular.module('ehrApp')
  .controller('ChartsSearchCtrl', function ($scope, model, charts) {

  	// API: get scheduled patients
  	if(!model.searchablePatients)
	  	charts.getSearchablePatients();

  });
