import { LinkedList } from './LinkedList';

export class Queue {
  private _list;

  constructor() {
    this._list = new LinkedList();
  }

  public enqueue(value: unknown) {
    return this._list.append(value);
  }

  public dequeue() {
    return this._list.deleteHead();
  }

  public isEmpty() {
    return !this._list.head;
  }

  public toArray() {
    return this._list.toArray();
  }
}
