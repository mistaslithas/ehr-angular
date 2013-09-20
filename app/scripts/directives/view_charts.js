'use strict';

angular.module('ehrApp')
  .directive('viewCharts', function () {
    return {
      templateUrl: 'views/view_charts.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      	scope.selectedTab = 'visit';

      	scope.charts = [
	        {
	          id:'p1',
	          firstName:'Sarah',
	          lastName:'Williams',
	          image:'images/patient_sarah.png',
	          dob: '1984-02-06T00:00:00+00:00',
	          age:'29',
	          sex:'Female',
	          phone:'4159251230',
	          insurance:'Blueshield',
	          facesheet:{},
	          timeline:{},
	          visit:{}
	        },
	        {
	          id:'p2',
	          firstName:'Terrance',
	          lastName:'Jones',
	          image:'images/patient_silhouette.png'
	        },
	        {
	          id:'p3',
	          firstName:'Levi',
	          lastName:'Swanson',
	          image:'images/patient_silhouette.png'
	        },
	        {
	          id:'p4',
	          firstName:'Busta',
	          lastName:'Rhymes',
	          image:'images/patient_silhouette.png'
	        },
	        {
	          id:'p5',
	          firstName:'Julio',
	          lastName:'Iglesias',
	          image:'images/patient_silhouette.png'
	        }
	    ];

      	scope.selectPatient = function(patient) {
      		if(patient)
	      		scope.selectedPatient = patient;
   			else 
		      	scope.selectedPatient = scope.charts[0];
   	   	}

   	   	scope.selectPatient();

      }
    };
  });
