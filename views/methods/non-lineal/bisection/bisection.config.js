angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.non-lineal.bisection', {
    url : '/bisection',
    templateUrl : 'views/methods/non-lineal/bisection/bisection.html',
    controller : 'BisectionCtrl as bisection',
    params : {
      fn : null
    }
  });
});
