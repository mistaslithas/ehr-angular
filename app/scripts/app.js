'use strict';

angular.module('ehrApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise('/ehr');

  // Reroute /charts to /charts/scheduled
  $urlRouterProvider.when('/ehr/charts', '/ehr/charts/scheduled');



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
      controller: 'ChartsCtrl'
    })
    .state('ehr.charts.scheduled', {
      url: '/scheduled',
      templateUrl: 'views/charts.scheduled.html',
      controller: 'ChartsScheduledCtrl'
    })
    .state('ehr.charts.recent', {
      url: '/recent',
      templateUrl: 'views/charts.recent.html',
      // controller: 'ChartsCtrl'
    })
    .state('ehr.charts.search', {
      url: '/search',
      templateUrl: 'views/charts.search.html',
      // controller: 'ChartsCtrl'
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