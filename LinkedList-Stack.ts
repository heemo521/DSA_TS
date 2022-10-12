import { LinkedList } from './LinkedList';

class Stack {
  _stack: LinkedList;
  constructor() {
    this._stack = new LinkedList();
  }

  // since we prepend here, we need to pop the head
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
