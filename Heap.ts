export class Heap {
  private heapElements: number[];

  constructor() {
    this.heapElements = [];
  }

  public insert(value: number) {
    this.heapElements.push(value);
    let currentElementIndex = this.heapElements.length - 1;
    let parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
    while (
      parentElementIndex !== 0 &&
      this.heapElements[currentElementIndex] >
        this.heapElements[parentElementIndex]
    ) {
      const parentElement = this.heapElements[parentElementIndex];
      this.heapElements[parentElementIndex] =
        this.heapElements[currentElementIndex];
      this.heapElements[currentElementIndex] = parentElement;
      currentElementIndex = parentElementIndex;
      parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
    }
  }
}

const minHeap = [250, 197, 85, 101, 12, 40, 15];
//                 250
//               /     \
//            197       85
//           /  \      /  \
//         101  12   40    15

// parentIndex = Math.floor((childIndex + 1) / 2) - 1
// To find the parent of number 12,
// Math.floor((4 + 1) / 2) - 1 = 1  => heap[1] is 197

const heap = new Heap();

for (const child of minHeap) {
  heap.insert(child);
}

console.log(heap);
