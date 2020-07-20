angular.module('numerical-analysis')
.controller('LinealSplinesCtrl', function (Utils) {

  var self = this;

  self.xsStr = null;
  self.ysStr = null;

  self.lineal = function () {
    self.puntosx = Utils.parseCSV(self.xsStr, '\n', ';')[0].map(parseFloat);
    self.puntosy = Utils.parseCSV(self.ysStr, '\n', ';')[0].map(parseFloat);
    self.arr = []
    var nroPuntos= 0;
    for(var i=0;i<self.puntosx.length;i++){
        nroPuntos++;
    }

    var pendientes = []
    self.ecuaciones = []

    for(var i=1;i<nroPuntos;i++){
        pendientes.push((self.puntosy[i-1]-self.puntosy[i])/(self.puntosx[i-1]-self.puntosx[i]))
    }
    j=1;
    for(var i=0;i<pendientes.length;i++){
        
        self.ecuaciones.push({Eq: pendientes[i]+"(x"+
            (self.puntosx[i]<0?(("+"+(-1)*self.puntosx[i])):("-"+self.puntosx[i]))+")"+
        (self.puntosy[i]<0?(self.puntosy[i]):("+"+self.puntosy[i])),
        Lim: self.puntosx[i]+" <= x < " + self.puntosx[j]})
        j++
    }

  };
});
