angular.module('numerical-analysis')
.factory('Jacobi', function bisectionService(MethodCommons){
  'use strict';

  function calculate(A, b, x, nmax, delta, tol) {
    var matA = $M(A);
    var vectB = $V(b);
    var vectX = $V(x);
    var matD = Matrix.Diagonal(matA.diagonal().elements);
    var matU = matA.map(function(elem, i, j) {
      return i < j ? elem * -1 : 0;
    });
    var matL = matA.map(function(elem, i, j) {
      return i > j ? elem * -1 : 0;
    });

    var invD = matD.inv();

    var matT = invD.multiply(matL.add(matU));
    var vectC = invD.multiply(vectB);
    var results = [];

    for(var i = 0; i < nmax; i++){
      var currentX = matT.multiply(vectX).add(vectC);
      var error = currentX.subtract(vectX).modulus();
      var curDelta = matA.multiply(currentX).subtract(vectB).modulus();

      if(curDelta <= delta || error <= tol) {
        results.push({
          x : currentX.elements,
          'error' : error,
          'delta' : curDelta
        });
        return results;
      }

      vectX = currentX;
      results.push({
        x : currentX.elements,
        'error' : error,
        'delta' : curDelta
      });
    }

    return results;
  }

  return {
    'calculate' : calculate
  };
});
