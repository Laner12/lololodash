// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {

  var output = { hot: [], warm: [] };

  var hotTown = function (temperature){
    if (temperature > 19){
      return true
    } else {
      return false
    }
  };

   _.forEach(collection, function(temperature, town){
    if (_.every(temperature, hotTown)) {
      output.hot.push(town)
    } else if (_.some(temperature, hotTown)) {
      output.warm.push(town)
    }
  });

  return output;
}


module.exports = worker;
