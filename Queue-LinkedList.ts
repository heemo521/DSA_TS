import { LinkedList } from './LinkedList';

class Queue {
  _list;
  constructor() {
    this._list = new LinkedList();
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
