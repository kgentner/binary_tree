'use strict';

var getMin = function(node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node.data;
};

module.exports = getMin;
