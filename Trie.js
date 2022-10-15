'use strict';
// exports.__esModule = true;
// // exports.Trie = exports.TrieNode = void 0;
var TrieNode = /** @class */ (function () {
  function TrieNode() {
    this.value = null;
    this.children = Array(26); // Creates an empty array with 26 available children
  }
  return TrieNode;
})();
// exports.TrieNode = TrieNode;
var Trie = /** @class */ (function () {
  function Trie() {
    this.root = new TrieNode();
  }
  Trie.prototype.insert = function (key, value) {
    var curNode = this.root;
    for (var i = 0; i < key.length; i++) {
      var alphabetIndex = key[i].charCodeAt(0) - 97; // Position of the character in the alphabet. 'a'.charCodeAt(0) - 97 will return 0 and 'z' will return 25
      if (!curNode.children[alphabetIndex]) {
        var newNode = new TrieNode();
        curNode.children[alphabetIndex] = newNode;
      }
      curNode = curNode.children[alphabetIndex];
    }
    curNode.value = value;
    return curNode;
  };
  Trie.prototype.search = function (key) {
    var curNode = this.root;
    for (var i = 0; i < key.length; i++) {
      var alphabetIndex = key[i].charCodeAt(0) - 97;
      if (!curNode.children[alphabetIndex]) {
        return null;
      }
      curNode = curNode.children[alphabetIndex];
    }
    return curNode.value;
  };
  return Trie;
})();
// exports.Trie = Trie;
var trie = new Trie();
trie.insert('a', 'apple');
trie.insert('ass', [',ax', 'fsdf']);
trie.insert('asking', 1234);
console.log(trie);
console.log(trie.search('a'));
console.log(trie.search('ass'));
