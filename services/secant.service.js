angular.module('numerical-analysis')
.factory('Secant',function SecantMethod(){

  function eval(func,num){
    return Parser.parse(func).evaluate({ x: num });
  }

  var result = 0;
  var error = 1;
  var arrx = [];
  var arrf = [];
  var arrError = [null,null];
  var arrDelta = [null,null];
  var reason = "";
  var i = 0;

  function CalculateBySecant(func,a,b,nmax,tol,delta){
    console.log("entra");
    var x = 0;
    var h = 1;
    var q = 0;
    arrx = [a,b];
    arrf = [eval(func,a).toExponential(),eval(func,b).toExponential()];
    while((i < nmax) && (error > tol) && (h > delta)){
      x = Number(b) - ((eval(func,Number(b)))*(Number(b)-Number(a))/(eval(func,Number(b))-eval(func,Number(a))));
      arrx.push(x.toExponential());
      h = Math.abs(eval(func,x));
      arrDelta.push(h.toExponential());
      error = Math.abs(Number(x) - Number(q));
      arrError.push((error.toExponential()));
      var tempx = eval(func,Number(x));
      arrf.push(Number(tempx.toExponential()));
      a = Number(b);
      b = Number(x);
      q = x;
      i++;
    }
    if(error == tol){
      reason="Error is equal to tolerance";
    }else{
      if(h == delta){
        reason="F(x) is equal to delta";
      }
    }
    result = x;
  };

  function getResult(){
    return result;
  }
  function getx(){
    return arrx;
  }
  function getfx(){
    return arrf;
  }
  function getError(){
    return arrError;
  }
  function geti(){
    return i;
  }
  function getReason(){
    return reason;
  }
  function getDelta(){
    return arrDelta;
  }


  return{
    'CalculateBySecant' : CalculateBySecant,
    'getResult' : getResult,
    'getx' : getx,
    'getfx' : getfx,
    'getError' : getError,
    'geti' : geti,
    'getReason' : getReason,
    'getDelta' : getDelta

  };

})
