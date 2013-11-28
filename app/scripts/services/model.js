'use strict';

// I'm cheating and using the model to store default data instead of loading this in from a local JSON file
// This is not necessary once we wire up to an API

angular.module('ehrApp')
  .factory('model', function () {
    return {
	   	labs: [
	      {
	        id: 'lab-1',
	        name: 'Quest 1',
	        logo: 'images/quest.png',
	        tests: []
	      },
	      {
	        id: 'lab-2',
	        name: 'Quest 2',
	        logo: 'images/quest.png',
	        tests: []
	      },
	      {
	        id: 'lab-3',
	        name: 'Quest 3',
	        logo: 'images/quest.png',
	        tests: []
	      }
	    ],
	    lab_tests: [
		    {
				id:'lab_test_1',
				name:'Complete Blood Count (CBC)'
			},
		    {
				id:'lab_test_2',
				name:'Estrogen'
			},
		    {
				id:'lab_test_3',
				name:'Lipids Panel'
			},
		    {
				id:'lab_test_4',
				name:'Liver Function'
			},
		    {
				id:'lab_test_5',
				name:'Urinalysis'
			}
		],
		lab_test_templates: [
			{
				id:'lab_test_template_1',
				name:'Annual Physical - Females Over 65',
				tests: [
				    {
						id:'lab_test_3',
						name:'Lipids Panel'
					},
				    {
						id:'lab_test_5',
						name:'Urinalysis'
					}
				]
			},
			{
				id:'lab_test_template_2',
				name:'Annual Physical - Females Over 50',
				tests: [
				    {
						id:'lab_test_1',
						name:'Complete Blood Count (CBC)'
					},
				    {
						id:'lab_test_2',
						name:'Estrogen'
					},
				    {
						id:'lab_test_4',
						name:'Liver Function'
					},
				    {
						id:'lab_test_5',
						name:'Urinalysis'
					}
				]
			}
		],
		dx: ['Acute Upper Respiratory Infection','Migraines','Lumbago','Laryngitis'],
    	ccs: ['Influenza','Panic Attack','Hypertension','Diabetes','Anemia'],
    	drugs: ['Naproxen','Neurontin (Gabapentin)','Mobic (Meloxicam)','Flexeril (Cyclobeuraprine)','Ibuprofen','Xanax (ALPRAZolam)','MS Contin (Morphine)'],
    	drugMethods: ['oral tablet'],
    	doctors: ['Dr. Marie Sheffield','Dr. Jekyll','Dr. Kavorkian'],
    	refills: ['No refills','1x refill','refill due'],
    	problems: ['Sciatica', 'Obesity, unspecified', 'Lumbosacral Spondylosis Without Myelopathy', 'Lumbago', 'Unspecified Essential Hypertension'],
    	surgeries: ['Appendectomy','Tonsilectomy','Quadruple Bypass','Liver Transplant','Root Canal'],
    	diseases: ['Heart Disease','Kidney Disease','Diabetes'],
    	relations: ['Mother','Father','Sister','Brother','Uncle','Aunt','Grandmother','Grandfather','Son','Daughter'],
    	socials: [
    		{name: 'Current Smoker', info:'22 packs/year', detail:''},
    		{name: 'Alcohol Use', info:'5 drinks/week', detail:''},
    		{name: 'Illicit Drug Use', info:'Occasional marijuana', detail:''},
    		{name: 'Sexually Active', info:'Male & female partners', detail:'Condom contraception'}
    	],
    	psychs: ['Depression','Schizophrenia'],
    	patients: [
			{
	            id:'00000001',
	            image: 'images/patient_sarah.png',
	            firstName: 'Sarah',
	            lastName: 'Williams', 
	            sex: 'Female',
	            dob: '1984-02-05T00:00:00.00',
	            phone: '4151234567',
	            insurance: 'Blueshield',
	            ssn: '123-45-6789',
	            address: {city:'Berkeley',state:'CA'},
	            orders: []
			},
			{
	            id:'00000002',
	            image: 'images/patient_alfred.png',
	            firstName: 'Alfred',
	            lastName: 'Zhang', 
	            sex: 'Male',
	            dob: '1950-04-12T00:00:00.00',
	            phone: '4151234567',
	            insurance: 'Blueshield',
	            ssn: '234-56-7890',
	            address: {city:'San Francisco',state:'CA'},
	            orders: []
			},
			{
	            id:'00000003',
	            image: 'images/patient_elsa.png',
	            firstName: 'Elsa',
	            lastName: 'Freude', 
	            sex: 'Female',
	            dob: '1930-10-25T00:00:00.00',
	            phone: '4151234567',
	            insurance: 'Blueshield',
	            ssn: '345-67-8901',
	            address: {city:'Oakland',state:'CA'},
	            orders: []
			}
    	]
    };
  });
