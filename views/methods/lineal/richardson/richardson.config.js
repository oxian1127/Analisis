angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.lineal.richardson', {
    url : '/richardson',
    templateUrl : 'views/methods/lineal/richardson/richardson.html',
    controller : 'richardsonCtrl as richardson',
    params : {
      fn : null
    }
  });
});