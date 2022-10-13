"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var LinkedList_1 = require("./LinkedList");
var Queue = /** @class */ (function () {
    function Queue() {
        this._list = new LinkedList_1.LinkedList();
    }
    Queue.prototype.enqueue = function (value) {
        return this._list.append(value);
    };
    Queue.prototype.dequeue = function () {
        return this._list.deleteHead();
    };
    Queue.prototype.isEmpty = function () {
        return !this._list.head;
    };
    Queue.prototype.toArray = function () {
        return this._list.toArray();
    };
    return Queue;
}());
exports.Queue = Queue;
