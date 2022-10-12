class Stack {
  _items: unknown[];

  constructor() {
    this._items = [];
  }

  public push(item: unknown) {
    this._items.push(item);
  }

  public pop(): unknown {
    return this._items.pop();
  }

  public isEmpty(): boolean {
    return this._items.length === 0;
  }
  public toArray() {
    return this._items.slice();
  }
}
