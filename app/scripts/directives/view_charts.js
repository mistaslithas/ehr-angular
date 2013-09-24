'use strict';

angular.module('ehrApp')
  .directive('viewCharts', function () {
    return {
      templateUrl: 'views/view_charts.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      	scope.selectedTab = 'visit';
      	scope.showingInfo = false;

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
	          visit:{
	          	cc: 'Panic Attack',
	          	vitals: {
	          		temp: '98.8 rectal',
	          		bp: '169/77',
	          		pulse: '71',
	          		resp: '61',
	          		sat: '99%',
	          		height: '69 inches',
	          		weight: '142 lbs',
	          		bmi: '29.2'
	          	},
	          	medications: [
	          		{
	          			name: 'Naproxen',
	          			method: 'oral table',
	          			dosage: '500 mg',
	          			doctor: 'Dr. Marie Sheffield',
	          			date: '2013-09-13T00:00:00+00:00',
	          			refill: '(No refills)'
	          		},
	          		{
	          			name: 'Neurontin (gabapentin)',
	          			method: 'oral table',
	          			dosage: '300 mg',
	          			doctor: 'Dr. Marie Sheffield',
	          			date: '2013-09-13T00:00:00+00:00',
	          			refill: '(1x refill)'
	          		},
	          		{
	          			name: 'Mobic (meloxicam)',
	          			method: 'oral tablet',
	          			dosage: '7.5 mg',
	          			doctor: 'Dr. Marie Sheffield',
	          			date: '2013-09-13T00:00:00+00:00',
	          			refill: '(No refills)'
	          		},
	          		{
	          			name: 'Flexeril (cyclobeuraprine)',
	          			method: 'oral tablet',
	          			dosage: '300 mg',
	          			doctor: 'Dr. Marie Sheffield',
	          			date: '9/23/2013',
	          			refill: '(refill due)'
	          		},
	          		{
	          			name: 'Ibuprofen',
	          			method: 'oral tabelt',
	          			dosage: ' 200 mg',
	          			doctor: 'Patient',
	          			date: '9/23/2013',
	          			refill: '(No refills)'
	          		},
	          	],
          		problems: [
	          		{
	          			name: 'Sciatica',
	          			metric: '724.3',
	          			doctor: 'Dr. Marie Sheffield',
	          			date: '2013-09-13T00:00:00+00:00',
	          		},
	          		{
	          			name: 'Obesity, unspecified',
	          			metric: '278.00',
	          			doctor: 'Dr. Marie Sheffield',
	          			date: '2013-09-13T00:00:00+00:00',
	          		},
	          		{
	          			name: 'Lumbosacral spondylosis without myelopathy',
	          			metric: '721.3',
	          			doctor: 'Dr. Marie Sheffield',
	          			date: '2013-09-13T00:00:00+00:00',
	          		},
	          		{
	          			name: 'Lumbago',
	          			metric: '724.2',
	          			doctor: 'Dr. Marie Sheffield',
	          			date: '2013-09-13T00:00:00+00:00',
	          		},
	          		{
	          			name: 'Closed fracture of vault of skull with other and unspecified intracranial hemorrhage with prolonged (more than 24 hours) loss of consciousness and return to pre-existing conscious level',
	          			metric: '724.3',
	          			doctor: 'Dr. Marie Sheffield',
	          			date: '2013-09-13T00:00:00+00:00',
	          		},
	          		{
	          			name: 'Unspecified essential hypertension',
	          			metric: '278.00',
	          			doctor: 'Patient',
	          			date: '2013-09-13T00:00:00+00:00',
	          		},
	          	],
	          	historyMedical: [
	          		{
	          			name: 'Low back pain',
	          			doctor: 'Patient',
	          			date: '2013-09-13T00:00:00+00:00',
	          		},
	          		{
	          			name: 'Unspecified essential hypertension',
	          			doctor: 'Dr. Marie Sheffield',
	          			date: '2013-09-13T00:00:00+00:00',
	          		},
	          	],
	          	historySurgical: [
	          		{
	          			name: 'Appendectomy',
	          			doctor: 'Patient',
	          			date: '2013-09-13T00:00:00+00:00',
	          		}
	          	],
	          	historyFamily: [
	          		{
	          			name: 'Heart disease',
	          			details: 'Father',
	          			notes: 'Age 56',
	          		},
	          		{
	          			name: 'Kidney disease',
	          			details: 'Mother',
	          			notes: 'Age 61',
	          		}
	          	],
	          	historySocial: [
	          		{
	          			name: 'Current smoker',
	          			details: '22 pack years',
	          			notes: '',
	          		},
	          		{
	          			name: 'Alcohol use',
	          			details: '5 drinks a week',
	          			notes: '',
	          		},
	          		{
	          			name: 'Illicit drug use',
	          			details: 'Occasional marijuana',
	          			notes: '',
	          		},
	          		{
	          			name: 'Sexually active',
	          			details: 'Male & female partners',
	          			notes: 'Condom contraception',
	          		}
	          	],
	          	activities: [
	          	]
	          }
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
