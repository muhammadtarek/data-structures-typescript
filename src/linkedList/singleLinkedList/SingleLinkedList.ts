import LinkedListBase from '../LinkedListBase';
import SingleLinkedListInterface from './SingleLinkedListInterface';
import EmptyException from '../../EmptyException';
import NotFoundException from '../../NotFoundException';
import SLLNode from '../types/SLLNode';

/**
 * @extends LinkedListBase
 */
class SingleLinkedList extends LinkedListBase implements SingleLinkedListInterface {
  /**
   * Init linkedList with array of numbers
   *
   * @extends LinkedListBase
   * @param data any[]
   */
  constructor(...data: any[]) {
    super(...data);
    if (data) {
      for (let counter = 0; counter < data.length; counter += 1) {
        this.addToTail(data[counter]);
      }
    }
  }

  /**
   * Add a new node to the head
   *
   * @implements LinkedListInterface
   * @param data any
   * @example
   * list.addToHead(1); // [1]
   * list.addToHead(2); // [2, 1]
   * list.addToHead(3); // [3, 2, 1]
   */
  addToHead(data: any): void {
    const newNode: SLLNode = {
      data,
    };

    // If the list is empty
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
  }

  /**
   * Add a new node to the tail
   *
   * @implements LinkedListInterface
   * @param data any
   * @example
   * list.addToTail(1); // [1]
   * list.addToTail(2); // [1, 2]
   * list.addToTail(3); // [1, 2, 3]
   */
  addToTail(data: any): void {
    const newNode: SLLNode = {
      data
    };

    // If list is empty
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let node: SLLNode = this.head || {};

      while (node.next) {
        node = node.next;
      }

      node.next = newNode;
    }

    this.length += 1;
  }

  /**
   * Delete an data from the list
   *
   * @implements SingleLinkedListInterface
   * @param data any
   * @returns boolean
   * @example
   * list.addToHead(1); // [2]
   * list.addToHead(2); // [2, 1]
   * list.delete(2); // [1]
   */
  delete(data: any): boolean {
    let node: SLLNode | undefined = this.head;
    let prevNode: SLLNode | undefined = node;
    let isDeleted: boolean = false;

    // If the list is empty
    if (!node) {
      throw new EmptyException('SingleLinkedList');
    }

    do {
      if (node.data === data) {
        // @ts-ignore
        prevNode.next = node.next;
        isDeleted = true;
        break;
      }

      prevNode = node;
      node = node.next;
    } while (node)

    if (isDeleted) {
      this.length -= 1;
    } else {
      throw new NotFoundException();
    }
    return isDeleted;
  }
}

export default SingleLinkedList;
