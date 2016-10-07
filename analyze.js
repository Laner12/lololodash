// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
    var output = {
      "average": averageNumber,
      "underperform": [],
      "overperform": []
    }
    var averageNumber = _.filter(collection, function("income"){
      Math.average("income")
    })

    _.forEach(collection, function(object){
      if (object.income > averageNumber) {
        output.overperform.push({name: object.name, income: object.income})
      } else if (object.income < averageNumber) {
        output.underperform.push({name: object.name, income: object.income})
      }
    });
    return output;
};

// export the worker function as a nodejs module
module.exports = worker;
