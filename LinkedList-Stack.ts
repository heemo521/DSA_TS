import { LinkedList } from './LinkedList';

class Stack {
  _stack: LinkedList;
  constructor() {
    this._stack = new LinkedList();
  }

  push(value: unknown) {
    return this._stack.prepend(value);
  }
}
