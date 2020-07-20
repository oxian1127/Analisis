angular.module('numerical-analysis')
.directive('interpolationMenu', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/method-menus/interpolation/interpolation-menu.html',
    controller: ['$scope', function($scope) {
      $scope.openLinealMenu = function($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
      };
    }]
  };
});
