import { Collection, display } from "./Collection";

//Three parts of a variable:
// let name: type = value (these are the three variables)

export class LinkedList<T> implements Collection<T> {
  // TODO
  start: Node<T> | undefined;

  insert(item: T) {
    const newNode = {
      item: item,
      next: this.start
    };
    this.start = newNode;
  }

  includes(item: T): boolean {
    let tracker = this.start
    // if (tracker?.item === item){
    //   return true;
    // }

    //   if (tracker?.next?.item === item) {
    //     return true;
    //   }
    while (tracker !== undefined) {
      if (tracker.item === item) {
        return true;
      }
      // continues to next node
      tracker = tracker.next;
    }

    return false;
  }



  /// converts items to string
  toString(): string {

    let string = '';
    let tracker = this.start;

    while (tracker !== undefined) {
      const stringNode = display(tracker.item);
      string += `{ ${stringNode} } -> `
      tracker = tracker.next;
    }
    string += 'NULL';

    return string;
  }
}

interface Node<T> {
  item: T;
  next: Node<T>|undefined;
}
