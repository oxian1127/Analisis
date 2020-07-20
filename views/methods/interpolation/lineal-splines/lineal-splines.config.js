angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.interpolation.linealSplines', {
    url : '/lineal-splines',
    templateUrl : 'views/methods/interpolation/lineal-splines/lineal-splines.html',
    controller : 'LinealSplinesCtrl as linealSplines'
  });
});
