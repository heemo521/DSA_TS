// Resolving Collisions with "Open-Address"
export class Open_Address_HashTable {
  private _buckets: { key: string; value: unknown }[];

  private _size: number;

  constructor() {
    this._size = 1000;
    this._buckets = Array(this._size).fill(null);
  }

  private _hash(key: string) {
    let hash = 0;
    for (const char of key) hash += char.charCodeAt(0);
    return hash % this._size;
  }

  public set(key: string | number, value: unknown) {
    key = String(key);
    let keyHash = this._hash(key);

    while (this._buckets[keyHash] !== null) {
      keyHash++;
    }
    this._buckets[keyHash] = { key, value };
  }

  public get(key: string) {
    const keyHash = this._hash(key);

    for (let i = keyHash; i < this._buckets.length; i++) {
      if (!this._buckets[i]) continue;

      if (this._buckets[i].key === key) return this._buckets[i].value;
    }
    return null;
  }
}
