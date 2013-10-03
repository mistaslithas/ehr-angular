'use strict';

// I'm cheating and using the model to store default data instead of loading this in from a local JSON file
// This is not necessary once we wire up to an API

angular.module('ehrApp')
  .factory('model', function () {
    return {
    	ccs: ['Influenza','Panic Attack','Hypertension','Diabetes','Anemia'],
    	patients: [
			{
	            id:'p1',
	            image: 'images/patient_sarah.png',
	            firstName: 'Sarah',
	            lastName: 'Williams', 
	            sex: 'Female',
	            dob: '1984-02-05T00:00:00.00',
			},
			{
	            id:'p2',
	            image: 'images/patient_alfred.png',
	            firstName: 'Alfred',
	            lastName: 'Zhang', 
	            sex: 'Male',
	            dob: '1950-04-12T00:00:00.00',
			},
			{
	            id:'p3',
	            image: 'images/patient_elsa.png',
	            firstName: 'Elsa',
	            lastName: 'Freude', 
	            sex: 'Female',
	            dob: '1930-10-25T00:00:00.00',
			},
			{
	            id:'p1',
	            image: 'images/patient_sarah.png',
	            firstName: 'Sarah',
	            lastName: 'Williams', 
	            sex: 'Female',
	            dob: '1984-02-05T00:00:00.00',
			},
			{
	            id:'p2',
	            image: 'images/patient_alfred.png',
	            firstName: 'Alfred',
	            lastName: 'Zhang', 
	            sex: 'Male',
	            dob: '1950-04-12T00:00:00.00',
			},
			{
	            id:'p3',
	            image: 'images/patient_elsa.png',
	            firstName: 'Elsa',
	            lastName: 'Freude', 
	            sex: 'Female',
	            dob: '1930-10-25T00:00:00.00',
			},
			{
	            id:'p1',
	            image: 'images/patient_sarah.png',
	            firstName: 'Sarah',
	            lastName: 'Williams', 
	            sex: 'Female',
	            dob: '1984-02-05T00:00:00.00',
			},
			{
	            id:'p2',
	            image: 'images/patient_alfred.png',
	            firstName: 'Alfred',
	            lastName: 'Zhang', 
	            sex: 'Male',
	            dob: '1950-04-12T00:00:00.00',
			},
			{
	            id:'p3',
	            image: 'images/patient_elsa.png',
	            firstName: 'Elsa',
	            lastName: 'Freude', 
	            sex: 'Female',
	            dob: '1930-10-25T00:00:00.00',
			},
			{
	            id:'p1',
	            image: 'images/patient_sarah.png',
	            firstName: 'Sarah',
	            lastName: 'Williams', 
	            sex: 'Female',
	            dob: '1984-02-05T00:00:00.00',
			},
			{
	            id:'p2',
	            image: 'images/patient_alfred.png',
	            firstName: 'Alfred',
	            lastName: 'Zhang', 
	            sex: 'Male',
	            dob: '1950-04-12T00:00:00.00',
			},
			{
	            id:'p3',
	            image: 'images/patient_elsa.png',
	            firstName: 'Elsa',
	            lastName: 'Freude', 
	            sex: 'Female',
	            dob: '1930-10-25T00:00:00.00',
			},
			{
	            id:'p1',
	            image: 'images/patient_sarah.png',
	            firstName: 'Sarah',
	            lastName: 'Williams', 
	            sex: 'Female',
	            dob: '1984-02-05T00:00:00.00',
			},
			{
	            id:'p2',
	            image: 'images/patient_alfred.png',
	            firstName: 'Alfred',
	            lastName: 'Zhang', 
	            sex: 'Male',
	            dob: '1950-04-12T00:00:00.00',
			},
			{
	            id:'p3',
	            image: 'images/patient_elsa.png',
	            firstName: 'Elsa',
	            lastName: 'Freude', 
	            sex: 'Female',
	            dob: '1930-10-25T00:00:00.00',
			}
    	]
    };
  });
