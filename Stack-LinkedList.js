"use strict";
exports.__esModule = true;
exports.Stack_LinkedList = void 0;
var LinkedList_1 = require("./LinkedList");
var Stack_LinkedList = /** @class */ (function () {
    function Stack_LinkedList() {
        this._stack = new LinkedList_1.LinkedList();
    }
    Stack_LinkedList.prototype.push = function (value) {
        return this._stack.prepend(value);
    };
    Stack_LinkedList.prototype.pop = function () {
        return this._stack.deleteHead();
    };
    Stack_LinkedList.prototype.isEmpty = function () {
        return !this._stack.head;
    };
    Stack_LinkedList.prototype.toArray = function () {
        return this._stack.toArray();
    };
    return Stack_LinkedList;
}());
exports.Stack_LinkedList = Stack_LinkedList;
