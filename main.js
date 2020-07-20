angular.module('numerical-analysis', ['ui.router', 'ngMaterial', 'md.data.table', 'ngMessages'])
.config(function($urlRouterProvider){
  'use strict';
  $urlRouterProvider.otherwise('/');
});
