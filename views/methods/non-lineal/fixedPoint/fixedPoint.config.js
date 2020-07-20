angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.non-lineal.fixedPoint', {
    url : '/fixed-point',
    templateUrl : 'views/methods/non-lineal/fixedPoint/fixedPoint.html',
    controller : 'FixedPointCtrl as fixedPointCtrl',
    params : {
      fn : null
    }
  });
});
