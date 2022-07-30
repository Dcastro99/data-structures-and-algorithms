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

        tracker.next = {
          item : value,
          next: trackNode,
        };

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

}

interface Node<T> {
  item: T;
  next: Node<T>|undefined;
}
