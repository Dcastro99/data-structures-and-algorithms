import { Collection, display } from "./Collection";

//Three parts of a variable:
// let name: type = value (these are the three variables)

export class LinkedList<T> implements Collection<T> {

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

  kthFromEnd(k: number){
    if(k < 0) {
      throw Error;
    };
    let count = 0;
    let tracker = this.start;

    // iterate over the list
    while (tracker != undefined) {
        // compare each element of the list
        // with given element
        count++;
        tracker = tracker.next;
    }
    const newK = count - k;
    // Checks new count is less than zero
    if(newK < 0){
      throw Error;
    };
    // we update the tracker to be the beginning again
    tracker = this.start;
    //loop through list newK times
    for(let i= 1; i < newK; i++) {
      //this updates the current "tracker" to be tracker.next if tracker is not null / undefined.
      tracker = tracker?.next;
    }


    // return tracker.item if tracker is not null / undefined.
    // console.log("END : ", tracker);
    return tracker?.item;
  }



}

interface Node<T> {
  item: T;
  next: Node<T>|undefined;
}
