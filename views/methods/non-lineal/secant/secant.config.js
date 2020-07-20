angular.module('numerical-analysis')
.config(function($stateProvider){
  $stateProvider.state('methods.non-lineal.secant', {
    url: '/secant',
    templateUrl: 'views/methods/non-lineal/secant/secant.html',
    controller: 'SecantCrtl as secantCtrl',
    params: {
      fn: null
    }
  });
})
