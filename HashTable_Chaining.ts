// Resolving Collisions with "Chaining"
export class Chaining_HashTable {
  private _buckets: [][];
  public size: number;
  constructor() {
    this.size = 1000;
    this._buckets = Array.from(new Array(this.size), () => []);
  }

  private _hash(key: string) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  public set(key: string | number, value: unknown) {
    key = String(key);
    const keyHash = this._hash(key);
    const bucketArray: [key: string, value: unknown][] = this._buckets[keyHash];
    const storedElement = bucketArray.find((ele) => ele[0] === key);

    if (storedElement) {
      storedElement[1] = value;
    } else {
      bucketArray.push([key, value]);
    }
  }

  public get(key: string) {
    const keyHash = this._hash(key);
    const bucketArray: [key: string, value: unknown][] = this._buckets[keyHash];
    return bucketArray.find((ele) => ele[0] === key);
  }
}
