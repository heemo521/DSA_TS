"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this._items = [];
    }
    Stack.prototype.push = function (item) {
        this._items.push(item);
    };
    Stack.prototype.pop = function () {
        return this._items.pop();
    };
    Stack.prototype.isEmpty = function () {
        return this._items.length === 0;
    };
    Stack.prototype.toArray = function () {
        return this._items.slice();
    };
    return Stack;
}());
exports.Stack = Stack;
