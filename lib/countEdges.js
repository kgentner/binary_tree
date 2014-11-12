'use strict';
var countNodes = require('./countNodes');

var countEdges = function(tree) {
  var count = countNodes(tree);
  return count - 1;
};

module.exports = countEdges;
