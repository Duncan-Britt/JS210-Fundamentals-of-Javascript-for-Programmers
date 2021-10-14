function List(...elements) {
  function isList(value) {
    return this.constructor === value.constructor
  }

  if (elements.length !== 0) {
    i = elements.length - 1
    node = { data: elements[i], succ: null }
    while (i > 0) {
      --i
      node = { data: elements[i], succ: node }
    }
  } else {
    node = null;
  }

  return {
    head: node,
    each(callback) {
      if (this.head === null) return;
      let node = this.head
      callback(node.data)
      while (node.succ) {
        node = node.succ;
        callback(node.data)
      }
    },
    print() {
      this.each(e => console.log(e))
    },
    inspect() {
      let str = '( ';
      this.each(e => str += e + ' ');
      console.log(str += ')');
    },
    size: elements.length,
    nodeAt(idx) {
      let i = 0
      let node = this.head
      while (i < idx && node.succ) {
        node = node.succ
        ++i
      }
      return node
    },
    itemAt(idx) {
      return this.nodeAt(idx).data
    },
    prepend(...values) {
      for (let i = 0; i < values.length; i++) {
        this.size++;
        this.head = { data: values[i], succ: this.head }
      }
      return this.size;
    },
    append(...values) {
      let i = 0;
      if (this.head === null && values.length >= 1) {
        this.head = { data: values[i++], succ: null };
        this.size += 1;
      }
      let node = this.head;
      for (; node.succ; node = node.succ) {}
      for (; i < values.length; i++) {
        node.succ = { data: values[i], succ: null };
        node = node.succ;
        this.size += 1;
      }
      return this.size;
    },
    insertAt(index, value) {
      if (index === 0) {
        this.size++;
        return this.prepend(value);
      }

      this.size++;
      let node = this.nodeAt(index - 1);
      let succ = node.succ
      node.succ = { data: value, succ: succ };
    },
    deleteAt(index) {
      if (index === 0) {
        this.size--;
        return (this.head = this.head.succ).data;
      }

      this.size--;
      let pred = this.nodeAt(index - 1);
      let deleted = pred.succ
      let succ = deleted.succ
      pred.succ = succ
      return deleted.data
    },
    concat(...args) {
      const result = new List();
      this.each(e => result.append(e));
      args.forEach(arg => {
        if (isList(arg)) {
          arg.each(e => result.append(e));
        } else {
          result.append(arg);
        }
      });
      return result;
    },
    equals(otherList) { // Could be optimized by breaking out of iteration.
      let i = 0;        // To do so, replace each with a loop.
      let bool = true;
      this.each(e => {
        if (e !== otherList.itemAt(i++)) {
          bool = false;
        }
      });
      return bool;
    },
    pop() {
      const lastItem = this.itemAt(this.size - 1);
      const newTail = this.nodeAt(this.size - 2);
      newTail.succ = null;
      this.size -= 1;
      return lastItem;
    },
    shift() {
      const firstItem = this.head.data;
      this.head = this.head.succ;
      this.size -= 1;
      return firstItem;
    },
    slice(begin = 0, end = this.size) {
      const newList = new List();
      if (this.head === null) return newList;
      end = end < this.size ? end : this.size;

      let node = this.nodeAt(begin)
      let i = begin;
      while (i < end) {
        newList.append(node.data);
        node = node.succ;
        i += 1;
      }

      return newList;
    },
  }
}

// const l1 = new List(1, 2, 3, 4);
// const l2 = l1.slice();
// l2.inspect();

// const l1 = new List(1, 2, 3);
// const l2 = new List(4, 5, 6);
// l1.inspect();
// l2.inspect();
// const l3 = l1.concat(l2, 'a', 'b', 'c');
// l3.inspect();
// console.log(l1.equals(l2) === false);
// const l4 = new List(1, 2, 3);
// console.log(l1.equals(l4) === true);
// const l5 = new List();
// const l6 = new List();
// console.log(l5.equals(l6) === true);

// const l1 = new List(1, 2, 3, 4, 5);
// console.log(l1);

// l1.inspect();
// console.log(l1.size);
// console.log(l1.itemAt(3));
// l1.prepend(0);
// l1.inspect();
// l1.append(6);
// l1.inspect();
// console.log(l1.size);
// l1.insertAt(3, 2.5);
// l1.inspect();
// l1.deleteAt(3);
// l1.inspect();
// console.log(l1.size);
//
// const l2 = new List(1, 3, 5, 7, 9);
// l2.inspect();
// console.log(l2.size);
