'use strict';

angular.module('ehrApp')
  .controller('ChartsPatientCtrl', function ($scope, $stateParams, charts) {

  	$scope.patient = charts.getPatientFacesheet($stateParams.id);

  });
