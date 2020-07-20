angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.interpolation.cubicSplines', {
    url : '/cubic-splines',
    templateUrl : 'views/methods/interpolation/cubic-splines/cubic-splines.html',
    controller : 'CubicSplinesCtrl as cubicSplines'
  });
});
