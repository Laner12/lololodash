// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
    return _.forEach(collection, function(item) {
        if (item.population <= 0.28){
          item.size = "small";
        } else if (item.population <= 0.58) {
          item.size = "med";
        } else {
          item.size = "big";
        }
      }
    )
};

// export the worker function as a nodejs module
module.exports = worker;
