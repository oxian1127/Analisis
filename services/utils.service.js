angular.module('numerical-analysis')
.factory('Utils', function utilsService(){
  'use strict';

  function parseCSV(contents, rowSep, colSep) {
    var matrix = contents.split(rowSep).map(function(elem){return elem.split(colSep)});
    // The actual values. Last row is ommitted as it's just a LF.
    return matrix.slice(0, matrix.length - 1);
  }

  return {
    'parseCSV' : parseCSV
  }
});
