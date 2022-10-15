export class MaxHeap {
  private heapElements: number[];

  constructor() {
    this.heapElements = [];
  }

  public insert(value: number) {
    this.heapElements.push(value);
    let currentElementIndex = this.heapElements.length - 1;
    let parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
    while (
      parentElementIndex >= 0 &&
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

  public process() {
    if (this.heapElements.length === 0) return null;

    if (this.heapElements.length === 1) return this.heapElements.pop();

    const topElement = this.heapElements[0];
    const lastElement = this.heapElements.pop();

    if (lastElement) this.heapElements[0] = lastElement;

    let currentElementIndex = 0;
    let leftChildElementIndex = currentElementIndex * 2 + 1;
    let rightChildElementIndex = currentElementIndex * 2 + 2;
    let childElementIndex =
      this.heapElements[rightChildElementIndex] &&
      this.heapElements[rightChildElementIndex] >=
        this.heapElements[leftChildElementIndex]
        ? rightChildElementIndex
        : leftChildElementIndex;

    while (
      this.heapElements[childElementIndex] &&
      this.heapElements[currentElementIndex]
    ) {
      const currentNode = this.heapElements[currentElementIndex];
      const currentChildNode = this.heapElements[childElementIndex];
      this.heapElements[childElementIndex] = currentNode;
      this.heapElements[currentElementIndex] = currentChildNode;
    }

    return topElement;
  }
}

const minHeap = [250, 197, 85, 101, 12, 40, 15];
//                 250
//               /     \
//            197       85
//           /  \      /  \
//         101  12   40    15

// parentElementIndex = Math.floor((childIndex + 1) / 2) - 1

// leftChildElementIndexElementIndex = parentElementIndex * 2 + 1
// rightChildElementIndex = parentElementIndex * 2 + 2

// To find the parent of number 12,
// Math.floor((4 + 1) / 2) - 1 = 1  => heap[1] is 197

const heap = new MaxHeap();

for (const child of minHeap.reverse()) {
  heap.insert(child);
}

console.log(heap);
