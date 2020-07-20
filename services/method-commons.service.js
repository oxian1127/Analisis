angular.module('numerical-analysis')
.factory('MethodCommons', function methodCommonsService() {
  'use strict';

  function evaluate(fn, vars){
    return Parser.parse(fn).evaluate(vars);
  }

  function getAvailableMethods(){
    return ['bisection', 'false position', 'newton', 'secant', 'fixed point'];
  }

  return {
    'evaluate' : evaluate,
    'getAvailableMethods' : getAvailableMethods
  };
})
