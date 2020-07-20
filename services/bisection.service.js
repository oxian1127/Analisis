angular.module('numerical-analysis')
.factory('Bisection', function bisectionService(MethodCommons){
  'use strict';

  function calculate(fn, varName, a, b, nmax, tol, delta) {
    // init everything
    var i = 0;
    var variables = {};
    variables[varName] = (a + b) / 2;
    var y = MethodCommons.evaluate(fn, variables);
    var err = 1;
    var q = a;
    var data = [];
    while (i < nmax && Math.abs(y) > delta && err > tol) {
      var x = (a + b) / 2;
      variables[varName] = x;
      y = MethodCommons.evaluate(fn, variables);
      err = Math.abs(x - q);
      var currentValue = {};
      currentValue[varName] = x;
      data.push(angular.merge({ fx : y, error : err }, currentValue));
      variables[varName] = a;
      if((MethodCommons.evaluate(fn, variables) * y) < 0) {
        b = x;
      }
      else {
        a = x;
      }
      q = x;
      i++;
    }
    return data;
  }

  return {
    'calculate' : calculate
  };
});
