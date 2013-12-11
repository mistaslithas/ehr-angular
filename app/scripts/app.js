'use strict';

angular.module('ehrApp', ['ngAnimate','ui.router','ui.event','ui.keypress','ui.bootstrap'])

.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise('/ehr');

  // States
  $stateProvider
    .state('ehr', {
      url: '/ehr',
      templateUrl: 'views/ehr.html',
      controller: 'EhrCtrl'
    })
    .state('ehr.home', {
      url: '/home',
      templateUrl: 'views/home.html'
    })
    .state('ehr.schedule', {
      url: '/schedule',
      templateUrl: 'views/schedule.html'
    })
    .state('ehr.tasks', {
      url: '/tasks',
      templateUrl: 'views/tasks.html'
    })
    .state('ehr.charts', {
      url: '/charts',
      templateUrl: 'views/charts.html',
      controller: 'ChartsCtrl',
      abstract: true
    })
    .state('ehr.charts.scheduled', {
      url: '',
      templateUrl: 'views/charts.scheduled.html',
      controller: 'ChartsScheduledCtrl'
    })
    .state('ehr.charts.recent', {
      url: '/recent',
      templateUrl: 'views/charts.recent.html',
    })
    .state('ehr.charts.search', {
      url: '/search',
      templateUrl: 'views/charts.search.html',
      controller: 'ChartsSearchCtrl'
    })
    .state('ehr.charts.patient', {
      url: '/:id',
      templateUrl: 'views/charts.patient.html',
      controller: 'ChartsPatientCtrl',
      abstract: true
    })
    .state('ehr.charts.patient.facesheet', {
      url: '',
      templateUrl: 'views/charts.patient.facesheet.html',
      controller: 'ChartsFacesheetCtrl'
    })
    .state('ehr.charts.patient.timeline', {
      url: '/timeline',
      templateUrl: 'views/charts.patient.timeline.html',
    })
    .state('ehr.messages', {
      url: '/messages',
      templateUrl: 'views/messages.html'
    })
    .state('ehr.reports', {
      url: '/reports',
      templateUrl: 'views/reports.html'
    })
    .state('ehr.lock', {
      url: '/lock',
      templateUrl: 'views/lock.html'
    })
    .state('ehr.settings', {
      url: '/settings',
      templateUrl: 'views/settings.html'
    })
    .state('ehr.help', {
      url: '/help',
      templateUrl: 'views/help.html'
    })
    .state('ehr.feedback', {
      url: '/feedback',
      templateUrl: 'views/feedback.html'
    })
})