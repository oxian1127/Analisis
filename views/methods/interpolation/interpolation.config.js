angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.interpolation', {
    url : '/interpolation',
    templateUrl : 'views/methods/interpolation/interpolation.html',
    abstract : true
  });
});
