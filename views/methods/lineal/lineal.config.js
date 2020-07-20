angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.lineal', {
    url : '/lineal',
    templateUrl : 'views/methods/lineal/lineal.html',
    abstract : true
  });
});
