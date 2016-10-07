// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
  var output = [];

  var sorted = _.groupBy(collection, "username")

  _.forEach(sorted, function(comments, name){
    output.push({
      username: name,
      comment_count: _.size(comments)
    })
  })

  return _.sortBy(output, "comment_count").reverse()
};

// export the worker function as a nodejs module
module.exports = worker;
