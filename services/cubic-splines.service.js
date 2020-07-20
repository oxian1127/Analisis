angular.module('numerical-analysis')
.factory('CubicSplines', function cubicSplinesService(MethodCommons){
  'use strict';

  function calculate(xs, ys) {
    if(xs.length !== ys.length) return;
    if(xs.length < 3) return;
    xs = sortByX(xs);
    var n = ys.length - 1;
    var hs = new Array(n + 1);
    var ls = new Array(n + 1);
    var us = new Array(n + 1);
    var zs = new Array(n + 1);
    var as = new Array(n)
    var bs = new Array(n);
    var cs = new Array(n + 1);
    var ds = new Array(n);
    ls[0] = 1;
    us[0] = 0;
    zs[0] = 0;
    hs[0] = xs[1] - xs[0];

    for(var i = 1; i < n; i++) {
      hs[i] = xs[i+1] - xs[i];
      ls[i] = 2 * (xs[i+1] - xs[i-1]) - (hs[i-1] * us[i-1]);
      us[i] = hs[i] / ls[i];
      as[i] = (3 / hs[i]) * (ys[i+1] - ys[i]) - (3 / hs[i-1]) * (ys[i] - ys[i-1]);
      zs[i] = (as[i] - (hs[i-1] * zs[i-1])) / ls[i];
    }

    ls[n] = 1;
    zs[n] = 0;
    cs[n] = 0;

    for(var j = n - 1; j >= 0; j--) {
      cs[j] = zs[j] - (us[j] * cs[j+1]);
      bs[j] = ((ys[j+1] - ys[j]) / hs[j]) - ((hs[j] * (cs[j+1] + 2 * cs[j])) / 3);
      ds[j] = ((cs[j+1] - cs[j]) / (3 * hs[j]));
    }
    var splineParams = [];
    for(var i = 0; i < n; i++) {
      var params = {
        x: xs[i],
        a: ys[i],
        b: bs[i],
        c: cs[i],
        d: ds[i]
      }
      splineParams.push(params);
    }
    return splineParams;
  }

  function sortByX(points) {
    points.sort(function (a, b) {
      return a - b;
    });

    return points;
  }

  return {
    'calculate': calculate
  };
});
