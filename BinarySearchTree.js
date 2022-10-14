"use strict";
var _a, _b, _c, _d, _e;
exports.__esModule = true;
exports.Tree = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
    Node.prototype.add = function (value) {
        if (!this.value) {
            this.value = value;
            return;
        }
        if (value > this.value) {
            if (this.right) {
                this.right.add(value);
                return;
            }
            var newNode = new Node(value);
            this.right = newNode;
            newNode.parent = this;
            return;
        }
        if (value < this.value) {
            if (this.left) {
                this.left.add(value);
                return;
            }
            var newNode = new Node(value);
            newNode.parent = this;
            this.left = newNode;
            return;
        }
    };
    Node.prototype.remove = function (value) {
        var _a;
        var identifiedNode = this.find(value);
        if (!identifiedNode) {
            return;
        }
        if (!identifiedNode.left && !identifiedNode.right) {
            (_a = identifiedNode.parent) === null || _a === void 0 ? void 0 : _a.removeNode(identifiedNode);
            return;
        }
        if (identifiedNode.left && identifiedNode.right) {
        }
        else {
            var childNode = identifiedNode.left || identifiedNode.right;
            identifiedNode.left = childNode.left;
            identifiedNode.right = childNode.right;
            identifiedNode.value = childNode.value;
        }
    };
    Node.prototype.removeNode = function (node) {
        if (this.left && this.left === node) {
            this.left = null;
            return;
        }
        if (this.right && this.right === node) {
            this.right = null;
            return;
        }
    };
    Node.prototype.find = function (value) {
        if (this.value === value)
            return this;
        if (this.value && this.value < value && this.right)
            return this.right.find(value);
        if (this.value && this.value > value && this.left)
            return this.left.find(value);
        return undefined;
    };
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
    Tree.prototype.find = function (value) {
        return this.root.find(value);
    };
    return Tree;
}());
exports.Tree = Tree;
var SearchTree = new Tree();
SearchTree.add(2);
SearchTree.add(6);
SearchTree.add(20);
SearchTree.add(25);
SearchTree.add(39);
console.log('Before REMOVE! ' + ((_a = SearchTree.find(39)) === null || _a === void 0 ? void 0 : _a.value));
SearchTree.remove(39);
console.log('Before REMOVE! ' + ((_b = SearchTree.find(20)) === null || _b === void 0 ? void 0 : _b.value));
SearchTree.remove(20);
console.log('added', SearchTree);
console.log('DELETED! ' + ((_c = SearchTree.find(5)) === null || _c === void 0 ? void 0 : _c.value));
console.log('DELETED! ' + ((_d = SearchTree.find(20)) === null || _d === void 0 ? void 0 : _d.value));
console.log('DELETED! ' + ((_e = SearchTree.find(39)) === null || _e === void 0 ? void 0 : _e.value));
