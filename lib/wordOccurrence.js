'use strict';
var BST = require('../lib/BST');

var wordOccurrence = function(str) {
  str += ' '; //add a delimiter on the end
  var num = str.indexOf(' '); //find first occurrence of the delimiter
  var wordTree = new BST();
  var wordDict = {};
  while (num !== -1) { //while words separated by spaces, build the tree and map
    var word = str.substring(0, num);
    if (!wordDict[word]) {
      wordTree.insert(word);
      wordDict[word] = 1;
    } else {
      wordTree.update(word);
      wordDict[word] += 1;
    }
    str = str.substring(num + 1, str.length); //resize string
    num = str.indexOf(' '); // find next instance of space
  }
  return wordDict;
};

module.exports = wordOccurrence;
