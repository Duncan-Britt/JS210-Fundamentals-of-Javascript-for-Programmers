const list = {
  create: (...elements) => {
    i = elements.length - 1
    node = { data: elements[i], succ: null }
    while (i > 0) {
      --i
      node = { data: elements[i], succ: node }
    }

    let queue = {
      head: node,
      each: (callback) => {
        let node = queue.head
        callback(node.data)
        while (node.succ) {
          node = node.succ;
          callback(node.data)
        }
      },
      print: () => queue.each(e => console.log(e)),
      inspect: () => {
        let str = '( ';
        queue.each(e => str += e + ' ');
        console.log(str += ')');
      },
      size: elements.length,
      nodeAt: (idx) => {
        let i = 0
        let node = queue.head
        while (i < idx && node.succ) {
          node = node.succ
          ++i
        }
        return node
      },
      itemAt: (idx) => {
        return queue.nodeAt(idx).data
      },
      prepend: (value) => {
        queue.size++;
        queue.head = { data: value, succ: queue.head }
      },
      append: (value) => {
        queue.size++;
        let node = queue.head;
        for (; node.succ; node = node.succ) {}
        node.succ = { data: value, succ: null };
      },
      insertAt: (index, value) => {
        if (index === 0) {
          queue.size++;
          return queue.prepend(value);
        }

        queue.size++;
        let node = queue.nodeAt(index - 1);
        let succ = node.succ
        node.succ = { data: value, succ: succ };
      },
      deleteAt: (index) => {
        if (index === 0) {
          queue.size--;
          return (queue.head = queue.head.succ).data;
        }

        queue.size--;
        let pred = queue.nodeAt(index - 1);
        let deleted = pred.succ
        let succ = deleted.succ
        pred.succ = succ
        return deleted.data
      }
    }
    return queue
  }
}

l1 = list.create(1, 2, 3, 4, 5);
console.log(l1);

l1.inspect();
console.log(l1.size);
console.log(l1.itemAt(3));
l1.prepend(0);
l1.inspect();
l1.append(6);
l1.inspect();
console.log(l1.size);
l1.insertAt(3, 2.5);
l1.inspect();
l1.deleteAt(3);
l1.inspect();
console.log(l1.size);

l2 = list.create(1, 3, 5, 7, 9);
l2.inspect();
console.log(l2.size);
