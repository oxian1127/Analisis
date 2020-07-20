angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.non-lineal.newton', {
    url : '/newton',
    templateUrl : 'views/methods/non-lineal/newton/newton.html',
    controller : 'NewtonCtrl as newtonCtrl',
    params : {
      fn : null
    }
  });
});
