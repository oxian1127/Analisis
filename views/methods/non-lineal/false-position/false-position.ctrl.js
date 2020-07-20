angular.module('numerical-analysis')
.controller('FalsePositionCtrl', function($state, $stateParams, $mdSidenav, $mdUtil, FalsePosition, MethodCommons){
  'use strict';

  var self = this;
  var originatorEv;

  self.availableMethods = MethodCommons.getAvailableMethods();

  self.results = [];

  initParams();

  self.calculate = function (form){
    if(form.$invalid) {
      return;
    }
    self.results = FalsePosition.calculate(
      self.params.fn,
      self.params.varName,
      self.params.a,
      self.params.b,
      self.params.nmax,
      self.params.tol || 0.0,
      self.params.delta || 0.0);
  };

  self.openMethodsMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };

  self.onMethodSelected = function(method){
    $state.go('methods.non-lineal.' + method.replace(/\s/g, '-'), { fn: self.params.fn });
  }

  self.toggleInfo = $mdUtil.debounce(function(){
      $mdSidenav('info').toggle();
    },
    300
  );

  self.closeInfo = function () {
    $mdSidenav('info').close();
  };

  function initParams() {
    self.params = {};
    self.params.fn = $stateParams.fn || '';
    self.params.varName = $stateParams.x || 'x';
    self.params.a = $stateParams.a || 0;
    self.params.b = $stateParams.b || 0;
    self.params.nmax = $stateParams.nmax || 100;
    self.params.tol = $stateParams.tol || 0.0;
    self.params.delta = $stateParams.delta || 0.0;
  }
});
