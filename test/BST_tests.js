  'use strict';
var expect = require('chai').expect;

var BST = require('../lib/BST');
var countNodes = require('../lib/countNodes');
var countEdges = require('../lib/countEdges');
var getMin = require('../lib/getMin');
var getMax = require('../lib/getMax');
var wordOccurrence = require('../lib/wordOccurrence');

describe('Binary Search Tree', function() {
  var nums = new BST();
  nums.insert(23);
  nums.insert(45);
  nums.insert(16);
  nums.insert(37);
  nums.insert(3);
  nums.insert(99);
  nums.insert(22);

  it('should count the nodes in a binary search tree', function() {
    expect(countNodes(nums.root)).to.eql(7);
  });

  it('should count the edges in a binary search tree', function() {
    expect(countEdges(nums.root)).to.eql(6);
  });

  it('should get the max value in a binary search tree', function() {
    expect(getMax(nums.root)).to.eql(99);
  });

  it('should get the minimum value in a binary search tree', function() {
    expect(getMin(nums.root)).to.eql(3);
  });
});

describe('The Occurence of Words', function() {
  var str = 'The duke duke duke duke of earl';
  it('should get the occurrences of each word', function() {
    expect(wordOccurrence(str)).to.eql({ The: 1, duke: 4, of: 1, earl: 1});
  });
});
