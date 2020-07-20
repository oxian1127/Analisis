angular.module('numerical-analysis')
.controller('LagrangeCtrl', function (Utils) {

  var self = this;

    self.Xs = null;
    self.Ys = null;

self.lagrange = function(){
    self.puntosx = Utils.parseCSV(self.Xs, '\n', ';')[0].map(parseFloat);
    self.puntosy = Utils.parseCSV(self.Ys, '\n', ';')[0].map(parseFloat);
    self.arr = []
    var nroPuntos= 0;
    for(var i=0;i<self.puntosx.length;i++){
        nroPuntos++;
    }
    var pol = "P(x)= "
    for(var k=0;k<nroPuntos;k++){
        termino = "";
        for(var i = 0; i < nroPuntos ; i++){
            if(i!=k){
                termino = termino + ("[(x"+
                    (self.puntosx[i]<0?("+"+(-1)*self.puntosx[i]):("-"+self.puntosx[i]))
                +")/("+self.puntosx[k]+(self.puntosx[i]<0?("+"+(-1)*self.puntosx[i]):("-"+self.puntosx[i]))+")]");  
            }
        }
        self.arr.push({
            num:k,
            ter:[termino.slice(0, termino.length/2), '*', termino.slice(termino.length/2)].join('')
        })
        console.log("L"+k+"(x):"+termino);
        pol += (self.puntosy[k]>0?"+":"")+self.puntosy[k]+"*"+termino+"\n";
    }
    self.res = pol
    };
})
