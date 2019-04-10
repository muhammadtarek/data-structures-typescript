import LinkedListInterface from './LinkedListInterface';
import SLLNode from './types/SLLNode';
import DLLNode from './types/DLLNode';

class LinkedListBase implements LinkedListInterface {
  protected head: SLLNode | DLLNode | undefined = undefined;
  protected length: number = 0;

  constructor(..._data: number[]) { }

  /**
   * @interface
   */
  addToHead(_item: any): void { }

  /**
   * @interface
   */
  addToTail(_item: any): void { }

  /**
   * Searches the list if it has a specfic item
   * 
   * @implements LinkedListInterface
   * @param data any
   * @returns boolean
   * @example
   * list.addToHead(1);
   * list.addToTail(2);
   * list.has(1); // true
   * list.has(3); // false
   */
  has(data: any): boolean {
    let node: SLLNode | DLLNode = this.head || {};
    let isFound: boolean = false;

    do {
      if (node.data === data) {
        isFound = true;
      }

      // @ts-ignore
      node = node.next;
    } while (node)

    return isFound;
  }

  /**
   * Check if the list is empty
   * 
   * @implements LinkedListInterface
   * @returns boolean
   * @example
   * list.isEmpty(); // true
   * list.addToHead(1);
   * list.isEmpty(); // false
   */
  isEmpty(): boolean {
    return this.length === 0;
  }

  /**
   * Returns the size of the list
   * 
   * @implements LinkedListInterface
   * @returns number
   * @example
   * list.addToHead(1); // [1]
   * list.addToTail(2); // [1, 2]
   * list.size(); // 2
   */
  size(): number {
    return this.length;
  }

  /**
   * Make list iteratable
   * 
   * @implements LinkedListInterface
   * @generator
   * @example
   * list.addToHead(1); // [1]
   * list.addToTail(2); // [1, 2]
   * 
   * const listGenerator = list.iterator();
   * list.next(); // { data: 1, done: false }
   * list.next(); // { data: 2, done: false }
   * list.next(); // { data: undefined, done: true }
   */
  * iterator(): IterableIterator<any> {
    let node: SLLNode | DLLNode = this.head || {};

    do {
      yield node.data;
      // @ts-ignore
      node = node.next;
    } while (node)
  }

  /**
   * Return a string showing the content of the list
   * 
   * @implements LinkedListInterface
   * @returns string
   * @example
   * list.toString(); // []
   * 
   * list.addToHead(1);
   * list.addToTail(2);
   * list.toString(); // [1, 2]
   */
  toString(): string {
    let node: SLLNode | DLLNode = this.head || {};
    let string: string = '';

    do {
      string = `${string}${string.length === 0 ? '' : ', '}${node.data || ''}`;
      // @ts-ignore
      node = node.next;
    } while (node)

    return `[${string}]`;
  }
}

export default LinkedListBase;
