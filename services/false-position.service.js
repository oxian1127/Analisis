angular.module('numerical-analysis')
.factory('FalsePosition', function(MethodCommons){
  'use strict';

  function calculate(fn, varName, a, b, nmax, tol, delta) {
    var i = 0;
    var err = 1;
    var q = a;
    var variables = {};
    var data = [];
    while (i < nmax && err > tol) {
      variables[varName] = a;
      var fa = MethodCommons.evaluate(fn, variables);
      variables[varName] = b;
      var fb = MethodCommons.evaluate(fn, variables);
      var x = b - (fb * (b - a)) / (fb - fa);
      variables[varName] = x;
      var y = MethodCommons.evaluate(fn, variables);
      err = Math.abs(x - q);
      q = x;
      data.push(angular.merge({ fx : y, error : err }, variables));
      if(Math.abs(y) <= delta) {
        break;
      }
      if((MethodCommons.evaluate(fn, variables) * y) < 0) {
        b = x;
      }
      else {
        a = x;
      }
      i++;
    }
    return data;
  }

  return {
    'calculate' : calculate
  };
});
