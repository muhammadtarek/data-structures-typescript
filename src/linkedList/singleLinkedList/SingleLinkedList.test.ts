import SingleLinkedList from './SingleLinkedList';
import EmptyException from '../../EmptyException';

describe('SingleLinkedList', () => {
  it('should init without data', () => {
    const list = new SingleLinkedList();
    expect(list.size()).toEqual(0);
    expect(list.isEmpty()).toBeTruthy();
    expect(list.toString()).toEqual('[]');
  });

  it('should init with new head', () => {
    const list = new SingleLinkedList(1, 2, 3);
    expect(list.size()).toEqual(3);
    expect(list.toString()).toEqual('[1, 2, 3]');
  });

  it('should add to head', () => {
    const list = new SingleLinkedList(1);
    list.addToHead(2);
    list.addToHead(3);
    expect(list.size()).toEqual(3);
    expect(list.toString()).toEqual('[3, 2, 1]');
  });

  it('should add to tail', () => {
    const list = new SingleLinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    expect(list.size()).toEqual(3);
    expect(list.toString()).toEqual('[1, 2, 3]');
  });

  it('should add to head/tail', () => {
    const list = new SingleLinkedList(3);
    list.addToTail(4);
    list.addToTail(5);
    list.addToHead(2);
    list.addToHead(1);
    expect(list.size()).toEqual(5);
    expect(list.toString()).toEqual('[1, 2, 3, 4, 5]');
  });

  it('should delete an item', () => {
    const list = new SingleLinkedList();
    list.addToHead(3);
    list.addToHead(2);
    list.addToHead(1);

    expect(list.delete(2)).toBeTruthy();
    expect(list.size()).toEqual(2);
    expect(list.toString()).toEqual('[1, 3]');
  });

  it('should throw an error when the list empty', () => {
    const list = new SingleLinkedList();
    expect(() => { list.delete(1) }).toThrowError();
  });

  it('should throw an error when the item doesn\'t exist', () => {
    const list = new SingleLinkedList();
    list.addToHead(1);
    expect(() => { list.delete(2) }).toThrowError();
  });
});