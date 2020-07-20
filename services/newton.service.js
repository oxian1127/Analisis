angular.module('numerical-analysis')
.factory('Newton', function NewtonService(MethodCommons){
  'use strict';

  function calculate(fn, dr, varName, a, nmax, tol, delta) {
    // init everything
    var i = 0;
    var variables = {};
    variables[varName] = a;
    var y = MethodCommons.evaluate(fn, variables);
	var ydr = MethodCommons.evaluate(dr, variables);
    var err = tol + 1;
    var q = a;
    var data = [];
    var currentValue = {};
	currentValue[varName] = a;
    data.push(angular.merge({ fx : y, error : err }, { fdr : ydr }, currentValue)); 
	 
    while (i < nmax && y != 0 && ydr != 0 && Math.abs(y) > delta && err > tol) {
      var x = q - ( y / ydr);
      variables[varName] = x;
      y = MethodCommons.evaluate(fn, variables)
	  ydr = MethodCommons.evaluate(dr, variables)
      err = Math.abs(x - q);
	  q = x;
      currentValue[varName] = x;
      data.push(angular.merge({ fx : y, error : err }, { fdr : ydr }, currentValue));  

		i = i + 1;	  
    }
    return data;
  }

  return {
    'calculate' : calculate
  };
});
