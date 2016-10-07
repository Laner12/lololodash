// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
    return _.chain(collection)
      .sortBy()
      .map(function(word){
        return word.toUpperCase() + "CHAINED";
      });
};

// export the worker function as a nodejs module
module.exports = worker;
