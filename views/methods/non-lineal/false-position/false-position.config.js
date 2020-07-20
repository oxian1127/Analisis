angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.non-lineal.false-position', {
    url : '/false-position',
    templateUrl : 'views/methods/non-lineal/false-position/false-position.html',
    controller : 'FalsePositionCtrl as falsePosCtrl',
    params : {
      fn : null
    }
  });
});
