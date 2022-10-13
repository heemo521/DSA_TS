export class Queue {
  private _items: unknown[];

  constructor() {
    this._items = [];
  }

  public enqueue(value: unknown) {
    this._items.unshift(value);
  }

  public dequeue() {
    return this._items.pop() || null;
  }

  public isEmpty(): boolean {
    return this._items.length === 0;
  }

  public toArray() {
    return this._items.slice();
  }
}

// var queue = new Queue();
// queue.enqueue('James');
// queue.enqueue('Peter');
// queue.enqueue('Paul');
// console.log(queue.toArray());
// queue.dequeue();
// console.log(queue.toArray());
// queue.dequeue();
// console.log(queue.isEmpty());
// queue.dequeue();
// console.log(queue.isEmpty());
// console.log(queue.dequeue());
