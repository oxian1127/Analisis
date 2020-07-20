angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.lineal.sor', {
    url : '/sor',
    templateUrl : 'views/methods/lineal/sor/sor.html',
    controller : 'sorCtrl as sor',
    params : {
      fn : null
    }
  });
});