angular.module('numerical-analysis')
.factory('Reduction', function bisectionService(MethodCommons){
  'use strict';

  function calculate(x, y) {
    
    var vectY = $V(y);
    var vectX = $V(x);
          alert('Hola servicio');
	
    var results = [];

    for(var i = 0; i < nmax; i++){
      
      results.push({
        x : "Oscar"
      });
    }

    return results;
  }

  return {
    'calculate' : calculate
  };
});
