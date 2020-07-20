angular.module('numerical-analysis')
.config(function($stateProvider){
	$stateProvider.state('methods.interpolation.reduction', {
    url: '/reduction',
    templateUrl: 'views/methods/interpolation/reduction/reduction.html',
    controller: 'ReductionCtrl as reduction'
  });
})
