'use strict';
var BSTnode = require('./BSTnode');

var BST = function() {
  this.root = null;
};

BST.prototype.insert = function(data) {
  var n = new BSTnode(data, null, null);
  if (this.root === null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
};

module.exports = BST;
