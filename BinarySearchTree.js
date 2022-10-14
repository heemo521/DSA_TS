"use strict";
exports.__esModule = true;
exports.Tree = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    Node.prototype.add = function (value) {
        if (!this.value) {
            this.value = value;
            return;
        }
        if (value > this.value) {
            var newNode = new Node(value);
            if (this.right) {
                this.right.add(value);
                return;
            }
            this.right = newNode;
            return;
        }
        if (value < this.value) {
            var newNode = new Node(value);
            if (this.left) {
                this.left.add(value);
                return;
            }
            this.left = newNode;
            return;
        }
    };
    Node.prototype.find = function (value) {
        if (this.value === value)
            return this;
        if (this.value && this.value < value && this.right) {
            return this.right.find(value);
        }
        if (this.value && this.value > value && this.left) {
            return this.left.find(value);
        }
        return undefined;
    };
    Node.prototype.remove = function (value) { };
    return Node;
}());
var Tree = /** @class */ (function () {
    function Tree() {
        this.root = new Node(null);
    }
    Tree.prototype.add = function (value) {
        this.root.add(value);
    };
    Tree.prototype.remove = function (value) {
        this.root.remove(value);
    };
    return Tree;
}());
exports.Tree = Tree;
var SearchTree = new Tree();
SearchTree.add(10);
SearchTree.add(2);
SearchTree.add(5);
SearchTree.add(13);
SearchTree.add(23);
console.log('added', SearchTree);
SearchTree.remove(2);
console.log(SearchTree);
