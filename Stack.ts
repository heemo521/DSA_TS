class Stack {
  private _items: unknown[];

  constructor() {
    this._items = [];
  }

  public push(item: unknown) {
    this._items.push(item);
  }

  public pop() {
    return this._items.pop();
  }

  public isEmpty() {
    return this._items.length === 0;
  }
  public toArray() {
    return this._items.slice();
  }
}
