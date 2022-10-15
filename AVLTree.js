"use strict";
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
        // If we the target node to remove does not have any children, then we can just remove it from its parent
        if (!identifiedNode.left && !identifiedNode.right) {
            (_a = identifiedNode.parent) === null || _a === void 0 ? void 0 : _a.removeNode(identifiedNode);
            return;
        }
        if (identifiedNode.left && identifiedNode.right) {
            var replacementNode = identifiedNode.right.findNext();
            if (replacementNode.value &&
                replacementNode.value !== identifiedNode.right.value) {
                this.remove(replacementNode.value);
                identifiedNode.value = replacementNode.value;
                identifiedNode.left.parent = identifiedNode;
                identifiedNode.right.parent = identifiedNode;
            }
            else {
                identifiedNode.value = identifiedNode.right.value;
                identifiedNode.right = identifiedNode.right.right;
                identifiedNode.left.parent = identifiedNode;
                if (identifiedNode.right)
                    identifiedNode.right.parent = identifiedNode;
            }
        }
        var childNode = identifiedNode.left || identifiedNode.right;
        if (childNode) {
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
    Node.prototype.findNext = function () {
        if (!this.left)
            return this;
        return this.left.findNext();
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
var AVLTree = new Tree();
AVLTree.add(1);
AVLTree.add(2);
AVLTree.add(3);
console.log(AVLTree);
