angular.module('numerical-analysis')
.controller('ReductionCtrl', function (Utils) {

  var self = this;

    self.Xs = null;
    self.Ys = null;

self.reduction = function(){
    self.puntosx = Utils.parseCSV(self.Xs, '\n', ';')[0].map(parseFloat);
    self.puntosy = Utils.parseCSV(self.Ys, '\n', ';')[0].map(parseFloat);
    self.arr = []
    var nroPuntos= 0;
    var pol = "";
	var cantidadPuntosx = self.puntosx.length;
	var cantidadPuntosy = self.puntosy.length;

	for(var j=0; j<cantidadPuntosy; j++)
	{
		var valor = self.puntosx[j];
		//alert(valor);
		
		for(var i=(cantidadPuntosx -1);i>0;i--)
		{
			var resultado = 1;
			
			for(var k=1;k<= i;k++)
			{
				resultado = valor * resultado;
			}
			
			//alert(resultado);
			pol = pol + resultado.toString() + "a" + i.toString() + " + ";
			//alert(pol);
		}
		//alert(self.puntosy[j]);
		
		pol = pol + "c = " + self.puntosy[j].toString() + "\n";
		//alert(pol);
	}
    self.res = pol
    };
})
