angular.module('numerical-analysis')
.controller('JacobiCtrl', function (Jacobi, Utils) {

  var self = this;

  self.matAStr = null;
  self.vectBStr = null;
  self.vectXStr = null;

  self.options = {
    nmax : 100,
    delta : 0,
    tol : 0
  };

  self.calculate = function () {
    var matA = Utils.parseCSV(self.matAStr, '\n', ';').map(function (row) {
      return row.map(parseFloat);
    });
    var vectB = Utils.parseCSV(self.vectBStr, '\n', ';')[0].map(parseFloat);
    var vectX = Utils.parseCSV(self.vectXStr, '\n', ';')[0].map(parseFloat);

    self.results =
      Jacobi.calculate(matA, vectB, vectX, self.options.nmax, self.options.delta, self.options.tol);
  };
});
