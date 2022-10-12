import { LinkedList } from './LinkedList';

export class Stack_LinkedList {
  _stack: LinkedList;

  constructor() {
    this._stack = new LinkedList();
  }

  public push(value: unknown) {
    return this._stack.prepend(value);
  }
  public pop() {
    return this._stack.deleteHead();
  }
  public isEmpty(): boolean {
    return !this._stack.head;
  }
  public toArray() {
    return this._stack.toArray();
  }
}
