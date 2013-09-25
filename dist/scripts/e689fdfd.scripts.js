"use strict";angular.module("ehrApp",[]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("ehrApp").controller("MainCtrl",["$scope","model",function(a,b){a.model=b}]),angular.module("ehrApp").factory("model",function(){return{activeSection:"Charts",sections:["Home","Tasks","Charts","Messages"]}}),angular.module("ehrApp").directive("viewCharts",function(){return{templateUrl:"views/view_charts.html",restrict:"E",link:function(a){a.tabs=[{label:"Facesheet",value:"facesheet"},{label:"Timeline",value:"timeline"},{label:"Office Visit",value:"visit"}],a.selectedTab="visit",a.showingInfo=!1,a.charts=[{id:"p1",firstName:"Sarah",lastName:"Williams",image:"images/patient_sarah.png",dob:"1984-02-06T00:00:00+00:00",age:"29",sex:"Female",phone:"4159251230",insurance:"Blueshield",facesheet:{},timeline:{},visit:{cc:"Panic Attack",vitals:{temp:"98.8 rectal",bp:"169/77",pulse:"71",resp:"61",sat:"99%",height:"69 inches",weight:"142 lbs",bmi:"29.2"},medications:[{name:"Naproxen",method:"oral table",dosage:"500 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(No refills)"},{name:"Neurontin (gabapentin)",method:"oral table",dosage:"300 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(1x refill)"},{name:"Mobic (meloxicam)",method:"oral tablet",dosage:"7.5 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(No refills)"},{name:"Flexeril (cyclobeuraprine)",method:"oral tablet",dosage:"300 mg",doctor:"Dr. Marie Sheffield",date:"9/23/2013",refill:"(refill due)"},{name:"Ibuprofen",method:"oral tabelt",dosage:" 200 mg",doctor:"Patient",date:"9/23/2013",refill:"(No refills)"}],problems:[{name:"Sciatica",metric:"724.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Obesity, unspecified",metric:"278.00",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Lumbosacral spondylosis without myelopathy",metric:"721.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Lumbago",metric:"724.2",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Closed fracture of vault of skull with other and unspecified intracranial hemorrhage with prolonged (more than 24 hours) loss of consciousness and return to pre-existing conscious level",metric:"724.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Unspecified essential hypertension",metric:"278.00",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"}],historyMedical:[{name:"Low back pain",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"},{name:"Unspecified essential hypertension",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"}],historySurgical:[{name:"Appendectomy",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"}],historyFamily:[{name:"Heart disease",details:"Father",notes:"Age 56"},{name:"Kidney disease",details:"Mother",notes:"Age 61"}],historySocial:[{name:"Current smoker",details:"22 pack years",notes:""},{name:"Alcohol use",details:"5 drinks a week",notes:""},{name:"Illicit drug use",details:"Occasional marijuana",notes:""},{name:"Sexually active",details:"Male & female partners",notes:"Condom contraception"}],activities:[]}},{id:"p2",firstName:"William",lastName:"Yang",image:"images/patient_silhouette.png",dob:"1980-04-11T00:00:00+00:00",age:"33",sex:"Male",phone:"4151234567",insurance:"Obama Care",facesheet:{},timeline:{},visit:{cc:"Flu",vitals:{temp:"98.8 rectal",bp:"169/77",pulse:"71",resp:"61",sat:"99%",height:"69 inches",weight:"142 lbs",bmi:"29.2"},medications:[{name:"Naproxen",method:"oral table",dosage:"500 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(No refills)"},{name:"Neurontin (gabapentin)",method:"oral table",dosage:"300 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(1x refill)"},{name:"Mobic (meloxicam)",method:"oral tablet",dosage:"7.5 mg",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00",refill:"(No refills)"},{name:"Flexeril (cyclobeuraprine)",method:"oral tablet",dosage:"300 mg",doctor:"Dr. Marie Sheffield",date:"9/23/2013",refill:"(refill due)"},{name:"Ibuprofen",method:"oral tabelt",dosage:" 200 mg",doctor:"Patient",date:"9/23/2013",refill:"(No refills)"}],problems:[{name:"Sciatica",metric:"724.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Obesity, unspecified",metric:"278.00",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Lumbosacral spondylosis without myelopathy",metric:"721.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Lumbago",metric:"724.2",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Closed fracture of vault of skull with other and unspecified intracranial hemorrhage with prolonged (more than 24 hours) loss of consciousness and return to pre-existing conscious level",metric:"724.3",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"},{name:"Unspecified essential hypertension",metric:"278.00",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"}],historyMedical:[{name:"Low back pain",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"},{name:"Unspecified essential hypertension",doctor:"Dr. Marie Sheffield",date:"2013-09-13T00:00:00+00:00"}],historySurgical:[{name:"Appendectomy",doctor:"Patient",date:"2013-09-13T00:00:00+00:00"}],historyFamily:[{name:"Heart disease",details:"Father",notes:"Age 56"},{name:"Kidney disease",details:"Mother",notes:"Age 61"}],historySocial:[{name:"Current smoker",details:"22 pack years",notes:""},{name:"Alcohol use",details:"5 drinks a week",notes:""},{name:"Illicit drug use",details:"Occasional marijuana",notes:""},{name:"Sexually active",details:"Male & female partners",notes:"Condom contraception"}],activities:[]}}],a.patientLabel=function(a,b){return a+" "+b},a.selectPatient=function(b){a.selectedPatient=b?b:a.charts[0]},a.selectPatient()}}}),angular.module("ehrApp").filter("phone",function(){return function(a){if(!a)return"";var b=a.toString().trim().replace(/^\+/,"");if(b.match(/[^0-9]/))return a;var c,d,e;switch(b.length){case 10:c=1,d=b.slice(0,3),e=b.slice(3);break;case 11:c=b[0],d=b.slice(1,4),e=b.slice(4);break;case 12:c=b.slice(0,3),d=b.slice(3,5),e=b.slice(5);break;default:return a}return 1==c&&(c=""),e=e.slice(0,3)+"-"+e.slice(3),(c+" ("+d+") "+e).trim()}});