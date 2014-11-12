'use strict';

var getMax = function(node) {
  while (node.right !== null) {
    node = node.right;
  }
  return node.data;
};

module.exports = getMax;
