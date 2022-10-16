import { LinkedList } from './LinkedList';

class Stack_LinkedList {
  private _stack;

  constructor() {
    this._stack = new LinkedList();
  }

  public push(value: unknown) {
    return this._stack.prepend(value);
  }
  public pop() {
    return this._stack.deleteHead();
  }
  public isEmpty() {
    return !this._stack.head;
  }
  public toArray() {
    return this._stack.toArray();
  }
}
