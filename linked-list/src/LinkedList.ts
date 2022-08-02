import { Collection, display } from "./Collection";
//fixed
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
    while (tracker !== undefined) {
      if (tracker.item === item) {
        return true;
      }
      // continues to next node
      tracker = tracker.next;
    }

    return false;
  }


  /// to string
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


  append(item: T, ): void {
    let lastNode = this.start;
    if(lastNode){
      while (lastNode.next){
        lastNode = lastNode?.next;
      }
      const newNode = {
        item: item,
        next: undefined
      };
      lastNode.next = newNode;
    }
  }


  insertBefore(needle: T, value: T) {
    let flag = false;
    let tracker = this.start;
    while(tracker !== undefined) {
    if (tracker.next?.item === needle && flag === false){
      flag = true;
      const trackNode = tracker.next;
        tracker.next =
          {item: value,
            next: trackNode
          };
        }
          else if (
            tracker.item === needle && flag === false) {
              flag = true;
              this.insert(value);
            }
    tracker = tracker.next;
    }
  }


  insertAfter(needle: T, value: T) {
    let tracker = this.start;
  while(tracker !== undefined) {
    if (tracker.item === needle ){
      let trackNode = tracker.next;
        const newNode = {
          item: value,
          next: trackNode,
        };
        tracker.next = newNode;
    }
    tracker = tracker.next;
  }
  }

  kthFromEnd(list: number){
    if(list < 0) {
      throw Error;
    };
    var count = -1;
    var tracker = this.start;
    tracker = this.start;

    // iterate over the list
    while (tracker != undefined) {
        // compare each element of the list
        // with given element
        count++;
        tracker = tracker.next;
    }
    const newList = count - list;
    if(newList < 0){
      throw Error;
    };
    tracker = this.start;
    for(let i= 0; i < newList; i++) {
      tracker = tracker?.next;
    }


    // not found
    return tracker?.item;
  }



}

interface Node<T> {
  item: T;
  next: Node<T>|undefined;
}
