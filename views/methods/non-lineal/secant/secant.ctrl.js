angular.module('numerical-analysis')
.controller('SecantCrtl',function(Secant, $stateParams){
  var self = this;

  self.func = $stateParams.fn || '';

  self.Calculate = function calculatebysecant(){
    Secant.CalculateBySecant(self.func,self.a,self.b,self.nmax,self.tol,self.delta);
    self.result = Secant.getResult();
    //self.reason = Secant.getReason();
    self.arrx = Secant.getx();
    self.arrf = Secant.getfx();
    self.arrError = Secant.getError();
    self.arrDelta = Secant.getDelta();
  }

})
