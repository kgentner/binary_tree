'use strict';

var BSTnode = function(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.counter = 1;
};

BSTnode.prototype.show = function() {
  return this.data;
};

module.exports = BSTnode;
