class Queue {
  public _items: unknown[];
  constructor() {
    this._items = [];
  }

  enqueue(value) {
    this._items.unshift(value);
  }

  dequeue() {
    return this._items.pop() || null;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  toArray() {
    return this._items.slice();
  }
}
