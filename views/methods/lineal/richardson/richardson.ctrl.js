	angular.module('numerical-analysis')
.controller('richardsonCtrl', function ($mdSidenav, $mdUtil,Richardson,Utils) {

  var self = this;
  self.fileA = null;
  self.fileb = null;
  self.filex = null;


  self.calculate = function () {

    var matA = Utils.parseCSV(self.fileA, '\n', ';').map(function (row) {
      return row.map(parseFloat);
    });
	
    var vectB = Utils.parseCSV(self.fileb, '\n', ';')[0].map(parseFloat);
    
    var vectX = Utils.parseCSV(self.filex, '\n', ';')[0].map(parseFloat);

    self.res = Richardson.calculate(matA, vectB, vectX, self.nmax, self.delta, self.tol);
  }

  self.toggleInfo = $mdUtil.debounce(function(){
      $mdSidenav('info').toggle();
    },
    300
  );

  self.getNumber = function(num) {
    return new Array(num);   
  }

    self.closeInfo = function () {
    $mdSidenav('info').close();
  };
})
