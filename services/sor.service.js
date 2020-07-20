angular.module('numerical-analysis')
.factory('Sor', function bisectionService(MethodCommons){
  'use strict';

  var results = [];
  var reason="";
  var flag = false;

  function calculate(A, b, x, nmax, delta, tol,w) {
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

    var matT = ((matD.subtract(matL.multiply(w))).inv()).multiply((matD.multiply(1-w)).add(matU.multiply(w)))
    var vectC =(((matD.subtract(matL.multiply(w))).inv()).multiply(w)).multiply(vectB)

    var i=0

    
    var results = [];
    var i = 0
    for(i = 0; i < nmax; i++){
      var currentX = matT.multiply(vectX).add(vectC);
      var error = currentX.subtract(vectX).modulus();

      if(matA.multiply(currentX).subtract(vectB).modulus() <= delta || error <= tol) {
        if(error == tol){
          reason="Error is equal to tolerance";
          flag = true;
        }
        if(matA.multiply(currentX).subtract(vectB).modulus() == delta){
            reason="F(x) is equal to delta";
            flag = true;
          }
        results.push({
          x : currentX.elements,
          'error' : error,
          'delta' : matA.multiply(currentX).subtract(vectB).modulus()
        });
        return results;
      }

      vectX = currentX;
      results.push({
        x : currentX.elements,
        'error' : error,
        'delta' : matA.multiply(currentX).subtract(vectB).modulus()
      });
    }
    if(i==nmax){
      reason = "Max number of iterations reached"
      flag = true
    }

    return results;
  }

  if(!flag){
      reason = "The method converged"
    }

  function getReason(){
    console.log(reason)
    return reason;
  }

  return {
    'calculate' : calculate,
    'getReason' : getReason
  };
});
