angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/home/home.html',
    controller: 'HomeCtrl as home'
  });
});
