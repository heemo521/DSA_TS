// export class HashTable {}

//Hashing => key to index

const word = 'areacode!';

function firstFirstRep(str: string) {
  const table = {};
  for (const char of str) {
    if (char in table) return char;
    table[char] = 1;
  }
  return null;
}

console.log(firstFirstRep('areacode'));
