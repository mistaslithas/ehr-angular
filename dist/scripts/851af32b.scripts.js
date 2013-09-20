"use strict";angular.module("ehrApp",[]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("ehrApp").controller("MainCtrl",["$scope","model",function(a,b){a.model=b}]),angular.module("ehrApp").factory("model",function(){return{activeSection:"charts"}}),angular.module("ehrApp").directive("viewCharts",function(){return{templateUrl:"views/view_charts.html",restrict:"E",link:function(a){a.selectedTab="visit",a.charts=[{id:"p1",firstName:"Sarah",lastName:"Williams",image:"images/patient_sarah.png",dob:"1984-02-06T00:00:00+00:00",age:"29",sex:"Female",phone:"4159251230",insurance:"Blueshield",facesheet:{},timeline:{},visit:{}},{id:"p2",firstName:"Terrance",lastName:"Jones",image:"images/patient_silhouette.png"},{id:"p3",firstName:"Levi",lastName:"Swanson",image:"images/patient_silhouette.png"},{id:"p4",firstName:"Busta",lastName:"Rhymes",image:"images/patient_silhouette.png"},{id:"p5",firstName:"Julio",lastName:"Iglesias",image:"images/patient_silhouette.png"}],a.selectPatient=function(b){a.selectedPatient=b?b:a.charts[0]},a.selectPatient()}}}),angular.module("ehrApp").filter("phone",function(){return function(a){if(!a)return"";var b=a.toString().trim().replace(/^\+/,"");if(b.match(/[^0-9]/))return a;var c,d,e;switch(b.length){case 10:c=1,d=b.slice(0,3),e=b.slice(3);break;case 11:c=b[0],d=b.slice(1,4),e=b.slice(4);break;case 12:c=b.slice(0,3),d=b.slice(3,5),e=b.slice(5);break;default:return a}return 1==c&&(c=""),e=e.slice(0,3)+"-"+e.slice(3),(c+" ("+d+") "+e).trim()}});