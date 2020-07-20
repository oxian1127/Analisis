angular.module('numerical-analysis')
.factory('Richardson', function RichardsonService(MethodCommons){
  'use strict';

  var flag = false;

  function calculate(A, b, x, nmax, delta, tol) {
    var matA = $M(A);
	var matI = matA.I(matA.cols());
    var vectB = $V(b);
    var vectX = $V(x);

    var matT = matA.add(matI);
    var vectC = vectB.multiply(-1);

    var i=0;
    
    var results = [];
    while(i < nmax ){
		var currentX = matT.multiply(vectX).add(vectC);
      var error = currentX.subtract(vectX).modulus();

      if(matA.multiply(currentX).subtract(vectB).modulus() <= delta || error <= tol) {
        if(error == tol){
          flag = true;
        }
        if(matA.multiply(currentX).subtract(vectB).modulus() == delta){
            flag = true;
          }
        results.push({
          x : currentX.elements,
          'error' : error
        });
        return results;
      }

      vectX = currentX;
      results.push({
        x : currentX.elements,
        'error' : error
      });
	  
		i++;
    }
	
    if(i==nmax){
      flag = true
    }

    return results;
  }

  return {
    'calculate' : calculate
  };
});
