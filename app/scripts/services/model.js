'use strict';

// I'm cheating and using the model to store default data instead of loading this in from a local JSON file
// This is not necessary once we wire up to an API

angular.module('ehrApp')
  .factory('model', function () {
    return {
    	ccs: ['Influenza','Panic Attack','Hypertension','Diabetes','Anemia'],
    	drugs: ['Naproxen','Neurontin (gabapentin)','Mobic (meloxicam)','Flexeril (cyclobeuraprine)','Ibuprofen','Xanax (ALPRAZolam)','MS Contin (morphine)'],
    	drugMethods: ['oral tablet'],
    	doctors: ['Dr. Marie Sheffield','Dr. Jekyll','Dr. Kavorkian'],
    	refills: ['No refills','1x refill','refill due'],
    	problems: ['Sciatica', 'Obesity, unspecified', 'Lumbosacral Spondylosis Without Myelopathy', 'Lumbago', 'Unspecified Essential Hypertension'],
    	surgeries: ['Appendectomy','Tonsilectomy','Quadruple Bypass','Liver Transplant','Root Canal'],
    	diseases: ['Heart Disease','Kidney Disease','Diabetes','Flatulitis'],
    	relations: ['Mother','Father','Sister','Brother','Uncle','Aunt','Grandmother','Grandfather','Son','Daughter'],
    	socials: [
    		{name: 'Current Smoker', info:'22 packs/year', detail:''},
    		{name: 'Alcohol Use', info:'5 drinks/week', detail:''},
    		{name: 'Illicit Drug Use', info:'Occasional marijuana', detail:''},
    		{name: 'Sexually Active', info:'Male & female partners', detail:'Condom contraception'}
    	],
    	psychs: ['Depression','Schizophrenia','Demonic Posession','Narcissism','Egotism'],
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
	            address: {city:'Berkeley',state:'CA'}
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
	            address: {city:'San Francisco',state:'CA'}
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
	            address: {city:'Oakland',state:'CA'}
			}
    	]
    };
  });
