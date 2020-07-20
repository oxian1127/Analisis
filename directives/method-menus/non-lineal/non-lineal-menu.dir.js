angular.module('numerical-analysis')
.directive('nonLinealMenu', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/method-menus/non-lineal/non-lineal-menu.html',
    scope: {
      fn: '='
    },
    controller: ['$scope', '$state', function($scope, $state) {
      $scope.openNonLinealMenu = function($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
      };

      $scope.goTo = function(state, params) {
        $state.go(state, params);
      };
    }]
  };
});
