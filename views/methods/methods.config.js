angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods', {
    url : '/methods',
    templateUrl : 'views/methods/methods.html',
    abstract : true
  });
});
