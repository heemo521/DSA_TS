"use strict";
exports.__esModule = true;
exports.Heap = void 0;
var Heap = /** @class */ (function () {
    function Heap() {
        this.heapElements = [];
    }
    Heap.prototype.insert = function (value) {
        this.heapElements.push(value);
        var currentElementIndex = this.heapElements.length - 1;
        var parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
        while (parentElementIndex >= 0 &&
            this.heapElements[currentElementIndex] >
                this.heapElements[parentElementIndex]) {
            var parentElement = this.heapElements[parentElementIndex];
            this.heapElements[parentElementIndex] =
                this.heapElements[currentElementIndex];
            this.heapElements[currentElementIndex] = parentElement;
            currentElementIndex = parentElementIndex;
            parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
        }
    };
    return Heap;
}());
exports.Heap = Heap;
var minHeap = [250, 197, 85, 101, 12, 40, 15];
//                 250
//               /     \
//            197       85
//           /  \      /  \
//         101  12   40    15
// parentIndex = Math.floor((childIndex + 1) / 2) - 1
// To find the parent of number 12,
// Math.floor((4 + 1) / 2) - 1 = 1  => heap[1] is 197
var heap = new Heap();
for (var _i = 0, _a = minHeap.reverse(); _i < _a.length; _i++) {
    var child = _a[_i];
    heap.insert(child);
}
console.log(heap);
