var Queue = /** @class */ (function () {
    function Queue() {
        this._items = [];
    }
    Queue.prototype.enqueue = function (value) {
        this._items.unshift(value);
    };
    Queue.prototype.dequeue = function () {
        return this._items.pop() || null;
    };
    Queue.prototype.isEmpty = function () {
        return this._items.length === 0;
    };
    Queue.prototype.toArray = function () {
        return this._items.slice();
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue('James');
queue.enqueue('Peter');
queue.enqueue('Paul');
console.log(queue.toArray());
queue.dequeue();
console.log(queue.toArray());
queue.dequeue();
console.log(queue.isEmpty());
queue.dequeue();
console.log(queue.isEmpty());
console.log(queue.dequeue());
