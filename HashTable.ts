export class HashTable {
  private _buckets: [][]; // Resolving Collisions with "Chaining"
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

  // public showInfo() {
  //   for (const key in this._buckets) {
  //     if (this._buckets[key] !== null) {
  //       console.log(`{${key}: ${this._buckets[key]}}`);
  //     }
  //   }
  // }
}

//Hashing => key to index

// const word = 'I am Iron Man!';

// function firstFirstRep(str: string) {
//   const table = new HashTable();
//   for (const char of str) {
//     if (char in table) return char;
//     table[char] = 1;
//   }
//   return null;
// }

// const result = firstFirstRep(word);

// console.log('The expected result is "I" and the actual result is ' + result);
