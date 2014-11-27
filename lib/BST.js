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

BST.prototype.find = function(data) {
  var current = this.root;
  while (current && current.data !== data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return current;
};

BST.prototype.update = function(data) {
  var word = this.find(data);
  word.count++;
  return word;
};

module.exports = BST;
