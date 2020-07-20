angular.module('numerical-analysis')
.directive('linealMenu', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/method-menus/lineal/lineal-menu.html',
    controller: ['$scope', function($scope) {
      $scope.openLinealMenu = function($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
      };
    }]
  };
});
