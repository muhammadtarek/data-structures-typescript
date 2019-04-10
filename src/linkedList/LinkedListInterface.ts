interface LinkedListInterface {
  addToHead(item: any): void,
  addToTail(item: any): void,
  has(item: any): boolean,
  isEmpty(): boolean,
  size(): number,
  iterator(): IterableIterator<any>,
  toString(): string,
}

export default LinkedListInterface;
