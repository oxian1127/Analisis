angular.module('numerical-analysis')
.controller('HomeCtrl', function($mdSidenav, $mdUtil, MethodCommons){
  'use strict';
  var self = this;

  self.evaluate = function evaluateFn(){
    console.log(Methods.evaluate(self.fn, { x : self.x }))
  };

  self.toggleInfo = $mdUtil.debounce(function(){
      $mdSidenav('info').toggle();
    },
    300
  );

  self.closeInfo = function () {
    $mdSidenav('info').close();
  };
});
