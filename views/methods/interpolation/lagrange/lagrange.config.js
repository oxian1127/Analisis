angular.module('numerical-analysis')
.config(function($stateProvider){
	$stateProvider.state('methods.interpolation.lagrange', {
    url: '/lagrange',
    templateUrl: 'views/methods/interpolation/lagrange/lagrange.html',
    controller: 'LagrangeCtrl as lagrange'
  });
})
