angular.module('numerical-analysis')
.controller('CubicSplinesCtrl', function (CubicSplines, Utils) {

  var self = this;

  self.results = [];

  self.xsStr = null;
  self.ysStr = null;

  self.calculate = function () {
    var xs = Utils.parseCSV(self.xsStr, '\n', ';')[0].map(parseFloat);
    var ys = Utils.parseCSV(self.ysStr, '\n', ';')[0].map(parseFloat);
    var res = CubicSplines.calculate(xs, ys);
    for(var i = 0; i < res.length; i++) {
      var result = {};
      result.desc = xs[i] + ' ≤ x ≤ ' + xs[i + 1] + ':';
      var splineStr = res[i].a;
      splineStr += ' + ' + res[i].b + '(x - ' + res[i].x + ')';
      splineStr += ' + ' + res[i].c + '(x - ' + res[i].x + ')^2';
      splineStr += ' + ' + res[i].d + '(x - ' + res[i].x + ')^3';
      result.spline = splineStr;
      self.results.push(result);
    }
    console.log();
  };
});
