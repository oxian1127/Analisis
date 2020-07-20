angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.lineal.jacobi', {
    url : '/jacobi',
    templateUrl : 'views/methods/lineal/jacobi/jacobi.html',
    controller : 'JacobiCtrl as jacobi',
    params : {
      fn : null
    }
  });
});
