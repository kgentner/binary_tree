'use strict';

var countNodes = function(node) {
  if (node.data == null) {
    return 0;
  } else {
    if (node.left == null && node.right == null) {
      return 1;
    } else {
      return countNodes(node.left) + countNodes(node.right) + 1;
    }
  }
};

module.exports = countNodes;
