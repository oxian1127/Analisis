angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.non-lineal', {
    url : '/non-lineal',
    templateUrl : 'views/methods/non-lineal/non-lineal.html',
    abstract : true
  });
});
