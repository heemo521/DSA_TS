"use strict";
exports.__esModule = true;
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(value, priority) {
        this.value = value;
        this.next = null;
        this.priority = priority;
    }
    return Node;
}());
exports.Node = Node;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.first = null;
    }
    PriorityQueue.prototype.insert = function (value, priority) {
        var newNode = new Node(value, priority);
        if (!this.first || priority > this.first.priority) {
            newNode.next = this.first;
            this.first = newNode;
        }
        else {
            var currentNode = this.first;
            while (currentNode.next && priority < currentNode.next.priority) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
    };
    PriorityQueue.prototype.process = function () {
        if (!this.first) {
            return null;
        }
        var first = this.first;
        this.first = this.first.next || null;
        return first;
    };
    PriorityQueue.prototype.print = function () {
        var count = 1;
        var currentNode = this.first;
        console.log('TO DO');
        while (currentNode) {
            console.log("".concat(count++, ". ").concat(currentNode.value, " | Priority #").concat(currentNode.priority));
            currentNode = currentNode.next;
        }
    };
    return PriorityQueue;
}());
var queue = new PriorityQueue();
queue.insert('Clean up a room', 5);
queue.insert('Do taxes', 99);
queue.insert('Get a job', 1000000);
queue.insert('Learn to code', 105);
queue.print();
