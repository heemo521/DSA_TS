"use strict";
exports.__esModule = true;
exports.LinkedList = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        if (value === null || value === undefined) {
            this.head = null;
            this.tail = null;
            return;
        }
        var node = new Node(value);
        this.head = node;
        this.tail = node;
    }
    LinkedList.prototype.append = function (value) {
        var node = new Node(value);
        if (this.tail)
            this.tail.next = node;
        this.tail = node;
        if (!this.head)
            this.head = node;
        return node;
    };
    LinkedList.prototype.prepend = function (value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        if (!this.tail)
            this.tail = node;
        return node;
    };
    LinkedList.prototype.insertAfter = function (value, referenceNode) {
        var existingNode = this.find(referenceNode);
        if (existingNode) {
            var newNode = new Node(value);
            newNode.next = existingNode.next;
            existingNode.next = newNode;
        }
    };
    LinkedList.prototype.find = function (value) {
        if (!this.head)
            return null;
        var curNode = this.head;
        while (curNode) {
            if (curNode.value === value) {
                return curNode;
            }
            curNode = curNode.next;
        }
        return null;
    };
    LinkedList.prototype["delete"] = function (value) {
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }
        if (!this.head) {
            this.tail = null;
            return;
        }
        var curNode = this.head;
        while (curNode.next) {
            if (curNode.next.value === value) {
                curNode.next = curNode.next.next;
            }
            else {
                curNode = curNode.next;
            }
        }
        if (this.tail && this.tail.value === value) {
            this.tail = curNode;
        }
    };
    LinkedList.prototype.deleteHead = function () {
        if (!this.head)
            return null;
        var deletedNode = this.head;
        if (this.head.next) {
            this.head = this.head.next;
        }
        else {
            this.head = this.tail = null;
        }
        return deletedNode;
    };
    LinkedList.prototype.toArray = function () {
        var elements = [];
        var curNode = this.head;
        while (curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }
        return elements;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
