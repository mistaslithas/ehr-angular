'use strict';

angular.module('ehrApp')
  .filter('age', function () {
    return function (input) {
    	// calculate the number of years that have passed since a given date
    	// return a positive integer of this value
		return moment.duration(moment(input) - moment()).years() * -1;
    };
  });
